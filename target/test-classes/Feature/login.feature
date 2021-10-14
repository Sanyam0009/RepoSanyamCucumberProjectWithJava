Feature: Site Login Feature

Scenario: Site Registration Test Scenario
Given Browser is open
When registration page appears
Then User enters email address
Then user clicks on create account
And user gets registered


Scenario Outline: Site Login Test Scenario
Given user is registered
When user clicks on signin button
Then User enters "<EmailId>" and "<Password>"
Then user clicks on login button
And user is on home page
Then user signout from the site


Examples:
	|EmailId					| Password	|
	|scsanyam52@gmail.com		| SanyamC	|
	|verma.sakshi104@gmail.com	| SakshiV|