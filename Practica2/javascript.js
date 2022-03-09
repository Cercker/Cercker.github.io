
function change() {
    document.getElementById("div1").style.color = "chartreuse";
}
function comeback() {
    document.getElementById("div1").style.color = "rgb(250, 0, 0)";
}
function refreshall(precio) {
    var total  =  document.getElementById("total").value;

    var num = parseInt(total);
    num += parseInt(precio);

    document.getElementById("total").value = num.toString();

}