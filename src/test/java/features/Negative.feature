@negativeTest
Feature: Purchasing Pillow using credit card
  User want purchasing pillow using credit card with SUCCESSFULL payment flow
  
  Background:
  	Given Initiate browser

	@wrongEmail
  Scenario Outline: Wrong Input Email
    Given Navigate to Midtrans Demo homepage
    When User click Buy Now button
    And Shopping Cart page is appear
    And User fill Price Amount with "<amount>"
    And User fill Name with "<name>"
    But User try to fill Email with invalid format "<email>"
    And User click Checkout button
    Then Error Alert should be appear
    
    Examples: 
      | amount  | name	| email						|
      | name1 	|	5			| wrongemail.com 	|
      
	@wrongCreditCard
  Scenario Outline: Wrong Input Credit Card Details
    Given Navigate to Midtrans Demo homepage
    When User click Buy Now button
    And Shopping Cart page is appear
    And User fill Price Amount with "<amount>"
    And User fill Name with "<name>"
    And User fill Email with "<email>"
    And User fill Phone Number with "<phone>"
    And user fill City with "<city>"
    And User fill Address with "<address>"
    And User fill Postal Code with "<code>"
    And User click Checkout button
    And Order Summary page is appear
    And Order Summary Amount must be same as Shopping Cart Amount
    And Shipping Details must be same as Customer Details
    And User click Continue button
    And User choose Credit/Debit Card payment method
    But User try to fill Credit Card number with wrong number "<number>"
    And User try to fill Credit Card Expiry Date with wrong date "<date>"
    And User try to fill Credit Card CVV with wrong cvv "<cvv>"
    Then Invalid Card Number Details Alert should be appear
    And User can not click Pay Now button

    Examples: 
      | amount	| name	| email						| phone			| city		| address			| code	| card							| date	| cvv		|
      | 30000		| rozi	| rozi@email.com	|	08123456	| jakarta	| jl. sukses	| 12620	| 8271627267541902	| 01/20	| 12334	|
      
	@wrongPassword
  Scenario Outline: Wrong Input Password
    Given Navigate to Midtrans Demo homepage
    When User click Buy Now button
    And Shopping Cart page is appear
    And User fill Price Amount with "<amount>"
    And User fill Name with "<name>"
    And User fill Email with "<email>"
    And User fill Phone Number with "<phone>"
    And user fill City with "<city>"
    And User fill Address with "<address>"
    And User fill Postal Code with "<code>"
    And User click Checkout button
    And Order Summary page is appear
    And Order Summary Amount must be same as Shopping Cart Amount
    And Shipping Details must be same as Customer Details
    And User click Continue button
    And User choose Credit/Debit Card payment method
    And User fill Card Number with "<card>"
    And User fill Card Expiry Date with "<date>"
    And User fill Card CVV with "<cvv>"
    And User select one of Promos availables
    And Check Customers Detail
    And User click Pay Now button
    But User try to fill Password with wrong password "<password>"
    And User click Ok button
    Then Transaction should be failed

    Examples: 
    | amount	| name	| email						| phone			| city		| address			| code	| card							| date	| cvv	| password	|
    | 30000		| rozi	| rozi@email.com	|	08123456	| jakarta	| jl. sukses	| 12620	| 4811111111111114	| 12/20	| 123	|	873782		|
