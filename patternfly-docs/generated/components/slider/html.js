import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Slider",
  "section": "components",
  "source": "html",
  "slug": "/components/slider/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Slider/examples/Slider.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-slider"
  ],
  "examples": [
    "Discrete",
    "Continuous",
    "Value input",
    "Thumb value input",
    "Actions",
    "Disabled"
  ]
};
pageData.examples = {
  'Discrete': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 62.5%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div class=\"pf-c-slider__steps\" aria-hidden=\"true\">\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 0%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">0</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 12.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 25%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">2</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 37.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 50%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">4</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 62.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 75%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">6</div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 87.5%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 100%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">8</div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"8\"\n      aria-valuenow=\"5\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n</div>","title":"Discrete","lang":"html"}}>
      
    </Example>,
  'Continuous': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n</div>\n\n<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div class=\"pf-c-slider__steps\" aria-hidden=\"true\">\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 0%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">0%</div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 100%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">100%</div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n</div>","title":"Continuous","lang":"html"}}>
      
    </Example>,
  'Value input': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-slider\"\n  style=\"--pf-c-slider--value: 62.5%; --pf-c-slider__value--c-form-control--width-chars: 1;\"\n>\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div class=\"pf-c-slider__steps\" aria-hidden=\"true\">\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 0%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">0</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 12.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 25%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">2</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 37.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 50%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">4</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 62.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 75%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">6</div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 87.5%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 100%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">8</div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"8\"\n      aria-valuenow=\"5\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n  <div class=\"pf-c-slider__value\">\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"5\"\n      aria-label=\"Slider value input\"\n    />\n  </div>\n</div>\n\n<br />\n\n<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div class=\"pf-c-slider__steps\" aria-hidden=\"true\">\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 0%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">0%</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 25%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 50%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">50%</div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 75%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 100%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">100%</div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n  <div class=\"pf-c-slider__value\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"number\"\n        value=\"50\"\n        aria-label=\"Slider value input\"\n      />\n      <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n    </div>\n  </div>\n</div>\n\n<br />\n\n<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n  <div class=\"pf-c-slider__value\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"number\"\n        value=\"50\"\n        aria-label=\"Slider value input\"\n      />\n      <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n    </div>\n  </div>\n</div>","title":"Value input","lang":"html"}}>
      
    </Example>,
  'Thumb value input': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n    <div class=\"pf-c-slider__value pf-m-floating\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"number\"\n          value=\"50\"\n          aria-label=\"Slider value input\"\n        />\n        <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n      </div>\n    </div>\n  </div>\n</div>","title":"Thumb value input","lang":"html"}}>
      
    </Example>,
  'Actions': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__actions\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Minus\">\n      <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n  </div>\n  <div class=\"pf-c-slider__actions\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Plus\">\n      <i class=\"fas fa-fw fa-plus\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n\n<br />\n<br />\n\n<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n    <div class=\"pf-c-slider__value pf-m-floating\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          disabled\n          type=\"number\"\n          value=\"50\"\n          aria-label=\"Slider value input\"\n        />\n        <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-slider__actions\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Locked\">\n      <i class=\"fas fa-fw fa-lock\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n\n<br />\n<br />\n\n<div class=\"pf-c-slider\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      tabindex=\"0\"\n    ></div>\n    <div class=\"pf-c-slider__value pf-m-floating\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"number\"\n          value=\"50\"\n          aria-label=\"Slider value input\"\n        />\n        <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-slider__actions\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Lock\">\n      <i class=\"fas fa-fw fa-lock-open\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Actions","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-slider pf-m-disabled\" style=\"--pf-c-slider--value: 62.5%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div class=\"pf-c-slider__steps\" aria-hidden=\"true\">\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 0%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">0</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 12.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 25%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">2</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 37.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 50%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">4</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 62.5%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 75%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">6</div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 87.5%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 100%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">8</div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"8\"\n      aria-valuenow=\"5\"\n      aria-label=\"Value\"\n      aria-disabled=\"true\"\n    ></div>\n  </div>\n</div>\n\n<br />\n<br />\n\n<div class=\"pf-c-slider pf-m-disabled\" style=\"--pf-c-slider--value: 50%;\">\n  <div class=\"pf-c-slider__main\">\n    <div class=\"pf-c-slider__rail\">\n      <div class=\"pf-c-slider__rail-track\"></div>\n    </div>\n    <div class=\"pf-c-slider__steps\" aria-hidden=\"true\">\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 0%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">0%</div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 25%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div\n        class=\"pf-c-slider__step pf-m-active\"\n        style=\"--pf-c-slider__step--Left: 50%;\"\n      >\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">50%</div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 75%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n      </div>\n      <div class=\"pf-c-slider__step\" style=\"--pf-c-slider__step--Left: 100%;\">\n        <div class=\"pf-c-slider__step-tick\"></div>\n        <div class=\"pf-c-slider__step-label\">100%</div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-slider__thumb\"\n      role=\"slider\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-valuenow=\"50\"\n      aria-label=\"Value\"\n      aria-disabled=\"true\"\n    ></div>\n  </div>\n  <div class=\"pf-c-slider__value\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        disabled\n        type=\"number\"\n        value=\"50\"\n        aria-label=\"Slider value input\"\n      />\n      <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n    </div>\n  </div>\n</div>","title":"Disabled","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Discrete"])}
    {React.createElement(pageData.examples["Continuous"])}
    {React.createElement(pageData.examples["Value input"])}
    {React.createElement(pageData.examples["Thumb value input"])}
    {React.createElement(pageData.examples["Actions"])}
    {React.createElement(pageData.examples["Disabled"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="slider"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the element as a slider. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Includes the slider thumb in the page tab sequence. `}
              <strong>
                {`Note:`}
              </strong>
              {` only for use with non-disabled slider. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-disabled="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider.pf-m-disabled .pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the slider thumb is disabled. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuemin="[value]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Specifies the minimum value of the slider. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuemax="[value]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Specifies the maximum value of the slider. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuenow="[value]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Specifies the current value of the slider. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider component. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider main element. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__rail`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider rail. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__rail-track`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider rail track. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__steps`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider steps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__step`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a slider step.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__step-tick`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a slider step tick.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__step-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a slider step label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider thumb. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__value`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider value.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__actions`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the slider actions.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the slider for the disabled state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-floating`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider__thumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the slider value to float above the thumb.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-slider--value`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-slider`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies appropriate slider styles based on the current value. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSliderHtmlDocs';
Component.pageData = pageData;

export default Component;
