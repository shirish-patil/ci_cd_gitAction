Feature: PERM Processing Times Checker
  As a user
  I want to check the PERM processing times
  So that I can track the current processing status

 Scenario: Check PERM Analyst Review processing month and year
    Given I am on the perm processing times page
    When I check the Analyst Review month and year
    Then I should see "February 2024" as the Analyst Review date 
