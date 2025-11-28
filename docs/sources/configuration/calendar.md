---
title: Business Calendar
description: Learn about the Business Calendar category configuration options including scroll settings and date formats.
labels:
  products:
    - enterprise
    - oss
    - cloud
weight: 100
---
# Business Calendar

The **Business Calendar** category consists of two parameters at the moment:

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/bus-calendar-section.png" class="border" alt="The Business Calendar category." >}}

## Scroll to Time

This setting applies to the **Day** and **Week** views. The Business Calendar panel ensures that the specified in this option time is always visible.

Please note that there could be two visibility scenarios.

One is when the Calendar panel itself is stretched out to a bigger size than your browser window. In that case, the panel might consider the specified time visible when it is not visible to you. The scrolling in that scenario scrolls a browser window. Scenario 1 is in the picture below.

Another scenario is when the Calendar panel itself is fully visible in your browser window, but the calendar has to be scrolled within the panel. In that event, the Scroll to Time option takes effect. Scenario 2 is in the picture below.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/scroll.png" class="border" alt="The Scroll to Time option explained." >}}

## Extended date formats

As you know, there is a Language setting in the user profile preference. Along with language this setting also impacts the displayed date formats.

The currently existing choices were not enough for some of our use cases. We added **English 24** and **ISO 8601** formats.

{{< figure src="/media/docs/grafana/panels-visualizations/business-forms/language.png" class="border" alt="Use the Date and time format option to overwrite the user language setting." >}}
