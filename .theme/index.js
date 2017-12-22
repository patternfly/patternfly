/**
 * Themeleon template helper, using consolidate.js module.
 *
 * See <https://github.com/themeleon/themeleon>.
 * See <https://github.com/tj/consolidate.js>.
 */
var themeleon = require('themeleon')().use('consolidate');

/**
 * Utility function we will use to merge a default configuration
 * with the user object.
 */
var extend = require('extend');

/**
 * SassDoc extras (providing Markdown and other filters, and different way to
 * index SassDoc data).
 *
 * See <https://github.com/SassDoc/sassdoc-extras>.
 */
var extras = require('sassdoc-extras');

/**
 * Custom annotations.
 *
 * See <http://sassdoc.com/extending-sassdoc/>.
 */
var annotations = require('./annotations');

/**
 * The theme function. You can directly export it like this:
 *
 *     module.exports = themeleon(__dirname, function (t) {});
 *
 * ... but here we want more control on the template variables, so there
 * is a little bit of preprocessing below.
 *
 * The theme function describes the steps to render the theme.
 */
var theme = themeleon(__dirname, function (t) {
  /**
   * Copy the assets folder from the theme's directory in the
   * destination directory.
   */
  t.copy('assets');

  var options = {
    partials: {
      header: 'partials/header',
      sidebar: 'partials/sidebar',
      main: 'partials/main',
      footer: 'partials/footer'
      // Add your partial files here.
      // foo: 'views/foo.handlebars',
      // 'foo/bar': 'views/foo/bar.handlebars',
    },
  };

  /**
   * Render `views/index.handlebars` with the theme's context (`ctx` below)
   * as `index.html` in the destination directory.
   */
  t.handlebars('views/index.hbs', 'index.html', options);
});

/**
 * Actual theme function. It takes the destination directory `dest`
 * (that will be handled by Themeleon), and the context variables `ctx`.
 *
 * Here, we will modify the context to have a `view` key defaulting to
 * a literal object, but that can be overriden by the user's
 * configuration.
 */
module.exports = function (dest, ctx) {
  var def = {
    display: {
      access: ['public', 'private'],
      alias: false,
      watermark: true,
    },
    groups: {
      'undefined': 'General',
    },
    'shortcutIcon': 'http://sass-lang.com/favicon.ico',
  };

  // Apply default values for groups and display.
  ctx.groups = extend(def.groups, ctx.groups);
  ctx.display = extend(def.display, ctx.display);

  // Extend top-level context keys.
  ctx = extend({}, def, ctx);

  /**
   * Parse text data (like descriptions) as Markdown, and put the
   * rendered HTML in `html*` variables.
   *
   * For example, `ctx.package.description` will be parsed as Markdown
   * in `ctx.package.htmlDescription`.
   *
   * See <http://sassdoc.com/extra-tools/#markdown>.
   */
  extras.markdown(ctx);

  /**
   * Add a `display` property for each data item regarding of display
   * configuration (hide private items and aliases for example).
   *
   * You'll need to add default values in your `.sassdocrc` before
   * using this filter:
   *
   *     {
   *       "display": {
   *         "access": ["public", "private"],
   *         "alias": false
   *       }
   *     }
   *
   * See <http://sassdoc.com/extra-tools/#display-toggle>.
   */
  extras.display(ctx);

  /**
   * Allow the user to give a name to the documentation groups.
   *
   * We can then have `@group slug` in the docblock, and map `slug`
   * to `Some title string` in the theme configuration.
   *
   * **Note:** all items without a group are in the `undefined` group.
   *
   * See <http://sassdoc.com/extra-tools/#groups-aliases>.
   */
  extras.groupName(ctx);

  /**
   * Use SassDoc indexer to index the data by group and type, so we
   * have the following structure:
   *
   *     {
   *       "group-slug": {
   *         "function": [...],
   *         "mixin": [...],
   *         "variable": [...]
   *       },
   *       "another-group": {
   *         "function": [...],
   *         "mixin": [...],
   *         "variable": [...]
   *       }
   *     }
   *
   * You can then use `data.byGroupAndType` instead of `data` in your
   * templates to manipulate the indexed object.
   */
  ctx.data.byGroupAndType = extras.byGroupAndType(ctx.data);

  // Avoid key collision with Handlebars default `data`.
  // @see https://github.com/SassDoc/generator-sassdoc-theme/issues/22
  ctx._data = ctx.data;
  delete ctx.data;

  /**
   * Now we have prepared the data, we can proxy to the Themeleon
   * generated theme function.
   */
  return theme.apply(this, arguments);
};

module.exports.annotations = annotations
