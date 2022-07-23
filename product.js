let theArr = JSON.parse(localStorage.getItem("selectedItemJumpToProduct")) || [
    {
        Product: "Boots",
        Brand: "ASOS DESIGN",
        ImageUrl: "https://images.asos-media.com/products/asos-design-chelsea-boots-in-black-faux-leather-with-zips/13774536-1-black?$n_320w$&wid=317&fit=constrain",
        Price: "32",
        Style: "Chelsea",
        Color: "Black",
        Size: "UK 7",
        BodyFit: "Body fit",
        Leather: "Leather"
    }

];

document.querySelector("#second>h2").innerText = theArr[0].Brand + " " + theArr[0].Product + ", " + "Style -" + " " + theArr[0].Style + " " + theArr[0].Leather + " (" + theArr[0].BodyFit + ") ";

document.querySelector("#eur").innerText = "£ " + theArr[0].Price

document.querySelector("#col").innerText = "Color:" + " " + theArr[0].Color


// Data for scroll view od of product 4 images
let coursol = [
    {
        src: theArr[0].ImageUrl
    },
    {
        src: "https://i.pinimg.com/564x/aa/27/c1/aa27c1bb326feb1476fa3896ac8f5fad.jpg"
    },

]


coursol.forEach(function (elem) {
    let wo = document.createElement("img");
    wo.setAttribute("class", "thumbnail tive");
    wo.setAttribute("src", elem.src)

    document.querySelector("#slider").append(wo)

});


coursol.forEach(function (elem, index) {


    let wha = document.createElement("div");
    document.querySelector(".carousel-inner").append(wha)



    if (index == 0) {
        wha.setAttribute("class", "carousel-item active")
    } else {
        wha.setAttribute("class", "carousel-item")
    }


    let ho = document.createElement("img");
    ho.setAttribute("id", "featured")
    ho.setAttribute("class", "d-block w-100")
    ho.setAttribute("src", elem.src)


    wha.append(ho);


});




let thumbnails = document.getElementsByClassName("thumbnail");

let activeImages = document.getElementsByClassName("tive");

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", function () {
        console.log(activeImages);

        if (activeImages.length > 0) {
            activeImages[0].classList.remove("tive");
        }

        this.classList.add("tive");
        document.getElementById("featured").src = this.src;

    });
}



let count = 1
function hide() {

    count++

    if (count % 2 == 0) {
        let hid = document.querySelector("#hi");
        hid.style.boxShadow = "0px -26px 79px 0px rgba(255,255,255,1)";

        // box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        document.querySelector("#more").style.margin = "0px 0px 0px 0px";
        document.querySelector("#more").style.transitionDuration = "1s";

        let nbut = document.querySelector("#hp")
        nbut.innerText = "SHOW LESS";


    } else {
        let hid = document.querySelector("#hi");
        hid.style.boxShadow = "0px -60px 77px 17px rgba(255,255,255,1)";

        document.querySelector("#more").style.margin = "-400px 0px 0px 0px";

        let nbut = document.querySelector("#hp")
        nbut.innerText = "SHOW MORE";
    }



}

const whiteHeart = "🤍";
const blackHeart = "🖤";
const button = document.querySelector("#heart");
button.addEventListener("click", toggle);

function toggle() {
    const like = button.textContent;
    if (like == whiteHeart) {
        button.textContent = blackHeart;
        button.setAttribute("id", "none")
    } else {
        button.textContent = whiteHeart;
        button.setAttribute("id", "heart")
    }
}

document.querySelector("#bu").addEventListener("click", func);

let arr = JSON.parse(localStorage.getItem("pData")) || [];

function func() {

    if (document.querySelector("#sizes").value != "") {

        document.getElementById("sizes").style.border = "thin solid #b2b2b2";
        document.getElementById("ple").innerHTML = ""
        document.getElementById("ple").style.backgroundColor = "White";

        let bag = ""
        for (let i = 0; i < theArr[0].Price.length; i++) {
            if (theArr[0].Price[i] != "£") {
                bag = bag + theArr[0].Price[i]
            }
        }
        let nuVal = (Number(bag));

        let obj = {
            img: coursol[0].src,
            price: nuVal,
            name: document.querySelector("#second>h2").innerText,
            color: theArr[0].Color,
            size: document.querySelector("#sizes").value,
        };

        arr.push(obj);
        localStorage.setItem("pData", JSON.stringify(arr));

        // console.log(arr);
        document.getElementById("ple").innerText = "Added to bag"

        document.getElementById("ple").style.padding = "2%"
        document.getElementById("ple").style.backgroundColor = "rgb(224, 255, 224)";

        document.querySelector("#bag").innerHTML = "";
        let nub = document.createElement("button");
        nub.setAttribute("id", "nu")
        nub.innerText = "Proceed to Cart"
        document.querySelector("#bag").append(nub)
        nub.style.border = "2px solid black"
        nub.style.padding = "2%"
        nub.style.borderRadius = "3px"
        document.querySelector("#nu").addEventListener("click", opened)

        let hea = document.createElement("button");
        hea.innerText = "🤍"
        hea.setAttribute("id", "heart")

        hea.addEventListener("click", toggle);
        document.querySelector("#bag").append(hea)
        function toggle() {
            const like = button.textContent;
            if (like == whiteHeart) {
                hea.textContent = blackHeart;
                hea.setAttribute("id", "none")
            } else {
                hea.textContent = whiteHeart;
                hea.setAttribute("id", "heart")
            }
        }


        function opened() {
            window.location.href = "primaryCart.html"
        }



    } else {
        document.getElementById("sizes").style.border = "thin solid #d21345";
        document.getElementById("ple").innerText = "Please select from the available colour and size options"

        document.getElementById("ple").style.padding = "2%"
        document.getElementById("ple").style.backgroundColor = "#fae7ec";
    }
}
