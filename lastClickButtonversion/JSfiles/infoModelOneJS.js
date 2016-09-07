// With this varable count picture in slider.
var imagecount = 1;
// This variable is number of picture in slider.
var totalImage = 4;


// This function with name "pictureSlider1" change the picture in slider if the buttons are clicked.
function pictureSlider1(number) {
    // In this variable save selected element from DOM.
    var image = document.getElementById('picture1');
    // Upgrade counter "imagecount"
    imagecount = imagecount + number;
    // When 'imagecount' is greater than total picture in slider, 'imagecount' is equal to 1, and show first picture in slider.
    if (imagecount > totalImage) {
        imagecount = 1;
    }
    // When 'imagecount' is less than one, 'imagecount' is equal to total picture in slider, and show last picture in slider.
    if (imagecount < 1) {
        imagecount = totalImage;
    }
    //Change property "src" of "image" variable, and change picture in slider.
    image.src = "images/firstmodel/car1." + imagecount + ".png";
}