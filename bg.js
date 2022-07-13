import { colors } from "./colors.js";


//? Рандомный цвет span'а
function random_color() {
    var rounds = document.getElementsByClassName("round_span");
    for (var span = 0; span < rounds.length; span++) {
        var bg_color = colors[getRandomInt(0, colors.length)];
        var shadow_color = bg_color + "44";
        rounds[span].style.background = bg_color;
        rounds[span].style.boxShadow = "0 0 0 10px " + shadow_color + ", 0 0 50px " + bg_color + ", 0 0 100px " + bg_color;
    }
}


//* Рандомная скорость span'а
function random_speed() {
    var rounds = document.getElementsByTagName("span");
    var first = true;
    for (var span = 0; span < rounds.length; span++) {
        //! Если первый шар
        if (first == true) {
            rounds[span].style.setProperty("--i", getRandomInt(10, 27));
            first = false;
        } else {
            var randint = getRandomInt(10, 27);
            //? Проверка совпадения скоростей соседних span'ов
            if (randint == rounds[span - 1].style.getPropertyValue("--i")) {
                rounds[span].style.setProperty("--i", getRandomInt(10, 27));
            }
            else { 
                rounds[span].style.setProperty("--i", randint);
            }
        }
    }
}


//? Создание нужного количества span'ов
function create_span() {
    var round = document.getElementsByTagName("span")[0];
    const ScreenWidth = window.outerWidth;
    var round_size = Number(window.getComputedStyle(round).getPropertyValue("width").slice(0,-2));
    var round_margin = 2*Number(window.getComputedStyle(round).getPropertyValue("margin").slice(4,-2));
    var total_size = round_size + round_margin;
    for (var i = 0; i < Math.round(ScreenWidth/total_size); i++) {
        var clone = round.cloneNode(true);
        document.getElementsByClassName("bubbles")[0].appendChild(clone);
    }
    round.style.marginLeft = "10px";
}


//* Рандомный int
function getRandomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


//! Старт после загрузки 
$(function() {
    create_span();
    random_color();
    random_speed();
});