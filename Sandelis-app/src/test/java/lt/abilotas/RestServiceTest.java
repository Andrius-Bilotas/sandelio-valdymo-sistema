package lt.abilotas;

import com.jayway.restassured.RestAssured;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static com.jayway.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.is;

@RunWith(SpringJUnit4ClassRunner.class)

@SpringBootTest(classes = App.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class RestServiceTest {
    @Value("${local.server.port}")
    int port;

    @Before
    public void setUp() throws Exception {
        RestAssured.port = port;
    }

    
    @Test
    public void testHello() throws Exception {
        when().get("/api/clients/test").then()
                .body(is("Hello"));
    }
  
}