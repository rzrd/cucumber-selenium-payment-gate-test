package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

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
	By passwordField = By.xpath("//input[@id='PaRes']");
	By okButton = By.xpath("//button[@type='submit'][contains(.,'OK')]");
	By cancelButton = By.xpath("//button[@name='cancel'][contains(.,'Cancel')]");
	By resendButton = By.xpath("//button[@name='resend'][contains(.,'Resend')]");
	By trxFailedAlert = By.xpath("//div[@class='final-panel failed']");

}
