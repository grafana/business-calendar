---
title: Coloring events
description: Learn how to use colors to improve the visual perception of calendar events.
labels:
  products:
    - enterprise
    - oss
    - cloud
---

# Coloring events

You can color events using the Business Calendar plugin to improve the visual perception of the calendar layout. Use colors to represent different event types, priorities, and more.

You can color events based on the following **Layout**:

- Frame
- Event
- Thresholds

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/colors-by.png" max-width="60%" class="border" alt="Color event base on one of these three options." >}}

## Frame

All events from the same data frame are colored with the same color. This coloring works when you set the **Data > Color** field to NULL.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/frame.png" class="border" alt="Select Frame to color events following their frame." >}}

## Event

All events are colored with a different color. This coloring works when you set the **Data > Color** field to NULL.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/event.png" class="border" alt="All events are colored with a different color." >}}

## Thresholds

You can color events in different tones based on whether their values fall within a specific threshold. In addition, you can choose a classic color palette in the plugin's options.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/threshold.png" class="border" alt="Events are colored based on the value in the Color field and configured Grafana thresholds." >}}
