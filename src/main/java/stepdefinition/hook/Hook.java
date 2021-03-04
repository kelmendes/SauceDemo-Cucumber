package stepdefinition.hook;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {

    @Before
    public void tearUP(){
        System.out.println("+++++ UP - HOOK ++++++++++++");
    }

    @After
    public void tearDown(){
        System.out.println("+++++++++ Down - HOOK +++++++++++");
    }


}
