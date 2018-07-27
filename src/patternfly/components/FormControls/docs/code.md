## Overview

Input, Textarea, and select are provided in the form controls component for use cases outside of forms. If they are used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-form-control` | `<input>`,`<textarea>`, `<select>` |  Initiates an input, textarea or select. For styling of checkboxes or Radios see the <a href="/components/Check/examples/">check component</a>. **required**  |
| `.pf-m-form-control-alt` | `input[type="text"].pf-c-form-control` |  Applies alternative form control styles. |
| `.pf-m-disabled` | `.pf-c-form-control` |  Forces display of the disabled state of the form control. This state is primarily for demonstration purposes and would not normally be used in lieu of the :disabled pseudo-class. |
| `.pf-m-error` | `.pf-c-form-control` |  Applies error styles. |
