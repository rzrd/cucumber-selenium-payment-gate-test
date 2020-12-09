package stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.CreditCardPage;
import pageObject.Homepage;
import pageObject.OrderSummaryPage;
import pageObject.SelectPaymentPage;
import pageObject.ShoppingCartPage;
import pageObject.VerificationPage;
import utilities.Base;
import utilities.Data;

public class NegativeDef {
	WebDriver driver;
	Base base = new Base();
	Data data = new Data();
	Homepage homepage = new Homepage(driver);
	ShoppingCartPage cart = new ShoppingCartPage(driver);
	OrderSummaryPage summary = new OrderSummaryPage(driver);
	SelectPaymentPage payment = new SelectPaymentPage(driver);
	CreditCardPage cardDetail = new CreditCardPage(driver);
	VerificationPage verification = new VerificationPage(driver);

	@Given("^User try to fill Email with invalid format \"([^\"]*)\"$")
	public void user_try_to_fill_Email_with_invalid_format(String invalidEmail) throws Throwable {
		cart.fillInvalidEmail(invalidEmail);
	}

	@Then("^Error Alert should be appear$")
	public void error_Alert_should_be_appear() throws Throwable {
		homepage.checkErrorAlert();
	}

	@When("^User try to fill Credit Card number with wrong number \"([^\"]*)\"$")
	public void user_try_to_fill_Credit_Card_number_with_wrong_number(String wrongNumber) throws Throwable {
		cardDetail.fillCardNumber(wrongNumber);
	}

	@When("^User try to fill Credit Card Expiry Date with wrong date \"([^\"]*)\"$")
	public void user_try_to_fill_Credit_Card_Expiry_Date_with_wrong_date(String wrongExpiry) throws Throwable {
		cardDetail.fillCardExpiry(wrongExpiry);
	}

	@When("^User try to fill Credit Card CVV with wrong cvv \"([^\"]*)\"$")
	public void user_try_to_fill_Credit_Card_CVV_with_wrong_cvv(String wrongCVV) throws Throwable {
		cardDetail.fillCardCVV(wrongCVV);
	}

	@Then("^Invalid Card Number Details Alert should be appear$")
	public void invalid_Card_Number_Details_Alert_should_be_appear() throws Throwable {
		cardDetail.checkErrorNotification();
	}

	@Then("^User can not click Pay Now button$")
	public void user_can_not_click_Pay_Now_Button() throws Throwable {
		cardDetail.tryClickPayNow();
	}

	@When("^User try to fill Password with wrong password \"([^\"]*)\"$")
	public void user_try_to_fill_Password_with_wrong_password(String wrongPassword) throws Throwable {
		verification.fillPassword(wrongPassword);
	}

	@Then("^Transaction should be failed$")
	public void transaction_should_be_failed() throws Throwable {
		verification.checkTrxFailed();
	}
}
