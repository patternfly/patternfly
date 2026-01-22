#!/usr/bin/env node

import { execSync } from 'child_process';
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
  const backstopCommand = `backstop ${args.join(' ')} --config='backstop.js'`;

  console.log(`Running: ${backstopCommand}`);

  try {
    execSync(backstopCommand, {
      stdio: 'inherit', // Show output in real-time
      cwd: path.join(__dirname, '..') // Run from project root
    });
    return { success: true, exitCode: 0 };
  } catch (error) {
    // BackstopJS exits with non-zero code when tests fail (visual differences found)
    // We still want to post-process the report in this case
    // Only return false if there's a real error (no report generated)
    const exitCode = error.status || 1;
    return { success: false, exitCode };
  }
}

function runPostProcessor(customDescription, isDarkTheme) {
  const args = [];

  if (customDescription) {
    args.push(`--desc="${customDescription}"`);
  }

  if (isDarkTheme) {
    args.push('--dark');
  }

  const postProcessCommand = `node ${path.join(__dirname, 'backstop-post-process.mjs')} ${args.join(' ')}`;

  try {
    execSync(postProcessCommand, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    return true;
  } catch (error) {
    console.error('Post-processing failed');
    return false;
  }
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
