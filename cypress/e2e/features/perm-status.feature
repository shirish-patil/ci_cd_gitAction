Feature: PERM Processing Times Checker
  As a user
  I want to check the PERM processing times
  So that I can track the current processing status

# Temporarily disabled due to DOL website maintenance
# Scenario: Check PERM Analyst Review processing month and year
#    Given I am on the perm processing times page
#    When I check the Analyst Review month and year
#    Then I should see "June 2024" as the Analyst Review date

Scenario: Verify DOL website is under maintenance
    Given I am on the perm processing times page
    When I check the page content
    Then I should see "Under Maintenance" message
    And I should see "Due to a lapse in funding" text 
