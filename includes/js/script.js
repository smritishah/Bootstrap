/*

My Custom JS
============

Author:  Smriti Shah
Updated: September 2017

*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
 }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ValidateContactForm()
{
    var fname = document.ContactForm.FName;
    var lname = document.ContactForm.LName;
    var email = document.ContactForm.Email; 
    var msg = document.ContactForm.Message;

    if (fname.value == "@")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
      if (fname.value == "@")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (msg.value == "")
    {
        window.alert("Please provide a detailed description or comment.");
        comment.focus();
        return false;
    }
    return true;

}