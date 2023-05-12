let sliderImage = Array.from(document.querySelectorAll(".slider-container img"))
imgCount = sliderImage.length; //slidersCount
currentSlide = 1;
prev = document.querySelector("#prev");
next = document.querySelector("#next");
const paginationElement = document.createElement("ul")
paginationElement.setAttribute("id", "pageUl")
for (let i = 1; i <= imgCount; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i)
    paginationItem.setAttribute("id", `${i}`)
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
//add Element to The page boss in html page
document.querySelector(".indicator").appendChild(paginationElement)

//get the new created ul
const paginationUL = document.getElementById("pageUl");



function checker() {
    removeAllActive()
    sliderImage[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prev.classList.remove('purble-active')
        prev.classList.add("purble", "not-allowed")
    } else if (currentSlide == imgCount) {
        next.classList.remove('red-active')
        next.classList.add("red", "not-allowed")
    }
}




// pageBullets[0].getAttribute("id") ==1


function prevSlide() {
    if (prev.classList.contains("not-allowed")) {
    } else {
        next.classList.remove("not-allowed")
        currentSlide--;
        changeColor()
        checker()
    }
}

prev.onclick = prevSlide;
next.onclick = nextSlide;
function nextSlide() {

    if (next.classList.contains("not-allowed")) {
        return false
    } else {
        currentSlide++;
        prev.classList.remove("not-allowed")
        checker()
        changeColor()
    }


}

function removeAllActive() {
    sliderImage.forEach((img) =>
        img.classList.remove("active")
    )
}




















//change box shadow color and prev,next background
function changeColor() {
    if (currentSlide == 1) {
        document.querySelector(".slider-container .img1").classList.add("purble")
        document.getElementById("1").classList.add("purble-active")
        document.getElementById("2").classList.remove("orange-active"), document.getElementById("3").classList.remove("yellow-active"), document.getElementById("4").classList.remove("red-active"), document.getElementById("5").classList.remove("red-active")
        prev.classList.add("purble-active")
        next.classList.add("purble-active")
        prev.classList.remove("orange-active", "yellow-active", "red-active")
        next.classList.remove("orange-active", "yellow-active", "red-active")
    } else if (currentSlide == 2) {
        document.querySelector(".slider-container .img2").classList.add("orange")
        document.getElementById("2").classList.add("orange-active")
        document.getElementById("1").classList.remove("purble-active"), document.getElementById("3").classList.remove("yellow-active"), document.getElementById("4").classList.remove("red-active"), document.getElementById("5").classList.remove("red-active")
        prev.classList.add("orange-active")
        next.classList.add("orange-active")
        prev.classList.remove("purble-active", "purble", "yellow-active", "red-active")
        next.classList.remove("purble-active", "purble", "yellow-active", "red-active")
    } else if (currentSlide == 3) {
        document.querySelector(".slider-container .img3").classList.add("yellow")
        document.getElementById("3").classList.add("yellow-active")
        document.getElementById("2").classList.remove("orange-active"), document.getElementById("1").classList.remove("purble-active"), document.getElementById("4").classList.remove("red-active"), document.getElementById("5").classList.remove("red-active")
        prev.classList.add("yellow-active")
        next.classList.add("yellow-active")
        prev.classList.remove("orange-active", "purble-active", "red-active")
        next.classList.remove("orange-active", "purble-active", "red-active")
    } else if (currentSlide == 4) {
        document.querySelector(".slider-container .img4").classList.add("red")
        document.getElementById("4").classList.add("red-active")
        document.getElementById("2").classList.remove("orange-active"), document.getElementById("3").classList.remove("yellow-active"), document.getElementById("1").classList.remove("purble-active"), document.getElementById("5").classList.remove("red-active")
        prev.classList.add("red-active")
        next.classList.add("red-active")
        prev.classList.remove("orange-active", "yellow-active", "purble-active")
        next.classList.remove("orange-active", "yellow-active", "purble-active")
    } else if (currentSlide == 5) {
        document.querySelector(".slider-container .img5").classList.add("red")
        document.getElementById("5").classList.add("red-active")
        document.getElementById("2").classList.remove("orange-active"), document.getElementById("3").classList.remove("yellow-active"), document.getElementById("4").classList.remove("red-active"), document.getElementById("1").classList.remove("purble-active")
        prev.classList.add("red-active")
        next.classList.add("red-active")
        next.classList.remove("red-active")
    }
}
nextSlide()
prevSlide()

