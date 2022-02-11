---
title: November 2021 Update (Teaxr v0.5.1446)
authors: [amit]
tags: [releases]
---

### :rocket: Major Features

* Viewer
    * Better transparency management and rendering of all elements
* Editor
    * Undo-Redo can be accessed using keyboard shortcuts. The list of all keyboard shortcuts is published [here](https://www.gmetri.com/docs/platform/create/experience/keyboard_shortcuts)


### :arrow_double_up: Minor Improvements

* Editor
    * Adding new element when a group element is selected adds it within the same group
    * For all elements that have background_source, 3d_model_source, a new option to remove the selected assets
    * Deprecated text length from viewer form

### :bug: Bug Fixes
* Editor
    * `On End` event added to instructions element. Fires when all stories have finished
    * FOV change shows up correctly in the 360 environment
    * Updates to experience can be viewed correctly in the preview/view links. Experience data/cache gets updated correctly.
    * Correct updates to deployment authentication
* Viewer
    * Fixed billboarding in VR mode
    * Fixed issue with Product card where it doesn't show `3D Model` button

