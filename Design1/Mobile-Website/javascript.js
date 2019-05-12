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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


function browserdetection(){
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        alert("Thank you for downloading.");
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        alert("Thank you for downloading.");
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        alert("Thank you for downloading.");
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         alert("Thank you for downloading.");
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      alert("Browser Not Supported."); 
    }  
    else 
    {
       alert("Browser Not Supported.");
    }
}

AOS.init({
  duration: 1200,
})