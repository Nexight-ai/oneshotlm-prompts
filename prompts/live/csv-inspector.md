---
title: CSV inspector
category: interfaces
tags: [csv, table, data, interactive]
---
Build a local CSV inspector for small sales datasets.

Use HTML, CSS, and JavaScript as needed. Write it to `index.html` in the current working directory using your file tools. Inline your own CSS and JavaScript. Do not use external assets, CDNs, or network requests. No third-party libraries are provided.

Required behavior:

- Provide a file input to load a UTF-8 CSV file with columns id, region, product, units, unit_price, in that order. Accept LF or CRLF line endings, an optional UTF-8 BOM, quoted commas, quoted newlines, and escaped double quotes inside quoted fields. Ignore an empty final line. Treat id, region, and product as text, and units and unit_price as finite nonnegative numbers; units must be an integer. Show a clear error for wrong headers, a malformed record, or invalid numbers, without replacing the last valid dataset.
- Provide Load sample. Its exact CSV is:

```csv
id,region,product,units,unit_price
A01,East,"Widget, mini",2,12.50
A02,West,Gadget,3,7
A03,East,"Quote ""special""",1,10
A04,North,Widget,4,2.50
A05,West,Zero,0,100
A06,East,Gadget,2,7
```

- Display all records in a table with the five input columns plus revenue = units multiplied by unit_price. Render imported text as text, never as executable HTML.
- Offer a region filter (All plus the regions in the current dataset) and a case-insensitive product substring search. Apply both together. Show visible-record count, total units, and total revenue for the filtered dataset; show zero totals and an empty state when no records match. Format money with two decimal places.
- Make each column header sort ascending and descending on repeated clicks; sort numeric columns numerically. Sorting must retain filters and summaries. Use original input order to break equal-value ties.
- Loading another valid CSV or Load sample replaces the dataset and resets filters, search, and sorting. All processing stays in the browser.

Verify: Load the sample, check its six rows and totals, filter East and search Gadget, then clear the search and sort revenue. If possible, also upload a small CSV to check file loading. Report what you checked and what remains unverified.
