define(function defineDemoFocusableFirefoxNightly(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Firefox 36.0 on OS X 10.8",
      "layout": "Gecko",
      "manufacturer": null,
      "name": "Firefox",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:36.0) Gecko/20100101 Firefox/36.0",
      "version": "36.0",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.8"
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
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video",
      "video[controls]",
      "embed",
      "keygen",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=\"\"]",
      "[tabindex=hello]",
      "[tabindex=3 ]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}"
    ],
    "focusEvents": [
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "audio[controls]",
      "video",
      "video[controls]",
      "embed",
      "keygen",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=\"\"]",
      "[tabindex=hello]",
      "[tabindex=3 ]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}"
    ],
    "focusRedirection": [
      "label[for=\"label-target\"] --- input[type=text]"
    ],
    "noFocusMethod": [
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect"
    ],
    "tabOrder": [
      "HTML",
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
      "iframe",
      "audio[controls]",
      "video",
      "video[controls]",
      "keygen",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}"
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
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "video",
        "video[controls]",
        "embed",
        "keygen",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=hello]",
        "[tabindex=3 ]",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
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
        "keygen",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
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
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    }
  };
});