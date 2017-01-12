//lightbix for resume
$(document).on('click', '#resume', function(event) {
    event.preventDefault();
    //create overlay div
    var $overlay = $('<div id="overlay"></div>'); 
    //create resume popup
    var $icon = $("<div id='popup'><div id='downloadicon'><a href='images/webResume.pdf' download><i style='color:#fff' class='fa fa-download fa-2x' aria-hidden='true'></i></a></div><img src='images/webResume' alt='Olivia Oddo Resume'></div>");
    $overlay.append($icon);
    $("body").append($overlay);
    $overlay.show();
    //When overlay is clicked
    $overlay.click(function(){
      //Hide the overlay
      $overlay.hide();
    });
});
