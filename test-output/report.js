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
  "duration": 66234526600,
  "error_message": "org.openqa.selenium.TimeoutException: connection refused\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAKSHI\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat com.sanyam.frameWorkPackage.BrowserFactory.getDriver(BrowserFactory.java:24)\r\n\tat stepDefination.LoginStepDefination.browser_is_open(LoginStepDefination.java:31)\r\n\tat ✽.Given Browser is open(login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.registration_page_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_create_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_gets_registered()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 141400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 37300,
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
  "duration": 6360800,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.LoginStepDefination.user_enters_Username_and_Password(LoginStepDefination.java:74)\r\n\tat ✽.Then User enters \"scsanyam52@gmail.com\" and \"SanyamC\"(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_signout_from_the_site()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 112300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 41100,
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
  "duration": 539500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.LoginStepDefination.user_enters_Username_and_Password(LoginStepDefination.java:74)\r\n\tat ✽.Then User enters \"verma.sakshi104@gmail.com\" and \"SakshiV\"(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_signout_from_the_site()"
});
formatter.result({
  "status": "skipped"
});
});