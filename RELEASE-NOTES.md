# PatternFly Albatross Milestone (2019-07-02)
- @patternfly/patternfly@2.17.0

**Components:**
*   **About modal box:** Removed the title classes from the strapline paragraph. Changed strapline `font-size` to 14px. ([#1951](https://github.com/patternfly/patternfly-next/pull/1951))
*   **About modal, app launcher, backdrop, context selector, datalist, dropdown, form control, input group, modal, nav, options menu, select, table, tabs, wizard:** Re-do z-index system so components overlap one another properly ([#1901](https://github.com/patternfly/patternfly-next/pull/1901))
*   **Accordion, clipboard copy, data list, dropdown, expandable, nav, options menu, select, table, wizard:** Added expanded/collapsed arrow rotation in components ([#1932](https://github.com/patternfly/patternfly-next/pull/1932))
*   **Accordion:** Add variation of accordion that uses divs and headings instead of definition list [(#1990](https://github.com/patternfly/patternfly-next/pull/1990))
*   **Alert group:** Renamed example and reworded docs [(#1930](https://github.com/patternfly/patternfly-next/pull/1930))
*   **App launcher**
    *   Used `--pf-global--icon--FontSize--lg` for the icon size. Reduced height of expanded demo  ([#1935](https://github.com/patternfly/patternfly-next/pull/1935))
    *   Added support for sections/icons/divider ([#1916](https://github.com/patternfly/patternfly-next/pull/1916))
*   **Background image:** Reduce size of background image ([#1936](https://github.com/patternfly/patternfly-next/pull/1936))
*   **Card:** Added compact variation ([#1975](https://github.com/patternfly/patternfly-next/pull/1975))
*   **Charts:** Added remaining variables ([#1863](https://github.com/patternfly/patternfly-next/pull/1863))
*   **Copy to Clipboard:** fixed focus ring and add content editable to expanded ([#1896](https://github.com/patternfly/patternfly-next/pull/1896))
*   **Datalist:** Added an example using a heading in the primary content section. ([#1870](https://github.com/patternfly/patternfly-next/pull/1870))
*   **Dropdown:** Increased height of examples that overflow ([#1965](https://github.com/patternfly/patternfly-next/pull/1965))
*   **Expandable:** Added type to the button ([#1982](https://github.com/patternfly/patternfly-next/pull/1982))
*   **Form:** Added element for form label text, make it bold ([#1952](https://github.com/patternfly/patternfly-next/pull/1952))
*   **Form, login, wizard:** Fixed order of variables which was causing the IE conversion script to generate undefined. Also removed a login variable that was not needed. This was also causing the IE scripts to generate undefined. ([#1871](https://github.com/patternfly/patternfly-next/pull/1871)).
*   **Nav:** Changed breakpoint to fix bug ([#1918](https://github.com/patternfly/patternfly-next/pull/1918))
*   **Options menu:** Added disabled variation ([#1973](https://github.com/patternfly/patternfly-next/pull/1973))
*   **Progress:** Changed the font weight on sm variation ([#1974](https://github.com/patternfly/patternfly-next/pull/1974))
*   **Table**
    *   Added an extra breakpoint. In the data table sortable demo the table needed a larger breakpoint, so that the rows don't overflow outside of their container ([#1880](https://github.com/patternfly/patternfly-next/pull/1880))
    *   Added word-wrap to td's in table, now wraps when on mobile size. ([#1928](https://github.com/patternfly/patternfly-next/pull/1928))
    *   Made column headers bold ([#1949](https://github.com/patternfly/patternfly-next/pull/1949))

**Infrastructure:**
*   Added ie11 to build. ([#1876](https://github.com/patternfly/patternfly-next/pull/1876))
*   A11y: This PR updates the window size used for the browser that our a11y audit is run against. ([#1911](https://github.com/patternfly/patternfly-next/pull/1911))
*   Formated release notes md ([#1956](https://github.com/patternfly/patternfly-next/pull/1956))

# PatternFly RC2.1 (2019-06-11)
- @patternfly/patternfly@2.12.5

**Components:**
*   **About Modal Box:** addressed overflow of about modal [(#1902)](https://github.com/patternfly/patternfly-next/pull/1902)
*   **Accordion:** removed need for class on toggle icon ([#1889](https://github.com/patternfly/patternfly-next/pull/1889))
*   **Button:** added class around the icon to fix bug ([#1890](https://github.com/patternfly/patternfly-next/pull/1890))
*   **Charts:** added css vars ([#1868](https://github.com/patternfly/patternfly-next/pull/1868))
*   **Datalist:** added breakpoints for actions ([#1886](https://github.com/patternfly/patternfly-next/pull/1886))
*   **Inline alert:** We had previously applied `font-size` to the inline alerts via `.pf-c-alert__icon > i`, which didn’t work in React since the icon is an svg. We applied `font-size` to `.pf-c-alert__icon` instead. Also, the inline warning icon was fixed because it was wider than the others ([#1909](https://github.com/patternfly/patternfly-next/pull/1909))
*   **Notification Badge:** added notification badge ([#1862](https://github.com/patternfly/patternfly-next/pull/1862))
*   **Switch:** added focus indicator [(#1874](https://github.com/patternfly/patternfly-next/pull/1874))
*   **Table:**
    *   media query now matches border. Fixed the table so that when the table breaks to grid form, the border width changes to 8px, and the border color matches the background color. ([#1881](https://github.com/patternfly/patternfly-next/pull/1881))
    *   added an extra breakpoint [(#1880](https://github.com/patternfly/patternfly-next/pull/1880))

**Docs:**
*   **App launcher:**  consistency in documentation ([#1873](https://github.com/patternfly/patternfly-next/pull/1873))
*   **Card:** updated action order in img/action examples, rename demo ([#1898](https://github.com/patternfly/patternfly-next/pull/1898))
*   **A11y:** fixed a few accessibility errors ([#1905](https://github.com/patternfly/patternfly-next/pull/1905/files))
*   **Layout:** updated docs [(#1885](https://github.com/patternfly/patternfly-next/pull/1885))

# 2.8.2 (2019-05-28)
This is a milestone release for PatternFly 4 - RC2 - it includes the following:

## Components
### Alert
- Adjusted warning alert webfont icon font-size (#1805)
- Added in-line modifier (#1775)
### Card
- Added a wrapper for the Actions in the top right, so that content wraps around it - similar to the Popover component. Added a logo/img wrapper that is always left aligned. (#1745)
- Removed flex from header (#1817)
- Updated font sizes. Card body and footer text size were changed to be 14px by default and header was changed to16px. (#2103)
- Card Demo: Added demo (#1716)
### Content
- Changed margin bottom for small element (#1843)
### Form/login/wizard
- Fixed undefined issues with IE11 script (#1871)
### Nav
- Fixed horizontal nav spacing, background color (#1798)
- Updated aria-label in examples (#1783)
### Pagination
- Updated options menu aria-label (#1782)
### Popover
- Scoped title class to popover component (#1857)
### Table
- Remove min-height from buttons in expansion toggle (#1818)
### Wizard
- Fixed wizard closing tag (#1803)
- Set pf-c-wizard__main to grow and fill available height (#1781)
## Layouts
### Gutter
- Updated mobile gutter spacing in layouts that have gutters (#1829)
## Other
### Charts
- Added CSS Variables for Charts (#1846)
### Docs (global)
- Updated docs and examples to use sentence case (#1796)
### Guidelines
- Added punctuation, formatting (#1810)
