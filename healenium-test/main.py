import time
from selenium import webdriver
from selenium.webdriver.common.by import By


def main():
    node_url = "http://localhost:8085"

    options = webdriver.ChromeOptions()
    options.add_argument("--no-sandbox")

    # driver = webdriver.Chrome()
    driver = webdriver.Remote(
        command_executor=node_url,
        options=options,
    )

    driver.get("http://localhost:5173")
    time.sleep(1)
    element = driver.find_element(By.ID, "counter_button")
    element.click()
    time.sleep(1)
    driver.quit()


if __name__ == "__main__":
    start = time.time()
    main()
    elapsed_time = time.time() - start
    print("elapsed_time: {0:0.2f}".format(elapsed_time) + "[sec]")
