package pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SauceDemoLoginPO {
	WebDriver driver;

    public SauceDemoLoginPO(WebDriver getDriver) {
        this.driver = getDriver;
    }

    public void abrirBrowser(String urlSite){
        System.setProperty("webdriver.gecko.driver", "C:\\drivers\\geckodriver.exe");
        this.driver = new FirefoxDriver();

        this.driver.get(urlSite);
    }
    
    public void fecharBrowser() {
    	this.driver.close();
    	System.out.println("Browser Fechado!");
    }


    public void login (String nome, String senha){
        driver.findElement(By.xpath("//*[@id=\'user-name\']")).sendKeys(nome);
        driver.findElement(By.xpath("//*[@id=\'password\']")).sendKeys(senha);
    }
    
	public void clickBtnLogin() {
		driver.findElement(By.xpath("//*[@id=\'login-button\']")).click();
    }
	
	public void validarLoginHome() {
		driver.findElement(By.xpath("//*[@id=\'inventory_container\']")).isDisplayed();
		System.out.println("in Display");
	}
	
	public void alertaUsuarioBloqueado() {
		driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).isDisplayed();
		System.out.println("Alerta de usuário bloqueado foi encontrado");
	}
}
