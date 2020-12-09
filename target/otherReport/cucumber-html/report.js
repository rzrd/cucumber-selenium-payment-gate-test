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
  "name": "Check if time still left",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User fill Password with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Transaction should be finished",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User will be Navigate to Homepage again",
  "keyword": "And "
});
formatter.examples({
  "line": 42,
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
      "line": 43,
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
      "line": 44,
      "id": "purchasing-pillow-using-credit-card;successfull-payment-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3699618,
  "status": "passed"
});
formatter.before({
  "duration": 299234,
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
  "duration": 1408973020,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
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
  "name": "Check if time still left",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User fill Password with \"112233\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Transaction should be finished",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User will be Navigate to Homepage again",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 2703442945,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 157789674,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 139027730,
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
  "duration": 441313070,
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
  "duration": 320273195,
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
  "duration": 260286320,
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
  "duration": 215939243,
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
  "duration": 234012868,
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
  "duration": 203864545,
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
  "duration": 241253194,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 109795033,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 4102349096,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 174642676,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 474019657,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 193523948,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 22871194,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 260875844,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 17118997,
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
  "duration": 262002892,
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
  "duration": 97466498,
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
  "duration": 213615925,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 1113628410,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\tamount promo not same expected [29990] but found [30000],\n\tamount promo not same expected [29990] but found [30000]\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\n\tat pageObject.CreditCardPage.checkPromoAmount(CreditCardPage.java:102)\n\tat pageObject.CreditCardPage.selectPromo(CreditCardPage.java:78)\n\tat stepDefinitions.PositiveDef.user_select_one_of_Promos_availables(PositiveDef.java:148)\n\tat ✽.And User select one of Promos availables(Positive.feature:31)\n",
  "status": "failed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PositiveDef.check_if_time_still_left()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 241890985,
  "status": "passed"
});
});