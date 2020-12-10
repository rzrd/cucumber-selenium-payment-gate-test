$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Negative.feature");
formatter.feature({
  "line": 2,
  "name": "Purchasing Pillow using credit card with FAILED payment flow",
  "description": "User want purchasing pillow using credit card with FAILED payment flow",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow",
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
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-email",
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
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-email;",
  "rows": [
    {
      "cells": [
        "amount",
        "name",
        "email"
      ],
      "line": 20,
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-email;;1"
    },
    {
      "cells": [
        "10000",
        "rozi",
        "wrongemail.com"
      ],
      "line": 21,
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3768216,
  "status": "passed"
});
formatter.before({
  "duration": 202503,
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
  "duration": 3932158709,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Wrong Input Email",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-email;;2",
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
  "duration": 2134133971,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 352198413,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 21382457,
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
  "duration": 470070120,
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
  "duration": 149414704,
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
  "duration": 187605186,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 296055581,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.error_Alert_should_be_appear()"
});
formatter.result({
  "duration": 84939066,
  "status": "passed"
});
formatter.after({
  "duration": 185644,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Wrong Input Credit Card Details",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-credit-card-details",
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
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-credit-card-details;",
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
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-credit-card-details;;1"
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
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-credit-card-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 153481,
  "status": "passed"
});
formatter.before({
  "duration": 158965,
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
  "duration": 3363395058,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Wrong Input Credit Card Details",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-credit-card-details;;2",
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
  "duration": 1982951382,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 386854595,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 27164330,
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
  "duration": 448684494,
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
  "duration": 180420733,
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
  "duration": 229027114,
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
  "duration": 160936746,
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
  "duration": 134013365,
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
  "duration": 233049868,
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
  "duration": 137742462,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 291244565,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 1084068252,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 164768536,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 665363987,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 59483304,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 76235355,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 116418978,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 107210882,
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
  "duration": 206663389,
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
  "duration": 68406028,
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
  "duration": 176834939,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.invalid_Card_Number_Details_Alert_should_be_appear()"
});
formatter.result({
  "duration": 41785664,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.user_can_not_click_Pay_Now_Button()"
});
formatter.result({
  "duration": 1375192716,
  "status": "passed"
});
formatter.after({
  "duration": 182123,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Wrong Input Password",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-password",
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
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-password;",
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
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-password;;1"
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
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 236779,
  "status": "passed"
});
formatter.before({
  "duration": 129535,
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
  "duration": 3095562289,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Wrong Input Password",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;wrong-input-password;;2",
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
  "duration": 2056810615,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 371765275,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 19654475,
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
  "duration": 417639391,
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
  "duration": 173007172,
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
  "duration": 184806403,
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
  "duration": 161262014,
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
  "duration": 196818037,
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
  "duration": 210301562,
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
  "duration": 167759896,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 344993415,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 831821857,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 149238097,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 641239411,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 57476095,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 59724454,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 617963324,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 118554568,
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
  "duration": 206524500,
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
  "duration": 66606868,
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
  "duration": 130158637,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 959474540,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 37798137,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3349540698,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1334469729,
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
  "duration": 182972162,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 581132320,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.transaction_should_be_failed()"
});
formatter.result({
  "duration": 77114903,
  "status": "passed"
});
formatter.after({
  "duration": 53362,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Payment using declined credit card account",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;payment-using-declined-credit-card-account",
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
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;payment-using-declined-credit-card-account;",
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
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;payment-using-declined-credit-card-account;;1"
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
      "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;payment-using-declined-credit-card-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 95941,
  "status": "passed"
});
formatter.before({
  "duration": 125357,
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
  "duration": 3352148533,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Payment using declined credit card account",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-failed-payment-flow;payment-using-declined-credit-card-account;;2",
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
  "duration": 2299066520,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 331896820,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 21170807,
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
  "duration": 446968546,
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
  "duration": 148593904,
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
  "duration": 175867138,
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
  "duration": 154660699,
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
  "duration": 241548405,
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
  "duration": 231173579,
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
  "duration": 131012755,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 309925558,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 954841265,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 157073472,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 657848194,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 64572198,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 69542971,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 625297052,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 108082004,
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
  "duration": 201424946,
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
  "duration": 51355185,
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
  "duration": 162920394,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 763091791,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 32090059,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3366695727,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1059780332,
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
  "duration": 133680122,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 854704786,
  "status": "passed"
});
formatter.match({
  "location": "NegativeDef.transaction_should_be_failed()"
});
formatter.result({
  "duration": 76439414,
  "status": "passed"
});
formatter.after({
  "duration": 71585,
  "status": "passed"
});
formatter.uri("Positive.feature");
formatter.feature({
  "line": 2,
  "name": "Purchasing Pillow using credit card with SUCCESSFULL payment flow",
  "description": "User want purchasing pillow using credit card with SUCCESSFULL payment flow",
  "id": "purchasing-pillow-using-credit-card-with-successfull-payment-flow",
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
  "id": "purchasing-pillow-using-credit-card-with-successfull-payment-flow;successfull-payment-flow",
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
  "id": "purchasing-pillow-using-credit-card-with-successfull-payment-flow;successfull-payment-flow;",
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
      "id": "purchasing-pillow-using-credit-card-with-successfull-payment-flow;successfull-payment-flow;;1"
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
      "id": "purchasing-pillow-using-credit-card-with-successfull-payment-flow;successfull-payment-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 83387,
  "status": "passed"
});
formatter.before({
  "duration": 113776,
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
  "duration": 3545286617,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Successfull payment flow",
  "description": "",
  "id": "purchasing-pillow-using-credit-card-with-successfull-payment-flow;successfull-payment-flow;;2",
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
  "duration": 2268820272,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Buy_Now_button()"
});
formatter.result({
  "duration": 384548812,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shopping_Cart_page_should_be_appear()"
});
formatter.result({
  "duration": 11530844,
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
  "duration": 439065687,
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
  "duration": 203400740,
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
  "duration": 230985364,
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
  "duration": 205038819,
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
  "duration": 138534767,
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
  "duration": 176565224,
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
  "duration": 105827870,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Checkout_button()"
});
formatter.result({
  "duration": 297823595,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_page_should_be_appear()"
});
formatter.result({
  "duration": 882006027,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount()"
});
formatter.result({
  "duration": 114699043,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.shipping_Details_must_be_same_as_Customer_Details()"
});
formatter.result({
  "duration": 528819222,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Continue_button()"
});
formatter.result({
  "duration": 58699626,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.payment_method_list_page_should_be_appear()"
});
formatter.result({
  "duration": 72622809,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_choose_Credit_Debit_Card_payment_method()"
});
formatter.result({
  "duration": 621349434,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.credit_card_detail_page_should_be_appear()"
});
formatter.result({
  "duration": 111079648,
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
  "duration": 214373650,
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
  "duration": 45266387,
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
  "duration": 163108552,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_select_one_of_Promos_availables()"
});
formatter.result({
  "duration": 802976453,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.check_Customers_Detail()"
});
formatter.result({
  "duration": 37586815,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Pay_Now_button()"
});
formatter.result({
  "duration": 3392288715,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.transaction_verification_page_is_appear()"
});
formatter.result({
  "duration": 1371282852,
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
  "duration": 161695004,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_click_Ok_button()"
});
formatter.result({
  "duration": 814608763,
  "status": "passed"
});
formatter.match({
  "location": "PositiveDef.user_will_be_Navigate_to_Homepage_again()"
});
formatter.result({
  "duration": 2085379676,
  "status": "passed"
});
formatter.after({
  "duration": 125424,
  "status": "passed"
});
});