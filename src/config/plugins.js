/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
*/

import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import reusableComponents from "eleventy-plugin-reusable-components";

export default {
  /**
   * Eleventy Image plugin
   * https://www.11ty.dev/docs/plugins/image/
   */
  async image (eleventyConfig) {
    // Get pathPrefix from environment or default to '/'
    const pathPrefix = process.env.PATH_PREFIX || '/';
    
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      outputDir: 'public/assets/images',
      urlPath: `${pathPrefix}assets/images/`.replace(/\/+/g, '/'),
      extensions: 'html',
      formats: ['auto'],

      // Attributes assigned on <img> override these values.
      defaultAttributes: {
        loading: 'lazy',
        decoding: 'async',
      },
    });
  },

  /**
   * TheMacAndCheeseBlog Reusable Components plugin
   * https://github.com/Newman/eleventy-plugin-reusable-components
   */
  async reusableComponents (eleventyConfig) {
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(reusableComponents, {
      componentsDir: "src/assets/components/*.njk"
    });

    // Register CSS and JS component bundles
    eleventyConfig.addBundle("componentCss", {
      toFileDirectory: "assets/styles/",
    });

    eleventyConfig.addBundle("componentJs", {
      toFileDirectory: "assets/scripts/",
    });
  }
};
