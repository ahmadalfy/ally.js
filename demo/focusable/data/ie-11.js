define(function defineDemoFocusableIE11(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "IE 11.0 32-bit on Windows 8.1 64-bit",
      "layout": "Trident",
      "manufacturer": null,
      "name": "IE",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; Tablet PC 2.0; rv:11.0) like Gecko",
      "version": "11.0",
      "os": {
        "architecture": 64,
        "family": "Windows",
        "version": "8.1"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "a > img[ismap]",
      "iframe",
      "audio",
      "audio[controls]",
      "video",
      "video[controls]",
      "embed",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table",
      "table thead tr td",
      "table tbody tr td",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible}",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}"
    ],
    "focusEvents": [],
    "focusRedirection": [
      "img[usemap].first --- area[href].upper",
      "img[usemap].invalid --- map.invalid-image area[href].upper",
      "img[usemap].second --- area[href].upper"
    ],
    "noFocusMethod": [
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect"
    ],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "a > img[ismap]",
      "area[href].upper",
      "area[href].lower",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "embed",
      "svg",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "HTML"
    ],
    "a11y": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio",
        "audio[controls]",
        "video",
        "video[controls]",
        "embed",
        "svg",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a"
      ],
      "tabOrder": null
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "svg a[xlink|href]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "table tbody tr td a"
      ],
      "tabOrder": null
    }
  };
});