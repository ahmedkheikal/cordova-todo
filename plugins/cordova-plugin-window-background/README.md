cordova-plugin-window-background :art:

[![Latest Stable Version](https://img.shields.io/npm/v/cordova-plugin-window-background.svg)](https://www.npmjs.com/package/cordova-plugin-window-background) [![Total Downloads](https://img.shields.io/npm/dt/cordova-plugin-window-background.svg)](https://npm-stat.com/charts.html?package=cordova-plugin-window-background) [![License](https://img.shields.io/github/license/douglaszaltron/cordova-plugin-window-background.svg)](https://github.com/douglaszaltron/cordova-plugin-window-background) [![Made by WINTER](https://img.shields.io/badge/made%20by-Douglas%20Zaltron-blue.svg)](https://douglaszaltron.com)

This is a simple plugin for Android which will set the window background color for you app's MainActivity to a color of your choice.
This allows you to avoid the standard dark grey background which will flash for a second before your splash screen appears. Set the color to the same background as your splash screen for a smoother start-up effect.

## Installation

You'll need to set your desired window background color while installing the plugin by supplying the `WINDOW_BACKGROUND_COLOR` variable. Set it to whatever you want, preferrably the same color as your splash screen.

    cordova plugin add cordova-plugin-window-background --variable WINDOW_BACKGROUND_COLOR=#FFFFFF --variable COLOR_PRIMARY=#005635 --variable COLOR_SECONDARY=#002C0F --variable COLOR_ACCENT=#00A551 --save
	
Or install directly from this repo:

    cordova plugin add https://github.com/douglaszaltron/cordova-plugin-window-background.git --variable WINDOW_BACKGROUND_COLOR=#FFFFFF --variable COLOR_PRIMARY=#005635 --variable COLOR_SECONDARY=#002C0F --variable COLOR_ACCENT=#00A551 --save


	
## Supported Platforms

- Android

## Configuration

A custom `WINDOW_BACKGROUND_COLOR` variable will be added to your app's config.xml after installation with the value you selected (provided you included the `--save` flag).
You can change it whenever you want, but you'll need to remove and re-add the Android platform from your project in order for the change to go through.

    <plugin name="cordova-plugin-window-background">
        <variable name="WINDOW_BACKGROUND_COLOR" value="#FFFFFF" />
        <variable name="COLOR_PRIMARY" value="#005635" />
        <variable name="COLOR_SECONDARY" value="#002C0F" />
        <variable name="COLOR_ACCENT" value="#00A551" />
    </plugin>

To re-add the Android platform:

	cordova platform remove android
	cordova platform add android
	
## TODO

- Find a way to make changes to config.xml automatically update without having to re-add the platform.
	
## License

The MIT License

Copyright (c) 2017, DOUGLAS ZALTRON

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
