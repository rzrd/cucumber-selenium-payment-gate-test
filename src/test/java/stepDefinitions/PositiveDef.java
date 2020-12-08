package stepDefinitions;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import utilities.Base;
import utilities.ClassHelp;
import utilities.Data;

public class PositiveDef {
	WebDriver driver;
	Base base = new Base();
	Data data = new Data();


	@Given("Initiate browser")
	public void initiate_browser() throws Throwable {
		data.setIsHeadless(ClassHelp.getEnv("isHeadless"));
		data.setCloseBrowserEveryScenario(ClassHelp.getEnv("closeBrowser"));

		base = new Base();
		driver = base.openBrowser(ClassHelp.getEnv("browser"));
		driver.manage().window().setSize(new Dimension(1366, 768));
		System.out.println("Driver set: " + driver);
		driver.manage().window().maximize();
	}

}
