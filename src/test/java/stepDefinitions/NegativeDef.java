package stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.Homepage;
import utilities.Base;
import utilities.Data;

public class NegativeDef {
	WebDriver driver;
	Base base = new Base();
	Data data = new Data();
	Homepage homepage = new Homepage(driver);
	
	@Given("^User fill Price Amount with name(\\d+)$")
	public void user_fill_Price_Amount_with_name(int arg1) throws Throwable {
	}

	@Given("^User fill Name with (\\d+)$")
	public void user_fill_Name_with(int arg1) throws Throwable {
	}

	@Given("^User try to fill Email with invalid format wrongemail\\.com$")
	public void user_try_to_fill_Email_with_invalid_format_wrongemail_com() throws Throwable {
	}

	@Given("^Click Checkout button$")
	public void click_Checkout_button() throws Throwable {
	}

	@Then("^Error Alert should be appear$")
	public void error_Alert_should_be_appear() throws Throwable {
	}

	@When("^User try to fill Credit Card number with wrong number <number>$")
	public void user_try_to_fill_Credit_Card_number_with_wrong_number_number() throws Throwable {
	}

	@When("^User try to fill Credit Card Expiry Date with wrong date (\\d+)/(\\d+)$")
	public void user_try_to_fill_Credit_Card_Expiry_Date_with_wrong_date(int arg1, int arg2) throws Throwable {
	}

	@When("^User try to fill Credit Card CVV with wrong cvv (\\d+)$")
	public void user_try_to_fill_Credit_Card_CVV_with_wrong_cvv(int arg1) throws Throwable {
	}

	@Then("^Invalid Card Number Details Alert should be appear$")
	public void invalid_Card_Number_Details_Alert_should_be_appear() throws Throwable {
	}

	@Then("^User can not click Pay Now Button$")
	public void user_can_not_click_Pay_Now_Button() throws Throwable {
	}

	@When("^User try to fill Password with wrong password (\\d+)$")
	public void user_try_to_fill_Password_with_wrong_password(int arg1) throws Throwable {
	}

	@Then("^Transaction should be failed$")
	public void transaction_should_be_failed() throws Throwable {
	}
}
