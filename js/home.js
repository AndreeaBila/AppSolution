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
    //set the margin top of the navbar to 60 px for every view
    $('#presentationPage').css({ 'margin-top': '60px' });
    $('#portofolioPage').css({ 'margin-top': '60px' });
    $('#aboutPage').css({ 'margin-top': '60px' });
    $('#contactPage').css({ 'margin-top': '60px' });
    //display the home page
    //variable needed to track the current location on the page
    var model = {
        location: 'presentation',
        previousPos: 'contact'
    };
    //hide every other page but presentation which is the first page that the user sees
    $('#' + views['portofolio'].pageID).hide();
    $('#' + views['about'].pageID).hide();
    $('#' + views['contact'].pageID).hide();
    //mark the home/presenation nav button as being the current view
    $('#' + views['presentation'].navID).addClass('currentPage');
    //create an event listener to map the swipe action to the current page
    var hammertime = new Hammer(document.getElementById("wrapper"));
    // listen to events...
    //event triggerd when the user moves the view to the right by swping left
    hammertime.on("swipeleft", function(ev) {
        model.previousPos = model.location; //exchange prevous positions since the page view has changed
        model.location = views[model.location].rightView; //get the next view
        showView(model, 'right', 'left'); //call the method needed to change the current view as indicated by the system logic
    });
    //event triggerd when the user moves the view to the left by swping right
    hammertime.on("swiperight", function(ev) {
        model.previousPos = model.location; //exchange prevous positions since the page view has changed
        model.location = views[model.location].leftView; //get the next view
        showView(model, 'left', 'right'); //call the method needed to change the current view as indicated by the system logic
    });
    //on click go to target page
    $('.navStyle li').click(function() {
        //check if the clicked page is the one that is currently being displayed
        if (!$(this).hasClass('currentPage')) {
            //if the clciked nav item is not marked it means that a different page is being accessed
            model.previousPos = model.location; //exchange prevous positions since the page view has changed
            model.location = $(this).attr('id').replace("Nav", ""); //get the id of the navbar element that has been clicked
            showView(model, null, null); //call the function needed to display the right elements as indicated by the system logic
        }
    });
}
//function needed to show the appropriate view as indicated by the system logic
function showView(model, showDir, hideDir) {
    //check if the user has swiped the page or clicked an element by checking if the any slideing directions have been instaciated
    if (showDir != null && hideDir != null) {
        //check if the page that has to be displayed is to the left
        if (showDir === "left") {
            $('#' + views[model.previousPos].pageID).hide(); //hide the current page in display without swipte to keep the navbar in place
            $('#' + views[model.location].pageID).show("slide", { direction: String(showDir) }, 550); //swipe to the target page
        } else {
            //check if the page that has to be displayed is to the left
            $('#' + views[model.previousPos].pageID).hide("slide", { direction: String(hideDir) }, 550); //hide the current page in display with swipe animation
            $('#' + views[model.location].pageID).show(); //display the target page without swiping to keep the navbar in place
        }
    } else {
        //if the swipe directions haven't been set it means that a click has been perfromed on a navbar item
        //hide the old view and siplay the new one without any swipe animations
        $('#' + views[model.previousPos].pageID).hide(550);
        $('#' + views[model.location].pageID).show(550);
    }
    //remove the target from the old nav bar element and add it to the target navbar element
    $('#' + views[model.location].navID).addClass('currentPage');
    $('#' + views[model.previousPos].navID).removeClass('currentPage');
}

//this function is needed to adjust the page for the desktop version
function loadPC() {
    //set the margin top to 60px px for the presentation page view only
    $('#presentationPage').css({ 'margin-top': '60px' });
    //variable needed to track the current location on the page
    var model = {
        location: null,
        previousPos: null
    };
    //check if a navbar element has been clicked indicating a change in the current view
    $('.navStyle li').click(function() {
        //code needed to remove the currentPage class from all elements in the navbar
        $(this).siblings().each(function() {
            $(this).removeClass('currentPage');
        });
        //add the currentPage class to the selected element from the navbar
        $(this).addClass('currentPage');
        //get the name of the page
        model.previousPos = model.location;
        model.location = $(this).attr('id').replace('Nav', '');
        //scroll to the selected element
        var elementPageID = $(this).attr('id').replace('Nav', 'Page'); //get the id of the page that we are scrolling to
        //check if the current page is presentation page
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
        //varaible needed to check if the autoscoll of the page should be enabled
        var stopAutoScroll = false;
        //if the model object hasn't been initialised set it to the default value of presentation
        if (model.location == null) model.location = 'presentation';
        //check the direction of the mouse
        if (event.deltaY == 1) {
            //scroll up
            //swap the values of the locations from the model object
            model.previousPos = model.location;
            if (model.location != 'presentation') {
                //check to see if the user sees the footer and scroll to contact if so
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    model.location = 'contact';
                } else {
                    //scroll to the desired page
                    model.location = views[model.location].leftView; //reset the current location
                }
            }
        } else {
            //scroll down
            //check if on scroll down the page is not entirly displayed because of the height of the window
            var currentElement = model.location + "Page";
            var rect = document.getElementById(currentElement).getBoundingClientRect();
            if (rect.bottom > $(window).height()) {
                //if the user has to default scroll the overflow stop the autoscroll of the page
                stopAutoScroll = true;
            } else {
                //allow the user to autoscroll to the desired element
                //swap the values of the locations from the model object
                model.previousPos = model.location;
                if (model.location != 'contact') {
                    model.location = views[model.location].rightView; //reset the current location
                } else {
                    //if the user displays the contact page and scrolls down auto scroll him to the footer
                    $('body').scrollTo('.footerStyle', 500);
                    stopAutoScroll = true;
                }
            }
        }
        //check if the autoscroll feature is on
        if (!stopAutoScroll) {
            //is it is autoscroll the user to the desired element
            $('.navStyle li#' + model.location + 'Nav').click(); //perform a click event on the given element
        }

    }));
}

//automatically close every alert
$('.alert').hide();
//check if the close button from the alert has been clicked
$('.close').click(function() {
    $(this).parent().hide(300);
});
//function needed to check the response of the captcha security system
function onSubmit(token) {
    var form = document.getElementById("i-recaptcha"); //get the submitted form from the user
    //validate the form
    if (validate_form(form)) {
        //if the form is valid send it to the server for the emailing process to begin
        form.submit();
    } else {
        //if the form is invalid reset the captcha element
        grecaptcha.reset();
    }
}

//function needed to validate the form
function validate_form(form) {
    //check if the user has completed every field in the form and if he has submitte a valid email address
    if ($('#userEmail').val() === '' || $("#userSubject").val() === "" || $('#userMessage').val() === "" || !validate_email()) {
        //if the user hasn't send valid information display an alert and return false
        $('#captchaAlert').show(300);
        return false;
    }
    //if the form is valid return true
    return true;
}

//function needed to check if the email address submitted by the use is valid
function validate_email() {
    var email = $('#userEmail').val(); //retrieve the email address submitted by the user
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //create a regex to check its structure
    return re.test(email); //test the email address agains the regex and return the result
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