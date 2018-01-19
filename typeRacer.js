"use strict";
var fulltext = document.querySelector("table.inputPanel > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div").innerHTML

var regex = /(?:>)(([^<]*))(?:<\/span>)/g;
var results = fulltext.match(regex);
results = results.map(v => v.replace(">",""))
    .map(v => v.replace("</span>",""));
var combined = "";
for (let i = 0; i < results.length; i++) {
    combined += results[i];
}
var splitted = combined.split(" ");
var index = 0;
var intv = setInterval(() => {
    var current = document.querySelector("table.inputPanel > tbody > tr:nth-child(2) > td > input").value || "";
    document.querySelector("table.inputPanel > tbody > tr:nth-child(2) > td > input").value = current + splitted[index] + " ";
    document.querySelector("table.inputPanel > tbody > tr:nth-child(2) > td > input").focus();
    document.querySelector("table.inputPanel > tbody > tr:nth-child(2) > td > input").click();
    index++;
    if (index === splitted.length) {
        clearInterval(intv);
    }
}, 650);