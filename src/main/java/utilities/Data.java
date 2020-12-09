package utilities;

public class Data {
	public static String url;
	public static String username;
	public static String password;
	public static String isHeadless;
	public static String closeBrowserEveryScenario;
	public static String takeScreenshot;
	public static String email;
	public static String price;
	public static String name;
	public static String phone;
	public static String address;
	public static String city;
	public static String code;

	public String getCity() {
		return city;
	}

	public String getCode() {
		return code;
	}

	public void setCity(String city) {
		Data.city = city;
	}

	public void setCode(String code) {
		Data.code = code;
	}

	public String getName() {
		return name;
	}

	public String getPhone() {
		return phone;
	}

	public String getAddress() {
		return address;
	}

	public String getPrice() {
		return price;
	}

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

	public void setName(String name) {
		Data.name = name;
	}

	public void setPhone(String phone) {		
		String strPhone = phone.substring(0, 1);
		String newPhone = strPhone.replace("0", "+62") + phone.substring(1);
		if(strPhone.equals("0")) {
			Data.phone = newPhone;
			System.out.println(newPhone);
		}
		
		if(!strPhone.equals("0")) {
			Data.phone = phone;
		}
	}

	public void setAddress(String address) {
		Data.address = address;
	}

	public void setPrice(String price) {
		Data.price = price;
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
