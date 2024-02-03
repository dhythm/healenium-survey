import { Builder, Browser, By, Capabilities, until } from 'selenium-webdriver'

(async function main() {
  const NODE_URL = "http://localhost:8085";

  let args = [
      "--no-sandbox"
  ];

  let chromeCapabilities = Capabilities.chrome()
      .set('chromeOptions', { args });

  let driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .withCapabilities(chromeCapabilities).usingServer(NODE_URL).build();
  // let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('http://localhost:5173')
    await driver.sleep(1000)
    const button = await driver.findElement(By.id('counter_button'))
    await driver.wait(until.elementIsVisible(button), 3000);
    button.click()
    await driver.sleep(1000)
  } finally {
    await driver.quit()
  }
})()
