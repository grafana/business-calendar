---
title: Coloring Events
description: Learn how to use colors to improve the visual perception of calendar events.
labels:
  products:
    - enterprise
    - oss
    - cloud
weight: 300
---
# Coloring Events

You may color events using the Business Calendar plugin to improve the visual perception of the calendar layout. Colors can be used to represent distinct event types, different priorities, and so on.

You can color events based on the following **Layout**:

- **Frame**,
- **Event**,
- **Thresholds**.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/colors-by.png" class="border" alt="Color event base on one of these three options." >}}

## Frame

All events from the same data frame are colored with the same color. This coloring works when the **Data**->**Color** field is set to NULL.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/frame.png" class="border" alt="Select Frame to color events following their frame." >}}

## Event

All events are colored with a different color. This coloring works when the **Data**->**Color** field is set to NULL.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/event.png" class="border" alt="All events are colored with a different color." >}}

## Thresholds

You can color events in different tones based on whether their values fall within a specific threshold. In addition, you can choose a classic color palette in the plugin's options.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/threshold.png" class="border" alt="Events are colored based on the value in the Color field and configured Grafana thresholds." >}}
