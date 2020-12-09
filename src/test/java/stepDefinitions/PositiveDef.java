package stepDefinitions;

import org.openqa.selenium.Dimension;
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
import utilities.ClassHelp;
import utilities.Data;

public class PositiveDef {
	WebDriver driver;
	Base base = new Base();
	Data data = new Data();
	Homepage homepage = new Homepage(driver);
	ShoppingCartPage cart = new ShoppingCartPage(driver);
	OrderSummaryPage summary = new OrderSummaryPage(driver);
	SelectPaymentPage payment = new SelectPaymentPage(driver);
	CreditCardPage cardDetail = new CreditCardPage(driver);
	VerificationPage verification = new VerificationPage(driver);

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
		homepage.clickBuyNowButton();
	}

	@When("^Shopping Cart page is appear$")
	public void shopping_Cart_page_should_be_appear() throws Throwable {
		cart.checkPage();
	}

	@Given("^User fill Price Amount with \"([^\"]*)\"$")
	public void user_fill_Price_Amount_with(String amount) throws Throwable {
		cart.fillAmount(amount);
	}

	@Given("^User fill Name with \"([^\"]*)\"$")
	public void user_fill_Name_with(String name) throws Throwable {
		cart.fillName(name);
	}

	@Given("^User fill Email with \"([^\"]*)\"$")
	public void user_fill_Email_with(String email) throws Throwable {
		cart.fillEmail(email);
	}

	@Given("^User fill Phone Number with \"([^\"]*)\"$")
	public void user_fill_Phone_Number_with(String phone) throws Throwable {
		cart.fillPhone(phone);
	}

	@Given("^user fill City with \"([^\"]*)\"$")
	public void user_fill_City_with(String city) throws Throwable {
		cart.fillCity(city);
	}

	@Given("^User fill Address with \"([^\"]*)\"$")
	public void user_fill_Address_with(String address) throws Throwable {
		cart.fillAddress(address);
	}

	@Given("^User fill Postal Code with \"([^\"]*)\"$")
	public void user_fill_Postal_Code_with(String code) throws Throwable {
		cart.fillPostalCode(code);
	}

	@When("^User click Checkout button$")
	public void user_click_Checkout_button() throws Throwable {
		cart.clickCheckout();
	}

	@When("^Order Summary page is appear$")
	public void order_Summary_page_should_be_appear() throws Throwable {
		summary.checkPage();
	}

	@When("^Order Summary Amount must be same as Shopping Cart Amount$")
	public void order_Summary_Amount_must_be_same_as_Shopping_Cart_Amount() throws Throwable {
		summary.checkAmount();
	}

	@When("^Shipping Details must be same as Customer Details$")
	public void shipping_Details_must_be_same_as_Customer_Details() throws Throwable {
		summary.checkShippingDetails();
	}

	@When("^User click Continue button$")
	public void user_click_Continue_button() throws Throwable {
		summary.clickContinue();
	}

	@When("^Payment Method List page is appear$")
	public void payment_method_list_page_should_be_appear() throws Throwable {
		payment.checkPage();
	}

	@When("^User choose Credit/Debit Card payment method$")
	public void user_choose_Credit_Debit_Card_payment_method() throws Throwable {
		payment.selectCreditCardPayment();
	}

	@Given("^Credit Card Detail page is appear$")
	public void credit_card_detail_page_should_be_appear() throws Throwable {
		cardDetail.checkPage();
	}

	@Given("^User fill Card Number with \"([^\"]*)\"$")
	public void user_fill_Card_Number_with(String cardNumber) throws Throwable {
		cardDetail.fillCardNumber(cardNumber);
	}

	@Given("^User fill Card Expiry Date with \"([^\"]*)\"$")
	public void user_fill_Card_Expiry_Date_with(String expiryDate) throws Throwable {
		cardDetail.fillCardExpiry(expiryDate);
	}

	@Given("^User fill Card CVV with \"([^\"]*)\"$")
	public void user_fill_Card_CVV_with(String cvv) throws Throwable {
		cardDetail.fillCardCVV(cvv);
	}

	@When("^User select one of Promos availables$")
	public void user_select_one_of_Promos_availables() throws Throwable {
		cardDetail.selectPromo();
	}

	@When("^Check Customers Detail$")
	public void check_Customers_Detail() throws Throwable {
		cardDetail.checkCustomerDetail();
	}

	@When("^User click Pay Now button$")
	public void user_click_Pay_Now_button() throws Throwable {
		cardDetail.clickPayNow();
	}

	@When("^Transaction Verification page is appear$")
	public void transaction_verification_page_is_appear() throws Throwable {
		verification.checkPage();
	}

	@When("^User fill Password with \"([^\"]*)\"$")
	public void user_fill_Password_with(String password) throws Throwable {
		verification.fillPassword(password);
	}

	@When("^User click Ok button$")
	public void user_click_Ok_button() throws Throwable {
		verification.clickOkButton();
	}

	@Then("^Transaction should be finished User will be Navigate to Homepage again$")
	public void user_will_be_Navigate_to_Homepage_again() throws Throwable {
		homepage.checkPurchaseSuccess();
	}

}
