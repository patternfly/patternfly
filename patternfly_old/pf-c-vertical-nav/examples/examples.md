---
title: Pf-C-Vertical-Nav
description: ''
---
<nav class="pf-c-vertical-nav" role="navigation">

  <ul class="pf-c-vertical-nav__content" role="menu" >

    <li class="pf-c-vertical-nav__item">
      <a href="#" class="pf-c-vertical-nav__link">
        <span class="pf-c-vertical-nav__link-icon"></span>
        <span class="pf-c-vertical-nav__link-text">Item One</span>
      </a>
    </li>

    <li class="pf-c-vertical-nav__item">
      <a href="#" class="pf-c-vertical-nav__link pf-is-active"  aria-selected="true">
        <span class="pf-c-vertical-nav__link-icon"></span>
        <span class="pf-c-vertical-nav__link-text">Item Active</span>
      </a>
    </li>

    <li class="pf-c-vertical-nav__item">
      <a href="#" role="menuitem" class="pf-c-vertical-nav__link">
        <span class="pf-c-vertical-nav__link-icon"></span>
        <span class="pf-c-vertical-nav__link-text">Item Three</span>
      </a>

      <section class="pf-vertical-sub-nav pf-vertical-sub-nav--first">
        <h2 class="pf-vertical-sub-nav__title">submenu</h2>
        <ul class="pf-vertical-sub-nav__content">
          <li class="pf-vertical-sub-nav__item">
            <a href="#" class="pf-vertical-sub-nav__link">SubItem One</a>
          </li>
          <li class="pf-vertical-sub-nav__item">
            <a href="#" role="menuitem" class="pf-vertical-sub-nav__link pf-is-active" aria-selected="true">SubItem Two</a>

            <section class="pf-vertical-sub-nav pf-vertical-sub-nav--second">
              <h2 class="pf-vertical-sub-nav__title">submenu</h2>
              <ul class="pf-vertical-sub-nav__content">
                <li class="pf-vertical-sub-nav__item">
                  <a href="#" class="pf-vertical-sub-nav__link">SubItem One</a>
                </li>
                <li class="pf-vertical-sub-nav__item">
                  <a href="#" role="menuitem" class="pf-vertical-sub-nav__link">SubItem Two</a>
                </li>
                <li class="pf-vertical-sub-nav__item">
                  <a href="#" role="menuitem" class="pf-vertical-sub-nav__link">SubItem Three</a>
                </li>
                <li class="pf-vertical-sub-nav__item">
                  <a href="#" role="menuitem" class="pf-vertical-sub-nav__link pf-is-active" aria-selected="true">SubItem Three</a>
                </li>
                <li class="pf-vertical-sub-nav__item">
                  <a href="#" role="menuitem" class="pf-vertical-sub-nav__link  pf-is-disabled" aria-disabled="true">SubItem Disabled</a>
                </li>
              </ul>
            </section>

          </li>
          <li class="pf-vertical-sub-nav__item">
            <a href="#" role="menuitem" class="pf-vertical-sub-nav__link">SubItem Three</a>
          </li>
          <li class="pf-vertical-sub-nav__item">
            <a href="#" role="menuitem" class="pf-vertical-sub-nav__link  pf-is-disabled" aria-disabled="true">SubItem Disabled</a>
          </li>
        </ul>
      </section>

    </li>

    <li class="pf-c-vertical-nav__item">
      <a href="#" role="menuitem" class="pf-c-vertical-nav__link pf-is-disabled" aria-disabled="true">
        <span class="pf-c-vertical-nav__link-icon"></span>
        <span class="pf-c-vertical-nav__link-text">Item Disabled</span>
      </a>
    </li>

    <li class="pf-c-vertical-nav__item">
      <a href="#" role="menuitem" class="pf-c-vertical-nav__link">
        <span class="pf-c-vertical-nav__link-icon"></span>
        <span class="pf-c-vertical-nav__link-text">Item Five</span>
      </a>
    </li>

  </ul>
</nav>
