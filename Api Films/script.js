const container = document.querySelector('.container');
const URLPATH = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const btnPagination = document.querySelector(".pagination");
const body = document.querySelector("body")
var cpt = 0;
var page = 0;
var suiv = false;
// sessionStorage.clear()
window.onload = () => {
    if (sessionStorage.getItem("page")) {
        // let url = URLPATH + page
        console.log(sessionStorage.getItem("page"))
        for (let i = 1; i <= sessionStorage.getItem("page"); i++) {
            page = i;
            console.log(page)
            let url = URLPATH + page
            data_fetch_api(url)
        }
        /* window.scrollTo({
            top: 10000,
            left: 0,
            behavior: 'smooth'
        }); */

    } else {
        page++
        let url = URLPATH + page
        data_fetch_api(url)
    }
}

/* window.onload = () => {

    localStorage.clear();
    if (!localStorage.getItem('data_films')) {

        alert(localStorage.getItem('data_films'))
        console.log(localStorage.getItem('data_films'))
            // populateStorage();
            // localStorage.setItem("data_films", document.querySelector(".container").innerHTML)
    } else {
        document.querySelector(".container").innerHTML = localStorage.getItem('data_films')
        console.log(localStorage.getItem('data_films'))
            // setStyles();
    }
} */

// var div_content = null;
// sessionStorage.clear();



var search = document.querySelector("#search-film");

document.querySelector("#search-film").onkeyup = function(e) {
    // console.log(e.target.value) 
    var urlq = SEARCHAPI + e.target.value;
    cpt = 0;
    // document.querySelector(".content").removeChild(childNodes)
    allChildNodes = container.querySelectorAll(".content");
    allChildNodes.forEach(child => {
        container.removeChild(child);
    });
    if (e.target.value != "") {
        data_fetch_api(urlq)
    } else {
        let url = URLPATH + page
        data_fetch_api(url)
    }


}


/* btnPagination.addEventListener("click", function(e) {
    let url = URLPATH + page
    data_fetch_api(url)
}) */
/* 
body.addEventListener("click", function(e) {
    let url = URLPATH + page
    data_fetch_api(url)
}) */

/* body.onscroll=function(){
    let url = URLPATH + page
    data_fetch_api(url)
} */

window.onscroll = function() {
    // document.body.scrollHeight
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        page++
        let url = URLPATH + page
        data_fetch_api(url)
    }
    // localStorage.clear()
    let pagesuiv = btnPagination.value
        // console.log("page Suiv: " + pagesuiv)
    sessionStorage.removeItem('pos_scroll');
    sessionStorage.removeItem('page');
    sessionStorage.setItem("pos_scroll", window.scrollY)
    sessionStorage.setItem("page", pagesuiv)
    console.log(window.scrollY)
};


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function create_film(film, cpt) {
    let div_film = createNode("div")
    let div_descip = createNode("div")
    let div_img = createNode("div")
    let div_titre = createNode("div")
    let h3 = createNode("h3")
    let p = createNode("p")
        // let img = createNode("img")
    let span = createNode("span")
    let button = createNode("button")
        // let div_load = createNode("div")
        //
        // img.src = IMGPATH + film.poster_path;
    var path = IMGPATH + film.poster_path
    div_img.style.backgroundImage = `url('${path}')`;
    h3.innerHTML = "Overview:";
    p.innerHTML = `${film.overview}`;
    button.innerHTML = `${film.vote_average}`;
    // span.innerHTML = `${author.name.first} ${author.name.last} ${author.gender}`;
    span.innerHTML = `${film.original_title}`;
    //
    div_film.classList.add("div-film")
    div_descip.classList.add("hide")
    div_img.classList.add("div-img")
    div_titre.classList.add("div-titre")
        // div_descip.style.height = 0;
        //
    append(div_descip, h3)
    append(div_descip, p)
        // append(div_img, img)
    append(div_titre, span)
    append(div_titre, button)
    append(div_film, div_img)
    append(div_film, div_titre)
    append(div_film, div_descip)
    document.querySelector(".container").lastElementChild.appendChild(div_film)
    div_film.addEventListener("mouseover", function(e) {

        div_img.setAttribute("class", "div-img-resize");
        div_descip.classList.remove("hide");
        div_titre.setAttribute("class", "hide");

        div_descip.classList.add("description")
            // div_descip.classList.add("show-des")
        e.currentTarget.classList.add("zoom-div-film")
    })

    div_film.addEventListener("mouseout", function(e) {
        div_img.setAttribute("class", "div-img");
        div_descip.classList.add("hide");
        div_titre.setAttribute("class", "div-titre");
        e.currentTarget.classList.remove("zoom-div-film")
    });
    // if (cpt >= 4) {
    //     div_film.classList.add("div-film-display")
    // }
    div_film.classList.add('aos-item');
    div_film.classList.add('aos-item__inner');
    div_film.setAttribute('data-aos', 'fade-up');
}
AOS.init({
    easing: 'ease-in-out-sine'
});

function data_fetch_api(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let films = data.results;
            // console.log(authors);

            // page++
            // console.log("Page: " + page)
            btnPagination.value = page;

            return films.map(function(film) {
                if (cpt > 4) { cpt = 0 }
                if (cpt == 0) {
                    var div_content = document.createElement('div');
                    // div_load.setAttribute("class", "loader center")
                    div_content.classList.add("content");
                    document.querySelector(".container").appendChild(div_content);
                    // document.reload
                    /* document.reload = function() {
                        console.log("oooo: " + div_content.readyState)
                        if (document.readyState !== "complete") {
                            div_content.style.visibility = "hidden";
                            document.querySelector(".loader").style.visibility = "visible";
                        } else {
                            setTimeout(() => {
                                document.querySelector(".loader").style.display = "none";
                                div_content.style.visibility = "visible";
                            }, 400);
                        }
                    }; */
                }

                create_film(film, cpt)

                // populateStorage();
                // localStorage.setItem("data_films", document.querySelector(".container").innerHTML)
                cpt++
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}

document.onreadystatechange = function() {

    document.querySelector(".container").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
    if (document.readyState) {
        setTimeout(() => {
            document.querySelector(".loader").style.display = "none";
            document.querySelector(".container").style.visibility = "visible";
            // alert(sessionStorage.getItem('pos_scroll'))
        }, 4000);
    }
    console.log(sessionStorage.getItem("pos_scroll"), )
    window.scrollTo({
        top: sessionStorage.getItem("pos_scroll"),
        left: 0,
        behavior: 'smooth'
    });

    if (sessionStorage.getItem("page")) {
        console.log("Scroll: " + sessionStorage.getItem('pos_scroll'))
        window.scrollTo({
            top: 10000,
            left: 0,
            behavior: 'smooth'
        });
    }


};

document.querySelector(".scroll-top").addEventListener("click", function() {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: sessionStorage.getItem("pos_scroll"),
        left: 0,
        behavior: 'smooth'
    });
})