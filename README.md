# Business Calendar for Grafana

[![CI](https://github.com/grafana/business-charts/actions/workflows/push.yml/badge.svg)](https://github.com/grafana/business-charts/actions/workflows/push.yml)
[![CD](https://github.com/grafana/business-charts/actions/workflows/publish.yml/badge.svg)](https://github.com/grafana/business-charts/actions/workflows/publish.yml)
[![License](https://img.shields.io/github/license/grafana/business-charts)](https://github.com/grafana/business-calendar/blob/main/LICENSE)

>This project was originally contributed by [Volkov Labs](https://github.com/volkovlabs/business-calendar) - thanks for all your great work!
>
>We have republished under the same plugin ID, keeping the community signature. This means you can simply update your plugin version. A new ID would have required manual updates to your dashboards. For additional information on the changes, see the [Notices](https://github.com/grafana/business-calendar/blob/main/NOTICES).

This project is currently maintained by Grafana Labs. We welcome pull requests and will review them on a best-effort basis. If you're interested in taking on this project long-term, contact [integrations@grafana.com](mailto:integrations@grafana.com). We're eager to work with new maintainers and eventually hand over the project.

**Business Calendar** is a powerful Grafana plugin that transforms your data into an intuitive calendar view. Seamlessly visualize schedules, deadlines, and time-based metrics from any Grafana-supported data source.


## 🚀 Features

- **Multi-Language Toolbar**: Switch between Day, Week, Month, Work Week, Year, and Agenda views with ease. Navigate to today’s events or browse time ranges.
- **Data Flexibility**: Integrate and display events from any Grafana data source.
- **Time Range Filtering**: Zoom in on specific periods for focused analysis.
- **Threshold Coloring**: Highlight events with customizable colors using Grafana thresholds.
- **Quick Links**: Click events to access data links directly (bypassing sidebars).
- **Annotations**: Display dashboard annotations for selected time ranges.
- **Localization**: Available in Spanish, French, German, Portuguese, and Chinese.

## 📋 Requirements

- **Version 4.x**: Grafana 11 or Grafana 12.
- **Version 3.x**: Grafana 10 or Grafana 11.
- **Version 2.x**: Grafana 9.2 or Grafana 10.
- **Version 1.x**: Grafana 8.5 or Grafana 9.

## 🛠️ Installation

Get started with Business Calendar in just a few steps:

1. Install the plugin via the [Grafana Plugins Catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana CLI:
   ```bash
   grafana-cli plugins install marcusolsson-calendar-panel
   ```
2. Restart Grafana to load the plugin.
3. Add the **Business Calendar** panel to your dashboard and configure your data source.

## 📚 Documentation

Explore comprehensive guides and resources to master the plugin:

| Section                                                                              | Description                                      |
| ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| [Basic Configuration](https://volkovlabs.io/plugins/business-calendar/basic-config/) | Learn the essentials to get started.             |
| [Configuration Options](https://volkovlabs.io/plugins/business-calendar/sections/)   | Dive into all customization settings.            |
| [Features](https://volkovlabs.io/plugins/business-calendar/features/)                | Discover key capabilities and use cases.         |
| [Tutorials](https://volkovlabs.io/plugins/business-calendar/tutorials/)              | Follow step-by-step guides for practical setups. |
| [Release Notes](https://volkovlabs.io/plugins/business-calendar/release/)            | Stay updated on new features and fixes.          |


## 📜 License

This project is licensed under the [Apache License 2.0](https://github.com/grafana/business-calendar/blob/main/LICENSE).
