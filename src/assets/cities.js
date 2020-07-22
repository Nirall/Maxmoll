const cities = [    
    "Архангельск",
    "Астрахань",
    "Барнаул",
    "Белгород",
    "Брянск",
    "Владивосток",
    "Владикавказ",
    "Владимир",
    "Волгоград",
    "Волжский",
    "Вологда",
    "Воронеж",
    "Грозный",
    "Екатеринбург",
    "Иваново",
    "Ижевск",
    "Иркутск",
    "Казань",
    "Калининград",
    "Калуга",
    "Каменск-Уральский",
    "Кемерово",
    "Киров",
    "Комсомольск-на-Амуре",
    "Кострома",
    "Краснодар",
    "Красноярск",
    "Курган",
    "Курск",
    "Липецк", 
    "Магнитогорск",
    "Махачкала",
    "Москва",
    "Мурманск",
    "Набережные Челны",
    "Нижневартовск",
    "Нижний Новгород",
    "Нижний Тагил",
    "Новокузнецк",
    "Новосибирск",
    "Омск",
    "Орел",
    "Оренбург",
    "Пенза",
    "Пермь",
    "Петрозаводск",
    "Ростов-на-Дону",
    "Рязань",
    "Самара",
    "Санкт-Петербург",
    "Саранск",
    "Саратов",
    "Смоленск",
    "Сочи",
    "Ставрополь",
    "Стерлитамак",
    "Сургут",
    "Таганрог",
    "Тамбов",
    "Тверь",
    "Тольятти",
    "Томск",
    "Тула",
    "Тюмень",
    "Улан-Удэ",
    "Ульяновск",
    "Уфа",
    "Хабаровск",
    "Чебоксары",
    "Челябинск",
    "Череповец",
    "Чита",
    "Якутск",
    "Ярославль",
]

$("#citiesInput").autocomplete({
    source: cities
});

const entry = $("#citiesModal .wrapper-form__citiesList");
let entryBlock = createBlock("А");
entry.append(entryBlock);

let letter = "А";
let newletter = "А";
let targetInput = $("#citiesInput");
for (let i of cities) {
    newletter = i[0];
    item = createItem(i);
    if (newletter !== letter) {
        entryBlock = createBlock(newletter);
        entry.append(entryBlock);
        letter = newletter;
    }
    entryBlock.append(item);
}

function createItem(cont) {
    let item = $("<p>", {text: cont});
    item.click(() => {
        targetInput.val(item.html());
    })
    return item;
}
function createBlock(cont) {
    let blockCities = $('<div>', {class: "form__citiesBlock"});
    blockCities.append(`<h3>${cont}</h3>`);
    return blockCities;
}
