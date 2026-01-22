#!/usr/bin/env node

import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Wrapper script that coordinates BackstopJS execution and post-processing.
 * Separates --desc argument for post-processing while passing other args to BackstopJS.
 */

function parseArguments() {
  const args = process.argv.slice(2);
  const backstopArgs = [];
  let customDescription = null;

  for (const arg of args) {
    if (arg.startsWith('--desc=')) {
      // Extract description and remove surrounding quotes
      customDescription = arg.substring(7).replace(/^["']|["']$/g, '');
    } else {
      // Pass all other arguments to BackstopJS
      backstopArgs.push(arg);
    }
  }

  return { backstopArgs, customDescription };
}

function runBackstop(args) {
  // Build argument array for spawnSync (no shell injection risk)
  const backstopArgs = [...args, '--config', 'backstop.js'];

  console.log(`Running: backstop ${backstopArgs.join(' ')}`);

  const result = spawnSync('backstop', backstopArgs, {
    stdio: 'inherit', // Show output in real-time
    cwd: path.join(__dirname, '..') // Run from project root
  });

  // Handle spawn errors (e.g., backstop command not found)
  if (result.error) {
    console.error(`Error spawning backstop: ${result.error.message}`);
    return { success: false, exitCode: 1 };
  }

  // BackstopJS exits with non-zero code when tests fail (visual differences found)
  // We still want to post-process the report in this case
  const exitCode = result.status !== null ? result.status : 1;
  return { success: exitCode === 0, exitCode };
}

function runPostProcessor(customDescription, isDarkTheme) {
  // Build argument array for spawnSync (no shell injection risk)
  const args = [path.join(__dirname, 'backstop-post-process.mjs')];

  if (customDescription) {
    args.push(`--desc=${customDescription}`);
  }

  if (isDarkTheme) {
    args.push('--dark');
  }

  const result = spawnSync(process.execPath, args, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });

  // Handle spawn errors
  if (result.error) {
    console.error(`Error spawning post-processor: ${result.error.message}`);
    return false;
  }

  // Check exit code
  const exitCode = result.status !== null ? result.status : 1;
  return exitCode === 0;
}

function main() {
  const { backstopArgs, customDescription } = parseArguments();

  // Check if --dark flag is present (needed for post-processor)
  const isDarkTheme = backstopArgs.includes('--dark');

  // Run BackstopJS
  const backstopResult = runBackstop(backstopArgs);

  // Always run post-processor, even if tests failed
  // (BackstopJS generates a report for both pass and fail cases)
  const postProcessSuccess = runPostProcessor(customDescription, isDarkTheme);

  if (!postProcessSuccess) {
    console.error('Warning: Post-processing failed');
  }

  // Exit with BackstopJS's original exit code
  // (0 = all tests passed, non-zero = tests failed or error)
  process.exit(backstopResult.exitCode);
}

main();
