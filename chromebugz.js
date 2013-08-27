// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("case " + info.selectionText);
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.create({ url: localStorage["url"] + "/default.asp?" + info.selectionText });
}

var context = "selection";
var title = "Open FogBugz case %s";
var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});
console.log("'" + context + "' item:" + id);