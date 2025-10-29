import { Command } from 'commander';

const program = new Command();
import path from 'path';
import { glob } from 'glob';
import fs from 'fs-extra';

program
  .version('1.0.0')
  .arguments('<name> [otherNames...]')
  .description('Create source file scaffolding.')
  .option('-f, --folder <folder>', 'Source folder (components, demos, layouts, or utilities)', 'components')
  .action(generateFolders);

const dasherize = (s) => s.replace(/[A-Z]/g, (res) => `-${res.toLowerCase()}`).replace(/^-/, ''); // Remove leading -
const capitalize = (s) => s[0].toUpperCase() + s.substring(1);
const titlize = (s) => capitalize(s.replace(/[A-Z]/g, (res) => ` ${res.toLowerCase()}`).trim()); // Remove leading space

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

function generateFolders(componentName, otherNames, options) {
  const rootPath = path.join(__dirname, '..');
  const templatePath = path.join(__dirname, 'template');

  [componentName].concat(otherNames).forEach((name) => {
    const dasherized = dasherize(name);
    const toReplace = [
      [/{folder}/g, options.folder],
      [/{name}/g, name],
      [/{nameDasherized}/g, dasherized],
      [/{nameTitle}/g, titlize(name)],
      [/{nameBEM}/g, `pf-v5-${options.folder[0]}-${dasherized}`]
    ];
    const templateReplace = (str) => {
      let res = str;
      toReplace.forEach(([regex, string]) => {
        res = res.replace(regex, string);
      });

      return res;
    };

    // Write out templated files
    glob.sync(`${templatePath}/**/*.*`).forEach((file) => {
      const toPath = templateReplace(file.replace(templatePath, rootPath));
      console.log('Writing', toPath);
      const contents = templateReplace(fs.readFileSync(file, 'utf8'));
      fs.ensureFileSync(toPath);
      fs.writeFileSync(toPath, contents);
    });
  });
}

program.parse(process.argv);
