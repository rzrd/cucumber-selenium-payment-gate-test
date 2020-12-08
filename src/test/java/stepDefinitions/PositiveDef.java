package stepDefinitions;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.Homepage;
import utilities.Base;
import utilities.ClassHelp;
import utilities.Data;

public class PositiveDef {
	WebDriver driver;
	Base base = new Base();
	Data data = new Data();
	Homepage homepage = new Homepage(driver);


	@Given("Initiate browser")
	public void initiate_browser() throws Throwable {
		data.setIsHeadless(ClassHelp.getEnv("isHeadless"));
		data.setCloseBrowserEveryScenario(ClassHelp.getEnv("closeBrowser"));

		base = new Base();
		driver = base.openBrowser(ClassHelp.getEnv("browser"));
		driver.manage().window().setSize(new Dimension(1366, 768));
		base.reportLog("Driver set: " + driver);
		driver.manage().window().maximize();
	}
	
	@Given("^Navigate to Midtrans Demo homepage$")
	public void navigate_to_Midtrans_Demo_homepage() throws Throwable {
		data.setUrl(ClassHelp.getEnv("url"));
		homepage.goToHomepage();
	}

	@When("^User click Buy Now button$")
	public void user_click_Buy_Now_button() throws Throwable {
	}

	@When("^Shopping Cart page should be appear$")
	public void shopping_Cart_page_should_be_appear() throws Throwable {
	}

	@When("^User fill Price Amount with (\\d+)$")
	public void user_fill_Price_Amount_with(int arg1) throws Throwable {
	}

	@When("^User fill Name with rozi$")
	public void user_fill_Name_with_rozi() throws Throwable {
	}

	@When("^User fill Email with rozi@email\\.com$")
	public void user_fill_Email_with_rozi_email_com() throws Throwable {
	}

	@When("^User fill Phone Number with (\\d+)$")
	public void user_fill_Phone_Number_with(int arg1) throws Throwable {
	}

	@When("^user fill City with jakarta$")
	public void user_fill_City_with_jakarta() throws Throwable {
	}

	@When("^User fill Address with jl\\. sukses$")
	public void user_fill_Address_with_jl_sukses() throws Throwable {
	}

	@When("^User fill Postal Code with (\\d+)$")
	public void user_fill_Postal_Code_with(int arg1) throws Throwable {
	}

	@When("^User click Checkout button$")
	public void user_click_Checkout_button() throws Throwable {
	}

	@When("^Order Summary page should be appear$")
	public void order_Summary_page_should_be_appear() throws Throwable {
	}

	@When("^Order Summary Amount must be same as Shopping Cart Amount$")
	public void order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount() throws Throwable {
	}

	@When("^Shipping Details must be same as Customer Details$")
	public void shipping_Details_must_be_same_as_Customer_Details() throws Throwable {
	}

	@When("^User click Continue button$")
	public void user_click_Continue_button() throws Throwable {
	}

	@When("^User choose Credit/Debit Card payment method$")
	public void user_choose_Credit_Debit_Card_payment_method() throws Throwable {
	}

	@When("^User fill Card Number with (\\d+)$")
	public void user_fill_Card_Number_with(int arg1) throws Throwable {
	}

	@When("^User fill Card Expiry Date with (\\d+)/(\\d+)$")
	public void user_fill_Card_Expiry_Date_with(int arg1, int arg2) throws Throwable {
	}

	@When("^User fill Card CVV with (\\d+)$")
	public void user_fill_Card_CVV_with(int arg1) throws Throwable {
	}

	@When("^User select one of Promos availables$")
	public void user_select_one_of_Promos_availables() throws Throwable {
	}

	@When("^Amount must be reduced after promo applied$")
	public void amount_must_be_reduced_after_promo_applied() throws Throwable {
	}

	@When("^Check Customers Detail$")
	public void check_Customers_Detail() throws Throwable {
	}

	@When("^User click Pay Now button$")
	public void user_click_Pay_Now_button() throws Throwable {
	}

	@When("^Check if time still left$")
	public void check_if_time_still_left() throws Throwable {
	}

	@When("^User fill Password with (\\d+)$")
	public void user_fill_Password_with(int arg1) throws Throwable {
	}

	@When("^User click Ok button$")
	public void user_click_Ok_button() throws Throwable {
	}

	@Then("^Transaction is finished$")
	public void transaction_is_finished() throws Throwable {
	}

	@Then("^User will be Navigate to Homepage again$")
	public void user_will_be_Navigate_to_Homepage_again() throws Throwable {
	}

}
