package com.sanyam.uiPackage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.sanyam.frameWorkPackage.BrowserFactory;

public class LoginPage extends BrowserFactory {
	public LoginPage(){
		System.out.println("In Login class const before PF");
		PageFactory.initElements(driver, this);
		System.out.println("In Login class const After PF");
	}
	@FindBy(how=How.CLASS_NAME , using="login")
	WebElement SignIN;
	// @CacheLookup, it used to save the value in cashe so that if we perform the operation on same element again
	// then it will initilize the object again and again ,but to avoide stale element exception I removed the annotation as 
	//the page is getting reloaded second time for login
	
	
	@FindBy(how=How.ID , using="email")
	WebElement userName;
	
	@FindBy(how=How.ID , using="passwd")
	WebElement password;
	
	@FindBy(how=How.ID , using="SubmitLogin")
	WebElement login;
	
	
	public void login(String uname,String Password){
	System.out.println("In Login Method of LoginPage class");
	if (SignIN !=null){
		SignIN.click();
	}
	else
	{
		//code to report error.
	}
	userName.sendKeys(uname);
	password.sendKeys(Password);
	login.click();
	
	}
	
}
