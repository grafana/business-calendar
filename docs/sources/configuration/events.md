---
title: Events
description: Learn how to configure event click actions, links, and detail drawers in the Business Calendar panel.
labels:
  products:
    - enterprise
    - oss
    - cloud
---

# Events

The first parameter of the **Events** category is **On click**:

- **Open Link**: Opens an assigned link.
- **Show Details**: Opens a drawer.

## Links

You configure links in the **Data links** category, which is common for all Grafana plugins. In the following image, the link is specified as follows:

- `__data` is a reference to a retrieved data frame,
- `fields` is a reference to the retrieved data frame fields,
- `url` is a reference to a retrieved field name.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/events-section.png" class="border" alt="The On click parameter determines the plugin action when you click an event." >}}

## Drawer with event details

A drawer is a pop-up window that opens on the right-hand side of your browser and displays event details.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/drawer-location.png" class="border" alt="Event drawer example." >}}

You can configure which data elements to show in the drawer by selecting them in the **Details info** parameter (see the first image on this page).

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/drawer-dissect.png" max-width="75%" class="border" alt="A drawer dissection." >}}

## Tooltip

{{< admonition type="note" >}}
The tooltip feature is available starting from version 3.5.0.
{{< /admonition >}}

You can enable the tooltip, which appears when you hover your mouse over an event.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/tooltip-more.png" class="border" alt="The tooltip feature." >}}

## Multiple fields in the description

{{< admonition type="note" >}}

Multiple fields in the description is available starting from version 3.5.0.

{{< /admonition >}}

You can specify multiple fields to display in the event description.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/multiple.png" class="border" alt="Multiple fields in the description." >}}

## The Description format option

{{< admonition type="note" >}}
The Description format option is available starting from version 3.5.0.
{{< /admonition >}}

You can apply formatting for better visual display when your event descriptions contain comprehensive details.

Your options for description formatting are:

- **Inline**: Use simple HTML formatting tags to have different font sizes, colors, and more.
- **Preformatted**: Similar to the HTML tag `<pre>`. Text displays in a fixed-width font, with spaces and line breaks preserved. The text displays "as is".

The following illustration shows how the same description text is interpreted depending on the selected **Description format** option.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/details-formatting.png" class="border" alt="The description formatting options." >}}
