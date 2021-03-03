$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Site Login Feature",
  "description": "",
  "id": "site-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Site Registration Test Scenario",
  "description": "",
  "id": "site-login-feature;site-registration-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "registration page appears",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters email address",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on create account",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user gets registered",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.browser_is_open()"
});
formatter.result({
  "duration": 19282620700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.registration_page_appears()"
});
formatter.result({
  "duration": 3344166800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_email_address()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_create_account()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_gets_registered()"
});
formatter.result({
  "duration": 106800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Site Login Test Scenario",
  "description": "",
  "id": "site-login-feature;site-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cEmailId\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user signout from the site",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "site-login-feature;site-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "EmailId",
        "Password"
      ],
      "line": 19,
      "id": "site-login-feature;site-login-test-scenario;;1"
    },
    {
      "cells": [
        "scsanyam52@gmail.com",
        "SanyamC"
      ],
      "line": 20,
      "id": "site-login-feature;site-login-test-scenario;;2"
    },
    {
      "cells": [
        "verma.sakshi104@gmail.com",
        "SakshiV"
      ],
      "line": 21,
      "id": "site-login-feature;site-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Site Login Test Scenario",
  "description": "",
  "id": "site-login-feature;site-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters \"scsanyam52@gmail.com\" and \"SanyamC\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user signout from the site",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_registered()"
});
formatter.result({
  "duration": 116500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scsanyam52@gmail.com",
      "offset": 13
    },
    {
      "val": "SanyamC",
      "offset": 40
    }
  ],
  "location": "LoginStepDefination.user_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 4583284300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 125400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_signout_from_the_site()"
});
formatter.result({
  "duration": 3421681700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Site Login Test Scenario",
  "description": "",
  "id": "site-login-feature;site-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters \"verma.sakshi104@gmail.com\" and \"SakshiV\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user signout from the site",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_registered()"
});
formatter.result({
  "duration": 124000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "verma.sakshi104@gmail.com",
      "offset": 13
    },
    {
      "val": "SakshiV",
      "offset": 45
    }
  ],
  "location": "LoginStepDefination.user_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 5786030100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 280800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_signout_from_the_site()"
});
formatter.result({
  "duration": 77748100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .logout\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAKSHI\u0027, ip: \u0027192.168.0.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200831163820, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 12188, moz:profile: C:\\Users\\$akshi\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f6dd19e8-c411-4eca-ac11-773dc6589bc9\n*** Element info: {Using\u003dclass name, value\u003dlogout}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefination.LoginStepDefination.user_signout_from_the_site(LoginStepDefination.java:88)\r\n\tat ✽.Then user signout from the site(login.feature:16)\r\n",
  "status": "failed"
});
});