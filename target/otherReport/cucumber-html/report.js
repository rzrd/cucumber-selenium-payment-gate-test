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
  "line": 89,
  "name": "Wrong Input Password",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@declinedCard"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User fill Price Amount with \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User fill Name with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User fill Email with \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User fill Phone Number with \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "user fill City with \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User fill Address with \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User fill Postal Code with \"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User fill Card Number with \"\u003cdeclinedNum\u003e\"",
  "keyword": "But "
});
formatter.step({
  "line": 109,
  "name": "User fill Card Expiry Date with \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User fill Card CVV with \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "User select one of Promos availables",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Check Customers Detail",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "User click Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Transaction Verification page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User fill Password with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Transaction should be failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-password;",
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
        "declinedNum",
        "date",
        "cvv",
        "password"
      ],
      "line": 120,
      "id": "purchasing-pillow-using-credit-card;wrong-input-password;;1"
    },
    {
      "cells": [
        "10000",
        "rozi",
        "rozi@email.com",
        "08123456",
        "jakarta",
        "jl. sukses",
        "12620",
        "4911111111111113",
        "12/20",
        "123",
        "112233"
      ],
      "line": 121,
      "id": "purchasing-pillow-using-credit-card;wrong-input-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3064115,
  "status": "passed"
});
formatter.before({
  "duration": 302143,
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
  "duration": 4088328829,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Wrong Input Password",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@negativeTest"
    },
    {
      "line": 88,
      "name": "@declinedCard"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User fill Price Amount with \"10000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User fill Name with \"rozi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User fill Email with \"rozi@email.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User fill Phone Number with \"08123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "user fill City with \"jakarta\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User fill Address with \"jl. sukses\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User fill Postal Code with \"12620\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User fill Card Number with \"4911111111111113\"",
  "matchedColumns": [
    7
  ],
  "keyword": "But "
});
formatter.step({
  "line": 109,
  "name": "User fill Card Expiry Date with \"12/20\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User fill Card CVV with \"123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "User select one of Promos availables",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Check Customers Detail",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "User click Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Transaction Verification page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User fill Password with \"112233\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Transaction should be failed",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 2500305040,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 362179719,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 30680021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 29
    }
  ],
  "location": "PositiveDef.user_fill_Price_Amount_with(String)"
});
formatter.result({
  "duration": 528580164,
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
  "duration": 210872170,
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
  "duration": 205077253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08123456",
      "offset": 29
    }
  ],
  "location": "PositiveDef.user_fill_Phone_Number_with(String)"
});
formatter.result({
  "duration": 195968705,
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
  "duration": 114750932,
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
  "duration": 189185035,
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
  "duration": 166991693,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 326901154,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 861480795,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 152959164,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 456948243,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 94787544,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 67540540,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 634764799,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 104627634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911111111111113",
      "offset": 28
    }
  ],
  "location": "PositiveDef.user_fill_Card_Number_with(String)"
});
formatter.result({
  "duration": 209791405,
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
  "duration": 70050744,
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
  "duration": 132701897,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 878519706,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 35881656,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3397206145,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1110039477,
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
  "duration": 147880670,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 865357350,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.transaction_should_be_failed()"
});
formatter.result({
  "duration": 81949483,
  "status": "passed"
});
formatter.after({
  "duration": 233395,
  "status": "passed"
});
});