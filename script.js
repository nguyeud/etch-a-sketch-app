// Constants and variables
const colorLabel = document.getElementById('colorLabel');
const sliderLabel = document.getElementById('sliderLabel');

// Builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(680/x);
    $(".grid").height(680/x);
};

// Toggles the gridlines to be visible or not
function toggleGrid() {
    let backgroundColorBtn = $('#gridlineBtn').css('background-color');

    if(backgroundColorBtn == 'rgb(255, 255, 255)') {
        $('#gridlineBtn').css('background-color', 'rgb(86, 165, 235)');
        $('#gridlineBtn').css('color', 'rgb(255, 255, 255)');
        $('.grid').css('outline', '1px solid rgb(255, 255, 255)')
    } else if(backgroundColorBtn == 'rgb(86, 165, 235)') {
        $('#gridlineBtn').css('background-color', 'rgb(255, 255, 255)');
        $('#gridlineBtn').css('color', 'rgb(86, 165, 235)');
        $('.grid').css('outline', '1px solid rgb(221, 221, 221)')
    };
};

// Use eraser to clear the background of the grid
function eraserFunc() {
    let color = document.getElementById("color").value;
    let backgroundColorBtn = $('#eraserBtn').css('background-color');

    if(backgroundColorBtn == 'rgb(255, 255, 255)') {
        $('#eraserBtn').css('background-color', 'rgb(86, 165, 235)');
        $('#eraserBtn').css('color', 'rgb(255, 255, 255)');
        $(".grid").mouseover(function() {
            $(this).css("background-color", 'rgb(255, 255, 255)');
        });
    } else if(backgroundColorBtn == 'rgb(86, 165, 235)') {
        $('#eraserBtn').css('background-color', 'rgb(255, 255, 255)');
        $('#eraserBtn').css('color', 'rgb(86, 165, 235)');
        $(".grid").mouseover(function() {
            $(this).css("background-color", color);
        });
    };
};

// Clear grid
function clearGrid() {
    let backgroundColor = 'rgb(255, 255, 255)';
    $('.grid').css('background-color', backgroundColor)
};

// When color changes, change mouseover color is eraser is not toggled and change color text
$(document).on("change" , "#color" , function(){
    let color = $(this).val();
    $(".grid").mouseover(function() {
        $(this).css("background-color", color);
    });

    colorLabel.innerText = color;
});

// When grid size changes, change grid size
$(document).on("change", "#slider", function() {
    let slider = $(this).val();
    sliderLabel.innerText = slider;

    $('#container').find(".grid").remove();
    createGrid(slider);
});

// Loads 16x16 grid on load with pen color and slider size
$(document).ready(function() {
    // Create grid
    createGrid(16);

    // Get color and grid size
    let color = document.getElementById("color").value;
    let slider = document.getElementById("slider").value;

    // Set color of hover
    $(".grid").mouseover(function() {
        $(this).css("background-color", color);
    });

    // Load text labels
    colorLabel.innerText = color;
    sliderLabel.innerText = slider;
});
