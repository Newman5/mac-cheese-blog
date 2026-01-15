/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
*/

import markdownIt from 'markdown-it';

export default {
  /**
   * Markdown filter
   * Converts Markdown content to HTML.
  */
  async markdown(eleventyConfig) {
    const options = {
      html: true,
      breaks: true,
      linkify: true,
    };
    const markdownLib = markdownIt(options);
    eleventyConfig.addFilter('markdown', (value) => {
      return markdownLib.render(value);
    });
  },

  /**
   * Slugify filter
   * Converts strings to URL-friendly slugs
   */
  async slugify(eleventyConfig) {
    eleventyConfig.addFilter('slugify', (value) => {
      if (!value) return '';
      return value
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
        .replace(/\-\-+/g, '-')      // Replace multiple - with single -
        .replace(/^-+/, '')          // Trim - from start of text
        .replace(/-+$/, '');         // Trim - from end of text
    });
  },
};
