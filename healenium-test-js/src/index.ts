import { Builder, Browser, By, until } from 'selenium-webdriver'

(async function main() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
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
