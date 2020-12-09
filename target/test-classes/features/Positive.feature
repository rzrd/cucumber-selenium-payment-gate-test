@positiveTest
Feature: Purchasing Pillow using credit card
  User want purchasing pillow using credit card with SUCCESSFULL payment flow
  
  Background:
  	Given Initiate browser

  @successfulFlow
  Scenario Outline: Successfull payment flow
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
    And Payment Method List page is appear
    And User choose Credit/Debit Card payment method
    And Credit Card Detail page is appear
    And User fill Card Number with "<card>"
    And User fill Card Expiry Date with "<date>"
    And User fill Card CVV with "<cvv>"
    And User select one of Promos availables
    And Check Customers Detail
    When User click Pay Now button
    And Transaction Verification page is appear
		And User fill Password with "<password>"
    And User click Ok button
    Then Transaction should be finished
    And User will be Navigate to Homepage again
    
    
    Examples: 
      | amount	| name	| email						| phone			| city		| address			| code	| card							| date	| cvv	| password	|
      | 30000		| rozi	| rozi@email.com	|	28123456	| jakarta	| jl. sukses	| 12620	| 4811111111111114	| 12/20	| 123	|	112233		|
      
    
