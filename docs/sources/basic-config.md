---
title: Basic configuration
description: Learn how to configure the Business Calendar panel to load and display events from any data source.
labels:
  products:
    - enterprise
    - oss
    - cloud
weight: 20
---

# Basic configuration

The Business Calendar panel allows you to load events from any data source and display them on your Grafana dashboard.

## The data category

To use the plugin, you must provide a mapping for two required data elements: **Text** and **Start time**. You can also define optional fields to make your calendar more informative.

| Field       | Required | Description                                                                                                                        |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Text        | Yes      | Event title. By default, the first text field is used.                                                                            |
| Description | No       | Event description. Supports multiple comma-separated values.                                                                       |
| Location    | No       | Event location.                                                                                                                    |
| Start time  | Yes      | Event start time. By default, the first time field is used.                                                                       |
| End time    | No       | Event end time.                                                                                                                    |
| Labels      | No       | Event labels. Supports multiple comma-separated values.                                                                            |
| Color       | No       | Event background color. Specify a number field. Grafana colors the event background according to the specified **Thresholds**. |

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/calendar-data.png" class="border" alt="Map the fields in the Data category." >}}

## Week start

For the **Week** and **Month** layouts, the plugin uses the Grafana system settings to determine the first day of the week: Saturday, Sunday, or Monday. If no setting is specified, the plugin uses the default day from Grafana settings.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/week-start.png" class="border" alt="You can specify the first day of the week in the user or organization preferences." >}}
