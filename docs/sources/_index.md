---
title: Business Calendar
description: Learn how to display events in a stylish calendar format using the Business Calendar panel plugin.
labels:
  products:
    - enterprise
    - oss
    - cloud
weight: 10
---

# Business Calendar

The Business Calendar panel is a Grafana plugin that displays events in a stylish calendar format. You can use data from various data sources.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/dashboard.png" class="border" alt="The Business Calendar plugin displays events from Grafana plugins catalog in April 2024." >}}

## Requirements

- The Business Calendar panel 4.X requires **Grafana 11** or **Grafana 12**.
- The Business Calendar panel 3.X requires **Grafana 10** or **Grafana 11**.
- Calendar panel 2.X requires **Grafana 9.2** or **Grafana 10**.
- Calendar panel 1.X requires **Grafana 8.5** or **Grafana 9**.

## Getting started

You can install the Business Calendar panel plugin from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or use the Grafana command line tool.

{{< youtube id="1qYzHfPXJF8" >}}

For the latter, please use the following command:

```sh
grafana cli plugins install marcusolsson-calendar-panel
```

## Highlights

- Intuitive multi-language toolbar that allows you to:
  - Switch between the **Day**, **Week**, **Month**, **Work Week**, **Year**, and **Agenda** views.
  - Switch back to today's events.
  - Display events from the previous and subsequent time ranges.
- Fetch and combine event data from any data source.
- Filter events by a time range.
- Color events based on Grafana Thresholds.
- Open a data link instead of a sidebar when you click an event.
- Display annotations across all dashboards for the specified period.
- Support for internationalization: Spanish, French, German, Portuguese, and Chinese.

## Tutorial

This video provides a detailed review of all configurable options. The video starts with fetching publicly available Grafana plugin catalog data and then demonstrates how the Business Calendar plugin options change the panel appearance and behavior.

{{< youtube id="CvLqyY2fQfo" >}}

For all other tutorials related to this plugin, refer to [Tutorials](/plugins/business-calendar/tutorials).

## Documentation

| Section                             | Description                                                    |
| ----------------------------------- | -------------------------------------------------------------- |
| [Basic configuration](basic-config) | Explains plugin basics                                         |
| [Configuration](sections)           | Describes configuration options                                |
| [Features](features)                | Describes plugin's features                                    |
| [Tutorials](tutorials)              | Easy to follow tutorials                                       |
| [Release Notes](release)            | Stay up to date with the latest features and updates |

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/business-calendar/blob/main/LICENSE).
