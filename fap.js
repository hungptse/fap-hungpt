document.body.style.background = "#f5f5f5";
document.getElementById("ctl00_mainContent_ucCmsNews1_btnSeach").removeAttribute("style");
document.getElementById("ctl00_mainContent_ucCmsNews1_btnSeach").className = "btn btn-outline-primary ml-3";
document.getElementById("ctl00_mainContent_ucCmsNews1_btnSeach").id = "btnSearch";
document.getElementById("ctl00_mainContent_ucCmsNews1_txtSeach").removeAttribute("style");
document.getElementById("ctl00_mainContent_ucCmsNews1_txtSeach").className = "col-lg-3 float-right";
document.getElementById("ctl00_mainContent_ucCmsNews1_txtSeach").id = "txtSearch";
var lis = document.getElementById("ctl00_mainContent_ucCmsNews1_divCMS").getElementsByTagName("ul");
lis[0].style.listStyleType = "none";
lis[0].style.paddingLeft = "0";
lis[0].style.paddingTop = "2%";
lis[0].style.wordWrap = "break-word";
var more = document.getElementById("ctl00_mainContent_ucCmsNews1_divCMS").getElementsByTagName("a");
for (let index = 0; index < more.length; index++) {
    more[index].removeAttribute("style");
    // more[index].style.height = "20px";
    more[index].className = "badge badge-light";
}
var title = document.getElementsByClassName("blueTitle");
title[0].removeAttribute("style");
title[0].className = "display-2 bg-dark text-light";

var title2 = document.getElementsByClassName("orangeTitle");
title2[0].removeAttribute("style");
title2[0].className = "display-2 bg-dark text-light";

var table = document.getElementsByTagName("table");
table[0].className = "col-lg-12";

var container = document.getElementsByClassName("container");
container[0].id = "new";
document.getElementById("new").style.margin = "0";
document.getElementById("new").className = "col-lg-12";

var left = document.getElementsByClassName("topAthletes");
left[0].className = "col-lg-12 row pd-4";

var box = document.getElementsByClassName("box");
for (let index = 0; index < box.length; index++) {
    box[index].removeAttribute("style");
    box[index].className = "col-lg-12";
}


var titleFU = document.getElementsByTagName("h1");
titleFU[0].className = "col-lg-12 text-center";

document.getElementsByClassName("col-md-9").item(0).className = "col-lg-12";


var lis2 = document.getElementsByClassName("listBoxWrapper");
var ul = lis2[1].getElementsByTagName("ul");
for (let index = 0; index < ul.length; index++) {
    ul[index].style.listStyleType = "none";
    ul[index].style.paddingLeft = "0";
    ul[index].style.paddingTop = "2%";
    ul[index].style.wordWrap = "break-word";
}

var atag = lis2[1].getElementsByTagName("a");
for (let index = 0; index < atag.length; index++) {
    atag[index].removeAttribute("style");
    // more[index].style.height = "20px";
    atag[index].className = "badge badge-primary";
}

document.getElementById("ctl00_divSupporthcm").className = "col-lg-12 text-center";

var atag2 = document.getElementById("ctl00_divSupporthcm").getElementsByTagName("a");
for (let index = 0; index < atag2.length; index++) {
    atag2[index].removeAttribute("style");
    // more[index].style.height = "20px";
    atag2[index].className = "badge badge-primary";
}

var pTag = document.getElementsByTagName("p");
var aP = pTag[0].getElementsByTagName("a");
for (let index = 0; index < aP.length; index++) {
    aP[index].removeAttribute("style");
    // more[index].style.height = "20px";
    aP[index].className = "badge badge-primary";
}
aP[0].innerHTML = "HungPT";
aP[0].href = "https://www.facebook.com/hungpt.fu";