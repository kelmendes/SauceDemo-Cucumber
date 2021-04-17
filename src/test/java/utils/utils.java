package utils;

import org.openqa.selenium.*;
import org.openqa.selenium.html5.LocalStorage;
import org.openqa.selenium.html5.WebStorage;
import org.openqa.selenium.interactions.Actions;
import stepdefinition.hook.Hook;

import java.util.Arrays;
import java.util.List;

import static stepdefinition.hook.Hook.getsDrivers;

public class utils {

        public static  List<String> strNomeProduto = Arrays.asList("Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Onesie",
            "Test.allTheThings() T-Shirt (Red)", "Sauce Labs Fleece Jacket", "Sauce Labs Bolt T-Shirt");

    public static List<String> getStrNomeProduto() {
        return strNomeProduto;
    }

    public static void moveToElement(By by){
        WebElement elementToGo = getsDrivers().findElement(by);
        Actions action = new Actions(getsDrivers());
        action.moveToElement(elementToGo).build().perform();
    }

    public static void scrollToElement(By by){
        ((JavascriptExecutor)getsDrivers()).executeScript("arguments[0].scrollIntoView();",getsDrivers().findElement(by));

    }

    public static void creatCookieProdutos(){
        getsDrivers().manage().getCookies();
        getsDrivers().manage().addCookie(new Cookie("cart-contents", "4,1,0,5,3,2"));

        LocalStorage local = ((WebStorage) getsDrivers()).getLocalStorage();
        local.clear();
        local.setItem("cart-contents", "4,1,0,5,3,2");
    }

}
