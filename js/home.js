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
//object needed to map the current and previous mode
var device = {
    previousDevice: null,
    currentDevice: null
};
//function needed to defer the javascript 
$(function() {
    //check the typemof device currently in use
    checkDevice();
    //event neede to constantly check the resizing of the document
    $(window).resize(function() {
        //if a resize has been detected recheck the type of device
        checkDevice();
    });
});
//function needed to establish the type of device currently in use
function checkDevice() {
    //get the dimension of the screen and set mobile/pc view
    if ($(document).width() <= 900 && (device.previousDevice == 'PC' || device.previousDevice == null)) {
        //load the mobile version
        loadMobile();
    } else if ($(document).width() > 900 && (device.previousDevice == 'mobile' || device.previousDevice == null)) {
        //load the pc version
        loadPC();
    }
}
//this function is needed to adjust the webpage to the mobile version
function loadMobile() {
    console.log('mobile');
    device.previousDevice = device.currentDevice;
    device.currentDevice = 'mobile';
    //display the home page
    //variable needed to track the current location on the page
    var model = {
        location: 'presentation',
        previousPos: 'contact'
    };
    showView(model);
    //create an event listener to map the swipe action to the current page
    var element = document.getElementById("wrapper");
    var hammertime = new Hammer(element);
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
            console.log(model);
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
    console.log('PC');
    device.previousDevice = device.currentDevice;
    device.currentDevice = 'PC';

    // listen to events...
    var old_element = document.getElementById("wrapper");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}