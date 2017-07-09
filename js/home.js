//object needed to index the site views
var views = new Array();
views['presentation'] = {
    navID: "presentationNav",
    pageID: "presentationPage"
};
views['portofolio'] = {
    navID: "portofolioNav",
    pageID: "portofolioPage"
};
views['about'] = {
    navID: "aboutNav",
    pageID: "aboutPage"
};
views['contact'] = {
    navID: "contactNav",
    pageID: "contactPage"
};
var element = document.getElementById("wrapper");
console.log(element);
var hammertime = new Hammer(element);
// listen to events...
hammertime.on("panleft panright tap press", function(ev) {
    var text = ev.type + " gesture detected.";
    alert(text);
});
//function needed to defer the javascript 
$(function() {
    //get the dimension of the screen and set mobile/pc view
    if ($(document).width() <= 900) {
        //load the mobile version
        loadMobile();
    } else {
        //load the pc version
        loadPC();
    }
});
//this function is needed to adjust the webpage to the mobile version
function loadMobile() {
    //display the home page
    showPresentation();
    //create an event listener to map the swipe action to the current page

}
//set of functions needed to show the appropriate view
function showPresentation() {
    //on page load hide everything but presentation
    $('#' + views['portofolio'].pageID).hide();
    $('#' + views['about'].pageID).hide();
    $('#' + views['contact'].pageID).hide();
}

function showPortofolio() {
    //on page load hide everything but presentation
    $('#' + views['presentation'].pageID).hide();
    $('#' + views['about'].pageID).hide();
    $('#' + views['contact'].pageID).hide();
}

function showAbout() {
    //on page load hide everything but presentation
    $('#' + views['portofolio'].pageID).hide();
    $('#' + views['presentation'].pageID).hide();
    $('#' + views['contact'].pageID).hide();
}

function showContact() {
    //on page load hide everything but presentation
    $('#' + views['portofolio'].pageID).hide();
    $('#' + views['about'].pageID).hide();
    $('#' + views['presentation'].pageID).hide();
}