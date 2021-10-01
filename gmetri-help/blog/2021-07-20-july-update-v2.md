---
title: July 2021 Update V2 (Teaxr v0.5.761)
authors: [sahil]
tags: [releases]
---

### :rocket: Major Features

* New Volume and Tour mode controls for viewer links
* 0 downtime releases of services to production
* Progressive loading of pano elements. Shows a low res image to start the scene and loads the high res pano in the background.

### :arrow_double_up: Minor Improvements

* Tour mode speed reduced to avoid dizziness
* Viewer analytics now captures and show full URLs (vs. just the path like before)
* Added option for custom CNAME for viewer links
* Popup element - Increased visibility on sprite slider
* Global volume now applies in between scene changes
* Org admins can change role of team members to analytics

### :bug: Bug Fixes

* Fixed End Experience rule
* Default GMetri panos are not visible in experiences
* Fixed leaderboard filters
* Project search is now case insensitive
* Fixed zoom controls visibility based on project properties
* Fixed Product card and Popup heading issues
* Fixed text element render when using templates with urls
* QR Matcher now handles special characters (like in URLs) correctly
