---
title: Layout
description: Learn about the layout configuration options available in the Business Calendar panel.
labels:
  products:
    - enterprise
    - oss
    - cloud
weight: 200
---

# Layout

The **Layout** category includes the following parameters:

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/layout.png" max-width="50%" class="border" alt="The Layout category." >}}

## Views

### Day

Displays a day.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/day.png" class="border" alt="The Day Layout." >}}

### Week and Work week

Displays a week with 7 or 5 days respectively.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/week-5-7.png" class="border" alt="The Week and Work Week Layouts." >}}

#### First day of the week

The plugin uses the Grafana system settings to determine the first day of the week: Saturday, Sunday, or Monday. If no setting is specified, the plugin uses the default day from Grafana settings.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/week-start-pref.png" class="border" alt="Grafana start week setting." >}}

### Month

Displays a month.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/month.png" class="border" alt="The Month Layout." >}}

### Year

Displays 12 months at the same time. The purpose of this view is to help navigate throughout the calendar since it makes it easier to jump into any day and month of the year.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/year.png" class="border" alt="The Year layout." >}}

#### Events

{{< admonition type="note" >}}
Starting from version 3.8.0, the Business Calendar panel displays dots representing events for each day.
{{< /admonition >}}

In the **Year** view, the Business Calendar panel displays dots representing events for each day. If there are more than three events, a plus symbol appears.

Multi-day events display as one dot per day. For instance, if an event lasts from September 16 to September 17 (a two-day event), two dots appear on the panel: one dot for September 16 and another dot for September 17.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/year.png" class="border" alt="Displaying events in a day on the Year view." >}}

### Agenda

Displays only the busy time slots and shows multiple days for the selected period.

{{< video-embed src="/media/docs/grafana/panels-visualizations/business-calendar/agenda.mp4" >}}

## Available views

You can configure which views are available for users.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/allowed.png" class="border" alt="Users can only select from the allowed options. In this example, Week, Month, and Year are allowed." >}}

## Default view

Use this setting to control what your calendar displays after a page refresh. You can select any of the calendar views as the default view.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/default-view.png" max-width="70%" class="border" alt="The Default View option." >}}

## Date and time format

The Language setting in the user profile preference affects both the language and the displayed date formats.

{{< admonition type="note" >}}
Extended date formats are available starting from version 3.0.0.
{{< /admonition >}}

The existing choices weren't sufficient for all use cases, so the **English 24** and **ISO 8601** formats were added.

If you set **Date and time format** to **User selection**, the language preference is taken from **User profile > Preferences > Language**.

All other options override the user profile settings.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/language-extended.png" class="border" alt="Use the Date and time format option to overwrite the user language setting." >}}

{{< admonition type="note" >}}
Panel-specific language (datetime) format is available starting from version 3.8.0.
{{< /admonition >}}

The **Date and time format** parameter is specific to the particular Business Calendar panel.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/languages.png" class="border" alt="The Business Calendar panel allows panel-specific language(datetime) configuration." >}}

## Month time

{{< admonition type="note" >}}
Disabling event time is available starting from version 3.5.0.
{{< /admonition >}}

For the **Month** layout, you can turn off the display of event times.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/month-time.png" class="border" alt="You can hide event time for the Month layout." >}}

## Colors

Read about the **Colors** option in the [Coloring events](/plugins/business-calendar/color/) section.

## Text Size

You can control the font size in your Calendar panel. By default, the size is 12px.

{{< figure src="/media/docs/grafana/panels-visualizations/business-calendar/text-size.png" class="border" alt="You can control the font size in your Calendar panel." >}}
