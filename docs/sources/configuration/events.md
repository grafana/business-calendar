---
title: Events
description: Learn how to configure event click actions, links, and detail drawers in the Business Calendar panel.
labels:
  products:
    - enterprise
    - oss
    - cloud
weight: 300
---
# Events

The first parameter of the **Events** category is **On click**:

- **Open Link** instructs the plugin to open an assigned link,
- **Show Details** instructs the plugin to open a drawer.

## Links

The links are configured in the **Data links** category which is common for all Grafana plugins category. In the picture below the link is specified as follows:

- `__data` is a reference to a retrieved data frame,
- `fields` is a reference to the retrieved data frame fields,
- `url` is a reference to a retrieved field name.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/events-section.png" class="border" alt="On click parameter determines the plugin action upon a user click event." >}}

## Drawer with event details

A drawer is a pop-up window that opens on the right-hand side of your browser and displays event details.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/drawer-location.png" class="border" alt="Event drawer example." >}}

You can configure which data elements to show in the drawer by selecting them in the **Details info** parameter (see the first image on this page).

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/drawer-dissect.png" class="border" alt="A drawer dissection." >}}

## Tooltip

{{< admonition type="note" >}}
The tooltip feature is supported starting from version 3.5.0.
{{< /admonition >}}

You can enable the tooltip, which is displayed when a mouse hovers over the event.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/tooltip-more.png" class="border" alt="The tooltip feature." >}}

## Multiple fields in the description

{{< admonition type="note" >}}

The Multiple fields in the description feature is supported starting from version 3.5.0.

{{< /admonition >}}

You can specify multiple fields to be displayed in the event description.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/multiple.png" class="border" alt="Multiple fields in the description." >}}

## The Description format option

{{< admonition type="note" >}}
The Description format option feature is supported starting from version 3.5.0.
{{< /admonition >}}

You might want to apply formatting for better visual display when your event descriptions contain comprehensive details.

Your options for the description formatting are:

- **Inline**. You can use simple HTML formatting tags to have different font sizes, colors, etc.
- **Preformatted** is very similar to the HTML tag `<pre>`. Text is displayed in a fixed-width font, with spaces and line breaks preserved. The text is displayed "as is".

The illustration below shows how the same description text is interpreted depending on the selected **Description format** option.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/details-formatting.png" class="border" alt="The description formatting options." >}}
