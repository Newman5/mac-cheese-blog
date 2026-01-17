---
title: 'From Astro to Eleventy: Simplifying the Stack for Sustainable Publishing'
date: 2026-01-17T11:00:00
tags:
  - 11ty
  - Sveltia CMS
  - CoPilot
---
Lately I’ve been experimenting with the [11ty](https://www.11ty.dev/) web framework as a minimal, standards-friendly alternative to React-heavy stacks. While I started with Astro (and I love it and congrats to them for the Cloudflare merger), I wanted to move away from the React ecosystem and toward something rooted in open web principles, with a solid community and long-term durability.

The goal: a non-technical, low-friction writing and publishing workflow that supports RSS, image handling, and readable blog output.

I tested a custom Bash-based setup in the repo [`11ty-blog-2026`](), which powers the current [newmanure.com](https://newmanure.com). I realize now that I started with an older template and not the 11ty-base-blog-v9. 

Alongside that, I explored [SveltiaCMS](), a lightweight CMS ~~built on Svelte~~, and ran a separate experiment called _Mac and Cheese Blog_ using that stack—largely co-created with GitHub Copilot. I made a couple of other experiments called Oreo and CocoCola blog. 

One highlight was getting a better image workflow working in Eleventy, including fixes for an image plugin and some custom scripting. Copilot even suggested a custom slug generation function—though I later found Eleventy already had a plugin for that.

More soon on image automation and publishing rhythms. For now, I’m settling into a flow that feels fast, local-first, and future-friendly.
