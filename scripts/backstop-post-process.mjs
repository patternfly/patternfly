#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Post-processes BackstopJS HTML reports to inject custom descriptions.
 * Modifies the config.js file to update the testSuite field without affecting screenshot filenames.
 */

function parseArguments() {
  const args = process.argv.slice(2);
  let customDescription = null;
  let isDarkTheme = false;

  for (const arg of args) {
    if (arg.startsWith('--desc=')) {
      // Extract value and remove surrounding quotes
      customDescription = arg.substring(7).replace(/^["']|["']$/g, '');
    } else if (arg === '--dark') {
      isDarkTheme = true;
    }
  }

  return { customDescription, isDarkTheme };
}

function processConfigFile(configPath, customDescription, isDarkTheme) {
  // Check if file exists
  if (!fs.existsSync(configPath)) {
    console.error(`Error: Config file not found at ${configPath}`);
    console.error('Make sure BackstopJS has generated the report before running this script.');
    return false;
  }

  try {
    // Read config.js
    const content = fs.readFileSync(configPath, 'utf8');

    // Extract JSON from JSONP wrapper
    // Format: report({...JSON...});
    const normalized = content.replace(/^\uFEFF/, '');
    const match = normalized.match(/^\s*report\(([\s\S]*)\);?\s*$/);
    if (!match) {
      console.error(`Error: Invalid config.js format at ${configPath}`);
      console.error('Expected JSONP format: report({...});');
      return false;
    }

    // Parse JSON
    const reportData = JSON.parse(match[1]);

    // Update testSuite field
    const defaultTitle = isDarkTheme ? 'Core - Dark Theme' : 'Core - Light Theme';
    reportData.testSuite = customDescription || defaultTitle;

    // Regenerate JSONP
    const jsonString = JSON.stringify(reportData, null, 2);
    const newContent = `report(${jsonString});`;

    // Write back to file
    fs.writeFileSync(configPath, newContent, 'utf8');

    return true;
  } catch (error) {
    console.error(`Error processing config file: ${error.message}`);
    return false;
  }
}

function main() {
  const { customDescription, isDarkTheme } = parseArguments();

  // Determine theme suffix and report path
  const themeSuffix = isDarkTheme ? '_dark' : '';
  const reportDir = path.join(__dirname, '..', 'backstop_data', `html_report${themeSuffix}`);
  const configPath = path.join(reportDir, 'config.js');

  // Process the config file
  const success = processConfigFile(configPath, customDescription, isDarkTheme);

  // Exit with appropriate code
  process.exit(success ? 0 : 1);
}

main();
