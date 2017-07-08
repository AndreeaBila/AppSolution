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
    alert('Im in mobile!');
    //on page load hide everything but presentation
    $('#portofolioPage').hide();
    $('#aboutPage').hide();
    $('#contactPage').hide();
    $('#footerPage').hide();
}