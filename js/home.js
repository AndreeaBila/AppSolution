//object needed to index the site views
var views = new Array();
views['presentation'] = {
    navID: "presentationNav",
    pageID: "presentationPage",
    leftView: 'contact',
    rightView: 'portofolio'
};
views['portofolio'] = {
    navID: "portofolioNav",
    pageID: "portofolioPage",
    leftView: 'presentation',
    rightView: 'about'
};
views['about'] = {
    navID: "aboutNav",
    pageID: "aboutPage",
    leftView: 'portofolio',
    rightView: 'contact'
};
views['contact'] = {
    navID: "contactNav",
    pageID: "contactPage",
    leftView: 'about',
    rightView: 'presentation'
};
//function needed to defer the javascript 
$(function() {
    //check the type of device currently in use
    //create an async call to determine the type of device from getDeviceType.php
    $.getJSON('getDeviceType.php', function(device) {
        if (device.type == 'mobile') loadMobile();
        else loadPC();
    });
});
//this function is needed to adjust the webpage to the mobile version
function loadMobile() {
    //display the home page
    //variable needed to track the current location on the page
    var model = {
        location: 'presentation',
        previousPos: 'contact'
    };
    showView(model);
    //create an event listener to map the swipe action to the current page
    var hammertime = new Hammer(document.getElementById("wrapper"));
    // listen to events...
    hammertime.on("swipeleft", function(ev) {
        model.previousPos = model.location;
        model.location = views[model.location].rightView;
        showView(model);
    });
    hammertime.on("swiperight", function(ev) {
        model.previousPos = model.location;
        model.location = views[model.location].leftView;
        showView(model);
    });
    //on click go to target page
    $('.navStyle li').click(function() {
        if (!$(this).hasClass('currentPage')) {
            model.previousPos = model.location;
            model.location = $(this).attr('id').replace("Nav", "");
            showView(model);
        }
    });
}
//set of functions needed to show the appropriate view
function showView(model) {
    //on page load hide everything but presentation
    $('#' + views['presentation'].pageID).hide();
    $('#' + views['portofolio'].pageID).hide();
    $('#' + views['about'].pageID).hide();
    $('#' + views['contact'].pageID).hide();
    $('#' + views[model.location].pageID).show();
    $('#' + views[model.location].navID).addClass('currentPage');
    $('#' + views[model.previousPos].navID).removeClass('currentPage');
}



function loadPC() {
    $('.navStyle li').click(function() {
        //code needed to remove the currentPage class from all elements in the navbar
        $(this).siblings().each(function() {
            $(this).removeClass('currentPage');
        });
        //add the currentPage class to the selected element from the navbar
        $(this).addClass('currentPage');

        //scroll to the selected element
        var elementPageID = $(this).attr('id').replace('Nav', 'Page');
        $('body').scrollTo('#' + elementPageID, 500);
    });
}

function authencticate() {

}