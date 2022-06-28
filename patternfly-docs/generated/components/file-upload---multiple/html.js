import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'File upload - multiple',
  section: 'components',
  source: 'html',
  slug: '/components/file-upload---multiple/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/MultipleFileUpload/examples/MultipleFileUpload.md',
  beta: true,
  cssPrefix: [
    'pf-c-multiple-file-upload'
  ],
  examples: [
    'Basic',
    'Drag over',
    'Horizontal',
    'Horizontal drag over',
    'File upload status',
    'File upload status expanded',
    'Horizontal file upload status expanded'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n</div>', title: 'Basic', lang: 'html' }} />,
  'Drag over': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload pf-m-drag-over">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n</div>', title: 'Drag over', lang: 'html' }} />,
  Horizontal: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload pf-m-horizontal">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n</div>', title: 'Horizontal', lang: 'html' }} />,
  'Horizontal drag over': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload pf-m-horizontal pf-m-drag-over">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n</div>', title: 'Horizontal drag over', lang: 'html' }} />,
  'File upload status': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n  <div class="pf-c-multiple-file-upload__status">\n    <div class="pf-c-expandable-section">\n      <button\n        type="button"\n        class="pf-c-expandable-section__toggle"\n        aria-expanded="false"\n      >\n        <span class="pf-c-expandable-section__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-expandable-section__toggle-text">\n          <div class="pf-c-multiple-file-upload__status-progress">\n            <div class="pf-c-multiple-file-upload__status-progress-icon">\n              <i class="pf-icon-in-progress"></i>\n            </div>\n            <div\n              class="pf-c-multiple-file-upload__status-progress-text"\n            >0 of 3 files uploaded</div>\n          </div>\n        </span>\n      </button>\n      <div class="pf-c-expandable-section__content" hidden>\n        <ul class="pf-c-multiple-file-upload__status-list">\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-png">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-png-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.png</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >40 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">35%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="35"\n                  aria-labelledby="multiple-file-upload-progress-png-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:35%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-doc">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-doc-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.doc</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >30 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">70%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="70"\n                  aria-labelledby="multiple-file-upload-progress-doc-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:70%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-pdf">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-pdf-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.pdf</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >25 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">50%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="50"\n                  aria-labelledby="multiple-file-upload-progress-pdf-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:50%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>', title: 'File upload status', lang: 'html' }} />,
  'File upload status expanded': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n  <div class="pf-c-multiple-file-upload__status">\n    <div class="pf-c-expandable-section pf-m-expanded">\n      <button\n        type="button"\n        class="pf-c-expandable-section__toggle"\n        aria-expanded="true"\n      >\n        <span class="pf-c-expandable-section__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-expandable-section__toggle-text">\n          <div class="pf-c-multiple-file-upload__status-progress">\n            <div class="pf-c-multiple-file-upload__status-progress-icon">\n              <i class="pf-icon-in-progress"></i>\n            </div>\n            <div\n              class="pf-c-multiple-file-upload__status-progress-text"\n            >0 of 3 files uploaded</div>\n          </div>\n        </span>\n      </button>\n      <div class="pf-c-expandable-section__content">\n        <ul class="pf-c-multiple-file-upload__status-list">\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-png">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-png-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.png</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >40 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">35%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="35"\n                  aria-labelledby="multiple-file-upload-progress-png-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:35%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-doc">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-doc-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.doc</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >30 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">70%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="70"\n                  aria-labelledby="multiple-file-upload-progress-doc-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:70%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-pdf">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-pdf-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.pdf</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >25 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">50%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="50"\n                  aria-labelledby="multiple-file-upload-progress-pdf-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:50%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>', title: 'File upload status expanded', lang: 'html' }} />,
  'Horizontal file upload status expanded': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-multiple-file-upload pf-m-horizontal">\n  <div class="pf-c-multiple-file-upload__main">\n    <div class="pf-c-multiple-file-upload__title">\n      <div class="pf-c-multiple-file-upload__title-icon">\n        <i class="fas fa-upload" aria-hidden="true"></i>\n      </div>\n      <div class="pf-c-multiple-file-upload__title-text">\n        Drag and drop files here\n        <div class="pf-c-multiple-file-upload__title-text-separator">or</div>\n      </div>\n    </div>\n    <div class="pf-c-multiple-file-upload__upload">\n      <button class="pf-c-button pf-m-secondary" type="button">Upload</button>\n    </div>\n    <div\n      class="pf-c-multiple-file-upload__info"\n    >Accepted file types: JPEG, Doc, PDF, PNG</div>\n  </div>\n  <div class="pf-c-multiple-file-upload__status">\n    <div class="pf-c-expandable-section pf-m-expanded">\n      <button\n        type="button"\n        class="pf-c-expandable-section__toggle"\n        aria-expanded="true"\n      >\n        <span class="pf-c-expandable-section__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-expandable-section__toggle-text">\n          <div class="pf-c-multiple-file-upload__status-progress">\n            <div class="pf-c-multiple-file-upload__status-progress-icon">\n              <i class="pf-icon-in-progress"></i>\n            </div>\n            <div\n              class="pf-c-multiple-file-upload__status-progress-text"\n            >0 of 3 files uploaded</div>\n          </div>\n        </span>\n      </button>\n      <div class="pf-c-expandable-section__content">\n        <ul class="pf-c-multiple-file-upload__status-list">\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-png">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-png-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.png</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >40 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">35%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="35"\n                  aria-labelledby="multiple-file-upload-progress-png-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:35%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-doc">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-doc-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.doc</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >30 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">70%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="70"\n                  aria-labelledby="multiple-file-upload-progress-doc-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:70%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n          <li class="pf-c-multiple-file-upload__status-item">\n            <div class="pf-c-multiple-file-upload__status-item-icon">\n              <i class="fas fa-file" aria-hidden="true"></i>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-main">\n              <div class="pf-c-progress" id="multiple-file-upload-progress-pdf">\n                <div\n                  class="pf-c-progress__description"\n                  id="multiple-file-upload-progress-pdf-description"\n                >\n                  <span class="pf-c-multiple-file-upload__status-item-progress">\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-text"\n                    >filename.pdf</span>\n                    <span\n                      class="pf-c-multiple-file-upload__status-item-progress-size"\n                    >25 mb</span>\n                  </span>\n                </div>\n                <div class="pf-c-progress__status" aria-hidden="true">\n                  <span class="pf-c-progress__measure">50%</span>\n                </div>\n                <div\n                  class="pf-c-progress__bar"\n                  role="progressbar"\n                  aria-valuemin="0"\n                  aria-valuemax="100"\n                  aria-valuenow="50"\n                  aria-labelledby="multiple-file-upload-progress-pdf-description"\n                >\n                  <div class="pf-c-progress__indicator" style="width:50%;"></div>\n                </div>\n              </div>\n            </div>\n            <div class="pf-c-multiple-file-upload__status-item-close">\n              <button\n                class="pf-c-button pf-m-plain"\n                type="button"\n                aria-label="Remove from list"\n              >\n                <i class="fas fa-times-circle" aria-hidden="true"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>', title: 'Horizontal file upload status expanded', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples['Drag over'])}
    {React.createElement(pageData.examples.Horizontal)}
    {React.createElement(pageData.examples['Horizontal drag over'])}
    {React.createElement(pageData.examples['File upload status'])}
    {React.createElement(pageData.examples['File upload status expanded'])}
    {React.createElement(pageData.examples['Horizontal file upload status expanded'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'usage', size: 'h3', className: 'ws-title ws-h3' }}>
      Usage
    </AutoLinkHeader>
    <table {...{ className: 'ws-table pf-c-table pf-m-grid-lg pf-m-compact', role: 'grid' }}>
      <thead>
        <tr {...{ role: 'row' }}>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Class
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Applied
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Outcome
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{ role: 'rowgroup' }}>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the multiple file upload component. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__main
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the main section.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the title.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__title-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the title icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__title-text
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the title text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__title-text-separator
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the title text separator.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__upload
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the upload button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__info
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the info section.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status section.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-progress
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status toggle progress.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-progress-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status toggle progress icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-progress-text
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status toggle progress text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-list
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item list.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines a status item.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item-main
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item main progress section.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item-close
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item close button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item-progress
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item progress description.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item-progress-text
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item progress description text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-multiple-file-upload__status-item-progress-size
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the status item progress description size.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsFileUpload-MultipleHtmlDocs';
Component.pageData = pageData;

export default Component;
