import time
from selenium import webdriver
from selenium.webdriver.common.by import By


def test_example():
    node_url = "http://localhost:8085"

    options = webdriver.ChromeOptions()
    options.add_argument("--no-sandbox")
    # options.add_argument("--disable-dev-shm-usage")
    options.set_capability("browserName", "chrome")

    driver = webdriver.Remote(
        command_executor=node_url,
        options=options,
    )

    driver.get("http://host.docker.internal:5173")

    time.sleep(1)
    element = driver.find_element(By.ID, "counter_button")
    element.click()
    time.sleep(1)
    driver.quit()
