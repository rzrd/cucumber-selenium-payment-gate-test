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
  "name": "User try to fill Email with invalid format \"\u003cemail\u003e\"",
  "keyword": "But "
});
formatter.step({
  "line": 16,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Error Alert should be appear",
  "keyword": "Then "
});
formatter.examples({
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
        "10000",
        "rozi",
        "wrongemail.com"
      ],
      "line": 21,
      "id": "purchasing-pillow-using-credit-card;wrong-input-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4340681,
  "status": "passed"
});
formatter.before({
  "duration": 178161,
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
  "duration": 4096764200,
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
  "name": "User fill Price Amount with \"10000\"",
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
  "name": "User try to fill Email with invalid format \"wrongemail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.step({
  "line": 16,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Error Alert should be appear",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 4003656530,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 394913433,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 24762135,
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
  "duration": 351072589,
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
  "duration": 267127282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongemail.com",
      "offset": 44
    }
  ],
  "location": "NegativeDef.user_try_to_fill_Email_with_invalid_format(String)"
});
formatter.result({
  "duration": 204946853,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 343852831,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.error_Alert_should_be_appear()"
});
formatter.result({
  "duration": 47812230,
  "status": "passed"
});
formatter.after({
  "duration": 181525,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Wrong Input Credit Card Details",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-credit-card-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@wrongCreditCard"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User fill Price Amount with \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User fill Name with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User fill Email with \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User fill Phone Number with \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user fill City with \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User fill Address with \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User fill Postal Code with \"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User try to fill Credit Card number with wrong number \"\u003ccard\u003e\"",
  "keyword": "But "
});
formatter.step({
  "line": 44,
  "name": "User try to fill Credit Card Expiry Date with wrong date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User try to fill Credit Card CVV with wrong cvv \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Invalid Card Number Details Alert should be appear",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User can not click Pay Now button",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-credit-card-details;",
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
        "cvv"
      ],
      "line": 50,
      "id": "purchasing-pillow-using-credit-card;wrong-input-credit-card-details;;1"
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
        "4962736475019283",
        "02/20",
        "12334"
      ],
      "line": 51,
      "id": "purchasing-pillow-using-credit-card;wrong-input-credit-card-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 120551,
  "status": "passed"
});
formatter.before({
  "duration": 162988,
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
  "duration": 3332404122,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Wrong Input Credit Card Details",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-credit-card-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@negativeTest"
    },
    {
      "line": 23,
      "name": "@wrongCreditCard"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User fill Price Amount with \"10000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User fill Name with \"rozi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User fill Email with \"rozi@email.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User fill Phone Number with \"08123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user fill City with \"jakarta\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User fill Address with \"jl. sukses\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User fill Postal Code with \"12620\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User try to fill Credit Card number with wrong number \"4962736475019283\"",
  "matchedColumns": [
    7
  ],
  "keyword": "But "
});
formatter.step({
  "line": 44,
  "name": "User try to fill Credit Card Expiry Date with wrong date \"02/20\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User try to fill Credit Card CVV with wrong cvv \"12334\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Invalid Card Number Details Alert should be appear",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User can not click Pay Now button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 2574943516,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 321699438,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 62615033,
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
  "duration": 464763576,
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
  "duration": 126512842,
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
  "duration": 230008898,
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
  "duration": 157583229,
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
  "duration": 143144904,
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
  "duration": 206534854,
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
  "duration": 113922066,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 294200056,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 1006238128,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 109996233,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 593038039,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 56495191,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 67108817,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 117393023,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 128296875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4962736475019283",
      "offset": 55
    }
  ],
  "location": "NegativeDef.user_try_to_fill_Credit_Card_number_with_wrong_number(String)"
});
formatter.result({
  "duration": 204117585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/20",
      "offset": 58
    }
  ],
  "location": "NegativeDef.user_try_to_fill_Credit_Card_Expiry_Date_with_wrong_date(String)"
});
formatter.result({
  "duration": 77321269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12334",
      "offset": 49
    }
  ],
  "location": "NegativeDef.user_try_to_fill_Credit_Card_CVV_with_wrong_cvv(String)"
});
formatter.result({
  "duration": 220935499,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.invalid_Card_Number_Details_Alert_should_be_appear()"
});
formatter.result({
  "duration": 20909028,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.user_can_not_click_Pay_Now_Button()"
});
formatter.result({
  "duration": 1368021439,
  "status": "passed"
});
formatter.after({
  "duration": 249723,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Wrong Input Password",
  "description": "",
  "id": "purchasing-pillow-using-credit-card;wrong-input-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@wrongPassword"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User fill Price Amount with \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User fill Name with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User fill Email with \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User fill Phone Number with \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user fill City with \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User fill Address with \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User fill Postal Code with \"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User fill Card Number with \"\u003ccard\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User fill Card Expiry Date with \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User fill Card CVV with \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User select one of Promos availables",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Check Customers Detail",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Transaction Verification page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User try to fill Password with wrong password \"\u003cpassword\u003e\"",
  "keyword": "But "
});
formatter.step({
  "line": 81,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Transaction should be failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
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
        "card",
        "date",
        "cvv",
        "password"
      ],
      "line": 85,
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
        "4811111111111114",
        "12/20",
        "123",
        "873782"
      ],
      "line": 86,
      "id": "purchasing-pillow-using-credit-card;wrong-input-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 129254,
  "status": "passed"
});
formatter.before({
  "duration": 150598,
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
  "duration": 3221343648,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
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
      "line": 53,
      "name": "@wrongPassword"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Navigate to Midtrans Demo homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "User click Buy Now button",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Shopping Cart page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User fill Price Amount with \"10000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User fill Name with \"rozi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User fill Email with \"rozi@email.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User fill Phone Number with \"08123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user fill City with \"jakarta\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User fill Address with \"jl. sukses\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User fill Postal Code with \"12620\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Order Summary page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Order Summary Amount must be same as Shopping Cart Amount",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Shipping Details must be same as Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Payment Method List page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User choose Credit/Debit Card payment method",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Credit Card Detail page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User fill Card Number with \"4811111111111114\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User fill Card Expiry Date with \"12/20\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User fill Card CVV with \"123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User select one of Promos availables",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Check Customers Detail",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Transaction Verification page is appear",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User try to fill Password with wrong password \"873782\"",
  "matchedColumns": [
    10
  ],
  "keyword": "But "
});
formatter.step({
  "line": 81,
  "name": "User click Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Transaction should be failed",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 2080469613,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 354005824,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 12581569,
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
  "duration": 404247441,
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
  "duration": 143365725,
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
  "duration": 205512901,
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
  "duration": 205813634,
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
  "duration": 186984985,
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
  "duration": 227538279,
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
  "duration": 177823805,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 294803398,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 1051006586,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 145852009,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 540597823,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 61214677,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 70412451,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 646300606,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 116692874,
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
  "duration": 204488751,
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
  "duration": 77674348,
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
  "duration": 148500224,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 790967859,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 41118837,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3331764914,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1181869300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "873782",
      "offset": 47
    }
  ],
  "location": "NegativeDef.user_try_to_fill_Password_with_wrong_password(String)"
});
formatter.result({
  "duration": 161769367,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 560448516,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.transaction_should_be_failed()"
});
formatter.result({
  "duration": 88695736,
  "status": "passed"
});
formatter.after({
  "duration": 134040,
  "status": "passed"
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
  "duration": 98533,
  "status": "passed"
});
formatter.before({
  "duration": 125495,
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
  "duration": 3291629446,
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
  "duration": 2493621297,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 318248979,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 13367379,
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
  "duration": 437546214,
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
  "duration": 140126020,
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
  "duration": 258132921,
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
  "duration": 217181523,
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
  "duration": 132343870,
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
  "duration": 205599741,
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
  "duration": 177483142,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 338744433,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 965691276,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 125712348,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 568610648,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 110135500,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 69454203,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 672007966,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 105094731,
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
  "duration": 227024917,
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
  "duration": 72697881,
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
  "duration": 333569218,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 768920170,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 45707989,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3396372601,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1081727862,
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
  "duration": 177436666,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 682343160,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.transaction_should_be_failed()"
});
formatter.result({
  "duration": 76417876,
  "status": "passed"
});
formatter.after({
  "duration": 66996,
  "status": "passed"
});
formatter.uri("Positive.feature");
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
  "name": "Transaction should be finished User will be Navigate to Homepage again",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
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
      "line": 41,
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
      "line": 42,
      "id": "purchasing-pillow-using-credit-card;successfull-payment-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 89163,
  "status": "passed"
});
formatter.before({
  "duration": 112843,
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
  "duration": 3420577020,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
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
  "name": "Transaction should be finished User will be Navigate to Homepage again",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveDef.navigate_to_Midtrans_Demo_homepage()"
});
formatter.result({
  "duration": 2274601897,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 332141002,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 16808249,
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
  "duration": 413520915,
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
  "duration": 146603086,
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
  "duration": 184035042,
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
  "duration": 149562043,
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
  "duration": 139581117,
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
  "duration": 258690411,
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
  "duration": 166386154,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 302352301,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 908563459,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 116081782,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 481488515,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 106917413,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 64313620,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 618126894,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 106128245,
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
  "duration": 204732007,
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
  "duration": 64574181,
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
  "duration": 119332911,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 870552068,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 39549718,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3396363632,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1094075874,
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
  "duration": 186985830,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 694624565,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_will_be_Navigate_to_Homepage_again()"
});
formatter.result({
  "duration": 2096764018,
  "status": "passed"
});
formatter.after({
  "duration": 87898,
  "status": "passed"
});
});