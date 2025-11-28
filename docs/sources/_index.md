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

The Business Calendar panel is a Grafana plugin that displays events in a stylish calendar format. The data can come from various data sources.

<Image
  title="The Business Calendar plugin displays events from Grafana plugins catalog in April 2024."
  src="/img/plugins/business-calendar/dashboard.png"
/>

## Requirements

- The Business Calendar panel 4.X requires **Grafana 11** or **Grafana 12**.
- The Business Calendar panel 3.X requires **Grafana 10** or **Grafana 11**.
- Calendar panel 2.X requires **Grafana 9.2** or **Grafana 10**.
- Calendar panel 1.X requires **Grafana 8.5** or **Grafana 9**.

## Getting Started

You can install the Business Calendar panel plugin from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or use the Grafana command line tool.

<Youtube
  id="1qYzHfPXJF8"
  title="Install Business Suite plugins in Cloud, OSS, Enterprise. Getting started with the Business Suite."
/>

For the latter, please use the following command:

```sh
grafana cli plugins install marcusolsson-calendar-panel
```

## Highlights

- Intuitive multi-language toolbar that allows you to:
  - Switch between the **Day**, **Week**, **Month**, **Work Week**, **Year**, and **Agenda** views.
  - Switch back to today's events.
  - Display events from the previous and subsequent time ranges.
- Fetch and combine event data from any data sources.
- Event filter by a time range.
- Event coloring based on the Grafana Thresholds.
- Enables the opening of a data link instead of a sidebar when clicking on an event.
- Enables the display of annotations across all dashboards for the specified period.
- Supports Internationalization: Spanish, French, German, Portuguese, and Chinese.

## Tutorial

This video is a detailed review of all configurable options. To ensure you can follow, Daria starts with fetching publicly available Grafana plugin catalog data and then demonstrates how the Business Calendar plugin options change the panel appearance and behavior.

<Youtube
  id="CvLqyY2fQfo"
  title="Overview and detailed tutorial. Display dates and time in Grafana."
/>

We have many other tutorials that you can find helpful. You can review all related to this plugin tutorials [here](/plugins/business-calendar/tutorials).

## Documentation

| Section                             | Description                                                    |
| ----------------------------------- | -------------------------------------------------------------- |
| [Basic configuration](basic-config) | Explains plugin basics                                         |
| [Configuration](sections)           | Describes configuration options                                |
| [Features](features)                | Describes plugin's features                                    |
| [Tutorials](tutorials)              | Easy to follow tutorials                                       |
| [Release Notes](release)            | Allows to stay up to date with the latest features and updates |

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/business-calendar/blob/main/LICENSE).


