package pageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import utilities.Base;
import utilities.Data;

public class SelectPaymentPage extends Base {
	
	public SelectPaymentPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By titlePaymentPage = By.xpath("//p[@class='text-page-title-content'][contains(.,'Select Payment')]");
	By creditCardButton = By.xpath("//a[@href='#/credit-card']");
	
	public void checkPage() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		boolean isPaymentPageAppear = driver.findElements(titlePaymentPage).size() != 0;
		Assert.assertTrue(isPaymentPageAppear, "payment page not loaded");
	}
	
	public void selectCreditCardPayment() throws InterruptedException {
		click(creditCardButton);
	}

}
