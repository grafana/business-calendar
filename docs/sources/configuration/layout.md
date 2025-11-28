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

The **Layout** category consists of the following parameters at the moment:

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/layout.png" class="border" alt="The Layout category." >}}

## Views

### Day

Displays a day.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/day.png" class="border" alt="The Day Layout." >}}

### Week and Work week

Displays a week with 7 or 5 days respectively.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/week-5-7.png" class="border" alt="The Week and Work Week Layouts." >}}

#### First day of the week

The plugin considers the Grafana system settings when choosing the first day of the week - Saturday, Sunday, or Monday, or uses the default day from Grafana settings.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/week-start-pref.png" class="border" alt="Grafana start week setting." >}}

### Month

Displays a month.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/month.png" class="border" alt="The Month Layout." >}}

### Year

Displays 12 months at the same time. The purpose of this view is to help navigate throughout the calendar since it makes it easier to jump into any day and month of the year.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/year.png" class="border" alt="The Year layout." >}}

#### Events

{{< admonition type="note" >}}
Starting from version 3.8.0, the Business Calendar panel displays dots representing events for that day.
{{< /admonition >}}

In the **Year** view, the Business Calendar panel displays dots representing events that day. If there are more than 3 events, the plus symbol is shown.

The multi-day events are displayed as one dot per day. For instance, if an event lasts from September 16 to September 17 (two day event), two dots are shown on the panel, one dot for September 16 and the other dot for September 17.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/year.png" class="border" alt="Displaying events in a day on the Year view." >}}

### Agenda

Displays only the busy time slots and shows multiple days for the selected period.

{{< video-embed src="/media/docs/grafana/panels-visualizations/business-calendar/agenda.mp4" >}}

## Available views

You can configure which view(s) will be available for an end-user.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/allowed.png" class="border" alt="An end user can only select from the allowed options. In this example, Week, Month, and Year are allowed." >}}

## Default view

With this setting, you can control what your calendar will look like after a page refresh. Any of the calendar views can be selected as a default view.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/default-view.png" class="border" alt="The Default View option." >}}

## Date and time format

As you know, there is a Language setting in the user profile preference. Along with language this setting also impacts the displayed date formats.

{{< admonition type="note" >}}
The extended date formats are supported starting from version 3.0.0.
{{< /admonition >}}

The currently existing choices were not enough for some of our use cases. We added **English 24** and **ISO 8601** formats.

If the **Date and time format** is set to **User selection**, the language preferece is taken from the User profile-> Prefereneces->Language.

All other options override the user profile settings.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/language-extended.png" class="border" alt="Use the Date and time format option to overwrite the user language setting." >}}

{{< admonition type="note" >}}
The panel specific language(datetime) format is supported starting from version 3.8.0
{{< /admonition >}}

The **Date and time format** parameter is specific to the particular Business Calendar panel.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/languages.png" class="border" alt="The Business Calendar panel allows panel-specific language(datetime) configuration." >}}

## Month time

{{< admonition type="note" >}}
Disable event time feature is supported starting from version 3.5.0.
{{< /admonition >}}

For the **Month** layout, you can turn off the displaying of the event times.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/month-time.png" class="border" alt="You can hide event time for the Month layout." >}}

## Colors

Read about the **Colors** option in the [Coloring events](/plugins/business-calendar/color/) section.

## Text Size

You can control the font size in your Calendar panel. By default, the size is 12px.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/text-size.png" class="border" alt="You can control the font size in your Calendar panel." >}}
