# 2019.07 release notes (2019-09-10)
Packages released:
- @patternfly/patternfly@2.31.6

## Components
- **Charts:**
  - Refactor bullet chart vars. [#2159](https://github.com/patternfly/patternfly-next/pull/2159)
  - Adjust chart axis label padding. [#2181](https://github.com/patternfly/patternfly-next/pull/2181)
- **Select:** Add support for custom toggle icon. [#2154](https://github.com/patternfly/patternfly-next/pull/2154)
- **Data Toolbar:**
  - Add data toolbar component. [#2119](https://github.com/patternfly/patternfly-next/pull/2119)
  - Refactor spacer SCSS. [#2189](https://github.com/patternfly/patternfly-next/pull/2189)
  - Fix group formatting in expandable content. [#2229](https://github.com/patternfly/patternfly-next/pull/2229)
- **Modal:** Add variation for left-aligned footer buttons. [#2182](https://github.com/patternfly/patternfly-next/pull/2182)
- **Wizard:** Add in-page variation. [#2186](https://github.com/patternfly/patternfly-next/pull/2186)
- **Dropdown:** Add variation for primary toggle. [#2210](https://github.com/patternfly/patternfly-next/pull/2210)
- **Spinner:** Add spinner component. [#2142](https://github.com/patternfly/patternfly-next/pull/2142)
- **Dropdown:**
  - Add toggle text to split-button variation. [#2212](https://github.com/patternfly/patternfly-next/pull/2212)
  - Fix split-button toggle text spacing. [#2224](https://github.com/patternfly/patternfly-next/pull/2224)
- **Overflow Menu:** Add overflow menu component. [#2126](https://github.com/patternfly/patternfly-next/pull/2126)
- **Nav & Page sidebar:**
  - Add variation for dark theme. [#2197](https://github.com/patternfly/patternfly-next/pull/2197)
  - Fix nav separator background in dark theme. [#2227](https://github.com/patternfly/patternfly-next/pull/2227)
- **Form:** Update horizontal form label alignment. [#2200](https://github.com/patternfly/patternfly-next/pull/2200)


## Other
- **A11y:** Fix accessibility issues in basic forms demo. [#2086](https://github.com/patternfly/patternfly-next/pull/2086)
- **Dependencies:**
  - Update development dependencies. ([#2124](https://github.com/patternfly/patternfly-next/pull/2124))
  - Update Gulp and bump dependencies. [#2201](https://github.com/patternfly/patternfly-next/pull/2201)
- **Build:**
  - Fix GitHub Pages deploy on master [#2160](https://github.com/patternfly/patternfly-next/pull/2160)
  - Remove GitHub Pages deploy [#2166](https://github.com/patternfly/patternfly-next/pull/2166)
- **Workspace:** Fix codepen button title. [#2151](https://github.com/patternfly/patternfly-next/pull/2151)

# 2019.06 release notes (2019-08-13)
Packages released:
- @patternfly/patternfly@2.26.1

## Components
- **Alert:** Added default alert ([#2107](https://github.com/patternfly/patternfly-next/pull/2107))
- **Data list:** Gave Data List Demo a header ([#2083](https://github.com/patternfly/patternfly-next/pull/2083))
- **Divider:** Updated example for the li example of the divider, set the type from div to li ([#2089](https://github.com/patternfly/patternfly-next/issues/2089))
- **Drawer demo:** Removed drawer.scss. The drawer demo used to add a sass file. We removed this since demos should not have their own distributed css. ([#2138](https://github.com/patternfly/patternfly-next/issues/2138))
- **Charts:** Added color to black range, shift vars ([#2094](https://github.com/patternfly/patternfly-next/pull/2094))
- **Logo:** PF logo missing width attribute ([#2101](https://github.com/patternfly/patternfly-next/pull/2101))
- **Page:** Took main elements grid-area value out of custom property ([#2137](https://github.com/patternfly/patternfly-next/pull/2137))
- **Popover:** Ensure content does not overlap close button ([#2129](https://github.com/patternfly/patternfly-next/pull/2129))
- **Radio:** Gave unique names to fix a11y ([#2088](https://github.com/patternfly/patternfly-next/pull/2088))
- **Select:** Added a disable modifier ([#2028](https://github.com/patternfly/patternfly-next/pull/2028))

## Chore
- **A11y:** Ensure SkipToContent sends focus to page content ([#2058](https://github.com/patternfly/patternfly-next/pull/2125))
- **Build:** Moved to circle ci
  - Replaces .travis.yml with .circleci/config.yml and split up test steps to allow testing in parallel and nicer Github status checks
  - Fixes our our a11y Selenium script to not have Travis integrations
  - Uploads PR previews to https://surge.sh on every pushed commit (no need for Netlify to also build a preview)
  - Still updates the Github Pages with a new npm run publish:docs target on merges to master ([#2121](https://github.com/patternfly/patternfly-next/pull/2121))
  - Temporarily disable problematic ci checks ([#2125](https://github.com/patternfly/patternfly-next/pull/2125))
- **Demos:** Use unique ID used in alert and cardview demos ([#2106](https://github.com/patternfly/patternfly-next/pull/2106))
- **Notes:** Format release notes using uls
- **Page:** Updated demo main section copy ([#2092](https://github.com/patternfly/patternfly-next/pull/2092))

# 2019.05 release notes (2019-07-24)
Packages released:
- @patternfly/patternfly@2.23.0
## Components
- **About modal:** Updated break-word on content area instead of break-all ([#2035](https://github.com/patternfly/patternfly-next/pull/2035))
- **App launcher:**
  - Added button example to menu item ([#2006](https://github.com/patternfly/patternfly-next/pull/2006))
  - Added support for right and top alignment ([#2081](https://github.com/patternfly/patternfly-next/pull/2081))
- **Charts:**
  - Adjusted chart vars for react-charts ([#2020](https://github.com/patternfly/patternfly-next/pull/2020), [#2024](https://github.com/patternfly/patternfly-next/pull/2024))
  - Adjusted 3 chart tooltip color vars and adds two new ones. This will ensure tooltips can be seen over the current background color. ([#2038](https://github.com/patternfly/patternfly-next/pull/2038))
  - Added individual padding vars for donut charts ([#2068](https://github.com/patternfly/patternfly-next/pull/2068))
- **Chip:** updated padding on chip label ([#2063](https://github.com/patternfly/patternfly-next/pull/2063))
- **Divider:** Added divider component ([#2080](https://github.com/patternfly/patternfly-next/pull/2080))
- **Drawer:** Added drawer component ([#2069](https://github.com/patternfly/patternfly-next/pull/2069))
- **Dropdown:**
  - Added space-between when width of dropdown grows ([#2050](https://github.com/patternfly/patternfly-next/pull/2050))
  - Centered plain button content ([#2071](https://github.com/patternfly/patternfly-next/pull/2071))
- **Icons:** Changed selector that wraps extend for lower specificity ([#2018](https://github.com/patternfly/patternfly-next/pull/2018))
- **Login:** Unset the link color text so that its white. ([#2032](https://github.com/patternfly/patternfly-next/pull/2032))
- **Navigation:** Changed max-height to 100% for subnav  ([#2061](https://github.com/patternfly/patternfly-next/pull/2061))
- **Options menu:** Centered plain button content ([#2071](https://github.com/patternfly/patternfly-next/pull/2071))
- **Page:** Removed toggle from horizontal nav page demo ([#2004](https://github.com/patternfly/patternfly-next/pull/2004))
- **Pagination:** Added disabled variation ([#2015](https://github.com/patternfly/patternfly-next/pull/2015))
- **Select:**
  - Added plain variation ([#2053](https://github.com/patternfly/patternfly-next/pull/2053))
  - Updated class selector, stacking context for typeahead input ([#2075](https://github.com/patternfly/patternfly-next/pull/2075))
- **Switch:** Removed dependency on font-size for switch's height ([#2049](https://github.com/patternfly/patternfly-next/pull/2049))
- **Table:**
  - Renamed data table to table ([#2051](https://github.com/patternfly/patternfly-next/pull/2051))
  - Wrapped button icons in demo with button icon class to add space ([#1978](https://github.com/patternfly/patternfly-next/pull/1978))
  - Fixed data-label attr in table demos ([#2060](https://github.com/patternfly/patternfly-next/pull/2060))
  - Added example of pf-m-wrap modifier for use in thead cells ([#2065](https://github.com/patternfly/patternfly-next/pull/2065))
- **Tooltip:** Broke words in a place to fit in tooltip ([#2033](https://github.com/patternfly/patternfly-next/pull/2033))
## Other
- **Red Hat font:** Added opt-in option to use Red Hat font ([#1813](https://github.com/patternfly/patternfly-next/pull/1813))
- **Experimental features:** Added experimental feature support ([#2031](https://github.com/patternfly/patternfly-next/pull/2031))

# 2019.04 release notes (2019-07-02)
Packages released:
- @patternfly/patternfly@2.17.0
## Components
- **About modal box:** Removed the title classes from the strapline paragraph. Changed strapline `font-size` to 14px. ([#1951](https://github.com/patternfly/patternfly-next/pull/1951))
- **About modal, app launcher, backdrop, context selector, datalist, dropdown, form control, input group, modal, nav, options menu, select, table, tabs, wizard:**
  - Re-do z-index system so components overlap one another properly ([#1901](https://github.com/patternfly/patternfly-next/pull/1901))
- **Accordion, clipboard copy, data list, dropdown, expandable, nav, options menu, select, table, wizard:**
  - Added expanded/collapsed arrow rotation in components ([#1932](https://github.com/patternfly/patternfly-next/pull/1932))
- **Accordion:**
  - Add variation of accordion that uses divs and headings instead of definition list [(#1990](https://github.com/patternfly/patternfly-next/pull/1990))
- **Alert group:**
  - Renamed example and reworded docs [(#1930](https://github.com/patternfly/patternfly-next/pull/1930))
- **App launcher:**
  - Used `--pf-global--icon--FontSize--lg` for the icon size. Reduced height of expanded demo  ([#1935](https://github.com/patternfly/patternfly-next/pull/1935))
  - Added support for sections/icons/divider ([#1916](https://github.com/patternfly/patternfly-next/pull/1916))
- **Background image:**
  - Reduce size of background image ([#1936](https://github.com/patternfly/patternfly-next/pull/1936))
- **Card:**
  - Added compact variation ([#1975](https://github.com/patternfly/patternfly-next/pull/1975))
- **Charts:**
  - Added remaining variables ([#1863](https://github.com/patternfly/patternfly-next/pull/1863))
- **Copy to Clipboard:**
  - fixed focus ring and add content editable to expanded ([#1896](https://github.com/patternfly/patternfly-next/pull/1896))
- **Datalist:**
  - Added an example using a heading in the primary content section. ([#1870](https://github.com/patternfly/patternfly-next/pull/1870))
- **Dropdown:**
  - Increased height of examples that overflow ([#1965](https://github.com/patternfly/patternfly-next/pull/1965))
- **Expandable:**
  - Added type to the button ([#1982](https://github.com/patternfly/patternfly-next/pull/1982))
- **Form:**
  - Added element for form label text, make it bold ([#1952](https://github.com/patternfly/patternfly-next/pull/1952))
- **Form, login, wizard:**
  - Fixed order of variables which was causing the IE conversion script to generate undefined. Also removed a login variable that was not needed. This was also causing the IE scripts to generate undefined. ([#1871](https://github.com/patternfly/patternfly-next/pull/1871)).
- **Nav:**
  - Changed breakpoint to fix bug ([#1918](https://github.com/patternfly/patternfly-next/pull/1918))
- **Options menu:**
  - Added disabled variation ([#1973](https://github.com/patternfly/patternfly-next/pull/1973))
- **Progress:**
  - Changed the font weight on sm variation ([#1974](https://github.com/patternfly/patternfly-next/pull/1974))
- **Table:**
  - Added an extra breakpoint. In the data table sortable demo the table needed a larger breakpoint, so that the rows don't overflow outside of their container ([#1880](https://github.com/patternfly/patternfly-next/pull/1880))
  - Added word-wrap to td's in table, now wraps when on mobile size. ([#1928](https://github.com/patternfly/patternfly-next/pull/1928))
  - Made column headers bold ([#1949](https://github.com/patternfly/patternfly-next/pull/1949))
## Other
- Added ie11 to build ([#1876](https://github.com/patternfly/patternfly-next/pull/1876))
- Updated the window size used for the browser that our a11y audit is run against ([#1911](https://github.com/patternfly/patternfly-next/pull/1911))

# 2019.03 RC2.1 release notes (2019-06-11)
Packages released:
- @patternfly/patternfly@2.12.5
## Components
- **About Modal Box:**
  - Addressed overflow of about modal [(#1902)](https://github.com/patternfly/patternfly-next/pull/1902)
- **Accordion:**
  - Removed need for class on toggle icon ([#1889](https://github.com/patternfly/patternfly-next/pull/1889))
- **Button:**
  - Added class around the icon to fix bug ([#1890](https://github.com/patternfly/patternfly-next/pull/1890))
- **Charts:**
  - Added css vars ([#1868](https://github.com/patternfly/patternfly-next/pull/1868))
- **Datalist:**
  - Added breakpoints for actions ([#1886](https://github.com/patternfly/patternfly-next/pull/1886))
- **Inline alert:**
  - We had previously applied `font-size` to the inline alerts via `.pf-c-alert__icon > i`, which didn’t work in React since the icon is an svg. We applied `font-size` to `.pf-c-alert__icon` instead. Also, the inline warning icon was fixed because it was wider than the others ([#1909](https://github.com/patternfly/patternfly-next/pull/1909))
- **Notification Badge:**
  - Added notification badge ([#1862](https://github.com/patternfly/patternfly-next/pull/1862))
- **Switch:**
  - Added focus indicator [(#1874](https://github.com/patternfly/patternfly-next/pull/1874))
- **Table:**
  - Media query now matches border. Fixed the table so that when the table breaks to grid form, the border width changes to 8px, and the border color matches the background color. ([#1881](https://github.com/patternfly/patternfly-next/pull/1881))

# 2019.02 release notes (2019-05-28)
Packages released:
- @patternfly/patternfly@2.8.2
## Components
- **Alert:**
  - Adjusted warning alert webfont icon font-size ([#1805](https://github.com/patternfly/patternfly-next/pull/1805))
  - Added in-line modifier ([#1775](https://github.com/patternfly/patternfly-next/pull/1775))
- **Card:**
  - Added a wrapper for the Actions in the top right, so that content wraps around it - similar to the Popover component. Added a logo/img wrapper that is always left aligned. ([#1745](https://github.com/patternfly/patternfly-next/pull/1745))
  - Removed flex from header ([#1817](https://github.com/patternfly/patternfly-next/pull/1817))
  - Updated font sizes. Card body and footer text size were changed to be 14px by default and header was changed to 16px. ([#2103](https://github.com/patternfly/patternfly-next/pull/2103))
  - Card Demo: Added demo ([#1716](https://github.com/patternfly/patternfly-next/pull/1716))
- **Content:**
  - Changed margin bottom for small element ([#1843](https://github.com/patternfly/patternfly-next/pull/1843))
- **Form/login/wizard:**
  - Fixed undefined issues with IE11 script ([#1871](https://github.com/patternfly/patternfly-next/pull/1871))
- **Nav:**
  - Fixed horizontal nav spacing, background color ([#1798](https://github.com/patternfly/patternfly-next/pull/1798))
  - Updated aria-label in examples ([#1783](https://github.com/patternfly/patternfly-next/pull/1783))
- **Pagination:**
  - Updated options menu aria-label ([#1782](https://github.com/patternfly/patternfly-next/pull/1782))
- **Popover:**
  - Scoped title class to popover component ([#1857](https://github.com/patternfly/patternfly-next/pull/1857))
- **Table:**
  - Remove min-height from buttons in expansion toggle ([#1818](https://github.com/patternfly/patternfly-next/pull/1818))
- **Wizard:**
  - Fixed wizard closing tag ([#1803](https://github.com/patternfly/patternfly-next/pull/1803))
  - Set pf-c-wizard__main to grow and fill available height ([#1781](https://github.com/patternfly/patternfly-next/pull/1781))
## Layouts
- **Gutter:**
  - Updated mobile gutter spacing in layouts that have gutters ([#1829](https://github.com/patternfly/patternfly-next/pull/1829))
## Other
- **Charts:**
  - Added CSS Variables for Charts ([#1846](https://github.com/patternfly/patternfly-next/pull/1846))
- **Docs (global):**
  - Updated docs and examples to use sentence case ([#1796](https://github.com/patternfly/patternfly-next/pull/1796))
- **Guidelines:**
  - Added punctuation, formatting ([#1810](https://github.com/patternfly/patternfly-next/pull/1810))
