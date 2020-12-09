package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import utilities.Base;
import utilities.Data;

public class Homepage extends Base {
	
	public Homepage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By buyNowButton = By.xpath("//a[@class='btn buy'][contains(.,'BUY NOW')]");
	By errorAlert = By.xpath("//div[@data-reactid='.0.0.0.2.0.1.0']");
	By closeAlertButton = By.xpath("//div[@class='close']");
	By homepageSuccessAlert = By.xpath("//div[@class='trans-status trans-success']");
	
	public void goToHomepage() throws InterruptedException {
		reportLog("URL set:" + data.getUrl());
		String url = data.getUrl();
		driver.get(url);
		waitPageLoadUrl(url);
		String actualUrl = driver.getCurrentUrl();
		Assert.assertEquals(actualUrl, url);
	}
	
	public void clickBuyNowButton() throws InterruptedException {
		click(buyNowButton);
	}
	
	public void checkPurchaseSuccess() throws InterruptedException {
		driver.switchTo().defaultContent();
		boolean isTrxSuccessAlertAppear = driver.findElements(homepageSuccessAlert).size() != 0;
		Assert.assertFalse(isTrxSuccessAlertAppear, "Verification & Transaction fail Alert appear");
	}
}
