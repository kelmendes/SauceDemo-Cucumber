package pageobjects;

public class SauceDemoCartPO {

    public String divContainerListaDeItensHome = "//*[@id=\'inventory_container\']";
    public String spanQtdItensCarrinho = "//a[@class='shopping_cart_link fa-layers fa-fw']/span";
    public String cartIcone = "//a[@class='shopping_cart_link fa-layers fa-fw']";

    public String btnCheckout = "//a[text()='CHECKOUT']";
    public String inputCheckoutName = "//*[@id='first-name']";
    public String inputCheckoutLastName = "//*[@id='last-name']";
    public String inputCheckoutCEP ="//*[@id='postal-code']";
    public String btnCheckoutContinue = "//input[@value='CONTINUE']";
    public String btnFinish = "FINISH";

}