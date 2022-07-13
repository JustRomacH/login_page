import os
import requests
from fake_useragent import UserAgent
from bs4 import BeautifulSoup as bs


def parse(color):
    # Get html
    match color.lower():
        case "red":
            url = "https://lookcolor.ru/news/krasnye-cveta/"
        case "green":
            url = "https://lookcolor.ru/news/zelenye-cveta/"
        case "blue":
            url = "https://lookcolor.ru/news/sinie-cveta/"

    ua = UserAgent()

    headers = {
        "User_Agent": ua.random
    }
    request = requests.get(url, headers=headers)

    html = request.text

    # Gets all tr
    soup = bs(html, "lxml")
    tr_list = soup.find("table").findAll("tr")

    # Var for BeautifulSoup
    colors_str = ""

    for tr in tr_list:
        # If paragraph in tr
        if not tr.find("p"):
            colors_str += str(tr)

    # Find all td
    td_list = bs(colors_str, "lxml").find_all("td")

    # Write list to js file
    with open(".\scripts\colors.js", "a", encoding="utf-8") as f:
        f.write(f"const {color}_colors = [")

        for color in td_list[:-1]:
            f.write(f'"#{color["bgcolor"]}",')

        f.write(f' "#{td_list[-1]["bgcolor"]}"]')


def main():
    parse("blue")


if __name__ == '__main__':
    main()
