const allCarousel = document.querySelectorAll(".carousel")
const allIconeP = document.querySelectorAll(".fa-circle")
const body = document.querySelector("body")
pos = 0;

var getDate = new Date().getFullYear();
// console.log(getDate)
// var eventTime = new Date("Jan 1, 2023 00:00:00").getTime();
var interval = 1000;
getDate = getDate + 1
var eventTime = moment(`${getDate}`, "YYYY-MM-DD");
var currentTime = moment();
var duration = moment.duration(eventTime.diff(currentTime));
setInterval(function() {
    // get updated duration
    duration = moment.duration(duration - interval, 'milliseconds');
    // if duration is >= 0
    if (duration.asSeconds() <= 0) {
        clearInterval(intervalId);
        // hide the countdown element
        timeElement.classList.add("hidden");
    } else {
        day = eventTime.diff(currentTime, "days")
            // otherwise, show the updated countdown
            //duration.years() + " years "
            // timeElement.innerText = day + " days " + duration.hours() + " hours " + duration.minutes() + " minutes " + duration.seconds() + " seconds";
        document.getElementById("jours").innerHTML = day;
        document.getElementById("heures").innerHTML = duration.hours();
        document.getElementById("minutes").innerHTML = duration.minutes();
        document.getElementById("second").innerHTML = duration.seconds();
    }
}, interval);

setInterval(defilCarousel, 5000);

// setInterval(rebours, 1000) 
// function

allCarousel.forEach(el => {
    el.addEventListener("mouseover", function(e) {
        // alert('ok')
        e.currentTarget.classList.toggle("zoom");

        var img = e.currentTarget.querySelector("img").src
        console.log(img)

        body.style.backgroundImage = `url('${img}')`;
        // body.style.back = 0.3
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