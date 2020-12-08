$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Negative.feature");
formatter.feature({
  "line": 2,
  "name": "Purchasing Pillow using credit card",
  "description": "User want purchasing pillow using credit card with SUCCESSFULL payment flow",
  "id": "purchasing-pillow-using-credit-card",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@negativeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Wrong Input Email",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@wrongEmail"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "#When User click Buy Now button"
    },
    {
      "line": 12,
      "value": "#And Shopping Cart page should be appear"
    },
    {
      "line": 13,
      "value": "#And User fill Price Amount with \u003camount\u003e"
    },
    {
      "line": 14,
      "value": "#And User fill Name with \u003cname\u003e"
    },
    {
      "line": 15,
      "value": "#But User try to fill Email with invalid format \u003cemail\u003e"
    },
    {
      "line": 16,
      "value": "#And Click Checkout button"
    },
    {
      "line": 17,
      "value": "#Then Error Alert should be appear"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-email;",
  "rows": [
    {
      "cells": [
        "amount",
        "name",
        "email"
      ],
      "line": 20,
      "id": "purchasing-pillow-using-credit-card;wrong-input-email;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "wrongemail.com"
      ],
      "line": 21,
      "id": "purchasing-pillow-using-credit-card;wrong-input-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3506698,
  "status": "passed"
});
formatter.before({
  "duration": 230005,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Initiate browser",
  "keyword": "Given "
});
formatter.match({
  "location": "PositiveDef.initiate_browser()"
});
formatter.result({
  "duration": 1483922642,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Wrong Input Email",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@negativeTest"
    },
    {
      "line": 8,
      "name": "@wrongEmail"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 2080815544,
  "status": "passed"
});
formatter.after({
  "duration": 60091870,
  "status": "passed"
});
});