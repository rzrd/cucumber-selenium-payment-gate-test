package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import utilities.Base;
import utilities.Data;

public class SelectPaymentPage extends Base {
	
	public SelectPaymentPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By titlePaymentPage = By.xpath("//p[@class='text-page-title-content'][contains(.,'Select Payment')]");
	By creditCardButton = By.xpath("//a[@href='#/credit-card']");
	
	

}
