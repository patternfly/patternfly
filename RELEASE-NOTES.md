---
id: Release notes
section: developer-resources
releaseNoteTOC: true
---
## 2021.01 release notes (2021-01-26)
Packages released:
- [@patternfly/patternfly@v4.80.3](https://www.npmjs.com/package/@patternfly/patternfly/v/4.80.3)

### Components
- **Accordion:** Updated expanded content color to use correct global var ([#3723](https://github.com/patternfly/patternfly/pull/3723))
- **Alert group:** Updated examples and documentation ([#3757](https://github.com/patternfly/patternfly/pull/3757))
- **Card:**
  - Added demos for horizontal cards ([#3758](https://github.com/patternfly/patternfly/pull/3758))
  - Introduced large card variant ([#3793](https://github.com/patternfly/patternfly/pull/3793))
  - Added empty state card into the demo ([#3794](https://github.com/patternfly/patternfly/pull/3794))
- **Data list:** Updated alignment settings ([#3750](https://github.com/patternfly/patternfly/pull/3750))
- **Drawer:**
  - Fixed splitter scroll off when scroll the panel ([#3778](https://github.com/patternfly/patternfly/pull/3778))
  - Fixed inline bottom panel layout issues ([#3785](https://github.com/patternfly/patternfly/pull/3785))
  - Limited drawer resize to desktop breakpoint ([#3788](https://github.com/patternfly/patternfly/pull/3788))
- **Dropdown:** Added support for menu alignment at different breakpoints ([#3746](https://github.com/patternfly/patternfly/pull/3746))
- **Dropdown, breadcrumbs, menu:** Added badge to dropdown, badge dropdown to breadcrumbs, breadcrumbs to menu ([#3797](https://github.com/patternfly/patternfly/pull/3797))
- **Form:** Added demos, section title, stack control group mod ([#3767](https://github.com/patternfly/patternfly/pull/3767))
- **Form control:** Added placeholder variation for form select ([#3790](https://github.com/patternfly/patternfly/pull/3790))
- **Jump links:**
  - Updated focus styles to match hover ([#3786](https://github.com/patternfly/patternfly/pull/3786))
  - Added expandable variation ([#3802](https://github.com/patternfly/patternfly/pull/3802))
- **List:** Added bordered, image variants ([#3798](https://github.com/patternfly/patternfly/pull/3798))
- **Menu:** Updated __content height ([#3792](https://github.com/patternfly/patternfly/pull/3792))
- **Nav, tabs:** Added scroll-snapping ([#3754](https://github.com/patternfly/patternfly/pull/3754))
- **Number input:** Renamed touchspin to number input, use number type ([#3748](https://github.com/patternfly/patternfly/pull/3748))
- **Page:** Fixed page section responsive padding ([#3769](https://github.com/patternfly/patternfly/pull/3769))
- **Search input:** Added advanced search ([#3783](https://github.com/patternfly/patternfly/pull/3783))
- **Sidebar:** Added sidebar component ([#3801](https://github.com/patternfly/patternfly/pull/3801))
- **Spinner:** Added svg variation ([#3690](https://github.com/patternfly/patternfly/pull/3690))
- **Switch, radio, check:** Updated input height and grid ([#3749](https://github.com/patternfly/patternfly/pull/3749))
- **Table:** Fixed th alignment ([#3799](https://github.com/patternfly/patternfly/pull/3799))
- **Toggle group:** Added type=button to buttons ([#3760](https://github.com/patternfly/patternfly/pull/3760))
- **Toolbar:** Added toolbar back to demos ([#3753](https://github.com/patternfly/patternfly/pull/3753))
- **Wizard:** Added cancel button element to increase cancel spacer ([#3756](https://github.com/patternfly/patternfly/pull/3756))

### Other
- **Workspace:**
  - Updated the new component/layout/demo generator template to not escape --attribute ([#3739](https://github.com/patternfly/patternfly/pull/3739))
  - Cleaned up menu examples, code ([#3744](https://github.com/patternfly/patternfly/pull/3744))
  - Refactored dropdown example handlebars ([#3752](https://github.com/patternfly/patternfly/pull/3752))
- **Global CSS:**
  - Removed breakpoint map in pf-apply-breakpoint function ([#3761](https://github.com/patternfly/patternfly/pull/3761))
  - Added SVG vertical-align class for patternfly-react ([#3775](https://github.com/patternfly/patternfly/pull/3775))

## 2020.16 release notes (2020-12-08)
Packages released:
- [@patternfly/patternfly@v4.70.1](https://www.npmjs.com/package/@patternfly/patternfly/v/4.70.1)

### Components
- **Calendar month:**
  - Updated a11y per the react component ([#3696](https://github.com/patternfly/patternfly/pull/3696))
  - Updated in-range bg to stay within cell padding ([#3705](https://github.com/patternfly/patternfly/pull/3705))
- **Card:** Added support for dividers between sections ([#3485](https://github.com/patternfly/patternfly/pull/3485))
- **Drawer:** Kept content from shifting when panel resizes ([#3719](https://github.com/patternfly/patternfly/pull/3719))
- **Dual list selector:**
  - Fixed alignment, check selected style, examples ([#3730](https://github.com/patternfly/patternfly/pull/3730))
  - Fixed check item alignment issue ([#3734](https://github.com/patternfly/patternfly/pull/3734))
- **Form:** Added field groups ([#3654](https://github.com/patternfly/patternfly/pull/3654))
- **Jump links:** Kept sublists from inheriting current styles from parent ([#3707](https://github.com/patternfly/patternfly/pull/3707))
- **Page:** Moved nav specific demos into nav demos ([#3681](https://github.com/patternfly/patternfly/pull/3681))
- **Pagination:** Added modifers to switch between full and summary layouts ([#3684](https://github.com/patternfly/patternfly/pull/3684))
- **Dropdown:** Fixed plain toggle height inconsistency ([#3689](https://github.com/patternfly/patternfly/pull/3689))
- **Progress:** Enabled static width for measure value ([#3567](https://github.com/patternfly/patternfly/pull/3567))
- **Slider:** Added slider component ([#3711](https://github.com/patternfly/patternfly/pull/3711))
- **Table:**
  - Enabled borderless variation on all tables ([#3691](https://github.com/patternfly/patternfly/pull/3691))
  - Added var for sortable text, updated sortable favorite color ([#3732](https://github.com/patternfly/patternfly/pull/3732))
- **Tree view:**
  - Removed references to pf-m-expandable ([#3676](https://github.com/patternfly/patternfly/pull/3676))
  - Made toggle size/indentation same between core and react ([#3728](https://github.com/patternfly/patternfly/pull/3728))

### Layouts
- **Gallery:** Added support for custom item max-width ([#3703](https://github.com/patternfly/patternfly/pull/3703))

### Other
- **Stalebot:** Added pinned to exemptLabels ([#3685](https://github.com/patternfly/patternfly/pull/3685))
- **Global**: Added patternfly-base-no-reset.css ([#3736](https://github.com/patternfly/patternfly/pull/3736))


## 2020.15 release notes (2020-11-17)
Packages released:
- [@patternfly/patternfly@v4.65.5](https://www.npmjs.com/package/@patternfly/patternfly/v/4.65.5)

### Components
- **Action list:** Refactored css ([#3662](https://github.com/patternfly/patternfly/pull/3662))
- **Alert:** Added examples to support custom alert icon ([#3641](https://github.com/patternfly/patternfly/pull/3641))
- **Calendar month:**
  - Added calendar month component ([#3633](https://github.com/patternfly/patternfly/pull/3633))
  - Removed focus outline, fixed selected styling ([#3669](https://github.com/patternfly/patternfly/pull/3669))
  - Differentiated hover/focus styles ([#3671](https://github.com/patternfly/patternfly/pull/3671))
- **Description list:** Updated auto-fit var names ([#3613](https://github.com/patternfly/patternfly/pull/3613))
- **Drawer:**
  - Added resizable drawer, moved splitter ([#3659](https://github.com/patternfly/patternfly/pull/3659))
  - Updated demos, remove notification drawer demos ([#3621](https://github.com/patternfly/patternfly/pull/3621))
- **Dual list selector:** Add tree view feat ([#3656](https://github.com/patternfly/patternfly/pull/3656))
- **Form:** Added grid example, tidy hbs, change 2nd action to link ([#3422](https://github.com/patternfly/patternfly/pull/3422))
- **Jump links:** Added subsections ([#3632](https://github.com/patternfly/patternfly/pull/3632))
- **Notification drawer:** Updated demos so badge reflects drawer items ([#3622](https://github.com/patternfly/patternfly/pull/3622))
- **Popover:** Added variations for no-padding, auto-width ([#3646](https://github.com/patternfly/patternfly/pull/3646))
- **Tree view:**
  - Fixed indentation ([#3661](https://github.com/patternfly/patternfly/pull/3661))
  - Added toggle button for expandable with checkbox ([#3665](https://github.com/patternfly/patternfly/pull/3665))
- **Page:** Move nav specific page demos into nav demos ([#3681](https://github.com/patternfly/patternfly/pull/3681))

### Other
- **Docs:** Moved get started content to new developer resources section ([#3649](https://github.com/patternfly/patternfly/pull/3649))
- **Global vars:** Updated active-color--300 and 400 ([#3619](https://github.com/patternfly/patternfly/pull/3619))
- **Pficons:** Added new-process, not-started, resources-empty icons ([#3663](https://github.com/patternfly/patternfly/pull/3663))
- **Utilities:** Added text and background color utility classes ([#3439](https://github.com/patternfly/patternfly/pull/3439))


## 2020.14 release notes (2020-10-27)
Packages released:
- [@patternfly/patternfly@v4.59.1](https://www.npmjs.com/package/@patternfly/patternfly/v/4.59.1)

### Components
- **Action list:** Added action list component ([#3598](https://github.com/patternfly/patternfly/pull/3598))
- **Card:** Added expandable variation ([#3586](https://github.com/patternfly/patternfly/pull/3586))
- **Data list:**
  - Added variation to avoid shift when item is dragged over ([#3574](https://github.com/patternfly/patternfly/pull/3574))
- **Dual list selector:** Added dual list selector component ([#3605](https://github.com/patternfly/patternfly/pull/3605))
- **Expandable section:** Fixed nested component icon transform ([#3545](https://github.com/patternfly/patternfly/pull/3545))
- **Form control:**
  - Updated placeholder block so the color change applies ([#3579](https://github.com/patternfly/patternfly/pull/3579))
  - Updated select arrow to align with other menu toggles ([#3581](https://github.com/patternfly/patternfly/pull/3581))
- **Gallery:** Added width variable ([#3549](https://github.com/patternfly/patternfly/pull/3549))
- **Grid:** Updated order CSS to use mixin ([#3584](https://github.com/patternfly/patternfly/pull/3584))
- **Jump links:** Added jump links component ([#3596](https://github.com/patternfly/patternfly/pull/3596))
- **Menu:** Added drilldown menu ([#3438](https://github.com/patternfly/patternfly/pull/3438))
- **Modal:**
  - Right aligned help button, aligned with close button ([#3603](https://github.com/patternfly/patternfly/pull/3603))
  - Increased space between close button and what preceedes it ([#3588](https://github.com/patternfly/patternfly/pull/3588))
- **Page:** Made last child fill available space, not last-of-type ([#3609](https://github.com/patternfly/patternfly/pull/3609))
- **Pagination:** Updated sticky examples with content ([#3538](https://github.com/patternfly/patternfly/pull/3538))
- **Table:**
  - Removed compound expansion active border ([#3421](https://github.com/patternfly/patternfly/pull/3421))
  - Added examples with multiple expandable cells ([#3573](https://github.com/patternfly/patternfly/pull/3573))
  - Added favorites ([#3594](https://github.com/patternfly/patternfly/pull/3594))
- **Toggle group:** Updated button height to match other form elements ([#3576](https://github.com/patternfly/patternfly/pull/3576))
- **Toolbar:** Added support for expand all button ([#3601](https://github.com/patternfly/patternfly/pull/3601))
- **Touchspin:** Added touchspin component ([#3604](https://github.com/patternfly/patternfly/pull/3604))
- **Tree view:** Moved actions element out of node ([#3593](https://github.com/patternfly/patternfly/pull/3593))
- **Description list:** Added auto-fit varition ([#3553](https://github.com/patternfly/patternfly/pull/3553))

### Other
- **Build:** Stopped uploading artifacts ([#3542](https://github.com/patternfly/patternfly/pull/3542))
- **SCSS:**
  - Added quotes around sass vars to retain quotes when compiled ([#3582](https://github.com/patternfly/patternfly/pull/3582))
  - Added css var stack responsive mixin ([#3583](https://github.com/patternfly/patternfly/pull/3583))


## 2020.13 release notes (2020-10-06)
Packages released:
- [@patternfly/patternfly@v4.50.4](https://www.npmjs.com/package/@patternfly/patternfly/v/4.50.4)

### Components
- **Alert:**
  - Allowed long strings in description to wrap ([#3505](https://github.com/patternfly/patternfly/pull/3505))
  - Added inline variation demo ([#3517](https://github.com/patternfly/patternfly/pull/3517))
  - Fixed duplicate example IDs ([#3537](https://github.com/patternfly/patternfly/pull/3537))
- **Chip group:** Updated all examples to use `__main` ([#3530](https://github.com/patternfly/patternfly/pull/3530))
- **Context selector:**
  - Added actions footer ([#3494](https://github.com/patternfly/patternfly/pull/3494))
  - Fixed duplicate ID in examples ([#3533](https://github.com/patternfly/patternfly/pull/3533))
- **Data list:**
  - Added grid modifiers ([#3528](https://github.com/patternfly/patternfly/pull/3528))
  - Made data-list-grid an import in data-list ([#3540](https://github.com/patternfly/patternfly/pull/3540))
- **Date picker:**
  - Added date-picker, flatpickr styles ([#3482](https://github.com/patternfly/patternfly/pull/3482))
  - Added background to flatpickr-calendar wrapper ([#3510](https://github.com/patternfly/patternfly/pull/3510))
  - Kept text in month select from getting cut off ([#3521](https://github.com/patternfly/patternfly/pull/3521))
- **Empty state:** Added xs variation ([#3519](https://github.com/patternfly/patternfly/pull/3519))
- **Form control:** Fixed icon not showing in custom icon example ([#3524](https://github.com/patternfly/patternfly/pull/3524))
- **Form:** Added form section ([#3483](https://github.com/patternfly/patternfly/pull/3483))
- **Input group:** Fixed invalid state double border ([#3508](https://github.com/patternfly/patternfly/pull/3508))
- **Label group:** Positioned close button to the top right ([#3507](https://github.com/patternfly/patternfly/pull/3507))
- **Menu:** Updated example axe violations ([#3498](https://github.com/patternfly/patternfly/pull/3498))
- **Modal:**
  - Refactored the top aligned variation so it works better ([#3481](https://github.com/patternfly/patternfly/pull/3481))
  - Added support for title icon, modal alert states ([#3487](https://github.com/patternfly/patternfly/pull/3487))
  - Added help button ([#3495](https://github.com/patternfly/patternfly/pull/3495))
  - Added icon variant, renamed pf-m-error to pf-m-danger ([#3563](https://github.com/patternfly/patternfly/pull/3563))
- **Notification badge:** Added hover/focus styles for unread/attention ([#3488](https://github.com/patternfly/patternfly/pull/3488))
- **Page:** Added sticky sections, group, overflow scroll, shadows ([#3516](https://github.com/patternfly/patternfly/pull/3516))
- **Pagination:**
  - Added sticky position to bottom ([#3509](https://github.com/patternfly/patternfly/pull/3509))
  - Updated sticky examples with content ([#3538](https://github.com/patternfly/patternfly/pull/3538))
- **Select:** Fixed axe violations ([#3501](https://github.com/patternfly/patternfly/pull/3501))
- **Table:** Added support for single row radio select ([#3492](https://github.com/patternfly/patternfly/pull/3492))
- **Treeview:** Updated node actions to support dropdowns and buttons ([#3522](https://github.com/patternfly/patternfly/pull/3522))

### Layouts
- **Flex:** Added max-width to flex items ([#3479](https://github.com/patternfly/patternfly/pull/3479))
- **Flex & grid:** Added ordering to grid and flex layouts ([#3478](https://github.com/patternfly/patternfly/pull/3478))

### Other
- **Build:**
  - Updated size report ([#3534](https://github.com/patternfly/patternfly/pull/3534))
  - Reenable a11y ([#3506](https://github.com/patternfly/patternfly/pull/3506))
- **Readme:** Added steps to updated screenshots ([#3515](https://github.com/patternfly/patternfly/pull/3515))
- **Workspace:**
  - Added hmr for css ([#3499](https://github.com/patternfly/patternfly/pull/3499))
  - Fixed reloading bugs ([#3497](https://github.com/patternfly/patternfly/pull/3497))
  - Fixed broken links ([#3504](https://github.com/patternfly/patternfly/pull/3504))


## 2020.12 release notes (2020-09-17)
Packages released:
- [@patternfly/patternfly@v4.42.2](https://www.npmjs.com/package/@patternfly/patternfly/v/4.42.2)

### Components
- **Button:**
  - Added progress button ([#3382](https://github.com/patternfly/patternfly/pull/3382))
  - Added pf-m-link as an anchor example ([#3426](https://github.com/patternfly/patternfly/pull/3426))
  - Allowed inline link text to wrap and use with span element ([#3470](https://github.com/patternfly/patternfly/pull/3470))
- **Chipgroup:** Positioned removable button at the top ([#3445](https://github.com/patternfly/patternfly/pull/3445))
- **Codeeditor:** Added code editor ([#3457](https://github.com/patternfly/patternfly/pull/3457))
- **Datalist:**
  - Added draggable variation ([#3401](https://github.com/patternfly/patternfly/pull/3401))
  - Added text modifiers ([#3463](https://github.com/patternfly/patternfly/pull/3463))
- **Description list:** Updated term text element to be inline ([#3416](https://github.com/patternfly/patternfly/pull/3416))
- **Drawer:** Kept drawer panel from extending beyond drawer height ([#3460](https://github.com/patternfly/patternfly/pull/3460))
- **Dropdown, menu:** Made menu text work in dark theme ([#3446](https://github.com/patternfly/patternfly/pull/3446))
- **Form control:** Added ability to specify custom icon for text inputs ([#3453](https://github.com/patternfly/patternfly/pull/3453))
- **Label group:** Made left/right padding match in vertical layout ([#3466](https://github.com/patternfly/patternfly/pull/3466))
- **Modal:** Added align-top variation ([#3435](https://github.com/patternfly/patternfly/pull/3435))
- **Page:** Fixed safari bug w/ sections shrinking shorter than content ([#3441](https://github.com/patternfly/patternfly/pull/3441))
- **Pagination:** Update bottom example options menu to pf-m-top ([#3420](https://github.com/patternfly/patternfly/pull/3420))
- **Progress:** Added warning state ([#3423](https://github.com/patternfly/patternfly/pull/3423))
- **Progress:** Improved description/status text/wrapping ([#3436](https://github.com/patternfly/patternfly/pull/3436))
- **Select:** Added pf-m-focus support for favorite __menu-items ([#3431](https://github.com/patternfly/patternfly/pull/3431))
- **Table:**
  - Removed unused example code ([#3424](https://github.com/patternfly/patternfly/pull/3424))
  - Added help th support ([#3467](https://github.com/patternfly/patternfly/pull/3467))
- **Treeview:** Addressed follow-up issues from initial implementation ([#3410](https://github.com/patternfly/patternfly/pull/3410))

### Other
- **Docs:**
  - Updated form demo id to match component id ([#3428](https://github.com/patternfly/patternfly/pull/3428))
  - Added section for hover styles ([#3432](https://github.com/patternfly/patternfly/pull/3432))
- **Build:**
  - Bumped stylelint ([#3427](https://github.com/patternfly/patternfly/pull/3427))
  - Upgraded workspace to use new patternfly.org theme ([#3486](https://github.com/patternfly/patternfly/pull/3486))
  - Removed required "engines" section from package.json ([#3490](https://github.com/patternfly/patternfly/pull/3490))
- **Icons:**
  - Removed transforms from pficons, added namespaces ([#3398](https://github.com/patternfly/patternfly/pull/3398))
  - Updated pficon data to fix svg rendering issues ([#3469](https://github.com/patternfly/patternfly/pull/3469))


## 2020.11 release notes (2020-08-26)
Packages released:
- [@patternfly/patternfly@v4.35.2](https://www.npmjs.com/package/@patternfly/patternfly/v/4.35.2)

### Components
- **Button:** Added warning modifier to buttons ([#3349](https://github.com/patternfly/patternfly/pull/3349))
- **Drawer:**
  - Fixed drawer and notification drawer partial names ([#3370](https://github.com/patternfly/patternfly/pull/3370))
  - Added bottom panel variation ([#3408](https://github.com/patternfly/patternfly/pull/3408))
- **Dropdown:** Added border-radius to primary dropdown toggle ([#3377](https://github.com/patternfly/patternfly/pull/3377))
- **Form:** Hid negative margin overflow from `__actions` ([#3393](https://github.com/patternfly/patternfly/pull/3393))
- **Label group:** Added label group component, overflow label ([#3396](https://github.com/patternfly/patternfly/pull/3396))
- **Menu:** Added menu component ([#3397](https://github.com/patternfly/patternfly/pull/3397))
- **Notification drawer:** Added close button ([#3387](https://github.com/patternfly/patternfly/pull/3387))
- **Page:**
  - Added href to page-header-brand-link in examples ([#3383](https://github.com/patternfly/patternfly/pull/3383))
  - Added main section element examples ([#3390](https://github.com/patternfly/patternfly/pull/3390))
- **Skeleton:** Added width var, fixed safari bug w/ transparent ([#3385](https://github.com/patternfly/patternfly/pull/3385))
- **Splitter:** Added splitter component ([#3407](https://github.com/patternfly/patternfly/pull/3407))
- **Table:**
  - Added usage for using anchor to sort column headers ([#3386](https://github.com/patternfly/patternfly/pull/3386))
  - Updated loading demo text ([#3406](https://github.com/patternfly/patternfly/pull/3406))
- **Toggle group:** Added support for icon + text ([#3373](https://github.com/patternfly/patternfly/pull/3373))
- **Toolbar:**
  - Added insets ([#3403](https://github.com/patternfly/patternfly/pull/3403))
  - Added overflow menu to toolbar demos ([#3404](https://github.com/patternfly/patternfly/pull/3404))

### Other
- **Build:**
  - Updated stalebot ignored labels ([#3357](https://github.com/patternfly/patternfly/pull/3357))
  - Added github plugin ([#3359](https://github.com/patternfly/patternfly/pull/3359))
- **Workspace:**
  - Updated example titles/metadata ([#3363](https://github.com/patternfly/patternfly/pull/3363))
  - Updated examples for compatibility with new docs ([#3414](https://github.com/patternfly/patternfly/pull/3414))

## 2020.10 release notes (2020-08-17)
Packages released:
- [@patternfly/patternfly@v4.31.6](https://www.npmjs.com/package/@patternfly/patternfly/v/4.31.6)

### Components
- **Alert group:** Removed misformed metastring ([#3324](https://github.com/patternfly/patternfly/pull/3324))
- **Description list:**
  - Changed component to dl ([#3307](https://github.com/patternfly/patternfly/pull/3307))
  - Changed spacer width to 24px column gap ([#3327](https://github.com/patternfly/patternfly/pull/3327))
- **Drawer:**
  - Scoped `drawer__body > page__main` ([#3268](https://github.com/patternfly/patternfly/pull/3268))
  - Scoped drawer styles to improve behavior of nested drawers ([#3328](https://github.com/patternfly/patternfly/pull/3328))
- **Form control:** Added warning state, updated docs ([#3290](https://github.com/patternfly/patternfly/pull/3290))
- **Label:** Added support for overflow truncation ([#3339](https://github.com/patternfly/patternfly/pull/3339))
- **Notification badge:**
  - Fixed notification badge alignment ([#3284](https://github.com/patternfly/patternfly/pull/3284))
  - Reverted enhancements in #3231 ([#3294](https://github.com/patternfly/patternfly/pull/3294))
  - Allowed text to display on top of background ([#3365](https://github.com/patternfly/patternfly/pull/3365))
  - Removed unread state border ([#3389](https://github.com/patternfly/patternfly/pull/3389))
- **Notification drawer:**
  - Added notification drawer demo ([#3220](https://github.com/patternfly/patternfly/pull/3220))
  - Wrapped long item descriptions, group titles ([#3289](https://github.com/patternfly/patternfly/pull/3289))
  - Added default item variant ([#3338](https://github.com/patternfly/patternfly/pull/3338))
- **Page:**
  - Added ability to limit width of content in page section ([#3352](https://github.com/patternfly/patternfly/pull/3352))
  - Fixed notification badge state and header item conflict ([#3372](https://github.com/patternfly/patternfly/pull/3372))
- **Skeleton:** Added skeleton component ([#3353](https://github.com/patternfly/patternfly/pull/3353))
- **Tabs:** Added tab background modifiers ([#3286](https://github.com/patternfly/patternfly/pull/3286))
- **Table:** Applied no-padding modifiers to th ([#3323](https://github.com/patternfly/patternfly/pull/3323))
- **Tile:**
  - Removed support for imgs ([#3274](https://github.com/patternfly/patternfly/pull/3274))
  - Updated basic tile icon color to match stacked ([#3334](https://github.com/patternfly/patternfly/pull/3334))
- **Toggle group:** Added toggle group component ([#3355](https://github.com/patternfly/patternfly/pull/3355))
- **Treeview:** Added treeview component ([#3354](https://github.com/patternfly/patternfly/pull/3354))
- **Wizard:** Left aligned nav item element ([#3281](https://github.com/patternfly/patternfly/pull/3281))

### Other
- **Charts:** Adjusted chart tooltip padding ([#3347](https://github.com/patternfly/patternfly/pull/3347))
- **Build:**
  - Add compiled example html to dist ([#3301](https://github.com/patternfly/patternfly/pull/3301))
  - Added .github directory with stalebot configuration file ([#3336](https://github.com/patternfly/patternfly/pull/3336))
- **Icons:**
  - Fixed svg filename in generator config ([#3305](https://github.com/patternfly/patternfly/pull/3305))
  - Added attention-bell icon ([#3309](https://github.com/patternfly/patternfly/pull/3309))
  - Updated canvas size, positioning for attention-bell ([#3330](https://github.com/patternfly/patternfly/pull/3330))
  - Added pf-icon-bell ([#3351](https://github.com/patternfly/patternfly/pull/3351))
- **Global:**
  - Enabled flag to exclude root font-size unset ([#3275](https://github.com/patternfly/patternfly/pull/3275))
  - Updated success-200 to be a shade lighter ([#3316](https://github.com/patternfly/patternfly/pull/3316))
  - Positioned sr-only class to top/left 0 to avoid overflow ([#3319](https://github.com/patternfly/patternfly/pull/3319))
- **Workspace:**
  - Updated example titles to be h3 ([#3299](https://github.com/patternfly/patternfly/pull/3299))
  - Watched more sass for hot reload ([#3300](https://github.com/patternfly/patternfly/pull/3300))
  - Parse new h3 example titles ([#3302](https://github.com/patternfly/patternfly/pull/3302))
  - Fixed incorrect example metastring ([#3324](https://github.com/patternfly/patternfly/pull/3324))
- **Demo:**
  - Renamed master detail demo to primary-detail ([#3322](https://github.com/patternfly/patternfly/pull/3322))

## 2020.09 release notes (2020-07-16)
Packages released:
- [@patternfly/patternfly@v4.23.3](https://www.npmjs.com/package/@patternfly/patternfly/v/4.23.3)

### Components
- **Alert:** Fixed heading order ([#3236](https://github.com/patternfly/patternfly/pull/3236))
- **Breadcrumb:** Enabled always using a divider and hiding the first one ([#3202](https://github.com/patternfly/patternfly/pull/3202))
- **Button:** Added CTA variation ([#3214](https://github.com/patternfly/patternfly/pull/3214))
- **Chip:** Updated docs ([#3103](https://github.com/patternfly/patternfly/pull/3103))
- **Chip group:** Updated removable action icon ([#3249](https://github.com/patternfly/patternfly/pull/3249))
- **Chip & chip group:** Updated to use `ch` unit for chip and chip group label max-widths ([#3241](https://github.com/patternfly/patternfly/pull/3241))
- **Description list:** Added description list component ([#3243](https://github.com/patternfly/patternfly/pull/3243))
- **Form control:** Adjusted select arrow size ([#3207](https://github.com/patternfly/patternfly/pull/3207))
- **Hint:** Added hint component ([#3218](https://github.com/patternfly/patternfly/pull/3218))
- **Input group:** Updated example aria-label ([#3143](https://github.com/patternfly/patternfly/pull/3143))
- **Modal:** Added medium, adjusted maxwidths for better responsiveness ([#3217](https://github.com/patternfly/patternfly/pull/3217))
- **Nav:** Updated expandable nav to use `<button>` ([#3250](https://github.com/patternfly/patternfly/pull/3250))
- **Notification badge:**
  - Updated layout and design ([#3231](https://github.com/patternfly/patternfly/pull/3231))
  - Reverted enhancements in #3231 ([#3294](https://github.com/patternfly/patternfly/pull/3294))
- **Notification drawer:** Fixed duplicate ids ([#3237](https://github.com/patternfly/patternfly/pull/3237))
- **Search input:** Added search input component ([#3264](https://github.com/patternfly/patternfly/pull/3264))
- **Select:**
  - Added support for checkbox select with description ([#3224](https://github.com/patternfly/patternfly/pull/3224))
  - Added favorites ([#3238](https://github.com/patternfly/patternfly/pull/3238))
- **Table:** Added aria-label to help button ([#3266](https://github.com/patternfly/patternfly/pull/3266))
- **Tile:** Added tile component ([#3229](https://github.com/patternfly/patternfly/pull/3229))
- **Toolbar:** Removed beta flag from docs ([#3234](https://github.com/patternfly/patternfly/pull/3234))
- **Wizard:** Added support for buttons as nav items ([#3216](https://github.com/patternfly/patternfly/pull/3216))

### Other
- **Workspace:**
  - Changed title to filepath ([#3232](https://github.com/patternfly/patternfly/pull/3232))
  - Enabled theme `wrapperTag` to avoid having two `<main>`s on fullscreen pages ([#3233](https://github.com/patternfly/patternfly/pull/3233))
- **Build:**
  - Added new component/layout/demo generator script ([#3235](https://github.com/patternfly/patternfly/pull/3235))
  - Updated size report to use commander, fixed code ([#3242](https://github.com/patternfly/patternfly/pull/3242))
  - Disabled size report running against master ([#3244](https://github.com/patternfly/patternfly/pull/3244))

## 2020.08 release notes (2020-06-24)
Packages released:
- [@patternfly/patternfly@v4.16.7](https://www.npmjs.com/package/@patternfly/patternfly/v/4.16.7)

### Components
- **Alert group:** Updated basic example to inline, removed actions ([#3142](https://github.com/patternfly/patternfly/pull/3142))
- **Banner:** Added banner component ([#2814](https://github.com/patternfly/patternfly/pull/2814))
- **Button:**
  - Added small variation ([#3132](https://github.com/patternfly/patternfly/pull/3132))
  - Added pf-m-aria-disabled state ([#3166](https://github.com/patternfly/patternfly/pull/3166))
  - Made inline link inherit font-size, updated alert actions ([#3192](https://github.com/patternfly/patternfly/pull/3192))
- **Divider:** Added xs spacer to inset map ([#3191](https://github.com/patternfly/patternfly/pull/3191))
- **Drawer:**
  - Kept panel content from displaying on top of divider/border ([#3180](https://github.com/patternfly/patternfly/pull/3180))
  - Added tab focus fix ([#3184](https://github.com/patternfly/patternfly/pull/3184))
- **Dropdown/select:** Added description element ([#3130](https://github.com/patternfly/patternfly/pull/3130))
- **Label:** Added purple-50 global color, updated green/purple fill colors ([#3138](https://github.com/patternfly/patternfly/pull/3138))
- **Modal:** Allowed wizard height to shrink when used in modal ([#3176](https://github.com/patternfly/patternfly/pull/3176))
- **Notification drawer:** Fixed last item's color line position ([#3149](https://github.com/patternfly/patternfly/pull/3149))
- **Notification drawer/alert:** Improved title wrapping ([#3145](https://github.com/patternfly/patternfly/pull/3145))
- **Table:**
  - Added sticky-header variation ([#3093](https://github.com/patternfly/patternfly/pull/3093))
  - Added support for column header help ([#3189](https://github.com/patternfly/patternfly/pull/3189))
  - Updated sticky header border var so border is visible ([#3197](https://github.com/patternfly/patternfly/pull/3197))
- **Tabs:** Reduced secondary tab font-size ([#3135](https://github.com/patternfly/patternfly/pull/3135))

### Other
- **Global:** Added RedHatDisplay back as --FontFamily--heading--sans-serif ([#3188](https://github.com/patternfly/patternfly/pull/3188))
- **Build:**
  - Enabled publish to prerelease tag ([#3162](https://github.com/patternfly/patternfly/pull/3162))
  - Upgraded patternfly-a11y ([#3178](https://github.com/patternfly/patternfly/pull/3178))
- **Docs:**
  - Copied UPGRADE-GUIDE.md ([#3158](https://github.com/patternfly/patternfly/pull/3158))
  - Updated upgrade guide RedHatDisplay text ([#3195](https://github.com/patternfly/patternfly/pull/3195))
- **Workspace:** Updated gatsby version, removed footer ([#3155](https://github.com/patternfly/patternfly/pull/3155))

## 2020.07 release notes (2020-06-05)
Packages released:
- [@patternfly/patternfly@v4.10.31](https://www.npmjs.com/package/@patternfly/patternfly/v/4.10.31)

This is our major release. Check out our [upgrade guide](/documentation/core/overview/upgrade-guide) for a list of breaking changes!

## 2020.06 release notes (2020-05-12)
Packages released:
- [@patternfly/patternfly@v2.71.6](https://www.npmjs.com/package/@patternfly/patternfly/v/2.71.6)

### Other
  - **Dev lite:** Removed examples and components on delete ([#2984](https://github.com/patternfly/patternfly/pull/2984))

## 2020.05 release notes (2020-04-21)
Packages released:
- [@patternfly/patternfly@v2.71.5](https://www.npmjs.com/package/@patternfly/patternfly/v/2.71.5)

### Other
- **Docs:**
  - Updated steps to be used for dev env ([#2952](https://github.com/patternfly/patternfly/pull/2952))
  - Added missing code of conduct ([#2945](https://github.com/patternfly/patternfly/pull/2945))
  - Fixed release notes formatting ([#2909](https://github.com/patternfly/patternfly/pull/2909))
  - Added missing step for building dev env ([#2957](https://github.com/patternfly/patternfly/pull/2957))
- **Build:**
  - Published demos to NPM ([#2908](https://github.com/patternfly/patternfly/pull/2908))

## 2020.04 release notes (2020-03-31)
Packages released:
- [@patternfly/patternfly@v2.71.3](https://www.npmjs.com/package/@patternfly/patternfly/v/2.71.3)

### Components
- **File upload:** Removed message container, added form to error example ([#2807](https://github.com/patternfly/patternfly/pull/2807))
- **Table:** Updated text in column management demo modal ([#2875](https://github.com/patternfly/patternfly/pull/2875))

### Other
- **Build:**
  - Fixed a11y upload report ([#2790](https://github.com/patternfly/patternfly/pull/2790))
  - Replaced 288 occurences of patternfly-next with patternfly ([#2880](https://github.com/patternfly/patternfly/pull/2880))
  - Publish docs to NPM ([#2839](https://github.com/patternfly/patternfly/pull/2839))
  - Added example CSS to dist ([#2840](https://github.com/patternfly/patternfly/pull/2840))
  - Parsed hbs files for PatternFly VS Code extension ([#2865](https://github.com/patternfly/patternfly/pull/2865))
- **Workspace:**
  - Scoped linting example CSS ([#2841](https://github.com/patternfly/patternfly/pull/2841))

## 2020.03 release notes (2020-03-10)
Packages released:
- [@patternfly/patternfly@v2.68.3](https://www.npmjs.com/package/@patternfly/patternfly/v/2.68.3)

### Components
- **Background image:** Removed empty width attribute ([#2739](https://github.com/patternfly/patternfly/pull/2739))
- **Divider:** Added vertical divider ([#2734](https://github.com/patternfly/patternfly/pull/2734))
- **File upload:**
  - Updated element names and general styles ([#2731](https://github.com/patternfly/patternfly/pull/2731))
  - Updated drag hover border ([#2776](https://github.com/patternfly/patternfly/pull/2776))
- **Login:** Centered login on larger viewports ([#2754](https://github.com/patternfly/patternfly/pull/2754))
- **Master detail:** Added master detail demo ([#2742](https://github.com/patternfly/patternfly/pull/2742))
- **Nav:** Adjusted divider positioning and color declarations([#2788](https://github.com/patternfly/patternfly/pull/2788))
- **Notification drawer:** Updated demo dropdowns so they dont overflow parent ([#2767](https://github.com/patternfly/patternfly/pull/2767))
- **Table:** Added table column management demo ([#2756](https://github.com/patternfly/patternfly/pull/2756))

### Other
- **Build:**
  - Updated gatsby theme ([#2737](https://github.com/patternfly/patternfly/pull/2737))
  - Added a comment to test v4 release ([#2764](https://github.com/patternfly/patternfly/pull/2764))
  - Removed unused file to test build ([#2771](https://github.com/patternfly/patternfly/pull/2771))
  - Added breaking change lint ([#2772](https://github.com/patternfly/patternfly/pull/2772))
  - Fixed upload for master ([#2780](https://github.com/patternfly/patternfly/pull/2780))
  - Testing a minor version bump ([#2784](https://github.com/patternfly/patternfly/pull/2784))
- **Workspace:**
  - Added class to body of fullscreen examples ([#2735](https://github.com/patternfly/patternfly/pull/2735))
  - Added example titles to index page ([#2741](https://github.com/patternfly/patternfly/pull/2741))
  - Updated example ids / classes ([#2749](https://github.com/patternfly/patternfly/pull/2749))
  - Added class to index, update styles ([#2750](https://github.com/patternfly/patternfly/pull/2750))
  - Scoped flex layout workspace styles to layout examples ([#2787](https://github.com/patternfly/patternfly/pull/2787))

## 2020.02 release notes (2020-02-18)
Packages released:
- [@patternfly/patternfly@v2.65.2](https://www.npmjs.com/package/@patternfly/patternfly/v/2.65.2)

### Components
- **Data list:**
  - Added compact version of data list ([#2686](https://github.com/patternfly/patternfly/pull/2686))
  - Enabled hidden/visible feature to update display ([#2691](https://github.com/patternfly/patternfly/pull/2691))
- **Data toolbar:** Updated input type to search ([#2648](https://github.com/patternfly/patternfly/pull/2648))
- **File upload:** Added file upload component ([#2681](https://github.com/patternfly/patternfly/pull/2681))
- **Inline edit:** Fixed firefox bug causes alignment issue ([#2706](https://github.com/patternfly/patternfly/pull/2706))
- **Master detail:**
  - Added master detail demo ([#2645](https://github.com/patternfly/patternfly/pull/2645))
  - Reverted master detail demo ([#2721](https://github.com/patternfly/patternfly/pull/2721))
- **Modal box:** Added modal description element ([#2646](https://github.com/patternfly/patternfly/pull/2646))
- **Nav:** Updated group title spacing so it changes responsively ([#2641](https://github.com/patternfly/patternfly/pull/2641))
- **Pagination:** Allowed updating input width with CSS vars ([#2664](https://github.com/patternfly/patternfly/pull/2664))
- **Popover:** Matched min/max-width so popover has consistent width ([#2660](https://github.com/patternfly/patternfly/pull/2660))
- **Select:**
  - Added filter and search input ([#2693](https://github.com/patternfly/patternfly/pull/2693))
  - Made badge optional in checkbox select toggle ([#2642](https://github.com/patternfly/patternfly/pull/2642))
- **Simple list:** Added tabindex, button type, removed hover underline ([#2679](https://github.com/patternfly/patternfly/pull/2679))
- **Switch:** Moved nested element rules to the root ([#2610](https://github.com/patternfly/patternfly/pull/2610))
- **Table:** Allowed sortable table headers to wrap ([#2668](https://github.com/patternfly/patternfly/pull/2668))
- **Title:** Enabled long strings to wrap ([#2662](https://github.com/patternfly/patternfly/pull/2662))
- **Toolbar:** Added toolbar layout CSS ([#2689](https://github.com/patternfly/patternfly/pull/2689))

### Other
- **Build:**
  - Added proper size report check ([#2638](https://github.com/patternfly/patternfly/pull/2638))
  - Wrote nicer ie11 error message ([#2640](https://github.com/patternfly/patternfly/pull/2640))
  - Created lightweight workspace ([#2665](https://github.com/patternfly/patternfly/pull/2665))
  - Added basic WS styling ([#2675](https://github.com/patternfly/patternfly/pull/2675))
  - Added wrapper to examples to fix example specific css ([#2678](https://github.com/patternfly/patternfly/pull/2678))
  - Phrased non production components as beta ([#2680](https://github.com/patternfly/patternfly/pull/2680))
  - Updated _all.scss with missing components ([#2684](https://github.com/patternfly/patternfly/pull/2684))
  - Removed unused directory ([#2685](https://github.com/patternfly/patternfly/pull/2685))
  - Added files/dirs to cleanup ([#2699](https://github.com/patternfly/patternfly/pull/2699))

## 2020.01 release notes (2020-01-28)
Packages released:
- [@patternfly/patternfly@v2.56.3](https://www.npmjs.com/package/@patternfly/patternfly/v/2.56.3)

### Components
- **Button:** Added ability to have icon on left or ride side of text ([#2548](https://github.com/patternfly/patternfly/pull/2548))
- **Card:** Added __head-main elements to contain images, icons, etc ([#2578](https://github.com/patternfly/patternfly/pull/2578))
- **Chip group:** Fixed chip label overflow ellipsis ([#2552](https://github.com/patternfly/patternfly/pull/2552))
- **Clipboard copy:** Assigned type to button to prevent form submit ([#2561](https://github.com/patternfly/patternfly/pull/2561))
- **Empty state:** Added xl variation ([#2545](https://github.com/patternfly/patternfly/pull/2545))
- **Inline edit:** Added inline-edit component ([#2446](https://github.com/patternfly/patternfly/pull/2446))
- **Input:** Added new example ([#2563](https://github.com/patternfly/patternfly/pull/2563))
- **Login:** Prevented login container from shrinking based on content ([#2604](https://github.com/patternfly/patternfly/pull/2604))
- **Master detail:** Added master-detail layout updates to drawer ([#2520](https://github.com/patternfly/patternfly/pull/2520))
- **Notification drawer:** Fixed flex shorthand bug resulting in 0 height ([#2571](https://github.com/patternfly/patternfly/pull/2571))
- **Page:** Added selected state to header icons, updated drawer demo ([#2541](https://github.com/patternfly/patternfly/pull/2541))
- **Radio and check:** Added optional description ([#2579](https://github.com/patternfly/patternfly/pull/2579))
- **Simple list:** Introduced simple list component ([#2573](https://github.com/patternfly/patternfly/pull/2573))
- **Table:**
  - Fixed missing expanded content border on mobile ([#2553](https://github.com/patternfly/patternfly/pull/2553))
  - Fixed bug with mobile inheritable grid-column property ([#2558](https://github.com/patternfly/patternfly/pull/2558))
  - Updated font-size for checks ([#2577](https://github.com/patternfly/patternfly/pull/2577))
  - Fixed accessibility issues on mobile ([#2582](https://github.com/patternfly/patternfly/pull/2582))
- **Wizard:** Bolded current sub-step link ([#2542](https://github.com/patternfly/patternfly/pull/2542))

### Other
- **Build:**
  - Removed "main" property from package.json ([#2549](https://github.com/patternfly/patternfly/pull/2549))
  - Promoted data-toolbar, divider, overflowmenu and spinner ([#2576](https://github.com/patternfly/patternfly/pull/2576))
  - Turned a11y checker back on ([#2585](https://github.com/patternfly/patternfly/pull/2585))
  - Enabled linting css ([#2586](https://github.com/patternfly/patternfly/pull/2586))
  - Enabled linting css size ([#2587](https://github.com/patternfly/patternfly/pull/2587))
  - Updated gatsby theme verion ([#2605](https://github.com/patternfly/patternfly/pull/2605))
  - Made data-toolbar experimental ([#2611](https://github.com/patternfly/patternfly/pull/2611))
- **Docs:** Fixed misspelling of "Overview" in multiple places ([#2566](https://github.com/patternfly/patternfly/pull/2566))
- **Global vars:** Added CSS vars for color palette SCSS vars ([#2551](https://github.com/patternfly/patternfly/pull/2551))

## 2019.11 release notes (2019-12-18)
Packages released:
- [@patternfly/patternfly@v2.46.1](https://www.npmjs.com/package/@patternfly/patternfly/v/2.46.1)

### Components
- **App launcher:**
  - Removed unused vars ([#2459](https://github.com/patternfly/patternfly/pull/2459))
  - Fixed spacing between favorites search and next item ([#2515](https://github.com/patternfly/patternfly/pull/2515))
- **Card:** Added selectable card ([#2497](https://github.com/patternfly/patternfly/pull/2497))
- **Charts:** Updated threshold properties ([#2486](https://github.com/patternfly/patternfly/pull/2486))
- **Data list:**
  - Added selectable/hoverable row variations ([#2491](https://github.com/patternfly/patternfly/pull/2491))
  - Split out selected row state vars ([#2502](https://github.com/patternfly/patternfly/pull/2502))
- **Data toolbar:** Added content wrapper, updated margins ([#2460](https://github.com/patternfly/patternfly/pull/2460))
- **Empty state:** Moved basic example ([#2499](https://github.com/patternfly/patternfly/pull/2499))
- **Global vars:**
  - Updated pf-color-black-200 and pf-color-black-600 ([#2477](https://github.com/patternfly/patternfly/pull/2477))
  - Updated success-color--100, success-color--200, green-500 ([#2480](https://github.com/patternfly/patternfly/pull/2480))
  - Reverted global color changes from #2477 and #2480 ([#2505](https://github.com/patternfly/patternfly/pull/2505))
- **Nav:**
  - Removed bold for tertiary link current, active, focus ([#2487](https://github.com/patternfly/patternfly/pull/2487))
  - Updated horizontal overflow arrow colors ([#2510](https://github.com/patternfly/patternfly/pull/2510))
- **Notification drawer:** Added notification drawer component ([#2511](https://github.com/patternfly/patternfly/pull/2511))
- **Options menu:**
  - Added support for groups and titles ([#2403](https://github.com/patternfly/patternfly/pull/2403))
  - Fixed spacing if separator is last item in group ([#2500](https://github.com/patternfly/patternfly/pull/2500))

### Other
- **Build:**
  - Enabled patternfly-a11y ([#2453](https://github.com/patternfly/patternfly/pull/2453))
  - Upgraded gatsby and org theme ([#2496](https://github.com/patternfly/patternfly/pull/2496))

## 2019.10 release notes (2019-11-25)
Packages released:
- [@patternfly/patternfly@v2.43.1](https://www.npmjs.com/package/@patternfly/patternfly/v/2.43.1)

### Components
- **App launcher:** Added support for search input, favorites ([#2428](https://github.com/patternfly/patternfly/pull/2428))
- **Data toolbar:**
  - Moved and wrapped chips ([#2397](https://github.com/patternfly/patternfly/pull/2397))
  - Reverted changes from refactor-data-toolbar branch ([#2434](https://github.com/patternfly/patternfly/pull/2434))
  - Unreverted changes from refactor-data-toolbar branch ([#2440](https://github.com/patternfly/patternfly/pull/2440))
  - Updated chip-group structure ([#2445](https://github.com/patternfly/patternfly/pull/2445))
- **Dropdown:**
  - Added regular action support in split button dropdown ([#2418](https://github.com/patternfly/patternfly/pull/2418))
  - Fixed bottom border for split button w/ action expanded ([#2449](https://github.com/patternfly/patternfly/pull/2449))
  - Added support for menu item icons ([#2451](https://github.com/patternfly/patternfly/pull/2451))
- **Page:** Fixed hamburger alignment on mobile ([#2402](https://github.com/patternfly/patternfly/pull/2402))
- **Select:** Removed use of form element in toggle and menu ([#2430](https://github.com/patternfly/patternfly/pull/2430))

### Other
- **Build:**
  - Bumped gatsby-theme-patternfly-org ([#2377](https://github.com/patternfly/patternfly/pull/2377))
  - Moved build back to separate component build for correct dist ([#2421](https://github.com/patternfly/patternfly/pull/2421))
  - Added /g to regex ([#2423](https://github.com/patternfly/patternfly/pull/2423))
  - Used surge to host pf4.patternfly.org ([#2429](https://github.com/patternfly/patternfly/pull/2429))
  - Updated to always auto-import patternfly-utilities.sass ([#2433](https://github.com/patternfly/patternfly/pull/2433))
- **Workspace:** Updated component titles to be sentence case ([#2401](https://github.com/patternfly/patternfly/pull/2401))

## 2019.09 release notes (2019-11-01)
Packages released:
- [@patternfly/patternfly@v2.40.6](https://www.npmjs.com/package/@patternfly/patternfly/v/2.40.6)

### Components
- **Charts:**
  - Added strokeDasharray variable for ChartThreshold ([#2314](https://github.com/patternfly/patternfly/pull/2314))
  - Added size variables for scatter chart ([#2340](https://github.com/patternfly/patternfly/pull/2340))
- **Input group:** Unnested text class ([#2318](https://github.com/patternfly/patternfly/pull/2318))
- **Alert:** Fixed inline alert examples ([#2354](https://github.com/patternfly/patternfly/pull/2354))
- **Nav:**
  - Updated nav separator color in dark theme ([#2317](https://github.com/patternfly/patternfly/pull/2317))
  - Updated examples so simple-list is only used in expandable nav ([#2387](https://github.com/patternfly/patternfly/pull/2387))
- **Form control:**
  - Added horizontal and vertical resize variants for `<textarea>` ([#2331](https://github.com/patternfly/patternfly/pull/2331))
  - Updated horizontal and vertical resize variant descriptions ([#2386](https://github.com/patternfly/patternfly/pull/2386))
- **Select:**
  - Added plain modifier to button ([#2364](https://github.com/patternfly/patternfly/pull/2364))
  - Added example of empty menu with a div ([#2337](https://github.com/patternfly/patternfly/pull/2337))
- **Data toolbar:**
  - Refactored examples to match react implementation ([#2342](https://github.com/patternfly/patternfly/pull/2342))
  - Added attribute-value filter toolbar demo ([#2287](https://github.com/patternfly/patternfly/pull/2287))
- **Options menu:** Made class work for svg ([#2341](https://github.com/patternfly/patternfly/pull/2341))
- **Popover:** Reduced space below title ([#2381](https://github.com/patternfly/patternfly/pull/2381))
- **Overflow menu:** Updated examples to match react integration ([#2328](https://github.com/patternfly/patternfly/pull/2328))
- **Form:** Added success form modifier ([#2338](https://github.com/patternfly/patternfly/pull/2338))
- **Chip group:** Added closable chip-group ([#2334](https://github.com/patternfly/patternfly/pull/2334))
- **Accordion:** Added no-box-shadow variation, refactored expanded border ([#2385](https://github.com/patternfly/patternfly/pull/2385))
- **Dropdown, options menu, app launcher:** Fixed menu group and separator spacing ([#2384](https://github.com/patternfly/patternfly/pull/2384))

### Other
- **Font:** Added monospace stack for opt in redhat font ([#2382](https://github.com/patternfly/patternfly/pull/2382))
- **Build:**
  - Hot-reload styles, fixed trailing slashes ([#2349](https://github.com/patternfly/patternfly/pull/2349))
  - Fixed duplicated placeholders and linting ([#2360](https://github.com/patternfly/patternfly/pull/2360))
  - Properly copy source SASS files to dist ([#2367](https://github.com/patternfly/patternfly/pull/2367))
  - Use cssnano for minification ([#2368](https://github.com/patternfly/patternfly/pull/2368))
  - Refactor/mdx followup ([#2369](https://github.com/patternfly/patternfly/pull/2369))
- **Docs:**
  - Use gatsby-theme-patternfly-org ([#2242](https://github.com/patternfly/patternfly/pull/2242))
  - Fixed component titles for Navigation and Application Launcher ([#2356](https://github.com/patternfly/patternfly/pull/2356))
  - Added HTML formatting ([#2363](https://github.com/patternfly/patternfly/pull/2363))
  - Bump gatsby-theme-patternfly-org ([#2372](https://github.com/patternfly/patternfly/pull/2372))

## 2019.08 release notes (2019-10-01)
Packages released:
- [@patternfly/patternfly@v2.33.5](https://www.npmjs.com/package/@patternfly/patternfly/v/2.33.5)

### Components
- **Button:** Add control modifier ([#2005](https://github.com/patternfly/patternfly/pull/2005))
- **Charts:**
  - Adjust padding for pie and donut charts ([#2247](https://github.com/patternfly/patternfly/pull/2247))
  - Set mix-blend-mode for better color contrast ([#2239](https://github.com/patternfly/patternfly/pull/2239))
  - Update area chart opacity ([#2233](https://github.com/patternfly/patternfly/pull/2233))
- **Chip group:** Add overflow to group ([#2278](https://github.com/patternfly/patternfly/pull/2278))
- **Copy to clipboard:** Wrapped code in pre which allows the code to preserve line-breaks and spaces and also applies styling such as the monospace font. ([#2260](https://github.com/patternfly/patternfly/pull/2260))
- **Data list:** Make data list borders consistent with table ([#2289](https://github.com/patternfly/patternfly/pull/2289))
- **Data toolbar:**
  - Updated clear button mods ([#2248](https://github.com/patternfly/patternfly/pull/2248))
  - Added in examples for expandable ([#2273](https://github.com/patternfly/patternfly/pull/2273))
- **Flex layout:** Wrapped flex items, update css ([#2214](https://github.com/patternfly/patternfly/pull/2214))
- **Navigation:** Added styling updates to dark nav ([#2283](https://github.com/patternfly/patternfly/pull/2283))
- **Page:** Added ability to keep sidebar collapsed between sizes ([#2264](https://github.com/patternfly/patternfly/pull/2264))
- **Pagination:** Added compact variation ([#2275](https://github.com/patternfly/patternfly/pull/2275))
- **Radio:** Updated the radio component example to single components ([#2231](https://github.com/patternfly/patternfly/pull/2231))
- **Select:**
  - Added typeahead form wrapper, udpated css ([#2255](https://github.com/patternfly/patternfly/pull/2255))
  - Add top expanded example ([#2026](https://github.com/patternfly/patternfly/pull/2026))
- **Table:**
  - Fixed a11y issues in org documentation/html/table ([#2282](https://github.com/patternfly/patternfly/pull/2282))
  - Added empty and loading state table demos ([#2254](https://github.com/patternfly/patternfly/pull/2254))
- **Tooltip:** Added text align left modifier ([#2284](https://github.com/patternfly/patternfly/pull/2284))
- **Wizard:**
  - Re-enabled wizard modal demos ([#2259](https://github.com/patternfly/patternfly/pull/2259))
  - Updated in page wizard demos to use dark sidebar/nav ([#2296](https://github.com/patternfly/patternfly/pull/2296))

### Other
- **Shield:** Added missing components, missing var to brand docs js ([#2263](https://github.com/patternfly/patternfly/pull/2263))

## 2019.07 release notes (2019-09-10)
Packages released:
- [@patternfly/patternfly@v2.31.6](https://www.npmjs.com/package/@patternfly/patternfly/v/2.31.6)

### Components
- **Charts:**
  - Refactor bullet chart vars. [#2159](https://github.com/patternfly/patternfly/pull/2159)
  - Adjust chart axis label padding. [#2181](https://github.com/patternfly/patternfly/pull/2181)
- **Select:** Add support for custom toggle icon. [#2154](https://github.com/patternfly/patternfly/pull/2154)
- **Data Toolbar:**
  - Add data toolbar component. [#2119](https://github.com/patternfly/patternfly/pull/2119)
  - Refactor spacer SCSS. [#2189](https://github.com/patternfly/patternfly/pull/2189)
  - Fix group formatting in expandable content. [#2229](https://github.com/patternfly/patternfly/pull/2229)
- **Modal:** Add variation for left-aligned footer buttons. [#2182](https://github.com/patternfly/patternfly/pull/2182)
- **Wizard:** Add in-page variation. [#2186](https://github.com/patternfly/patternfly/pull/2186)
- **Dropdown:** Add variation for primary toggle. [#2210](https://github.com/patternfly/patternfly/pull/2210)
- **Spinner:** Add spinner component. [#2142](https://github.com/patternfly/patternfly/pull/2142)
- **Dropdown:**
  - Add toggle text to split-button variation. [#2212](https://github.com/patternfly/patternfly/pull/2212)
  - Fix split-button toggle text spacing. [#2224](https://github.com/patternfly/patternfly/pull/2224)
- **Overflow Menu:** Add overflow menu component. [#2126](https://github.com/patternfly/patternfly/pull/2126)
- **Nav & Page sidebar:**
  - Add variation for dark theme. [#2197](https://github.com/patternfly/patternfly/pull/2197)
  - Fix nav separator background in dark theme. [#2227](https://github.com/patternfly/patternfly/pull/2227)
- **Form:** Update horizontal form label alignment. [#2200](https://github.com/patternfly/patternfly/pull/2200)

### Other
- **A11y:** Fix accessibility issues in basic forms demo. [#2086](https://github.com/patternfly/patternfly/pull/2086)
- **Dependencies:**
  - Update development dependencies. ([#2124](https://github.com/patternfly/patternfly/pull/2124))
  - Update Gulp and bump dependencies. [#2201](https://github.com/patternfly/patternfly/pull/2201)
- **Build:**
  - Fix GitHub Pages deploy on master [#2160](https://github.com/patternfly/patternfly/pull/2160)
  - Remove GitHub Pages deploy [#2166](https://github.com/patternfly/patternfly/pull/2166)
- **Workspace:** Fix codepen button title. [#2151](https://github.com/patternfly/patternfly/pull/2151)

## 2019.06 release notes (2019-08-13)
Packages released:
- [@patternfly/patternfly@v2.26.1](https://www.npmjs.com/package/@patternfly/patternfly/v/2.26.1)

### Components
- **Alert:** Added default alert ([#2107](https://github.com/patternfly/patternfly/pull/2107))
- **Data list:** Gave Data List Demo a header ([#2083](https://github.com/patternfly/patternfly/pull/2083))
- **Divider:** Updated example for the li example of the divider, set the type from div to li ([#2089](https://github.com/patternfly/patternfly/issues/2089))
- **Drawer demo:** Removed drawer.scss. The drawer demo used to add a sass file. We removed this since demos should not have their own distributed css. ([#2138](https://github.com/patternfly/patternfly/issues/2138))
- **Charts:** Added color to black range, shift vars ([#2094](https://github.com/patternfly/patternfly/pull/2094))
- **Logo:** PF logo missing width attribute ([#2101](https://github.com/patternfly/patternfly/pull/2101))
- **Page:** Took main elements grid-area value out of custom property ([#2137](https://github.com/patternfly/patternfly/pull/2137))
- **Popover:** Ensure content does not overlap close button ([#2129](https://github.com/patternfly/patternfly/pull/2129))
- **Radio:** Gave unique names to fix a11y ([#2088](https://github.com/patternfly/patternfly/pull/2088))
- **Select:** Added a disable modifier ([#2028](https://github.com/patternfly/patternfly/pull/2028))

### Chore
- **A11y:** Ensure SkipToContent sends focus to page content ([#2058](https://github.com/patternfly/patternfly/pull/2125))
- **Build:** Moved to circle ci
  - Replaces .travis.yml with .circleci/config.yml and split up test steps to allow testing in parallel and nicer Github status checks
  - Fixes our our a11y Selenium script to not have Travis integrations
  - Uploads PR previews to https://surge.sh on every pushed commit (no need for Netlify to also build a preview)
  - Still updates the Github Pages with a new npm run publish:docs target on merges to master ([#2121](https://github.com/patternfly/patternfly/pull/2121))
  - Temporarily disable problematic ci checks ([#2125](https://github.com/patternfly/patternfly/pull/2125))
- **Demos:** Use unique ID used in alert and cardview demos ([#2106](https://github.com/patternfly/patternfly/pull/2106))
- **Notes:** Format release notes using uls
- **Page:** Updated demo main section copy ([#2092](https://github.com/patternfly/patternfly/pull/2092))

## 2019.05 release notes (2019-07-24)
Packages released:
- [@patternfly/patternfly@v2.23.0](https://www.npmjs.com/package/@patternfly/patternfly/v/2.23.0)

### Components
- **About modal:** Updated break-word on content area instead of break-all ([#2035](https://github.com/patternfly/patternfly/pull/2035))
- **App launcher:**
  - Added button example to menu item ([#2006](https://github.com/patternfly/patternfly/pull/2006))
  - Added support for right and top alignment ([#2081](https://github.com/patternfly/patternfly/pull/2081))
- **Charts:**
  - Adjusted chart vars for react-charts ([#2020](https://github.com/patternfly/patternfly/pull/2020), [#2024](https://github.com/patternfly/patternfly/pull/2024))
  - Adjusted 3 chart tooltip color vars and adds two new ones. This will ensure tooltips can be seen over the current background color. ([#2038](https://github.com/patternfly/patternfly/pull/2038))
  - Added individual padding vars for donut charts ([#2068](https://github.com/patternfly/patternfly/pull/2068))
- **Chip:** updated padding on chip label ([#2063](https://github.com/patternfly/patternfly/pull/2063))
- **Divider:** Added divider component ([#2080](https://github.com/patternfly/patternfly/pull/2080))
- **Drawer:** Added drawer component ([#2069](https://github.com/patternfly/patternfly/pull/2069))
- **Dropdown:**
  - Added space-between when width of dropdown grows ([#2050](https://github.com/patternfly/patternfly/pull/2050))
  - Centered plain button content ([#2071](https://github.com/patternfly/patternfly/pull/2071))
- **Icons:** Changed selector that wraps extend for lower specificity ([#2018](https://github.com/patternfly/patternfly/pull/2018))
- **Login:** Unset the link color text so that its white. ([#2032](https://github.com/patternfly/patternfly/pull/2032))
- **Navigation:** Changed max-height to 100% for subnav  ([#2061](https://github.com/patternfly/patternfly/pull/2061))
- **Options menu:** Centered plain button content ([#2071](https://github.com/patternfly/patternfly/pull/2071))
- **Page:** Removed toggle from horizontal nav page demo ([#2004](https://github.com/patternfly/patternfly/pull/2004))
- **Pagination:** Added disabled variation ([#2015](https://github.com/patternfly/patternfly/pull/2015))
- **Select:**
  - Added plain variation ([#2053](https://github.com/patternfly/patternfly/pull/2053))
  - Updated class selector, stacking context for typeahead input ([#2075](https://github.com/patternfly/patternfly/pull/2075))
- **Switch:** Removed dependency on font-size for switch's height ([#2049](https://github.com/patternfly/patternfly/pull/2049))
- **Table:**
  - Renamed data table to table ([#2051](https://github.com/patternfly/patternfly/pull/2051))
  - Wrapped button icons in demo with button icon class to add space ([#1978](https://github.com/patternfly/patternfly/pull/1978))
  - Fixed data-label attr in table demos ([#2060](https://github.com/patternfly/patternfly/pull/2060))
  - Added example of pf-m-wrap modifier for use in thead cells ([#2065](https://github.com/patternfly/patternfly/pull/2065))
- **Tooltip:** Broke words in a place to fit in tooltip ([#2033](https://github.com/patternfly/patternfly/pull/2033))

### Other
- **Red Hat font:** Added opt-in option to use Red Hat font ([#1813](https://github.com/patternfly/patternfly/pull/1813))
- **Experimental features:** Added experimental feature support ([#2031](https://github.com/patternfly/patternfly/pull/2031))

## 2019.04 release notes (2019-07-02)
Packages released:
- [@patternfly/patternfly@v2.17.0](https://www.npmjs.com/package/@patternfly/patternfly/v/2.17.0)

### Components
- **About modal box:** Removed the title classes from the strapline paragraph. Changed strapline `font-size` to 14px. ([#1951](https://github.com/patternfly/patternfly/pull/1951))
- **About modal, app launcher, backdrop, context selector, datalist, dropdown, form control, input group, modal, nav, options menu, select, table, tabs, wizard:**
  - Re-do z-index system so components overlap one another properly ([#1901](https://github.com/patternfly/patternfly/pull/1901))
- **Accordion, clipboard copy, data list, dropdown, expandable, nav, options menu, select, table, wizard:**
  - Added expanded/collapsed arrow rotation in components ([#1932](https://github.com/patternfly/patternfly/pull/1932))
- **Accordion:**
  - Add variation of accordion that uses divs and headings instead of definition list [(#1990](https://github.com/patternfly/patternfly/pull/1990))
- **Alert group:**
  - Renamed example and reworded docs [(#1930](https://github.com/patternfly/patternfly/pull/1930))
- **App launcher:**
  - Used `--pf-global--icon--FontSize--lg` for the icon size. Reduced height of expanded demo  ([#1935](https://github.com/patternfly/patternfly/pull/1935))
  - Added support for sections/icons/divider ([#1916](https://github.com/patternfly/patternfly/pull/1916))
- **Background image:**
  - Reduce size of background image ([#1936](https://github.com/patternfly/patternfly/pull/1936))
- **Card:**
  - Added compact variation ([#1975](https://github.com/patternfly/patternfly/pull/1975))
- **Charts:**
  - Added remaining variables ([#1863](https://github.com/patternfly/patternfly/pull/1863))
- **Copy to Clipboard:**
  - fixed focus ring and add content editable to expanded ([#1896](https://github.com/patternfly/patternfly/pull/1896))
- **Datalist:**
  - Added an example using a heading in the primary content section. ([#1870](https://github.com/patternfly/patternfly/pull/1870))
- **Dropdown:**
  - Increased height of examples that overflow ([#1965](https://github.com/patternfly/patternfly/pull/1965))
- **Expandable:**
  - Added type to the button ([#1982](https://github.com/patternfly/patternfly/pull/1982))
- **Form:**
  - Added element for form label text, make it bold ([#1952](https://github.com/patternfly/patternfly/pull/1952))
- **Form, login, wizard:**
  - Fixed order of variables which was causing the IE conversion script to generate undefined. Also removed a login variable that was not needed. This was also causing the IE scripts to generate undefined. ([#1871](https://github.com/patternfly/patternfly/pull/1871)).
- **Nav:**
  - Changed breakpoint to fix bug ([#1918](https://github.com/patternfly/patternfly/pull/1918))
- **Options menu:**
  - Added disabled variation ([#1973](https://github.com/patternfly/patternfly/pull/1973))
- **Progress:**
  - Changed the font weight on sm variation ([#1974](https://github.com/patternfly/patternfly/pull/1974))
- **Table:**
  - Added an extra breakpoint. In the data table sortable demo the table needed a larger breakpoint, so that the rows don't overflow outside of their container ([#1880](https://github.com/patternfly/patternfly/pull/1880))
  - Added word-wrap to td's in table, now wraps when on mobile size. ([#1928](https://github.com/patternfly/patternfly/pull/1928))
  - Made column headers bold ([#1949](https://github.com/patternfly/patternfly/pull/1949))

### Other
- Added ie11 to build ([#1876](https://github.com/patternfly/patternfly/pull/1876))
- Updated the window size used for the browser that our a11y audit is run against ([#1911](https://github.com/patternfly/patternfly/pull/1911))

## 2019.03 RC2.1 release notes (2019-06-11)
Packages released:
- [@patternfly/patternfly@v2.12.5](https://www.npmjs.com/package/@patternfly/patternfly/v/2.12.5)

### Components
- **About Modal Box:**
  - Addressed overflow of about modal [#1902](https://github.com/patternfly/patternfly/pull/1902)
- **Accordion:**
  - Removed need for class on toggle icon ([#1889](https://github.com/patternfly/patternfly/pull/1889))
- **Button:**
  - Added class around the icon to fix bug ([#1890](https://github.com/patternfly/patternfly/pull/1890))
- **Charts:**
  - Added css vars ([#1868](https://github.com/patternfly/patternfly/pull/1868))
- **Datalist:**
  - Added breakpoints for actions ([#1886](https://github.com/patternfly/patternfly/pull/1886))
- **Inline alert:**
  - We had previously applied `font-size` to the inline alerts via `.pf-c-alert__icon > i`, which didn’t work in React since the icon is an svg. We applied `font-size` to `.pf-c-alert__icon` instead. Also, the inline warning icon was fixed because it was wider than the others ([#1909](https://github.com/patternfly/patternfly/pull/1909))
- **Notification Badge:**
  - Added notification badge ([#1862](https://github.com/patternfly/patternfly/pull/1862))
- **Switch:**
  - Added focus indicator [(#1874](https://github.com/patternfly/patternfly/pull/1874))
- **Table:**
  - Media query now matches border. Fixed the table so that when the table breaks to grid form, the border width changes to 8px, and the border color matches the background color. ([#1881](https://github.com/patternfly/patternfly/pull/1881))

## 2019.02 release notes (2019-05-28)
Packages released:
- [@patternfly/patternfly@v2.8.2](https://www.npmjs.com/package/@patternfly/patternfly/v/2.8.2)

### Components
- **Alert:**
  - Adjusted warning alert webfont icon font-size ([#1805](https://github.com/patternfly/patternfly/pull/1805))
  - Added in-line modifier ([#1775](https://github.com/patternfly/patternfly/pull/1775))
- **Card:**
  - Added a wrapper for the Actions in the top right, so that content wraps around it - similar to the Popover component. Added a logo/img wrapper that is always left aligned. ([#1745](https://github.com/patternfly/patternfly/pull/1745))
  - Removed flex from header ([#1817](https://github.com/patternfly/patternfly/pull/1817))
  - Updated font sizes. Card body and footer text size were changed to be 14px by default and header was changed to 16px. ([#2103](https://github.com/patternfly/patternfly/pull/2103))
  - Card Demo: Added demo ([#1716](https://github.com/patternfly/patternfly/pull/1716))
- **Content:**
  - Changed margin bottom for small element ([#1843](https://github.com/patternfly/patternfly/pull/1843))
- **Form/login/wizard:**
  - Fixed undefined issues with IE11 script ([#1871](https://github.com/patternfly/patternfly/pull/1871))
- **Nav:**
  - Fixed horizontal nav spacing, background color ([#1798](https://github.com/patternfly/patternfly/pull/1798))
  - Updated aria-label in examples ([#1783](https://github.com/patternfly/patternfly/pull/1783))
- **Pagination:**
  - Updated options menu aria-label ([#1782](https://github.com/patternfly/patternfly/pull/1782))
- **Popover:**
  - Scoped title class to popover component ([#1857](https://github.com/patternfly/patternfly/pull/1857))
- **Table:**
  - Remove min-height from buttons in expansion toggle ([#1818](https://github.com/patternfly/patternfly/pull/1818))
- **Wizard:**
  - Fixed wizard closing tag ([#1803](https://github.com/patternfly/patternfly/pull/1803))
  - Set pf-c-wizard__main to grow and fill available height ([#1781](https://github.com/patternfly/patternfly/pull/1781))

### Layouts
- **Gutter:**
  - Updated mobile gutter spacing in layouts that have gutters ([#1829](https://github.com/patternfly/patternfly/pull/1829))

### Other
- **Charts:**
  - Added CSS Variables for Charts ([#1846](https://github.com/patternfly/patternfly/pull/1846))
- **Docs (global):**
  - Updated docs and examples to use sentence case ([#1796](https://github.com/patternfly/patternfly/pull/1796))
- **Guidelines:**
  - Added punctuation, formatting ([#1810](https://github.com/patternfly/patternfly/pull/1810))
