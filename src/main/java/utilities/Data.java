package utilities;

public class Data {
	public static String url;
	public static String username;
	public static String password;
	public static String isHeadless;
	public static String closeBrowserEveryScenario;
	public static String takeScreenshot;
	public static String email;

	public String getUrl() {
		return url;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getIsHeadless() {
		return isHeadless;
	}

	public String getCloseBrowserEveryScenario() {
		return closeBrowserEveryScenario;
	}

	public String getTakeScreenshot() {
		return takeScreenshot;
	}

	public String getEmail() {
		return email;
	}

	public void setUrl(String url) {
		Data.url = url;
	}

	public void setUsername(String username) {
		Data.username = username;
	}

	public void setPassword(String password) {
		Data.password = password;
	}

	public void setIsHeadless(String isHeadless) {
		Data.isHeadless = isHeadless;
	}

	public void setCloseBrowserEveryScenario(String closeBrowserEveryScenario) {
		if (getIsHeadless().equalsIgnoreCase("yes") && closeBrowserEveryScenario.equalsIgnoreCase("no")) {
			closeBrowserEveryScenario = "yes";
		}
		Data.closeBrowserEveryScenario = closeBrowserEveryScenario;
	}

	public void setTakeScreenshot(String takeScreenshot) {
		Data.takeScreenshot = takeScreenshot;
	}

	public void setEmail(String email) {
		Data.email = email;
	}
}
