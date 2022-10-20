package com.invoice;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class InvoiceTest {
	 @Test
	  public void saveInvoiceDetails() {
		  wd.get("http://localhost:4200/create-invoice");  
		  wd.manage().window().maximize();
		    wd.manage().timeouts().implicitlyWait(Duration.ofMinutes(2));
		    
		    try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		    
		    WebElement textFiledRef = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[1]"));
		    textFiledRef.sendKeys("ravi");
		    WebElement textFiledRef1 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[2]"));
		    textFiledRef1.sendKeys("22-01-2006");
		    WebElement textFiledRef2 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[3]"));
		    textFiledRef2.sendKeys("dengue");
		    WebElement textFiledRef3= wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[4]"));
		    textFiledRef3.sendKeys("500");
		    WebElement textFiledRef4 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[5]"));
		    textFiledRef4.sendKeys("700");
		    WebElement textFiledRef5 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[6]"));
		    textFiledRef5.sendKeys("200");
		    WebElement textFiledRef6 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[7]"));
		    textFiledRef6.sendKeys("6-7,gandinagar");
		    WebElement textFiledRef7 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[8]"));
		    textFiledRef7.sendKeys("986574123");
		    WebElement textFiledRef8 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[9]"));
		    textFiledRef8.sendKeys("26-02-2006");
		    WebElement textFiledRef9 = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[10]"));
		    textFiledRef9.sendKeys("200");
		    try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		    
		    WebElement submitButtonRef = wd.findElement(By.xpath("/html/body/app-root/html/body/app-create-invoice/div/form/input[11]"));
		    submitButtonRef.click();
		    
	  }
	  
	 
	  
	  
	  WebDriver wd;
	  
	  @BeforeMethod
	  public void beforeMethod() {
	  	  System.setProperty("webdriver.edge.driver", "C:\\Users\\HP\\eclipse-workspace\\PracticeProject\\src\\phase 5 practice projects\\msedgedriver.exe");
	  		
	  		 wd = new EdgeDriver();
	  		 
	  		
	  }

	  @AfterMethod
	  public void afterMethod() {
	  }

	  


}
