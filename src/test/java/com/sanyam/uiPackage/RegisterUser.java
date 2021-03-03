package com.sanyam.uiPackage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.sanyam.frameWorkPackage.BrowserFactory;

public class RegisterUser extends BrowserFactory {
	//WebDriver driver;
	public RegisterUser(){
		//this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.LINK_TEXT , using="Sign in")
	@CacheLookup
	WebElement SignIN;
	
	@FindBy(how=How.NAME , using="email_create")
	@CacheLookup
	WebElement email;
	
	@FindBy(how=How.ID , using="SubmitCreate")
	@CacheLookup
	WebElement CreatAccount;
	

	public LoginPage register(String emailId){
		System.out.println("In register Method of RegisterUser class");
		SignIN.click();
		email.sendKeys(emailId);
		CreatAccount.click();
		return new LoginPage(); //Login page is lending page
	}
	

}
