package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.sanyam.frameWorkPackage.BrowserFactory;
import com.sanyam.uiPackage.LoginPage;
import com.sanyam.uiPackage.RegisterUser;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination extends BrowserFactory {
	//public static WebDriver driver;
	RegisterUser RUObj;
	public LoginPage LPObj;
	
	@Given("^Browser is open$")
	public void browser_is_open() throws Throwable {
//		System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir") + "\\Drivers\\geckodriver.exe");
//		driver = new FirefoxDriver();
//		driver.manage().window().maximize();
//		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		//BrowserFactory.getDriver("firefox");
		getDriver("firefox");
	}

	@When("^registration page appears$")
	public void registration_page_appears() throws Throwable {

//		driver.get("http://automationpractice.com/index.php");
//		driver.findElement(By.linkText("Sign in")).click();
		RUObj = new RegisterUser();
		LPObj = RUObj.register("scsanyam52@gmail.com");
	}

	@Then("^User enters email address$")
	public void user_enters_email_address() throws Throwable {
		//driver.findElement(By.name("email_create")).sendKeys("scsanyam52@gmail.com");
	}

	@Then("^user clicks on create account$")
	public void user_clicks_on_create_account() throws Throwable {
		//driver.findElement(By.id("SubmitCreate")).click();
		
	}

	@Then("^user gets registered$")
	public void user_gets_registered() throws Throwable {
		System.out.println("User got Registered");
	}

	@Given("^user is registered$")
	public void user_is_registered() throws Throwable {
		System.out.println("User is Registered");
	}

	@When("^user clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		//driver.findElement(By.className("login")).click();
		
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_Username_and_Password(String EmailId, String Password) throws Throwable {
//		driver.findElement(By.id("email")).sendKeys(EmailId);
//		driver.findElement(By.id("passwd")).sendKeys(Password);
		LPObj.login(EmailId,Password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		//driver.findElement(By.id("SubmitLogin")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		System.out.println("user is on home page - you can put the code to check to Home page ");
	}
	
	@Then("^user signout from the site$")
	public void user_signout_from_the_site() throws Throwable {
		driver.findElement(By.className("logout")).click();
	}

}
