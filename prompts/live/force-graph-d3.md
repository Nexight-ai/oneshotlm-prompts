---
title: Force-directed graph
category: data-algo
tags: [dataviz, d3.js, interactive, graph, network]
libs: [d3.min.js]
---
Build an interactive force-directed graph using the provided D3 library.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. Use the provided `d3.min.js` (global `d3`) through a plain local script tag; the runner will inline it into the final artifact.

Required behavior:

- Define 40 nodes inline, with IDs 0 through 39, divided into four color-coded clusters of ten. Within each cluster connect its nodes in a ring; connect nodes 0, 10, 20, and 30 in a ring to link the clusters. Do not load data externally.
- Use a force simulation to position nodes and draw their links. Label nodes with their IDs and keep the initial graph within view.
- Dragging a node moves it while the graph responds; release lets the simulation settle. Dragging the background pans the view, and the mouse wheel zooms.
- Hovering a node highlights it, its directly connected neighbors, and their connecting links while dimming unrelated elements. Leaving the node restores the normal appearance.
- Provide Reset view to restore the initial camera framing without replacing the graph data.

Verify: Drag one node and check that connected links follow it while the camera stays in place. Pan the background and zoom to check camera movement, then use Reset view and confirm the graph returns to its initial framing.
