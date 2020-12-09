package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import utilities.Base;
import utilities.Data;

public class ShoppingCartPage extends Base {

	public ShoppingCartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	Data data = new Data();

	By titleShoppingCartPage = By.xpath("//span[@data-reactid='.0.0.1.0.0.0'][contains(.,'Shopping Cart')]");
	By amountField = By.xpath("//input[@data-reactid='.0.0.1.0.1.0.1.0:$1.2.0']");
	By amountTotal = By.xpath("//td[@class='amount']");
	By nameField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.0.1.0']");
	By emailField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.1.1.0']");
	By phoneField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.2.1.0']");
	By cityField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.3.1.0']");
	By addressField = By.xpath("//textarea[@data-reactid='.0.0.1.0.3.0.0.4.1.0']");
	By postalCodeField = By.xpath("//input[@data-reactid='.0.0.1.0.3.0.0.5.1.0']");
	By checkoutButton = By.xpath("//div[@class='cart-checkout'][contains(.,'CHECKOUT')]");
	By cancelButton = By.xpath("//div[@class='cancel-btn'][contains(.,'cancel')]");

	public void checkPage() throws InterruptedException {
		boolean isCartPageAppear = driver.findElements(titleShoppingCartPage).size() != 0;
		Assert.assertEquals(isCartPageAppear, true);
	}

	public void fillAmount(String amount) throws InterruptedException {
		data.setPrice(amount);
		String expectedAmount = data.getPrice();
		inputAmount(amountField, expectedAmount);
		String actualAmount = readText(amountTotal).replaceAll(",", "");
		Assert.assertEquals(actualAmount, expectedAmount);
	}

	public void fillName(String name) throws InterruptedException {
		inputField(nameField, name);
	}

	public void fillEmail(String email) throws InterruptedException {
		inputField(emailField, email);
	}

	public void fillPhone(String phone) throws InterruptedException {
		inputField(phoneField, phone);
	}

	public void fillCity(String city) throws InterruptedException {
		inputField(cityField, city);
	}

	public void fillAddress(String address) throws InterruptedException {
		inputField(addressField, address);
	}

	public void fillPostalCode(String code) throws InterruptedException {
		inputField(postalCodeField, code);
	}

	public void clickCheckout() throws InterruptedException {
		click(checkoutButton);
	}

//	public void fill() throws InterruptedException {
//
//	}

}
