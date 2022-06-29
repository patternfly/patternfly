import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Calendar month",
  "section": "components",
  "source": "html",
  "slug": "/components/calendar-month/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/CalendarMonth/examples/CalendarMonth.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-calendar-month"
  ],
  "examples": [
    "Date selected",
    "Range start date selected, end date hovered",
    "Range end date selected, start date focused",
    "Range start and end dates selected"
  ]
};
pageData.examples = {
  'Date selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-calendar-month\">\n  <div class=\"pf-c-calendar-month__header\">\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-prev-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Previous month\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-input-group\">\n      <div class=\"pf-c-calendar-month__header-month\">\n        <div class=\"pf-c-select\">\n          <span\n            id=\"calendar-month-date-selected-month-select-label\"\n            hidden\n          >Month</span>\n\n          <button\n            class=\"pf-c-select__toggle\"\n            type=\"button\"\n            id=\"calendar-month-date-selected-month-select-toggle\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            aria-labelledby=\"calendar-month-date-selected-month-select-label calendar-month-date-selected-month-select-toggle\"\n          >\n            <div class=\"pf-c-select__toggle-wrapper\">\n              <span class=\"pf-c-select__toggle-text\">October</span>\n            </div>\n            <span class=\"pf-c-select__toggle-arrow\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n\n          <ul\n            class=\"pf-c-select__menu\"\n            role=\"listbox\"\n            aria-labelledby=\"calendar-month-date-selected-month-select-label\"\n            hidden\n          >\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item pf-m-selected\"\n                role=\"option\"\n                aria-selected=\"true\"\n              >\n                Stopped\n                <span class=\"pf-c-select__menu-item-icon\">\n                  <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item\"\n                role=\"option\"\n              >Needs maintenance</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-calendar-month__header-year\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"number\"\n          value=\"2020\"\n          id=\"calendar-month-date-selected-year\"\n          aria-label=\"Select year\"\n        />\n      </div>\n    </div>\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-next-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Next month\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <table class=\"pf-c-calendar-month__calendar\">\n    <thead class=\"pf-c-calendar-month__days\" scope=\"col\">\n      <tr class=\"pf-c-calendar-month__days-row\">\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Sunday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Monday</span>\n          <span aria-hidden=\"true\">M</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Tuesday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Wednesday</span>\n          <span aria-hidden=\"true\">W</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Thursday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Friday</span>\n          <span aria-hidden=\"true\">F</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Saturday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"pf-c-calendar-month__dates\">\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"3 October 2020\"\n          >3</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"4 October 2020\"\n          >4</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"5 October 2020\"\n          >5</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"6 October 2020\"\n          >6</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"7 October 2020\"\n          >7</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"8 October 2020\"\n          >8</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-current\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"9 October 2020\"\n          >9</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"10 October 2020\"\n          >10</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"11 October 2020\"\n          >11</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"12 October 2020\"\n          >12</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"13 October 2020\"\n          >13</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"14 October 2020\"\n          >14</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"15 October 2020\"\n          >15</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"16 October 2020\"\n          >16</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"17 October 2020\"\n          >17</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"18 October 2020\"\n          >18</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"19 October 2020\"\n          >19</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"20 October 2020\"\n          >20</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-selected\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"21 October 2020\"\n          >21</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"22 October 2020\"\n          >22</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"23 October 2020\"\n          >23</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"24 October 2020\"\n          >24</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"25 October 2020\"\n          >25</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"26 October 2020\"\n          >26</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"27 October 2020\"\n          >27</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"28 October 2020\"\n          >28</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"31 October 2020\"\n          >31</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>","title":"Date selected","lang":"html"}}>
      
    </Example>,
  'Range start date selected, end date hovered': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-calendar-month\">\n  <div class=\"pf-c-calendar-month__header\">\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-prev-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Previous month\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-input-group\">\n      <div class=\"pf-c-calendar-month__header-month\">\n        <div class=\"pf-c-select\">\n          <span\n            id=\"calendar-month-range-start-date-selected-month-select-label\"\n            hidden\n          >Month</span>\n\n          <button\n            class=\"pf-c-select__toggle\"\n            type=\"button\"\n            id=\"calendar-month-range-start-date-selected-month-select-toggle\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            aria-labelledby=\"calendar-month-range-start-date-selected-month-select-label calendar-month-range-start-date-selected-month-select-toggle\"\n          >\n            <div class=\"pf-c-select__toggle-wrapper\">\n              <span class=\"pf-c-select__toggle-text\">October</span>\n            </div>\n            <span class=\"pf-c-select__toggle-arrow\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n\n          <ul\n            class=\"pf-c-select__menu\"\n            role=\"listbox\"\n            aria-labelledby=\"calendar-month-range-start-date-selected-month-select-label\"\n            hidden\n          >\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item pf-m-selected\"\n                role=\"option\"\n                aria-selected=\"true\"\n              >\n                Stopped\n                <span class=\"pf-c-select__menu-item-icon\">\n                  <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item\"\n                role=\"option\"\n              >Needs maintenance</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-calendar-month__header-year\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"number\"\n          value=\"2020\"\n          id=\"calendar-month-range-start-date-selected-year\"\n          aria-label=\"Select year\"\n        />\n      </div>\n    </div>\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-next-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Next month\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <table class=\"pf-c-calendar-month__calendar\">\n    <thead class=\"pf-c-calendar-month__days\" scope=\"col\">\n      <tr class=\"pf-c-calendar-month__days-row\">\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Sunday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Monday</span>\n          <span aria-hidden=\"true\">M</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Tuesday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Wednesday</span>\n          <span aria-hidden=\"true\">W</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Thursday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Friday</span>\n          <span aria-hidden=\"true\">F</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Saturday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"pf-c-calendar-month__dates\">\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"3 October 2020\"\n          >3</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"4 October 2020\"\n          >4</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"5 October 2020\"\n          >5</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"6 October 2020\"\n          >6</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"7 October 2020\"\n          >7</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"8 October 2020\"\n          >8</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-current\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"9 October 2020\"\n          >9</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"10 October 2020\"\n          >10</button>\n        </td>\n        <td\n          class=\"pf-c-calendar-month__dates-cell pf-m-selected pf-m-start-range pf-m-in-range\"\n        >\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"11 October 2020\"\n          >11</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"12 October 2020\"\n          >12</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"13 October 2020\"\n          >13</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"14 October 2020\"\n          >14</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"15 October 2020\"\n          >15</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"16 October 2020\"\n          >16</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"17 October 2020\"\n          >17</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"18 October 2020\"\n          >18</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"19 October 2020\"\n          >19</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"20 October 2020\"\n            disabled\n          >20</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"21 October 2020\"\n            disabled\n          >21</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"22 October 2020\"\n            disabled\n          >22</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"23 October 2020\"\n            disabled\n          >23</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"24 October 2020\"\n            disabled\n          >24</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"25 October 2020\"\n            disabled\n          >25</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"26 October 2020\"\n            disabled\n          >26</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"27 October 2020\"\n          >27</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"28 October 2020\"\n          >28</button>\n        </td>\n        <td\n          class=\"pf-c-calendar-month__dates-cell pf-m-selected pf-m-in-range pf-m-end-range\"\n        >\n          <button\n            class=\"pf-c-calendar-month__date pf-m-hover\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"31 October 2020\"\n          >31</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>","title":"Range start date selected, end date hovered","lang":"html"}}>
      
    </Example>,
  'Range end date selected, start date focused': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-calendar-month\">\n  <div class=\"pf-c-calendar-month__header\">\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-prev-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Previous month\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-input-group\">\n      <div class=\"pf-c-calendar-month__header-month\">\n        <div class=\"pf-c-select\">\n          <span\n            id=\"calendar-month-range-end-date-selected-month-select-label\"\n            hidden\n          >Month</span>\n\n          <button\n            class=\"pf-c-select__toggle\"\n            type=\"button\"\n            id=\"calendar-month-range-end-date-selected-month-select-toggle\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            aria-labelledby=\"calendar-month-range-end-date-selected-month-select-label calendar-month-range-end-date-selected-month-select-toggle\"\n          >\n            <div class=\"pf-c-select__toggle-wrapper\">\n              <span class=\"pf-c-select__toggle-text\">October</span>\n            </div>\n            <span class=\"pf-c-select__toggle-arrow\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n\n          <ul\n            class=\"pf-c-select__menu\"\n            role=\"listbox\"\n            aria-labelledby=\"calendar-month-range-end-date-selected-month-select-label\"\n            hidden\n          >\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item pf-m-selected\"\n                role=\"option\"\n                aria-selected=\"true\"\n              >\n                Stopped\n                <span class=\"pf-c-select__menu-item-icon\">\n                  <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item\"\n                role=\"option\"\n              >Needs maintenance</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-calendar-month__header-year\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"number\"\n          value=\"2020\"\n          id=\"calendar-month-range-end-date-selected-year\"\n          aria-label=\"Select year\"\n        />\n      </div>\n    </div>\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-next-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Next month\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <table class=\"pf-c-calendar-month__calendar\">\n    <thead class=\"pf-c-calendar-month__days\" scope=\"col\">\n      <tr class=\"pf-c-calendar-month__days-row\">\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Sunday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Monday</span>\n          <span aria-hidden=\"true\">M</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Tuesday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Wednesday</span>\n          <span aria-hidden=\"true\">W</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Thursday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Friday</span>\n          <span aria-hidden=\"true\">F</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Saturday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"pf-c-calendar-month__dates\">\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"3 October 2020\"\n          >3</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"4 October 2020\"\n          >4</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"5 October 2020\"\n          >5</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"6 October 2020\"\n          >6</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"7 October 2020\"\n          >7</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"8 October 2020\"\n          >8</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-current\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"9 October 2020\"\n          >9</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"10 October 2020\"\n          >10</button>\n        </td>\n        <td\n          class=\"pf-c-calendar-month__dates-cell pf-m-selected pf-m-start-range pf-m-in-range\"\n        >\n          <button\n            class=\"pf-c-calendar-month__date pf-m-focus\"\n            type=\"button\"\n            aria-label=\"11 October 2020\"\n          >11</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"12 October 2020\"\n          >12</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"13 October 2020\"\n          >13</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"14 October 2020\"\n          >14</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"15 October 2020\"\n          >15</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"16 October 2020\"\n          >16</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"17 October 2020\"\n          >17</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"18 October 2020\"\n          >18</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"19 October 2020\"\n          >19</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"20 October 2020\"\n            disabled\n          >20</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"21 October 2020\"\n            disabled\n          >21</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"22 October 2020\"\n            disabled\n          >22</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"23 October 2020\"\n            disabled\n          >23</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"24 October 2020\"\n            disabled\n          >24</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"25 October 2020\"\n            disabled\n          >25</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"26 October 2020\"\n            disabled\n          >26</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"27 October 2020\"\n          >27</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"28 October 2020\"\n          >28</button>\n        </td>\n        <td\n          class=\"pf-c-calendar-month__dates-cell pf-m-selected pf-m-in-range pf-m-end-range\"\n        >\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"31 October 2020\"\n          >31</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>","title":"Range end date selected, start date focused","lang":"html"}}>
      
    </Example>,
  'Range start and end dates selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-calendar-month\">\n  <div class=\"pf-c-calendar-month__header\">\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-prev-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Previous month\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-input-group\">\n      <div class=\"pf-c-calendar-month__header-month\">\n        <div class=\"pf-c-select\">\n          <span\n            id=\"calendar-month-range-start-and-end-dates-selected-month-select-label\"\n            hidden\n          >Month</span>\n\n          <button\n            class=\"pf-c-select__toggle\"\n            type=\"button\"\n            id=\"calendar-month-range-start-and-end-dates-selected-month-select-toggle\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            aria-labelledby=\"calendar-month-range-start-and-end-dates-selected-month-select-label calendar-month-range-start-and-end-dates-selected-month-select-toggle\"\n          >\n            <div class=\"pf-c-select__toggle-wrapper\">\n              <span class=\"pf-c-select__toggle-text\">October</span>\n            </div>\n            <span class=\"pf-c-select__toggle-arrow\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n\n          <ul\n            class=\"pf-c-select__menu\"\n            role=\"listbox\"\n            aria-labelledby=\"calendar-month-range-start-and-end-dates-selected-month-select-label\"\n            hidden\n          >\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item pf-m-selected\"\n                role=\"option\"\n                aria-selected=\"true\"\n              >\n                Stopped\n                <span class=\"pf-c-select__menu-item-icon\">\n                  <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n            </li>\n            <li role=\"presentation\">\n              <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n            </li>\n            <li role=\"presentation\">\n              <button\n                class=\"pf-c-select__menu-item\"\n                role=\"option\"\n              >Needs maintenance</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-calendar-month__header-year\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"number\"\n          value=\"2020\"\n          id=\"calendar-month-range-start-and-end-dates-selected-year\"\n          aria-label=\"Select year\"\n        />\n      </div>\n    </div>\n    <div class=\"pf-c-calendar-month__header-nav-control pf-m-next-month\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Next month\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <table class=\"pf-c-calendar-month__calendar\">\n    <thead class=\"pf-c-calendar-month__days\" scope=\"col\">\n      <tr class=\"pf-c-calendar-month__days-row\">\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Sunday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Monday</span>\n          <span aria-hidden=\"true\">M</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Tuesday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Wednesday</span>\n          <span aria-hidden=\"true\">W</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Thursday</span>\n          <span aria-hidden=\"true\">T</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Friday</span>\n          <span aria-hidden=\"true\">F</span>\n        </th>\n        <th class=\"pf-c-calendar-month__day\">\n          <span class=\"pf-screen-reader\">Saturday</span>\n          <span aria-hidden=\"true\">S</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"pf-c-calendar-month__dates\">\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"3 October 2020\"\n          >3</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"4 October 2020\"\n          >4</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"5 October 2020\"\n          >5</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"6 October 2020\"\n          >6</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"7 October 2020\"\n          >7</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"8 October 2020\"\n          >8</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-current\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"9 October 2020\"\n          >9</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"10 October 2020\"\n          >10</button>\n        </td>\n        <td\n          class=\"pf-c-calendar-month__dates-cell pf-m-selected pf-m-start-range pf-m-in-range\"\n        >\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"11 October 2020\"\n          >11</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"12 October 2020\"\n          >12</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"13 October 2020\"\n          >13</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"14 October 2020\"\n          >14</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"15 October 2020\"\n          >15</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"16 October 2020\"\n          >16</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"17 October 2020\"\n          >17</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"18 October 2020\"\n          >18</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"19 October 2020\"\n          >19</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"20 October 2020\"\n            disabled\n          >20</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"21 October 2020\"\n            disabled\n          >21</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"22 October 2020\"\n            disabled\n          >22</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"23 October 2020\"\n            disabled\n          >23</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"24 October 2020\"\n            disabled\n          >24</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"25 October 2020\"\n            disabled\n          >25</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range pf-m-disabled\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"26 October 2020\"\n            disabled\n          >26</button>\n        </td>\n      </tr>\n      <tr class=\"pf-c-calendar-month__dates-row\">\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"27 October 2020\"\n          >27</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-in-range\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"28 October 2020\"\n          >28</button>\n        </td>\n        <td\n          class=\"pf-c-calendar-month__dates-cell pf-m-selected pf-m-in-range pf-m-end-range\"\n        >\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"29 October 2020\"\n          >29</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"30 October 2020\"\n          >30</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"31 October 2020\"\n          >31</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"1 October 2020\"\n          >1</button>\n        </td>\n        <td class=\"pf-c-calendar-month__dates-cell pf-m-adjacent-month\">\n          <button\n            class=\"pf-c-calendar-month__date\"\n            type=\"button\"\n            aria-label=\"2 October 2020\"\n          >2</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>","title":"Range start and end dates selected","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Date selected"])}
    {React.createElement(pageData.examples["Range start date selected, end date hovered"])}
    {React.createElement(pageData.examples["Range end date selected, start date focused"])}
    {React.createElement(pageData.examples["Range start and end dates selected"])}
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
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__header-nav-control > button > [icon]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the nav control icon from assistive technologies. `}
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
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__day > span`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the visual day of the month label from assistive technologies. `}
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
                {`.pf-screen-reader`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__day > span`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the full day of the month text visually. `}
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
                {`aria-label="[Prev/Next] month"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__header-nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the nav controls. `}
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
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__date`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that a date is selected. `}
              <strong>
                {`Required when the parent is `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-calendar-month__dates-cell.pf-m-disabled`}
                </code>
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[date] [month] [year]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__date`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the date button. `}
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
                {`.pf-c-calendar-month`}
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
              {`Initiates the calendar month component. `}
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
                {`.pf-c-calendar-month__header`}
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
              {`Initiates the calendar month header. `}
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
                {`.pf-c-calendar-month__header-nav-control`}
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
              {`Initiates a nav control for navigating by month. `}
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
                {`.pf-c-calendar-month__header-month`}
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
              {`Initiates the month select. `}
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
                {`.pf-c-calendar-month__header-year`}
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
              {`Initiates the year input. `}
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
                {`.pf-c-calendar-month__calendar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<table>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the calendar. `}
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
                {`.pf-c-calendar-month__days`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<thead>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the calendar days section. `}
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
                {`.pf-c-calendar-month__days-row`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<tr>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the calendar days row. `}
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
                {`.pf-c-calendar-month__day`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<th>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a calendar day. `}
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
                {`.pf-c-calendar-month__dates`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<tbody>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the calendar dates section. `}
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
                {`.pf-c-calendar-month__dates-row`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<tr>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a calendar dates row. `}
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
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<td>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a calendar date cell. `}
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
                {`.pf-c-calendar-month__date`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a calendar date. `}
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
                {`.pf-m-prev-month`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__header-nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a nav control is the previous month. `}
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
                {`.pf-m-next-month`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__header-nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a nav control is the next month. `}
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
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is the current day. `}
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
                {`.pf-m-selected`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is selected.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-start-range`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is the start of a range.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-in-range`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is in a range.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-end-range`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is the end of a range.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-adjacent-month`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is in an adjacent month.`}
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
                {`.pf-c-calendar-month__dates-cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a date is disabled and unavailable.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsCalendarMonthHtmlDocs';
Component.pageData = pageData;

export default Component;
