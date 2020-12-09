package pageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import utilities.Base;
import utilities.Data;

public class CreditCardPage extends Base {

	public CreditCardPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	Data data = new Data();

	By titleCreditCardPage = By.xpath("//p[@class='text-page-title-content'][contains(.,'Credit/Debit Card')]");
	By amountField = By.xpath("//span[@class='text-amount-amount']");

	By cardNumberField = By.xpath("//input[@name='cardnumber']");
	By cardNumberError = By.xpath("//div[@class='input-group col-xs-12 error']");
	By invalidCardAlert = By.xpath("//div[@class='notice danger']");

	By cardExpiryField = By.xpath("//input[@placeholder='MM / YY']");
	By cardExpiryError = By.xpath("//div[@class='input-group col-xs-7 error']");

	By cardCVVField = By.xpath("//input[@inputmode='numeric']");
	By cardCVVError = By.xpath("//div[@class='input-group col-xs-5 error']");

	By promoElement = By.xpath("//*[@id=\"application\"]/div[3]//form/div[4]/div[2]/div");

	By creditCardEmailField = By.xpath("//input[@type='email']");
	By creditCardPhoneField = By.xpath("//input[@maxlength='20']");

	By paynowButton = By.xpath("//a[@class='button-main-content'][contains(.,'Pay Now')]");

	public void checkPage() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		boolean isPaymentPageAppear = driver.findElements(titleCreditCardPage).size() != 0;
		Assert.assertTrue(isPaymentPageAppear, "credit card page not loaded");
	}
	
	public void fillCardNumber(String cardNumber) throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		
		WebElement cardNumberElement = driver.findElement(cardNumberField);
		cardNumberElement.sendKeys(cardNumber);
		
		String actualInput = cardNumberElement.getAttribute("value").replaceAll("[^0-9]+", "");
		String expectedInput = cardNumber;
		Assert.assertEquals(actualInput, expectedInput, "wrong input card number");
	}

	public void fillCardExpiry(String expiryDate) throws InterruptedException {
		WebElement cardNumberElement = driver.findElement(cardExpiryField);
		cardNumberElement.sendKeys(expiryDate);
		
		String actualInput = cardNumberElement.getAttribute("value").replaceAll(" ", "");
		String expectedInput = expiryDate;
		Assert.assertEquals(actualInput, expectedInput, "wrong input expiry date");
	}

	public void fillCardCVV(String cvv) throws InterruptedException {
		inputField(cardCVVField, cvv);
	}

	public void selectPromo() throws InterruptedException {
		boolean isAnyPromo = driver.findElements(promoElement).size() != 0;
		int sizePromo = driver.findElements(promoElement).size();

		if (isAnyPromo) {
			checkPromoAmount(sizePromo);
		}
		
		String actualAmount = readText(amountField).replaceAll("[^0-9]+", "");
		data.setPrice(actualAmount);
	}
	
	public void checkPromoAmount(int sizePromo) throws InterruptedException {
		for (int i = 0; i < sizePromo; i++) {
			By promoCheckBox = By.xpath("(//input[@type='checkbox'])["+(1+i)+"]");
			By promoReduce = By.xpath("(//span[@class='pull-right text-gray'])["+(1+i)+"]");
			
			JavascriptExecutor jse = (JavascriptExecutor)driver;
			jse.executeScript("arguments[0].scrollIntoView(true);", driver.findElement(promoReduce));
			
			driver.findElement(promoCheckBox).click();
			
			String promo = driver.findElement(promoReduce).getText().replaceAll("[^0-9]+", "");
			int intPromo = Integer.parseInt(promo);
			
			String amount = data.getPrice();
			int intAmount = Integer.parseInt(amount);
			
			int amountAfterPromoApplied = intAmount - intPromo;
			
			String expectedAmount = Integer.toString(amountAfterPromoApplied);
			String actualAmount = readText(amountField).replaceAll("[^0-9]+", "");
			Assert.assertEquals(actualAmount, expectedAmount, "amount promo not same");
		}
	}

	public void checkCustomerDetail() throws InterruptedException {
		SoftAssert softAssert = new SoftAssert();
		String actualEmail = driver.findElement(creditCardEmailField).getAttribute("value");
		String expectedEmail = data.getEmail();
		softAssert.assertEquals(actualEmail, expectedEmail);
		
		String actualPhone = driver.findElement(creditCardPhoneField).getAttribute("value");
		String expectedPhone = data.getPhone();
		softAssert.assertEquals(actualPhone, expectedPhone);
			
		softAssert.assertAll();
	}

	public void clickPayNow() throws InterruptedException {
		boolean isCardInvalid = driver.findElements(invalidCardAlert).size() != 0;
		boolean isCardNumberError = driver.findElements(cardNumberError).size() != 0;
		boolean isExpiryDateError = driver.findElements(cardExpiryError).size() != 0;
		boolean isCVVError = driver.findElements(cardCVVError).size() != 0;
		
		if (!isCardNumberError || !isExpiryDateError || !isCVVError || !isCardInvalid) {
			click(paynowButton);
		}
		
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertFalse(isCardNumberError, "card number not available");
		softAssert.assertFalse(isExpiryDateError, "wrong expiry date");
		softAssert.assertFalse(isCVVError, "wrong CVV code");
		softAssert.assertFalse(isCardInvalid,"card is invalid");
		softAssert.assertAll();
	}

}
