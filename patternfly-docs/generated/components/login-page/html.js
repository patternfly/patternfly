import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Login page',
  section: 'components',
  source: 'html',
  slug: '/components/login-page/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Login/examples/Login.md',
  cssPrefix: [
    'pf-c-login'
  ],
  fullscreenExamples: [
    'Basic',
    'Invalid',
    'Show password',
    'Hide password',
    'With language selector'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-background-image">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    class="pf-c-background-image__filter"\n    width="0"\n    height="0"\n  >\n    <filter id="image_overlay">\n      <feColorMatrix\n        type="matrix"\n        values="1 0 0 0 0\n              1 0 0 0 0\n              1 0 0 0 0\n              0 0 0 1 0"\n      />\n      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">\n        <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncA type="table" tableValues="0 1" />\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>\n<div class="pf-c-login">\n  <div class="pf-c-login__container">\n    <header class="pf-c-login__header">\n      <img\n        class="pf-c-brand"\n        src="/assets/images/pf_logo_color.svg"\n        alt="PatternFly Logo"\n      />\n    </header>\n    <main class="pf-c-login__main">\n      <header class="pf-c-login__main-header">\n        <h1 class="pf-c-title pf-m-3xl">Log in to your account</h1>\n        <p\n          class="pf-c-login__main-header-desc"\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </header>\n      <div class="pf-c-login__main-body">\n        <form novalidate class="pf-c-form">\n          <p class="pf-c-form__helper-text pf-m-error pf-m-hidden">\n            <span class="pf-c-form__helper-text-icon">\n              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>\n            </span>\n            Invalid login credentials.\n          </p>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-username">\n              <span class="pf-c-form__label-text">Username</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              input="true"\n              type="text"\n              id="login-demo-form-username"\n              name="login-demo-form-username"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-password">\n              <span class="pf-c-form__label-text">Password</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              input="true"\n              type="password"\n              id="login-demo-form-password"\n              name="login-demo-form-password"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <div class="pf-c-check">\n              <input\n                class="pf-c-check__input"\n                type="checkbox"\n                id="login-demo-checkbox"\n                name="login-demo-checkbox"\n              />\n\n              <label\n                class="pf-c-check__label"\n                for="login-demo-checkbox"\n              >Keep me logged in for 30 days.</label>\n            </div>\n          </div>\n          <div class="pf-c-form__group pf-m-action">\n            <button\n              class="pf-c-button pf-m-primary pf-m-block"\n              type="submit"\n            >Log in</button>\n          </div>\n        </form>\n      </div>\n      <footer class="pf-c-login__main-footer">\n        <ul class="pf-c-login__main-footer-links">\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Google"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 488 512"\n              >\n                <path\n                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Github"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 496 512"\n              >\n                <path\n                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Dropbox"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 528 512"\n              >\n                <path\n                  d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Facebook"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 448 512"\n              >\n                <path\n                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Gitlab"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 512 512"\n              >\n                <path\n                  d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"\n                />\n              </svg>\n            </a>\n          </li>\n        </ul>\n        <div class="pf-c-login__main-footer-band">\n          <p class="pf-c-login__main-footer-band-item">\n            Need an account?\n            <a href="https://www.patternfly.org/">Sign up.</a>\n          </p>\n          <p class="pf-c-login__main-footer-band-item">\n            <a href="#">Forgot username or password?</a>\n          </p>\n        </div>\n      </footer>\n    </main>\n    <footer class="pf-c-login__footer">\n      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>\n      <ul class="pf-c-list pf-m-inline">\n        <li>\n          <a href="#">Terms of use</a>\n        </li>\n        <li>\n          <a href="#">Help</a>\n        </li>\n        <li>\n          <a href="#">Privacy policy</a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</div>', title: 'Basic', lang: 'html', isFullscreen: true }} />,
  Invalid: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-background-image">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    class="pf-c-background-image__filter"\n    width="0"\n    height="0"\n  >\n    <filter id="image_overlay">\n      <feColorMatrix\n        type="matrix"\n        values="1 0 0 0 0\n              1 0 0 0 0\n              1 0 0 0 0\n              0 0 0 1 0"\n      />\n      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">\n        <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncA type="table" tableValues="0 1" />\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>\n<div class="pf-c-login">\n  <div class="pf-c-login__container">\n    <header class="pf-c-login__header">\n      <img\n        class="pf-c-brand"\n        src="/assets/images/pf_logo_color.svg"\n        alt="PatternFly Logo"\n      />\n    </header>\n    <main class="pf-c-login__main">\n      <header class="pf-c-login__main-header">\n        <h1 class="pf-c-title pf-m-3xl">Log in to your account</h1>\n        <p\n          class="pf-c-login__main-header-desc"\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </header>\n      <div class="pf-c-login__main-body">\n        <form novalidate class="pf-c-form">\n          <p class="pf-c-form__helper-text pf-m-error" aria-live="polite">\n            <span class="pf-c-form__helper-text-icon">\n              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>\n            </span>\n            Invalid login credentials.\n          </p>\n          <div class="pf-c-form__group">\n            <label\n              class="pf-c-form__label"\n              for="invalid-login-demo-form-username"\n            >\n              <span class="pf-c-form__label-text">Username</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              type="text"\n              id="invalid-login-demo-form-username"\n              name="invalid-login-demo-form-username"\n              aria-invalid="true"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <label\n              class="pf-c-form__label"\n              for="invalid-login-demo-form-password"\n            >\n              <span class="pf-c-form__label-text">Password</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              type="password"\n              id="invalid-login-demo-form-password"\n              name="invalid-login-demo-form-password"\n              aria-invalid="true"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <div class="pf-c-check">\n              <input\n                class="pf-c-check__input"\n                type="checkbox"\n                id="invalid-login-demo-checkbox"\n                name="invalid-login-demo-checkbox"\n              />\n\n              <label\n                class="pf-c-check__label"\n                for="invalid-login-demo-checkbox"\n              >Keep me logged in for 30 days.</label>\n            </div>\n          </div>\n          <div class="pf-c-form__group pf-m-action">\n            <button\n              class="pf-c-button pf-m-primary pf-m-block"\n              type="submit"\n            >Log in</button>\n          </div>\n        </form>\n      </div>\n      <footer class="pf-c-login__main-footer">\n        <ul class="pf-c-login__main-footer-links">\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Google"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 488 512"\n              >\n                <path\n                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Github"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 496 512"\n              >\n                <path\n                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Dropbox"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 528 512"\n              >\n                <path\n                  d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Facebook"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 448 512"\n              >\n                <path\n                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Gitlab"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 512 512"\n              >\n                <path\n                  d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"\n                />\n              </svg>\n            </a>\n          </li>\n        </ul>\n        <div class="pf-c-login__main-footer-band">\n          <p class="pf-c-login__main-footer-band-item">\n            Need an account?\n            <a href="https://www.patternfly.org/">Sign up.</a>\n          </p>\n          <p class="pf-c-login__main-footer-band-item">\n            <a href="#">Forgot username or password?</a>\n          </p>\n        </div>\n      </footer>\n    </main>\n    <footer class="pf-c-login__footer">\n      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>\n      <ul class="pf-c-list pf-m-inline">\n        <li>\n          <a href="#">Terms of use</a>\n        </li>\n        <li>\n          <a href="#">Help</a>\n        </li>\n        <li>\n          <a href="#">Privacy policy</a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</div>', title: 'Invalid', lang: 'html', isFullscreen: true }} />,
  'Show password': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-background-image">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    class="pf-c-background-image__filter"\n    width="0"\n    height="0"\n  >\n    <filter id="image_overlay">\n      <feColorMatrix\n        type="matrix"\n        values="1 0 0 0 0\n              1 0 0 0 0\n              1 0 0 0 0\n              0 0 0 1 0"\n      />\n      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">\n        <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncA type="table" tableValues="0 1" />\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>\n<div class="pf-c-login">\n  <div class="pf-c-login__container">\n    <header class="pf-c-login__header">\n      <img\n        class="pf-c-brand"\n        src="/assets/images/pf_logo_color.svg"\n        alt="PatternFly Logo"\n      />\n    </header>\n    <main class="pf-c-login__main">\n      <header class="pf-c-login__main-header">\n        <h1 class="pf-c-title pf-m-3xl">Log in to your account</h1>\n        <p\n          class="pf-c-login__main-header-desc"\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </header>\n      <div class="pf-c-login__main-body">\n        <form novalidate class="pf-c-form">\n          <p class="pf-c-form__helper-text pf-m-error pf-m-hidden">\n            <span class="pf-c-form__helper-text-icon">\n              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>\n            </span>\n            Invalid login credentials.\n          </p>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-username">\n              <span class="pf-c-form__label-text">Username</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              input="true"\n              type="text"\n              id="login-demo-form-username"\n              name="login-demo-form-username"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-password">\n              <span class="pf-c-form__label-text">Password</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <div class="pf-c-input-group">\n              <input\n                class="pf-c-form-control"\n                required\n                input="true"\n                type="password"\n                id="login-demo-form-password"\n                name="login-demo-form-password"\n                value="abcd1234"\n              />\n\n              <button\n                class="pf-c-button pf-m-control"\n                type="button"\n                aria-label="Show password"\n              >\n                <i class="fas fa-eye" aria-hidden="true"></i>\n              </button>\n            </div>\n          </div>\n          <div class="pf-c-form__group">\n            <div class="pf-c-check">\n              <input\n                class="pf-c-check__input"\n                type="checkbox"\n                id="login-demo-checkbox"\n                name="login-demo-checkbox"\n              />\n\n              <label\n                class="pf-c-check__label"\n                for="login-demo-checkbox"\n              >Keep me logged in for 30 days.</label>\n            </div>\n          </div>\n          <div class="pf-c-form__group pf-m-action">\n            <button\n              class="pf-c-button pf-m-primary pf-m-block"\n              type="submit"\n            >Log in</button>\n          </div>\n        </form>\n      </div>\n      <footer class="pf-c-login__main-footer">\n        <ul class="pf-c-login__main-footer-links">\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Google"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 488 512"\n              >\n                <path\n                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Github"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 496 512"\n              >\n                <path\n                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Dropbox"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 528 512"\n              >\n                <path\n                  d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Facebook"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 448 512"\n              >\n                <path\n                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Gitlab"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 512 512"\n              >\n                <path\n                  d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"\n                />\n              </svg>\n            </a>\n          </li>\n        </ul>\n        <div class="pf-c-login__main-footer-band">\n          <p class="pf-c-login__main-footer-band-item">\n            Need an account?\n            <a href="https://www.patternfly.org/">Sign up.</a>\n          </p>\n          <p class="pf-c-login__main-footer-band-item">\n            <a href="#">Forgot username or password?</a>\n          </p>\n        </div>\n      </footer>\n    </main>\n    <footer class="pf-c-login__footer">\n      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>\n      <ul class="pf-c-list pf-m-inline">\n        <li>\n          <a href="#">Terms of use</a>\n        </li>\n        <li>\n          <a href="#">Help</a>\n        </li>\n        <li>\n          <a href="#">Privacy policy</a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</div>', title: 'Show password', lang: 'html', isFullscreen: true }} />,
  'Hide password': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-background-image">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    class="pf-c-background-image__filter"\n    width="0"\n    height="0"\n  >\n    <filter id="image_overlay">\n      <feColorMatrix\n        type="matrix"\n        values="1 0 0 0 0\n              1 0 0 0 0\n              1 0 0 0 0\n              0 0 0 1 0"\n      />\n      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">\n        <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncA type="table" tableValues="0 1" />\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>\n<div class="pf-c-login">\n  <div class="pf-c-login__container">\n    <header class="pf-c-login__header">\n      <img\n        class="pf-c-brand"\n        src="/assets/images/pf_logo_color.svg"\n        alt="PatternFly Logo"\n      />\n    </header>\n    <main class="pf-c-login__main">\n      <header class="pf-c-login__main-header">\n        <h1 class="pf-c-title pf-m-3xl">Log in to your account</h1>\n        <p\n          class="pf-c-login__main-header-desc"\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </header>\n      <div class="pf-c-login__main-body">\n        <form novalidate class="pf-c-form">\n          <p class="pf-c-form__helper-text pf-m-error pf-m-hidden">\n            <span class="pf-c-form__helper-text-icon">\n              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>\n            </span>\n            Invalid login credentials.\n          </p>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-username">\n              <span class="pf-c-form__label-text">Username</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              input="true"\n              type="text"\n              id="login-demo-form-username"\n              name="login-demo-form-username"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-password">\n              <span class="pf-c-form__label-text">Password</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <div class="pf-c-input-group">\n              <input\n                class="pf-c-form-control"\n                required\n                input="true"\n                type="text"\n                id="login-demo-form-password"\n                name="login-demo-form-password"\n                value="abcd1234"\n              />\n\n              <button\n                class="pf-c-button pf-m-control"\n                type="button"\n                aria-label="Hide password"\n              >\n                <i class="fas fa-eye-slash" aria-hidden="true"></i>\n              </button>\n            </div>\n          </div>\n          <div class="pf-c-form__group">\n            <div class="pf-c-check">\n              <input\n                class="pf-c-check__input"\n                type="checkbox"\n                id="login-demo-checkbox"\n                name="login-demo-checkbox"\n              />\n\n              <label\n                class="pf-c-check__label"\n                for="login-demo-checkbox"\n              >Keep me logged in for 30 days.</label>\n            </div>\n          </div>\n          <div class="pf-c-form__group pf-m-action">\n            <button\n              class="pf-c-button pf-m-primary pf-m-block"\n              type="submit"\n            >Log in</button>\n          </div>\n        </form>\n      </div>\n      <footer class="pf-c-login__main-footer">\n        <ul class="pf-c-login__main-footer-links">\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Google"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 488 512"\n              >\n                <path\n                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Github"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 496 512"\n              >\n                <path\n                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Dropbox"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 528 512"\n              >\n                <path\n                  d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Facebook"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 448 512"\n              >\n                <path\n                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Gitlab"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 512 512"\n              >\n                <path\n                  d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"\n                />\n              </svg>\n            </a>\n          </li>\n        </ul>\n        <div class="pf-c-login__main-footer-band">\n          <p class="pf-c-login__main-footer-band-item">\n            Need an account?\n            <a href="https://www.patternfly.org/">Sign up.</a>\n          </p>\n          <p class="pf-c-login__main-footer-band-item">\n            <a href="#">Forgot username or password?</a>\n          </p>\n        </div>\n      </footer>\n    </main>\n    <footer class="pf-c-login__footer">\n      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>\n      <ul class="pf-c-list pf-m-inline">\n        <li>\n          <a href="#">Terms of use</a>\n        </li>\n        <li>\n          <a href="#">Help</a>\n        </li>\n        <li>\n          <a href="#">Privacy policy</a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</div>', title: 'Hide password', lang: 'html', isFullscreen: true }} />,
  'With language selector': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-background-image">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    class="pf-c-background-image__filter"\n    width="0"\n    height="0"\n  >\n    <filter id="image_overlay">\n      <feColorMatrix\n        type="matrix"\n        values="1 0 0 0 0\n              1 0 0 0 0\n              1 0 0 0 0\n              0 0 0 1 0"\n      />\n      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">\n        <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451" />\n        <feFuncA type="table" tableValues="0 1" />\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>\n<div class="pf-c-login">\n  <div class="pf-c-login__container">\n    <header class="pf-c-login__header">\n      <img\n        class="pf-c-brand"\n        src="/assets/images/pf_logo_color.svg"\n        alt="PatternFly Logo"\n      />\n    </header>\n    <main class="pf-c-login__main">\n      <header class="pf-c-login__main-header">\n        <h1 class="pf-c-title pf-m-3xl">Log in to your account</h1>\n        <p\n          class="pf-c-login__main-header-desc"\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        <div class="pf-c-login__main-header-utilities">\n          <div class="pf-c-select">\n            <span id="login-select-label" hidden>Choose one</span>\n\n            <button\n              class="pf-c-select__toggle"\n              type="button"\n              id="login-select-toggle"\n              aria-haspopup="true"\n              aria-expanded="false"\n              aria-labelledby="login-select-label login-select-toggle"\n            >\n              <div class="pf-c-select__toggle-wrapper">\n                <span class="pf-c-select__toggle-text">English</span>\n              </div>\n              <span class="pf-c-select__toggle-arrow">\n                <i class="fas fa-caret-down" aria-hidden="true"></i>\n              </span>\n            </button>\n            <ul\n              class="pf-c-select__menu"\n              role="listbox"\n              aria-labelledby="login-select-label"\n              hidden\n            >\n              <li role="presentation">\n                <button\n                  class="pf-c-select__menu-item pf-m-selected"\n                  role="option"\n                  aria-selected="true"\n                >\n                  English\n                  <span class="pf-c-select__menu-item-icon">\n                    <i class="fas fa-check" aria-hidden="true"></i>\n                  </span>\n                </button>\n              </li>\n              <li role="presentation">\n                <button class="pf-c-select__menu-item" role="option">Español</button>\n              </li>\n              <li role="presentation">\n                <button class="pf-c-select__menu-item" role="option">Français</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </header>\n      <div class="pf-c-login__main-body">\n        <form novalidate class="pf-c-form">\n          <p class="pf-c-form__helper-text pf-m-error pf-m-hidden">\n            <span class="pf-c-form__helper-text-icon">\n              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>\n            </span>\n            Invalid login credentials.\n          </p>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-username">\n              <span class="pf-c-form__label-text">Username</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              input="true"\n              type="text"\n              id="login-demo-form-username"\n              name="login-demo-form-username"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <label class="pf-c-form__label" for="login-demo-form-password">\n              <span class="pf-c-form__label-text">Password</span>\n              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>\n            </label>\n\n            <input\n              class="pf-c-form-control"\n              required\n              input="true"\n              type="password"\n              id="login-demo-form-password"\n              name="login-demo-form-password"\n            />\n          </div>\n          <div class="pf-c-form__group">\n            <div class="pf-c-check">\n              <input\n                class="pf-c-check__input"\n                type="checkbox"\n                id="login-demo-checkbox"\n                name="login-demo-checkbox"\n              />\n\n              <label\n                class="pf-c-check__label"\n                for="login-demo-checkbox"\n              >Keep me logged in for 30 days.</label>\n            </div>\n          </div>\n          <div class="pf-c-form__group pf-m-action">\n            <button\n              class="pf-c-button pf-m-primary pf-m-block"\n              type="submit"\n            >Log in</button>\n          </div>\n        </form>\n      </div>\n      <footer class="pf-c-login__main-footer">\n        <ul class="pf-c-login__main-footer-links">\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Google"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 488 512"\n              >\n                <path\n                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Github"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 496 512"\n              >\n                <path\n                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Dropbox"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 528 512"\n              >\n                <path\n                  d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Facebook"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 448 512"\n              >\n                <path\n                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"\n                />\n              </svg>\n            </a>\n          </li>\n          <li class="pf-c-login__main-footer-links-item">\n            <a\n              href="#"\n              class="pf-c-login__main-footer-links-item-link"\n              aria-label="Log in with Gitlab"\n            >\n              <svg\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 512 512"\n              >\n                <path\n                  d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"\n                />\n              </svg>\n            </a>\n          </li>\n        </ul>\n        <div class="pf-c-login__main-footer-band">\n          <p class="pf-c-login__main-footer-band-item">\n            Need an account?\n            <a href="https://www.patternfly.org/">Sign up.</a>\n          </p>\n          <p class="pf-c-login__main-footer-band-item">\n            <a href="#">Forgot username or password?</a>\n          </p>\n        </div>\n      </footer>\n    </main>\n    <footer class="pf-c-login__footer">\n      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>\n      <ul class="pf-c-list pf-m-inline">\n        <li>\n          <a href="#">Terms of use</a>\n        </li>\n        <li>\n          <a href="#">Help</a>\n        </li>\n        <li>\n          <a href="#">Privacy policy</a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</div>', title: 'With language selector', lang: 'html', isFullscreen: true }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples.Invalid)}
    {React.createElement(pageData.examples['Show password'])}
    {React.createElement(pageData.examples['Hide password'])}
    {React.createElement(pageData.examples['With language selector'])}
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
              Applied to
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
                .pf-c-login
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initializes the login component. '}
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
                .pf-c-login__container
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Positions the login component content. '}
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
                .pf-c-login__header
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<header>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Positions the login header. '}
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
                .pf-c-login__header .pf-c-brand
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<img>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a brand image inside of login header. '}
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
                .pf-c-login__main
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<main>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Positions the login main area. '}
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
                .pf-c-login__main-header
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<header>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the header of the main area. '}
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
                .pf-c-login__main-header .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<h1>,<h2>,<h3>,<h4>,<h5>,<h6>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a title in the main header area. '}
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
                .pf-c-login__main-header-desc
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<p>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates the description in the main area header.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-login__main-header-utilities
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a utilities section in the main header area. '}
              <strong>
                Note:
              </strong>
              {' For use with a language selector menu.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-login__main-body
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the body of the main area. '}
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
                .pf-c-login__main-body .pf-c-form
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<form>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the login form in the main body area. '}
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
                .pf-c-login__main-body .pf-c-form .pf-c-form-helper-text.pf-m-error
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<form>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the error messages shown when the form has errors. When not active, apply '}
              <code {...{ className: 'ws-code' }}>
                .pf-m-hidden.
              </code>
              {' '}
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
                .pf-c-login__main-footer
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<footer>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the footer of the main area. '}
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
                .pf-c-login__main-footer-links
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<ul>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a list of links in the main footer. '}
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
                .pf-c-login__main-footer-links-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<li>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates proper spacing for links in the main footer. '}
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
                .pf-c-login__main-footer-links-item-link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<a>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates link in links list in footer. '}
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
                .pf-c-login__main-footer-band
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Styles a band in the footer.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-login__main-footer-band-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<p>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Adds information to the band in the footer.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-login__footer
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<footer>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Positions the login footer. '}
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
                .pf-c-login__footer .pf-c-list
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<ul>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a list of links in the login footer. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsLoginPageHtmlDocs';
Component.pageData = pageData;

export default Component;
