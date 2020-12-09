package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import utilities.Base;
import utilities.Data;

public class OrderSummaryPage extends Base {
	
	public OrderSummaryPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By titleOrderSummaryPage = By.xpath("//p[@class='text-page-title-content'][contains(.,'Order Summary')]");
	By summaryAmountField = By.xpath("//span[@class='text-amount-amount']");
	By summaryAmountField2 = By.xpath("//td[@class='table-amount text-body']");
	By shippingDetailTab = By.xpath("//span[contains(.,'shipping details')]");
	By shippingNameField = By.xpath("(//div[@class='text-body'])[1]");
	By shippingPhoneField = By.xpath("(//div[@class='text-body'])[2]");
	By shippingEmailField = By.xpath("(//div[@class='text-body'])[3]");
	By shippingAddressField = By.xpath("(//div[@class='text-body'])[4]");
	By continueButton = By.xpath("//a[@class='button-main-content'][contains(.,'Continue')]");

}
