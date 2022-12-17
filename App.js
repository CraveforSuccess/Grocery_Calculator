var btn = document.querySelector(".btn1");
var btn1 = document.querySelector(".btn2");
var complete = document.querySelector(".complete_btn")
var list = document.querySelector(".list");
var inp_item = document.querySelector(".textinp");
var inp_item1 = document.querySelector(".textinp1");
var totalAmount = document.querySelector(".total");
// totalAmount.style.display = "none";
var total_amount = document.querySelector(".total_amount");
var total_btn = document.querySelector(".total_btn");
var toggle_btn = document.querySelector(".toggle_btn");
var main = document.querySelector(".main_cont");
var content = document.querySelector(".content")
var toggle = true;
toggle_btn.addEventListener("click", () => {
    if (toggle == true) {
        content.style.backgroundColor = "black"
        main.style.backgroundColor = "black";
        content.style.color = "white"
        main.style.border = "white";

        toggle=false;
    }
else{
    content.style.backgroundColor = "white"
        main.style.backgroundColor = "white";
        content.style.color = "black";
        main.style.border = "black";

        toggle=true;
    }
})

var items = new Map();
var head = "";
var key = "";
var total = 0;
btn.addEventListener("click", () => {
    head = inp_item.value;
    inp_item.value = ""
})

btn1.addEventListener("click", () => {
    key = inp_item1.value;
    inp_item1.value = ""

});
complete.addEventListener("click", () => {
    items.set(head, key);
    for (let x of items) {
        list.innerHTML += `<li>${x}</li>`
        total += Number(items.get(head));

        items.delete(head);


    }

});

total_btn.addEventListener("click", () => {

    total_amount.innerHTML = Number(total);


})


