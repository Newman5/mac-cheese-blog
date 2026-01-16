---
title: Search Results 🔍
permalink: /search/
---
This page displays search results powered by [Pagefind](https://pagefind.app/).

<div id="search">
  <noscript>
    <p><strong>JavaScript is required for search functionality.</strong> Please enable JavaScript in your browser to use the search feature.</p>
  </noscript>
</div>

<script type="module" src="{{ '/assets/search/pagefind.js' | url }}"></script>
<script type="module" src="{{ '/assets/search/pagefind-ui.js' | url }}"></script>
<script type="module">
  window.addEventListener('DOMContentLoaded', () => {
    new PagefindUI({
      element: '#search',
      showSubResults: true,
      bundlePath: '{{ '/assets/search/' | url }}'
    }).triggerSearch(new URL(window.location.href).searchParams.get('s'));
  });
</script>
