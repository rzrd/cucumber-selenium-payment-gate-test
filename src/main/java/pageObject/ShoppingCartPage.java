package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import utilities.Base;
import utilities.Data;

public class ShoppingCartPage extends Base {
	
	public ShoppingCartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	Data data = new Data();
	
	By titleShoppingCartPage = By.xpath("//span[@data-reactid='.0.0.1.0.0.0'][contains(.,'Shopping Cart')]");
	By amountField = By.xpath("//input[@data-reactid='.0.0.1.0.1.0.1.0:$1.2.0']");
	By amount = By.xpath("//td[@class='amount']");
	By nameField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.0.1.0']");
	By emailField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.1.1.0']");
	By phoneField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.2.1.0']");
	By cityField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.3.1.0']");
	By addressField = By.xpath("//textarea[@data-reactid='.0.0.1.0.3.0.0.4.1.0']");
	By postalCodeField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.5.1.0']");
	By checkoutButton = By.xpath("//div[@class='cart-checkout'][contains(.,'CHECKOUT')]");
	By cancelButton = By.xpath("//div[@class='cancel-btn'][contains(.,'cancel')]");
	
	
	

}
