package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

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
			
	By promoElement = By.xpath("//div[@class='input-group col-xs-12']");
	By promoCheckBox = By.xpath("//input[@type='checkbox']");
	By promoReduce = By.xpath("//span[@class='pull-right text-gray']");
	
	By creditCardEmailField = By.xpath("//input[@type='email']");
	By creditCardPhoneField = By.xpath("//input[@maxlength='20']");
	
	By paynowButton = By.xpath("//a[@class='button-main-content'][contains(.,'Pay Now')]");
	
	
	
	

}
