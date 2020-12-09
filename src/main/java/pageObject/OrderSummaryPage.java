package pageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

import utilities.Base;
import utilities.Data;

public class OrderSummaryPage extends Base {
	
	public OrderSummaryPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By titleOrderSummaryPage = By.xpath("//p[@class='text-page-title-content'][contains(.,'Order Summary')]");
	By closeFrame = By.xpath("//a[@class='header-back']");
	By summaryAmountField = By.xpath("//span[contains(@class,'text-amount-amount')]");
	By summaryAmountField2 = By.xpath("//td[@class='table-amount text-body']");
	By shippingDetailTab = By.xpath("//span[contains(.,'shipping details')]");
	By shippingNameField = By.xpath("(//div[@class='text-body'])[1]");
	By shippingPhoneField = By.xpath("(//div[@class='text-body'])[2]");
	By shippingEmailField = By.xpath("(//div[@class='text-body'])[3]");
	By shippingAddressField = By.xpath("(//div[@class='text-body'])[4]");
	By continueButton = By.xpath("//a[@class='button-main-content'][contains(.,'Continue')]");

	public void checkPage() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		
		SoftAssert softAssert = new SoftAssert();
		boolean isIframeAppear = driver.findElements(By.tagName("iframe")).size() != 0;
		softAssert.assertTrue(isIframeAppear, "iFrame not appear");

		driver.switchTo().frame("snap-midtrans");		
		
		boolean isSummaryPageAppear = driver.findElements(titleOrderSummaryPage).size() != 0;
		softAssert.assertTrue(isSummaryPageAppear, "summary page not loaded");
		
		softAssert.assertAll();
	}
	
	public void checkAmount() throws InterruptedException {
		SoftAssert softAssert = new SoftAssert();
		
		String expectedAmount = data.getPrice();
		String actualAmount = readText(summaryAmountField).replaceAll(",", "");
		softAssert.assertEquals(actualAmount, expectedAmount, "Price not same");

		String actualAmount2 = readText(summaryAmountField2).replaceAll(",", "");
		softAssert.assertEquals(actualAmount2, expectedAmount, "Price not same");
		
		softAssert.assertAll();
	}
	
	public void checkShippingDetails() throws InterruptedException {
		click(shippingDetailTab);
		
		SoftAssert softAssert = new SoftAssert();
		
		String expectedName = data.getName();
		String actualName = readText(shippingNameField);
		softAssert.assertEquals(actualName, expectedName, "Name not same");
		
		String expectedPhone = data.getPhone();
		String actualPhone = readText(shippingPhoneField);
		softAssert.assertEquals(actualPhone, expectedPhone, "Phone not same");
		
		String expectedEmail = data.getEmail();
		String actualEmail = readText(shippingEmailField);
		softAssert.assertEquals(actualEmail, expectedEmail, "Email not same");
		
		String expectedAddress = data.getAddress() + " " + data.getCity() + " " + data.getCode();
		String actualAddress = readText(shippingAddressField);
		softAssert.assertEquals(actualAddress, expectedAddress, "Address not same");

		softAssert.assertAll();
	}
	
	public void clickContinue() throws InterruptedException {
		click(continueButton);
	}
}
