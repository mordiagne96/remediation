const RANDOM_RECETTE = "https://www.themealdb.com/api/json/v1/1/random.php";
const SEARCH_ID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SEARCH_NAME = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const input_search = document.querySelector("#search")
    // alert("ok")
const block_2 = document.querySelector(".block_2")

data_fetch_api(RANDOM_RECETTE)
data_fetch_api_random(RANDOM_RECETTE)

input_search.onkeyup = search_recette;


function data_fetch_api(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let recettes = data.meals;
            return recettes.map(function(recette) {
                // console.log(recette.strMeal)
                create_favorite_image(recette)
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}

function data_fetch_api_random(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let recettes = data.meals;
            return recettes.map(function(recette) {
                // console.log(recette.strMeal)
                random_recette(recette)
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}

function data_fetch_api_search(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            // console.log(data)
            let recettes = data.meals;
            // console.log(recettes)
            allRecette = block_2.querySelectorAll(".recette")
            allRecette.forEach(el => {
                block_2.removeChild(el)
            });
            console.log(recettes)
            return recettes.map(function(recette) {
                // console.log(recette.strMeal)

                random_recette(recette)
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}

function create_element(el) {
    return document.createElement(el);
}

function append(parent, child) {
    parent.appendChild(child);
}


function create_favorite_image(recette) {
    // console.log(recette)
    let div_img_fav = create_element("div")
    let img_fav = create_element("img")
    let span_fav = create_element("span")

    div_img_fav.classList.add("favorite-img")
    img_fav.src = `${recette.strMealThumb}`
    span_fav.innerHTML = `${recette.strMeal}`
        // console.log(span_fav)
    append(div_img_fav, img_fav)
    append(div_img_fav, span_fav)
    append(document.querySelector(".favorite"), div_img_fav)
}


function random_recette(recette) {
    let div_recette = create_element("div")
    let div_titre_recette = create_element("div")
    let btn_genere_recette = create_element("button")
    let img_recette = create_element("img")
    let span_titre_recette = create_element("span")
    let heart = create_element("i")

    div_recette.classList.add("recette")
    btn_genere_recette.classList.add("btn-generer")
    img_recette.src = `${recette.strMealThumb}`
    span_titre_recette.innerHTML = `${recette.strMeal}`
    heart.className = "fa-solid fa-heart"
    btn_genere_recette.innerHTML = "Generer une Recette"
    div_titre_recette.classList.add("div-titre")
        // console.log(span_titre_recette)
        // div_titre_recette.appendChild(span_titre_recette)
    append(div_titre_recette, span_titre_recette)
        // console.log(div_titre_recette)
    append(div_titre_recette, heart)
    append(div_recette, btn_genere_recette)
    append(div_recette, img_recette)
    append(div_recette, div_titre_recette)

    // create_popup(recette)

    // let block = document.querySelector(".block_2")

    append(block_2, div_recette)

    btn_genere_recette.addEventListener("click", function() {
        block_2.removeChild(block_2.firstElementChild)
        data_fetch_api_random(RANDOM_RECETTE)
    })

    heart.addEventListener("click", function() {
        document.querySelector("body").classList.add("body")
        append(div_recette, create_popup(recette))
    })


}


function search_recette() {
    console.log(input_search.value)
    var URL_SEARCH = ""
        // console.log(Number(input_search.value))
    if (Number(input_search.value.trim())) {
        URL_SEARCH = SEARCH_ID + input_search.value
    } else {
        URL_SEARCH = SEARCH_NAME + input_search.value
    }

    data_fetch_api_search(URL_SEARCH)
}

function create_popup(recette) {
    let div_popup = create_element("div");
    let div_descript = create_element("div");
    let ul_popup = create_element("ul");
    let img_popup = create_element("img")
    let btn_popup = create_element("button")
    let span_titre = create_element("span")
    let span_ingred = create_element("span")
    let para_descript = create_element("p")

    div_popup.classList.add("popup")
    div_descript.classList.add("descript")
    span_ingred.innerHTML = "Ingredients:"
    btn_popup.innerHTML = "X"
    img_popup.src = `${recette.strMealThumb}`
    span_titre.innerHTML = `${recette.strMeal}`
    para_descript.innerHTML = `${recette.strInstructions}`
    var i = 1
    var key = "strIngredient" + i
        // console.log(key)
    while (recette[key] != "" && recette[key] != " " && i <= 20) {
        i++
        key = "strIngredient" + i
        let li = create_element("li")
        li.innerHTML = `${recette[key]}`
        if (i <= 20) {
            append(ul_popup, li)
        }
    }

    append(div_descript, para_descript)
    append(div_descript, span_ingred)
    append(div_descript, ul_popup)
    append(div_popup, btn_popup)
    append(div_popup, span_titre)
    append(div_popup, img_popup)
    append(div_popup, div_descript)
    btn_popup.addEventListener("click", function(e) {
        e.target.parentElement.remove(e.target)
        document.querySelector("body").classList.remove("body")
    })

    window.onclick = function(event) {
        if (event.target == document.querySelector("body")) {
            btn_popup.parentElement.remove(btn_popup)
            document.querySelector("body").classList.remove("body")
        }
    }
    return div_popup;
}