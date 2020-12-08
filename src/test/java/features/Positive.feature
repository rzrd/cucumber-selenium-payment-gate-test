@positiveTest
Feature: Purchasing Pillow using credit card
  User want purchasing pillow using credit card
  
  Background:
  	Given Initiate browser

  @tag1
  Scenario Outline: Title of your scenario
    Given Navigate to Midtrans Demo homepage
    When User click Buy Now button
    And User fill Price Amount with <amount>
    And User fill Name with <name>
    And User fill Email with <email>
    And User fill Phone Number with <phone>
    And user fill City with <city>
    And User fill Address with <address>
    And User fill Postal Code with <code>
    And User clic Checkout button
    
    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
    

  @tag2
  Scenario Outline: Title of your scenario outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
