---
title: October 2021 Update (Teaxr v0.5.1379)
authors: [amit]
tags: [releases]
---

### :rocket: Major Features

* Viewer 
  * VR mode supports Point to action
  * VR mode supports animations during scene transitions
  * VR mode supports scene offset rotations


### :arrow_double_up: Minor Improvements

* Editor
  * Deprecated: Height from text elements
  * Deprecated: width/height/depth from cylinder
  * Improved updates from number/decimal properties
* Viewer 
  * Deprecated: Scene pitch correction. All scene pitch correction in scene gets converted into point to rules automatically. 

### :bug: Bug Fixes
* Editor
  * Gracefully handling all resource failures to remove any unwanted crashes
  * Fixed errors while adding new text elements
  * Updates to experience can be viewed correctly in the preview/view links. Experience data/cache gets updated correctly. 
  * Correct updates to deployment authentication
* Viewer 
  * Disallow rotation using mouse scroll when gyro lock is enabled in a scene
  * Fixed text input in comments to clear text on submit and prevent text clipping
* Portal 
  * Fixed new project creation flow. 

