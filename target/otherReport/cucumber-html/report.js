$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Positive.feature");
formatter.feature({
  "line": 2,
  "name": "Purchasing Pillow using credit card",
  "description": "User want purchasing pillow using credit card with SUCCESSFULL payment flow",
  "id": "purchasing-pillow-using-credit-card",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@positiveTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Successfull payment flow",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;successfull-payment-flow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@successfulFlow"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User fill Price Amount with \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User fill Name with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User fill Email with \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User fill Phone Number with \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fill City with \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User fill Address with \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User fill Postal Code with \"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User fill Card Number with \"\u003ccard\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User fill Card Expiry Date with \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User fill Card CVV with \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User select one of Promos availables",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check Customers Detail",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click Pay Now button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Transaction Verification page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User fill Password with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Transaction should be finished",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User will be Navigate to Homepage again",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;successfull-payment-flow;",
  "rows": [
    {
      "cells": [
        "amount",
        "name",
        "email",
        "phone",
        "city",
        "address",
        "code",
        "card",
        "date",
        "cvv",
        "password"
      ],
      "line": 42,
      "id": "purchasing-pillow-using-credit-card;successfull-payment-flow;;1"
    },
    {
      "cells": [
        "30000",
        "rozi",
        "rozi@email.com",
        "28123456",
        "jakarta",
        "jl. sukses",
        "12620",
        "4811111111111114",
        "12/20",
        "123",
        "112233"
      ],
      "line": 43,
      "id": "purchasing-pillow-using-credit-card;successfull-payment-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3149021,
  "status": "passed"
});
formatter.before({
  "duration": 160991,
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
  "duration": 1497747104,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Successfull payment flow",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;successfull-payment-flow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@positiveTest"
    },
    {
      "line": 8,
      "name": "@successfulFlow"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User fill Price Amount with \"30000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User fill Name with \"rozi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User fill Email with \"rozi@email.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User fill Phone Number with \"28123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fill City with \"jakarta\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User fill Address with \"jl. sukses\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User fill Postal Code with \"12620\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User fill Card Number with \"4811111111111114\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User fill Card Expiry Date with \"12/20\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User fill Card CVV with \"123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User select one of Promos availables",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check Customers Detail",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click Pay Now button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Transaction Verification page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User fill Password with \"112233\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Transaction should be finished",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User will be Navigate to Homepage again",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 1797399555,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 204915779,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 29123487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 29
    }
  ],
  "location": "PositiveDef.user_fill_Price_Amount_with(String)"
});
formatter.result({
  "duration": 616805575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rozi",
      "offset": 21
    }
  ],
  "location": "PositiveDef.user_fill_Name_with(String)"
});
formatter.result({
  "duration": 253784405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rozi@email.com",
      "offset": 22
    }
  ],
  "location": "PositiveDef.user_fill_Email_with(String)"
});
formatter.result({
  "duration": 214737810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28123456",
      "offset": 29
    }
  ],
  "location": "PositiveDef.user_fill_Phone_Number_with(String)"
});
formatter.result({
  "duration": 226381761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jakarta",
      "offset": 21
    }
  ],
  "location": "PositiveDef.user_fill_City_with(String)"
});
formatter.result({
  "duration": 173993851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jl. sukses",
      "offset": 24
    }
  ],
  "location": "PositiveDef.user_fill_Address_with(String)"
});
formatter.result({
  "duration": 197917275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12620",
      "offset": 28
    }
  ],
  "location": "PositiveDef.user_fill_Postal_Code_with(String)"
});
formatter.result({
  "duration": 191760113,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 157885221,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 1118855628,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 221341009,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 613331228,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 212938568,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 23641009,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 281415572,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 19334955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811111111111114",
      "offset": 28
    }
  ],
  "location": "PositiveDef.user_fill_Card_Number_with(String)"
});
formatter.result({
  "duration": 245378803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/20",
      "offset": 33
    }
  ],
  "location": "PositiveDef.user_fill_Card_Expiry_Date_with(String)"
});
formatter.result({
  "duration": 118481044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 25
    }
  ],
  "location": "PositiveDef.user_fill_Card_CVV_with(String)"
});
formatter.result({
  "duration": 225514393,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 599305426,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 53089616,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 4248142486,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 47272984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112233",
      "offset": 25
    }
  ],
  "location": "PositiveDef.user_fill_Password_with(String)"
});
formatter.result({
  "duration": 1467182194,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027kominfobinar-PORTEGE-Z930\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-126-generic\u0027, java.version: \u002711.0.9.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.O36Ulp}, goog:chromeOptions: {debuggerAddress: localhost:46477}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bbc73c9405afefdcd41c8a001416d527\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027password\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat utilities.Base.waitVisibility(Base.java:65)\n\tat utilities.Base.inputField(Base.java:102)\n\tat pageObject.VerificationPage.fillPassword(VerificationPage.java:57)\n\tat stepDefinitions.PositiveDef.user_fill_Password_with(PositiveDef.java:170)\n\tat ✽.And User fill Password with \"112233\"(Positive.feature:35)\n",
  "status": "failed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PositiveDef.transaction_is_finished()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PositiveDef.user_will_be_Navigate_to_Homepage_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 307761382,
  "status": "passed"
});
});