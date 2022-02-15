Feature: Registration
  In order to use the system
  As a Singaporean John
  John wants to register his account
  
  Background:
    Given John is at the login system
@test
  Scenario Outline: Register with an account
    When he register using the following particulars
    | firstname | lastname | username | password      |
    | John      | Ferguson | john     | iloveblackcat |
    Then he should see that registration has succeeded
  
