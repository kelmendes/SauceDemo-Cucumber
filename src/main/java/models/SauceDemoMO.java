package models;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class SauceDemoMO {
    WebDriver driver;

    public SauceDemoMO(WebDriver getDriver) {
        this.driver = getDriver;
    }

    public void abrirBrowser(String urlSite){
        System.setProperty("webdriver.gecko.driver", "C:\\drivers\\geckodriver.exe");
        this.driver = new FirefoxDriver();

        this.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        this.driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        this.driver.manage().deleteAllCookies();
        this.driver.manage().window().setSize(new Dimension(1280,600));
//        this.driver.manage().window().maximize();

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
        driver.findElement(By.xpath("//h3[@data-test='error']")).isDisplayed();
        System.out.println("Alerta de usuário bloqueado foi encontrado");
    }

    public void adicionarItensAoCarrinho(List<String> listItensAdicionar){
        for(int i=0;i<listItensAdicionar.size();i++) {
            driver.findElement(By.xpath("//div[text()='" + listItensAdicionar.get(i) + "']/./../../../div[3]/button")).click();
        }
    }

    public void verificarContador(int intQuantidadeItens){
        String strQuantideCart = driver.findElement(By.xpath("//a[@class='shopping_cart_link fa-layers fa-fw']/span")).getText();
        int intQuantideCart = Integer.parseInt(strQuantideCart);
        Assert.assertArrayEquals(new int[]{intQuantidadeItens}, new int[]{intQuantideCart});
    }

    public void acessarCartdeCompras(){
        driver.findElement(By.xpath("//a[@class='shopping_cart_link fa-layers fa-fw']")).click();
    }

    public void verificarItensNoCarrinho(List<String> listIntensCart){
        for(int i=0;i<listIntensCart.size();i++) {
            driver.findElement(By.xpath("//div[text()='" + listIntensCart.get(i) + "']")).isDisplayed();
        }
    }

    public void clicarBtnCheckout(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath("//a[text()='CHECKOUT']")));
        driver.findElement(By.xpath("//a[text()='CHECKOUT']")).click();
    }

    public void preencherDadosDoCheckout(){
        driver.findElement(By.xpath("//*[@id='first-name']")).sendKeys("TESTE NOME");
        driver.findElement(By.xpath("//*[@id='last-name']")).sendKeys("SOBRE NOME");
        driver.findElement(By.xpath("//*[@id='postal-code']")).sendKeys("55034090");
    }

    public void clicarBtnContinue(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath("//input[@value='CONTINUE']")));
        driver.findElement(By.xpath("//input[@value='CONTINUE']")).click();
    }

    public void clicarBtnFinish(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.linkText("FINISH")));
        driver.findElement(By.linkText("FINISH")).click();
    }

    public void validarTelaDespachoOrdem(){
        //h2[@class='complete-header'] = THANK YOU FOR YOUR ORDER
        //div[@class='complete-text'] = Your order has been dispatched, and will arrive just as fast as the pony can get there!
        driver.findElement(By.xpath("//h2[@class='complete-header']")).isDisplayed();
        driver.findElement(By.xpath("//div[@class='complete-text']")).isDisplayed();


    }
}
