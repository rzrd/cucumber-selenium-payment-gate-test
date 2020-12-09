package pageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import utilities.Base;
import utilities.Data;

public class VerificationPage extends Base {
	
	public VerificationPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By titleVerificationPage = By.xpath("//h1[@class='left'][contains(.,'Issuing Bank')]");
	By timeLeftElement = By.xpath("//span[@id='timer']");
	By finalAmount = By.xpath("//p[@id='txn_amount']");
	By passwordField = By.xpath("//input[@type='password']");
	By okButton = By.xpath("//button[@type='submit'][contains(.,'OK')]");
	By cancelButton = By.xpath("//button[@name='cancel'][contains(.,'Cancel')]");
	By resendButton = By.xpath("//button[@name='resend'][contains(.,'Resend')]");
	By trxFailedAlert = By.xpath("//div[@class='final-panel failed']");
	By trxSuccessAlert = By.xpath("//div[@class='final-panel success']");
	
	public void checkPage() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		//*[@id="application"]/div[3]/div/div/div/iframe
//		boolean isVerificationPageAppear = driver.findElements(titleVerificationPage).size() != 0;
//		Assert.assertTrue(isVerificationPageAppear, "Verification page not loaded");
		
		SoftAssert softAssert = new SoftAssert();
		boolean isIframeAppear = driver.findElements(By.tagName("iframe")).size() != 0;
		System.out.println(driver.findElements(By.tagName("iframe")).size());
		softAssert.assertTrue(isIframeAppear, "iFrame not appear");

//		WebElement childFrame = driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/iframe"));
		driver.switchTo().frame(0);
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
//		boolean isVerificationPageAppear = driver.findElements(titleVerificationPage).size() != 0;
//		softAssert.assertTrue(isVerificationPageAppear, "verification page not loaded");
		
		softAssert.assertAll();
	}
	
	public void fillPassword(String password) throws InterruptedException {
		inputField(passwordField, password);		
	}
	
	public void clickOkButton() throws InterruptedException {
		String actualAmount = driver.findElement(finalAmount).getText().substring(0, -3);
		System.out.println(actualAmount);
		String expectedAmount = data.getPrice();
		Assert.assertEquals(actualAmount, expectedAmount);
		
		click(okButton);
	}
	
	public void checkTrxSuccess() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		boolean isTrxSuccessAlertAppear = driver.findElements(trxSuccessAlert).size() != 0;
		Assert.assertTrue(isTrxSuccessAlertAppear, "Verification & Transaction fail Alert appear");
	}

}
