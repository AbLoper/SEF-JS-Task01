var ulvar = document.querySelectorAll(".list li")
var printvar = document.getElementById("print")
var btnsumvar = document.getElementById("btnsum")
var sumvar = document.getElementById("sum")
var btnconfirmvar = document.getElementById("btnconfirm")
var totalprice = 0
var counter = 0

ulvar.forEach(function (item) {
    item.onclick = function () {
        printvar.style.display = "block"
        btnsumvar.style.display = "block"
        printvar.innerHTML += "- " + item.textContent
        totalprice += +(item.getAttribute("price"))
        document.getElementById("itemssum").value = totalprice
    }
}
)

btnsumvar.onclick = showsumdiv
function showsumdiv () {
    sumvar.style.display = "block"
}

btnconfirmvar.onclick = alertmsg
function alertmsg(){
    alert("تم إرسال طلبك بنجاح")
}






