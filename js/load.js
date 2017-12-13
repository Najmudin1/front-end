
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000); //seconds load animation is run
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderDiv").style.display = "block";
}
