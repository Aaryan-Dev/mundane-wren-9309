//for payment.html
let shippingArray = [];
document.querySelector("#products").style.display = "grid";
document.querySelector("#products").style.gridTemplateColumns = "0.7fr 2fr"

let fetchData = JSON.parse(localStorage.getItem("bagdata"));
let totalPrice = JSON.parse(localStorage.getItem("priceTotal"));

fetchData.forEach(function (elem, index) {
    let divA = document.createElement("div");
    let itemImage = document.createElement("img");
    itemImage.src = elem.imgUrl;
    itemImage.style.width = "50%";

    let divB = document.createElement("div");
    divB.style.display = "grid";
    divB.style.gridTemplateColumns = "2fr 1fr"

    let name = document.createElement("span")
    let price = document.createElement("span")

    name.innerText = elem.name;
    name.style.color = "gray";
    name.style.fontFamily = "sans-serif";
    name.style.fontSize = "10px";

    price.innerText = "$" + elem.price;
    price.style.color = "gray";
    price.style.fontFamily = "sans-serif";
    price.style.fontSize = "10px";

    divA.append(itemImage);
    divB.append(name, price);
    document.querySelector("#products").append(divA, divB);
})
document.querySelector("#subTotal").style.display = "grid";
document.querySelector("#subTotal").style.gridTemplateColumns = "3fr 1fr";
document.querySelector("#subTotal").style.gridTemplateRows = "1fr 1fr 1fr";

let sTotal = document.createElement("p");
let svalue = document.createElement("p");
sTotal.innerText = "Subtotal";
svalue.innerText = totalPrice;
svalue.style.textAlign = "right";

let tItems = document.createElement("p");
tItems.innerText = "Total Items";
let tItemsValue = document.createElement("p");
tItemsValue.innerText = fetchData.length;
tItemsValue.style.textAlign = "right";


let shTotal = document.createElement("p");
let shvalue = document.createElement("p");
shTotal.innerText = "Shipping total";
shvalue.innerText = "$40.00";
shvalue.style.textAlign = "right";

let promo = document.createElement("span");
promo.innerText = "Enter Promo Code(if any):";
promo.style.fontFamily = "sans-serif";
promo.style.fontSize = "10px";
promo.style.color = "gray";

let promoValue = document.createElement("input");
promoValue.type = "text";
promoValue.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"
promoValue.placeholder = "ssense30";

let prBtn1 = document.createElement("button");
prBtn1.style.border = "none";
prBtn1.style.backgroundColor = "transparent";

let prBtn = document.createElement("button");
prBtn.innerText = "Apply";
prBtn.style.marginTop = "2%"
prBtn.style.backgroundColor = "black";
prBtn.style.color = "white";
prBtn.style.cursor = "pointer";
prBtn.addEventListener("click", promoChk);

document.querySelector("#subTotal").
append(sTotal, svalue, tItems, tItemsValue, shTotal,
    shvalue, promo,promoValue,prBtn1, prBtn);

let oTotal = document.createElement("span");
oTotal.innerText = "Order total(USE)";
oTotal.style.marginRight = "45%"
let price = eval(totalPrice + 40);

let oValue = document.createElement("span");
oValue.innerText = "$" + price;

//function to update the total price of order:
// promoCode = ssense30;

function promoChk() {
    let promoCode = promoValue.value;
    if(promoCode === undefined || promoCode === null){
        oValue.innerText = "$" + price;
    }
    else if(promoCode === "ssense30") {
        totalValue = price - (price*0.3);
        oValue.innerText = "$" + totalValue;
    }
}






//this button will redirect it to the payment final page
let btn = document.createElement("button");
btn.innerText = "PLACE ORDER";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.marginTop = "5%";
btn.style.backgroundColor = "black";
btn.style.fontFamily = "sans-serif";
btn.style.width = "100%";
btn.style.cursor = "pointer";

document.querySelector("#placeOrder").append(oTotal, oValue);
document.querySelector("#placeOrder").append(btn);
document.querySelector("#placeOrder").style.fontSize = "12px";
document.querySelector("#placeOrder").style.fontFamily = "sans-serif";

// to catch the details submitted on the page-->
btn.addEventListener("click", toOTP);

function toOTP() {
    let shippingDetails = {
        name: document.querySelector("#firstName").value + " " + document.querySelector("#lastName").value,
        strAddress: document.querySelector("#address").value,
        company: document.querySelector("#company").value,
        city: document.querySelector("#city").value,
        zipCode: document.querySelector("#zipCode").value,
        country: document.querySelector("#country").value,
        state: document.querySelector("#state").value,
        phone: document.querySelector("#phoneNumber").value,
        card: document.querySelector("#cNumber").value,
        month: document.querySelector("#month").value
    }
    shippingArray.push(shippingDetails);
    localStorage.setItem("shippingDetails", JSON.stringify(shippingArray));
    window.location.replace("otp.html");
}



// javascript functionalaty

// EventListener for menswear
document.querySelector("#mens").addEventListener("click", mensFunction);
function mensFunction(){
    window.location.href = "../menswear/menswear.html"
}

// EventListener for womenswear
document.querySelector("#womens").addEventListener("click", womensFunction);
function womensFunction(){
    window.location.href = "../womenswear/womenswear.html"
}

// EventListener for everythingelse
document.querySelector("#else").addEventListener("click", elseFunction);
function elseFunction(){
    window.location.href = "../everythingelse/every.html"
}

// EventListener for wishlists
document.querySelector("#wish").addEventListener("click", wishFunction);
function wishFunction(){
    window.location.href = "../wishPage/wish.html"
}

// EventListener for search button
document.querySelector("#search").addEventListener("click", searchFunction);
function searchFunction(){
    window.location.href = ""
}

// EventListener for accountLogo
document.querySelector("#accountLogo").addEventListener("click", accountFunction);
function accountFunction(){
    window.location.href = "accountDetails.html"
}

// EventListener for shopping bag
document.querySelector("#shoppingLogo").addEventListener("click", shoppingFunction);
function shoppingFunction(){
    window.location.href = "../cartPage/bag.html"
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../index.html"
}

let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata"))
document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";