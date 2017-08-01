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
    $('#' + views['portofolio'].pageID).hide();
    $('#' + views['about'].pageID).hide();
    $('#' + views['contact'].pageID).hide();
    $('#' + views['presentation'].navID).addClass('currentPage');
    //create an event listener to map the swipe action to the current page
    var hammertime = new Hammer(document.getElementById("wrapper"));
    // listen to events...
    hammertime.on("swipeleft", function(ev) {
        model.previousPos = model.location;
        model.location = views[model.location].rightView;
        showView(model, 'right', 'left');
    });
    hammertime.on("swiperight", function(ev) {
        model.previousPos = model.location;
        model.location = views[model.location].leftView;
        showView(model, 'left', 'right');
    });
    //on click go to target page
    $('.navStyle li').click(function() {
        if (!$(this).hasClass('currentPage')) {
            model.previousPos = model.location;
            model.location = $(this).attr('id').replace("Nav", "");
            showView(model, null, null);
        }
    });
}
//set of functions needed to show the appropriate view
function showView(model, showDir, hideDir) {
    //on page load hide everything but presentation
    if (showDir != null && hideDir != null) {
        $('#' + views[model.previousPos].pageID).hide("slide", { direction: String(hideDir) }, 550);
        $('#' + views[model.location].pageID).show("slide", { direction: String(showDir) }, 550);
    } else {
        $('#' + views[model.previousPos].pageID).hide(550);
        $('#' + views[model.location].pageID).show(550);
    }
    $('#' + views[model.location].navID).addClass('currentPage');
    $('#' + views[model.previousPos].navID).removeClass('currentPage');
}



function loadPC() {
    //variable needed to track the current location on the page
    var model = {
        location: null,
        previousPos: null
    };
    $('.navStyle li').click(function() {
        //code needed to remove the currentPage class from all elements in the navbar
        $(this).siblings().each(function() {
            $(this).removeClass('currentPage');
        });
        //add the currentPage class to the selected element from the navbar
        $(this).addClass('currentPage');
        //get the name of he page
        model.previousPos = model.location;
        model.location = $(this).attr('id').replace('Nav', '');
        //scroll to the selected element
        var elementPageID = $(this).attr('id').replace('Nav', 'Page');
        if (elementPageID == 'presentationPage') {
            //scroll to top of the page
            $('body').scrollTo(0, 500);
        } else {
            //scroll to the given element
            //get the absolute position of the target element
            var pos = $('#' + elementPageID).position();
            $('body').scrollTo(pos.top, 500);
        }
    });

    //event listener needed to check if the mouse wheel has been used in order to scroll the user to the appropriate element
    $(document).mousewheel($.debounce(100, function(event) {
        if ($(document).width() > 1000) {
            var stopAutoScroll = false;
            //if the model object hasn't been initialised set it to the default value of presentation
            if (model.location == null) model.location = 'presentation';
            //check the direction of the mouse
            if (event.deltaY == 1) {
                //swap the values of the locations from the model object
                model.previousPos = model.location;
                if (model.location != 'presentation') {
                    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                        model.location = 'contact';
                    } else {
                        model.location = views[model.location].leftView; //reset the current location
                    }
                }
            } else {
                //swap the values of the locations from the model object
                model.previousPos = model.location;
                if (model.location != 'contact') {
                    model.location = views[model.location].rightView; //reset the current location
                } else {
                    $('body').scrollTo('.footerStyle', 500);
                    stopAutoScroll = true;
                }
            }
            if (!stopAutoScroll) {
                $('.navStyle li#' + model.location + 'Nav').click(); //perform a click event on the given element
            }
        }
    }));
}

//function needed to check the response of the captcha security system
function authencticate() {

}
//activate popovers
//nus de ce plm nu merge
$(function() {
    $('[data-toggle="popover"]').popover();

    $('#listGifDiv').hide();
    $('#westermoreGifDiv').hide();

    $('#listImg').on('mouseover', function() {
        $('#listImgDiv').hide();
        $('#listGifDiv').show();
    });

    $('#listGif').on('mouseout', function() {
        $('#listImgDiv').show();
        $('#listGifDiv').hide();
    });


    $('#westermoreImg').on('mouseover', function() {
        $('#westermoreImgDiv').hide();
        $('#westermoreGifDiv').show();
    });

    $('#westermoreGif').on('mouseout', function() {
        $('#westermoreImgDiv').show();
        $('#westermoreGifDiv').hide();
    });
});