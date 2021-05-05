from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
URL = "https://gamvip.com/"
op = ['--disable-extensions']
chrome_op = webdriver.ChromeOptions()

chrome_op.add_argument("--no-sandbox")
chrome_op.add_argument("--disable-web-security")
chrome_op.add_argument("--enable-webgl")
chrome_op.add_argument("--ignore-gpu-blacklist")

driver = webdriver.Chrome(executable_path="./chromedriver.exe", options=chrome_op)
driver.get(URL)
time.sleep(1)
user = driver.find_element_by_name("txtUsername").send_keys("longg123")
passw = driver.find_element_by_name("txtPassword")
passw.send_keys("240800")

passw.send_keys(Keys.RETURN)
time.sleep(3)
# close_noti = driver.find_element_by_class_name("button-close")
def closeAll():
    close_top_up = driver.find_element_by_css_selector(".ic-close")
    close_top_up.click()
    # for clo in close_top_up:
    #     clo.click()


# driver.quit()