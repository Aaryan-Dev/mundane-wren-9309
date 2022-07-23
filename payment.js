// let fun2 = document.querySelector("btn2").addEventListener("click", abc);
// let button1 = (document.querySelector("btn1").disabled = true);
// console.log(button1);
let x = document.getElementById("btn2");
x.disabled;
let abcde = false;
let paymentArr = JSON.parse(localStorage.getItem("paymentData")) || [];
function fun2() {
  if (abcde == true) {
    console.log("vvv");
    let x = document.querySelector("body");
    x.innerHTML = "";
    //   let div = document.createElement("div");
    let ab = document.createElement("h3");
    ab.innerText = "Tracking ID : 276183489121";
    let y = document.createElement("img");
    y.setAttribute("id", "gif");
    y.setAttribute(
      "src",
      "https://cdn.dribbble.com/users/3475837/screenshots/11442860/media/8d53857df0ecda3b496bed2d012cbfd9.gif"
    );

    x.append(y, ab);
    window.setTimeout(function () {
      location.href = "headPart.html";
    }, 6000);
    let empty = [];
    localStorage.setItem("pData", JSON.stringify(empty));
    localStorage.setItem("selectedItemJumpToProduct", JSON.stringify(empty));
  }
}
function fun() {
  let cardNumber = document.querySelector("#cardNumber").value;
  //   console.log("cardNumber");

  if (cardNumber.length != 16) {
    alert("Please Enter Correct Credit/Debit Card Number");
    return (window.location.href = "payment.html");
  }
  let date = document.querySelector("#date").value;
  if (date.length < 1) {
    alert("Please Enter Expiry Date");
    return (window.location.href = "payment.html");
  }
  let name = document.querySelector("#name").value;
  if (name.length < 1) {
    alert("Please Enter Name");
    return (window.location.href = "payment.html");
  }
  let cvv = document.querySelector("#cvv").value;
  if (cvv.length != 3) {
    alert("Please Enter Correct Cvv");
    return (window.location.href = "payment.html");
  }
  let check = document.querySelector("#check").checked;

  let obj = {
    cardNumber: cardNumber,
    date: date,
    name: name,
    cvv: cvv,
  };
  if (check == true) {
    paymentArr.push(obj);
    localStorage.setItem("paymentData", JSON.stringify(paymentArr));
  }
  x.enable;
  x.style.backgroundColor = "green";
  abcde = true;
  let con = document.querySelector(".container");
  con.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "ADD CREDIT/DEBIT CARD";
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  p3.innerText = name;
  p1.innerText = cardNumber;
  p2.innerText = date;
  p4.innerText = cvv;
  con.append(h1, p3, p1, p2, p4);
}
