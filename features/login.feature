Feature: Login
  In order to access the system
  As a Singaporean John
  John wants to login using his registered account 
  
  Background:  
    Given John is at the login system
    And he has registered his account
      | firstname | lastname | username    | password      |
      | Jan       | Molak    | janmolak    | serenityjs    |
@test
  Scenario Outline: Login with his account
    When he login 
    | username    | password    |
    | janmolak    | serenityjs  |
    Then he should see that login has succeeded
  
