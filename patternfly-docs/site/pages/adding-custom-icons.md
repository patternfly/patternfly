---
id: Custom icons
title: Custom icon guidelines
---

## Adding a custom icon

Below are the steps for adding a custom icon to the [pficon icons](/icons) icon font. Adding this icon in core will also add the icon to the [react-icons](https://github.com/patternfly/patternfly-react/tree/main/packages/react-icons) library as an SVG.

- Get the new source SVG from design.
- Edit `src/icons/definitions/pficons.mjs` to add the new icon.
  - Add a new entry with a unique name (placed in alphabetical order) and the height, width, and path from the source SVG.
- Remove the existing pficons SVGs from `src/icons/PfIcons/`. Any files there are just used to build the icon font.
- Run `npm run build:pficons` to create the SVGs (stored in `src/icons/PfIcons/`) from `pficons.mjs` that will be used to build the icon font.
- Run `npm run build:pficonfont` to build the icon font files (stored in `src/patternfly/assets/pficon/`) from the SVGs in `src/icons/PfIcons/`.
- Edit `src/patternfly/assets/pficon/pficon.scss` and prefix the `src: url()` paths for the icon font files with the global icon font path (e.g., `url('#{$pf-v6-global--fonticon-path}/pficon.woff2')`).
- Run `./scripts/iconList.sh` to update `src/site/pages/icons.md`, which serves the pficon icon preview page on the dev server served at `/icons`.
- Restart the dev server and verify the icons look correct on `/icons`.
  - **Note**: This step may require clearing your cache.
