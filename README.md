# 🪐ZeroPoint Starter
![starter-logo](https://github.com/user-attachments/assets/86aa94e9-88a9-4902-a622-b74f8e4216ea)

## Start building your website

Create and edit your site **right from this readme file!**.

---
**⭐ If you just used this template repository ⭐**

Prepare your repository for use by removing ZeroPoint branding and replacing it with your own project name and description.

<details>
<summary>1. Allow GitHub Actions to write to your repository</summary>

1. Click "Settings" in the top right corner of your repository
2. Click "Actions/General" in the left sidebar
3. Under "Workflow permissions" choose "Read and write permissions"
4. Click "Save"
</details>

<details>
<summary>2. Run the "Remove ZeroPoint branding" action</summary>

1. Click the "Actions" tab in the top navigation of your repository
2. Click the "Remove ZeroPoint branding" workflow
3. Click the "Run workflow" button, choose the `main` branch, and click the green "Run workflow" button
</details>

## What You Get

* 🚀 **Deploy anywhere** - Ready for [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.com/), [Cloudflare Pages](https://pages.cloudflare.com/), or your own server
* 🔍 **Built-in search** - Full-text search with [Pagefind](https://pagefind.app/) already working at `/search/`
* 📝 **Blog-ready** - Complete blog system ready to enable when you need it
* 🖼️ **Image optimization** - Automatic image resizing and responsive images with [Eleventy Image](https://www.11ty.dev/docs/plugins/image/)
* 🎯 **SEO features** - Meta tags, XML sitemap, and robots.txt included
* ⚒️ **Modern tools** - Sass and JavaScript compilation with fast builds
* 🗺️ **Clean code** - Organized project structure with modern JavaScript
* 🎨 **Developer experience** - Live reload, code formatting, and intuitive configuration
* 🔧 **Easy to extend** - Add your own components, filters, and plugins

## Get started: Use This Template

Start your project with ZeroPoint by clicking the "Use this template" button below:

<a href="https://github.com/MWDelaney/ZeroPoint/generate">
  <img src="https://img.shields.io/badge/use%20this-template-blueviolet?logo=github&style=for-the-badge" alt="Use this template">
</a>

## Quick Start

Once you've created your repository from the template, get your local development environment running:

```bash
# Clone your new repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

Your site will be available at `http://localhost:8080` with live reload - any changes you make will automatically refresh the browser.

### What happens when you run `npm run dev`:
- Builds your Sass stylesheets and JavaScript
- Starts Eleventy in watch mode  
- Launches a local web server with live reload
- Generates search index with Pagefind

### Ready to make changes?
- Edit content in the `content/` folder
- Customize styles in `src/assets/styles/`
- Add images to `src/assets/images/`
- Modify layouts and templates in `src/assets/views/`

## Deploy Your Site

Choose your preferred deployment platform:

<details open>
 <summary><strong>GitHub Pages</strong></summary>

### Deploy to GitHub Pages

Deploy your ZeroPoint site for **free** with GitHub Pages:

1. Push your code to a GitHub repository
2. Go to your repository Settings > Pages
3. Set Source to "GitHub Actions"
4. The included `.github/workflows/deploy.yml` will automatically deploy your site

</details>

<details>
  <summary><strong>Deploy to Netlify</strong></summary>

### Setup:

Deploy ZeroPoint to [Netlify](https://netlify.com) for **free**!

1. Fork or create a new repository from this template
2. Connect your repository to Netlify or use the deploy button below:


</details>

</details>

## Optional Features

ZeroPoint includes additional features that are disabled by default. Enable them when you need them:

### 📝 Blog System

* Full blog functionality with templates and collections
* Enable by uncommenting the posts collection in `src/config/collections.js`
* Includes pagination, SEO, and individual post templates

### 🔍 Full-Text Search

* Client-side search powered by [Pagefind](https://pagefind.app/)
* Already working at `/search/` - no setup required
* Lightweight and fast

### 🧩 Component System

* Reusable components via [eleventy-plugin-reusable-components](https://github.com/MWDelaney/eleventy-plugin-reusable-components)
* Enable by uncommenting the plugin in `src/config/plugins.js`

*See the [CHANGELOG](CHANGELOG.md) for complete details on these features.*

## Project Structure

```text
example.com                 # → Root of your ZeroPoint project
├── content/                # → Site content
│   ├── pages/              # → Site pages (Markdown/HTML)
│   ├── posts/              # → Blog posts (disabled by default)
│   ├── 404.njk             # → 404 error page
│   ├── blog.njk            # → Blog listing page
│   ├── manifest.njk        # → Web app manifest
│   ├── redirects.njk       # → Netlify redirects
│   ├── robots.njk          # → Robots.txt
│   └── xml_sitemap.njk     # → XML sitemap
├── src/                    # → Source directory
│   ├── assets/             # → Site assets
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── scripts/
│   │   ├── styles/
│   │   ├── views/
│   │   │   └── layouts/
│   │   │   └── partials/
│   │   └── assets.json     # → Shared attributes for files in the assets directory
│   ├── config/             # → Eleventy configuration
│   │   ├── build.js        # → Javascript and CSS build and bundler configuration 
│   │   ├── collections.js  # → Add and configure collections (https://www.11ty.dev/docs/collections/)
│   │   ├── filters.js      # → Add and configure filters (https://www.11ty.dev/docs/filters/)
│   │   ├── passthroughs.js # → Add and configure passthroughs (https://www.11ty.dev/docs/copy/)
│   │   ├── plugins.js      # → Add and configure plugins (https://www.11ty.dev/docs/plugins/)
│   │   ├── shortcodes.js   # → Add and configure shortcodes (https://www.11ty.dev/docs/shortcodes/)
│   │   ├── templateLanguages.js   # → Configure custom template languages (https://www.11ty.dev/docs/languages/custom/)
│   │   ├── watchtargets.js # → Add and configure watch targets (https://www.11ty.dev/docs/watch-serve/)
│   │   └── config.json     # → Shared attributes for files in the config directory
│   ├── content             # → A nice, organized, recommended place for all site content
│   │   └── pages           # → Add "pages" collection items here
│   └── data                # → Customize site data (https://www.11ty.dev/docs/data/)
│       ├── navigation.json # → Site navigation configuration
│       └── site.json       # → Site branding configuration
├── .eleventy.js            # → Core Eleventy config file
├── netlify.toml            # → Netlify deployment and plugin configuration (optional)
├── README.TheMacAndCheeseBlog.md     # → Template repository readme
└── README.md
```

## Eleventy Configuration

Eleventy configuration is abstracted from the typical `.eleventy.js` file and moved to `/src/config/` for easy organization and configuration of collections, filters, passthroughs, etc.

## Install project dependencies

```bash
npm i
```

## Run the project locally

```bash
npm run dev
```

## Build for staging

(The same as production except every page is flagged `noindex`)

```bash
npm run staging
```

## Build for production

```bash
npm run production
```
