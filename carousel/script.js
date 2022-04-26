// const allCarousel = document.querySelectorAll(".carousel")
const allIconeP = document.querySelectorAll(".fa-circle")
const body = document.querySelector("body")
const main = document.querySelector(".main")
var pos = 0;


var tab_image = ["img/image-1.jpg", "img/image-2.jpg", "img/image-3.jpg", "img/image-4.jpg", "img/image-5.jpg"]
create_icone(main, "fa-solid fa-chevron-left prec")
for (const key in tab_image) {
    if (Object.hasOwnProperty.call(tab_image, key)) {
        create_img_carousel(main, tab_image[key], key)
            // console.log("ok")
    }
}
create_icone(main, "fa-solid fa-chevron-right suiv")
const allCarousel = document.querySelectorAll(".carousel")

setInterval(function() {
    pos++
    defilCarousel()
}, 1000);


// function

/* 

allCarousel.forEach(el => {
    el.addEventListener("mouseover", function(e) {
        // alert('ok')
        e.currentTarget.classList.toggle("zoom");

        var img = e.currentTarget.querySelector("img").src
        console.log(img)

        body.style.backgroundImage = `url('${img}')`;
        body.style.back = 0.3
    })

    el.addEventListener("mouseout", function(e) {
        e.currentTarget.classList.toggle("zoom")
        body.style.backgroundImage = "";

    })
});

function defilCarousel() {
    pos++;
    if (pos >= allCarousel.length) { pos = 0 }
    if (pos < 0) { pos = allCarousel.length - 1 }

    for (let i = 0; i < allCarousel.length; i++) {
        if (i == pos) {
            if (!allCarousel[i].classList.contains("active")) {
                allCarousel[i].classList.toggle("active")
                allIconeP[i].classList.toggle("active-icone")
            }
        } else {
            if (allCarousel[i].classList.contains("active")) {
                allCarousel[i].classList.toggle("active")
                allIconeP[i].classList.toggle("active-icone")
            }
            // allCarousel[i].classList.remove("active")
            // allIconeP[i].classList.toggle("active-icone")
        }

    }
    console.log(pos)

    document.querySelector(".prec").addEventListener("click", function(e) {
        pos--
        if (pos >= allCarousel.length) { pos = 0 }
        if (pos < 0) { pos = allCarousel.length - 1 }

        for (let i = 0; i < allCarousel.length; i++) {
            if (i == pos) {
                if (!allCarousel[i].classList.contains("active")) {
                    allCarousel[i].classList.toggle("active")
                    allIconeP[i].classList.toggle("active-icone")
                }
            } else {
                if (allCarousel[i].classList.contains("active")) {
                    allCarousel[i].classList.toggle("active")
                    allIconeP[i].classList.toggle("active-icone")
                }
                // allCarousel[i].classList.remove("active")
                // allIconeP[i].classList.toggle("active-icone")
            }
        }

    });
    document.querySelector(".suiv").addEventListener("click", function(e) {
        pos++
        if (pos >= allCarousel.length) { pos = 0 }
        if (pos < 0) { pos = allCarousel.length - 1 }

        for (let i = 0; i < allCarousel.length; i++) {
            if (i == pos) {
                if (!allCarousel[i].classList.contains("active")) {
                    allCarousel[i].classList.toggle("active")
                    allIconeP[i].classList.toggle("active-icone")
                }
            } else {
                if (allCarousel[i].classList.contains("active")) {
                    allCarousel[i].classList.toggle("active")
                    allIconeP[i].classList.toggle("active-icone")
                }
                // allCarousel[i].classList.remove("active")
                // allIconeP[i].classList.toggle("active-icone")
            }
        }

    })
}

 */

/* 
function change_positon(pos) {
    if (pos >= allCarousel.length) { pos = 0 }
    if (pos < 0) { pos = allCarousel.length - 1 }

    for (let i = 0; i < allCarousel.length; i++) {
        if (i == pos) {
            if (!allCarousel[i].classList.contains("active")) {
                allCarousel[i].classList.add("active")
            }
        } else {
            allCarousel[i].classList.remove("active")
        }
    }
} */


function create_element(el) {
    return document.createElement(el);
}

function append(parent, child) {
    parent.appendChild(child);
}

function create_icone(parent, class_name) {
    let i = create_element("i")
    i.className = `${class_name}`
    append(parent, i)
}

function create_img_carousel(content, image, key) {
    let div = create_element("div")

    let img = create_element("img")
    if (key == 0) {
        div.setAttribute("class", "carousel active");
    } else {
        div.setAttribute("class", "carousel");
    }
    img.setAttribute("src", image)
        // console.log(image)
    append(div, img);
    append(content, div);
}

function defilCarousel() {
    /*  if (pos === allCarousel.length) {
         console.log("Mon: " + pos)
         console.log(allCarousel.length)
         pos = 0
     } */
    // if (pos < 0) { pos = allCarousel.length - 1 }
    console.log(pos)
    document.querySelector(".active").classList.remove("active")
    allCarousel[pos].classList.add("active")
}
// const element = allCarousel[key];



// console.log(allCarousel)