let pArr = JSON.parse(localStorage.getItem("pData")) || [
    {
        img: "https://images.asos-media.com/products/asos-design-chelsea-boots-in-black-faux-leather-with-zips/13774536-1-black?$n_320w$&wid=317&fit=constrain",
        price: 32,
        name: "ASOS DESIGN Boots, Style - Chelsea Leather (Body fit)",
        color: "Black",
        size: "UK 8.5",
    },
];


// localStorage.setItem("logInUserData", JSON.stringify(elem));

// let info = {
//     email: "aryandev1305@gmail.com"
// }

let info = JSON.parse(localStorage.getItem("logInUserData")) || {
    email: "---"
}

// let info = JSON.parse(localStorage.getItem("logInUserData"));
document.querySelector("#c3>p+p").innerText = info.email;

let obj = {};
let count1 = 0;

pArr.forEach(function (elem, index) {
    let dvi = document.createElement("div");
    document.querySelector("#m2").append(dvi);
    dvi.setAttribute("id", "item");

    let tImg = document.createElement("img");
    tImg.setAttribute("src", elem.img);
    tImg.setAttribute("id", "pic");

    let fDvi = document.createElement("div");
    fDvi.style.fontSize = "15px"

    let tPri = document.createElement("h6");
    tPri.innerText = "£ " + elem.price;
    tPri.style.fontSize = "16px"

    let tPar = document.createElement("p");
    tPar.innerText = elem.name;

    let tCol = document.createElement("h6");
    tCol.innerText = elem.color;
    tCol.style.fontSize = "16px"

    let tSiz = document.createElement("h6");
    tSiz.innerText = elem.size;
    tSiz.style.fontSize = "16px"

    let rev = document.createElement("button");
    rev.innerText = "Remove";
    rev.addEventListener("click", function () {
        del(index);
    });

    function del(index) {
        console.log(index);
        pArr.splice(index, 1);

        localStorage.setItem("pData", JSON.stringify(pArr));
        window.location.reload();
    }

    var sel = document.createElement("Select");
    sel.setAttribute("id", "MySelect");
    sel.addEventListener("change", check)
    check()
    document.body.appendChild(sel);

    var opt = document.createElement("option");
    opt.setAttribute("value", "");
    var nod = document.createTextNode("Qtantity:");
    opt.appendChild(nod);

    sel.appendChild(opt);

    var opt10 = document.createElement("option");
    opt10.setAttribute("value", 1);
    var nod10 = document.createTextNode(1);
    opt10.appendChild(nod10);

    sel.appendChild(opt10);

    var opt9 = document.createElement("option");
    opt9.setAttribute("value", 2);
    var nod9 = document.createTextNode(2);
    opt9.appendChild(nod9);

    sel.appendChild(opt9);

    var opt8 = document.createElement("option");
    opt8.setAttribute("value", 3);
    var nod8 = document.createTextNode(3);
    opt8.appendChild(nod8);

    sel.appendChild(opt8);

    var opt7 = document.createElement("option");
    opt7.setAttribute("value", 4);
    var nod7 = document.createTextNode(4);
    opt7.appendChild(nod7);

    sel.appendChild(opt7);

    var opt6 = document.createElement("option");
    opt6.setAttribute("value", 5);
    var nod6 = document.createTextNode(5);
    opt6.appendChild(nod6);

    sel.appendChild(opt6);

    var opt5 = document.createElement("option");
    opt5.setAttribute("value", 6);
    var nod5 = document.createTextNode(6);
    opt5.appendChild(nod5);

    sel.appendChild(opt5);

    var opt4 = document.createElement("option");
    opt4.setAttribute("value", 7);
    var nod4 = document.createTextNode(7);
    opt4.appendChild(nod4);

    sel.appendChild(opt4);

    var opt3 = document.createElement("option");
    opt3.setAttribute("value", 8);
    var nod3 = document.createTextNode(8);
    opt3.appendChild(nod3);

    sel.appendChild(opt3);

    var opt2 = document.createElement("option");
    opt2.setAttribute("value", 9);
    var nod2 = document.createTextNode(9);
    opt2.appendChild(nod2);

    sel.appendChild(opt2);

    var opt1 = document.createElement("option");
    opt1.setAttribute("value", 10);
    var nod1 = document.createTextNode(10);
    opt1.appendChild(nod1);

    sel.appendChild(opt1);

    sel.addEventListener("change", function () {
        func(index);
    });

    function func(index) {
        count1 = 0;
        count1 = count1 + elem.price * sel.value;

        if (obj[index] == undefined) {
            obj[index] = count1;
        } else {
            obj[index] = count1;
        }
        let sum = 0;
        for (let i in obj) {
            sum = sum + obj[i];
        }
        console.log(sum);

        document.querySelector("#z1>div:nth-child(2)").innerText =
            "£ " + sum.toFixed(2);



        document.querySelector("#z3>div:nth-child(2)").innerText =
            "£ " + (sum + 5).toFixed(2);
        document.querySelector("#z3>div:nth-child(2)").style.fontSize = "20px"
        document.querySelector("#z3>div:nth-child(2)").style.fontweight = "600"





    }
    if (pArr.length == 1) {
        document.querySelector("#m1>p").innerText = "Cart - " + (pArr.length) + " Item";
    } else if (pArr.length !== 0) {
        document.querySelector("#m1>p").innerText = "Cart - " + (pArr.length) + " Items";
    }

    fDvi.append(tPri, tPar, tCol, tSiz, sel, rev);
    dvi.append(tImg, fDvi);
});



function check() {
    let oArr = (document.querySelectorAll("#MySelect"))
    // console.log(document.querySelectorAll("#MySelect"))


    let count = 0;
    for (let i = 0; i < document.querySelectorAll("#MySelect").length; i++) {


        // if (oArr[document.querySelectorAll("#MySelect").length].value == "") {

        // }

        if (oArr[i].value !== "") {
            oArr[i].style.border = "3px solid black"
        }

        else {
            oArr[i].style.border = "1px solid red"
            document.querySelector("#c2>button").style.backgroundColor = "rgb(142, 142, 142)";
            document.querySelector("#c2>button").disabled = true;
            document.querySelector("#c2>button").style.cursor = "not-allowed";

            document.querySelector("#pay>button").style.backgroundColor = "rgb(142, 142, 142)";
            document.querySelector("#pay>button").disabled = true;
            document.querySelector("#pay>button").style.cursor = "not-allowed";

            document.querySelector("#m1>div").innerText = "! Select Quantity";
            document.querySelector("#m1>div").style.color = "red";
            document.querySelector("#m1>div").style.fontWeight = "100";
            document.querySelector("#m1>div").style.fontSize = "15px";
            count++
        }
    }
    if (count == 0) {
        document.querySelector("#c2>button").style.backgroundColor = "black";
        document.querySelector("#c2>button").disabled = false;
        document.querySelector("#c2>button").style.cursor = "pointer";

        document.querySelector("#pay>button").style.backgroundColor = "black";
        document.querySelector("#pay>button").disabled = false;
        document.querySelector("#pay>button").style.cursor = "pointer";

        document.querySelector("#m1>div").innerText = "";

    }
}

let oArr = (document.querySelectorAll("#MySelect"))

if (oArr.length == 1) {
    oArr[0].style.border = "1px solid red"
    document.querySelector("#c2>button").style.backgroundColor = "rgb(142, 142, 142)";
    document.querySelector("#c2>button").disabled = true;
    document.querySelector("#c2>button").style.cursor = "not-allowed";

    document.querySelector("#pay>button").style.backgroundColor = "rgb(142, 142, 142)";
    document.querySelector("#pay>button").disabled = true;
    document.querySelector("#pay>button").style.cursor = "not-allowed";

    document.querySelector("#m1>div").innerText = "Select Quantity";
    document.querySelector("#m1>div").style.color = "red";
    document.querySelector("#m1>div").style.fontWeight = "100";
    document.querySelector("#m1>div").style.fontSize = "15px";
}

if (oArr.length == 0) {
    document.querySelector("#c2>button").style.backgroundColor = "rgb(142, 142, 142)";
    document.querySelector("#c2>button").disabled = true;
    document.querySelector("#c2>button").style.cursor = "not-allowed";

    document.querySelector("#pay>button").style.backgroundColor = "rgb(142, 142, 142)";
    document.querySelector("#pay>button").disabled = true;
    document.querySelector("#pay>button").style.cursor = "not-allowed";

    document.querySelector("#m1>div").innerText = "CART IS EMPTY !";
    document.querySelector("#m1>div").style.color = "red";
    document.querySelector("#m1>div").style.fontWeight = "100";
    document.querySelector("#m1>div").style.fontSize = "15px";
}



function code() {



    if (document.querySelector("#promo").value == "asos010") {
        let get = document.createElement("div");
        document.querySelector("#off").innerHTML = "";
        get.innerText = "Congratulations! 16% off on current order"
        get.style.border = "0px solid black"
        get.style.padding = "3%"
        get.style.marginTop = "5%"
        get.style.marginBottom = "-5%"
        get.style.backgroundColor = "rgb(193, 255, 193)"

        document.querySelector("#off").append(get)

        let dis = document.querySelector("#z3>div:nth-child(2)").innerText;
        console.log(dis);

        let bag = ""
        for (let j = 0; j < dis.length; j++) {
            if (dis[j] !== "£") {
                bag = bag + dis[j];
            }
        }
        console.log(Number(bag));

        // document.querySelector("#z3>div:nth-child(2)").innerText = ""
        document.querySelector("#z3>div:nth-child(2)").innerText = "'new price' £ " + ((0.84 * Number(bag)).toFixed(2));
        console.log(dis);


    } else {

        let get = document.createElement("div");
        document.querySelector("#off").innerHTML = "";
        get.innerText = "No offer available"
        get.style.border = "0px solid black"
        get.style.padding = "3%"
        get.style.marginTop = "5%"
        get.style.marginBottom = "-5%"
        get.style.backgroundColor = "rgb(255, 178, 178)"

        document.querySelector("#off").append(get)

    }
}




function payIt() {


    window.open("deliverycart.html", '_blank');


}