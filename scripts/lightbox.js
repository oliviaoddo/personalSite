// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - Lightbox

console.log("hello");
$('#popup').hide();


$(document).on('click', '#resume', function(event) {
    event.preventDefault();
    // console.log(this);
    // var imageLocation = $(this).attr("href");
    // console.log(imageLocation);
    // //Update overlay with the image linked in the link
    // $image.attr("src", imageLocation);
    // console.log($image);
    // // //Get child's alt attribute and set caption
    // // var captionText = $(this).children("img").attr("alt");
    // // $caption.text(captionText);
    var $overlay = $('<div id="overlay"></div>'); 
    var $icon = $("<div id='popup'><div id='downloadicon'><a href='images/webResume.pdf' download><i style='color:#fff' class='fa fa-download fa-2x' aria-hidden='true'></i></a></div><img src='images/webResume' alt='Olivia Oddo Resume'></div>");
    // var $image = $("<img src='images/webResume' alt='Olivia Oddo Resume'>");
    // var $popUp = $("#popup");
    // console.log($popUp);
    // $icon.append($image);
    $overlay.append($icon);
    $("body").append($overlay);
    $overlay.show();
    // $('div#popUp').show();

        //When overlay is clicked
    $overlay.click(function(){
      //Hide the overlay
      $overlay.hide();
    });
});

        // <div id='downloadicon'>
        //     <a href='images/webResume.pdf' download><i style='color:#fff' class='fa fa-download fa-2x' aria-hidden='true'></i></a>
        // </div>
        // <img src="images/webResume" alt="Olivia Oddo Resume">
