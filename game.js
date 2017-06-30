var LEFT = 'ArrowLeft';
var RIGHT = 'ArrowRight';
var UP = 'ArrowUp';
var DOWN = 'ArrowDown';

$(document).ready(function () {
    
    var player = { x: 7, y: 9};
    var score = 0;

    function updateDisplay () {
        var gridHTML = generateGridHTML(grid);
        $('#container').html(gridHTML);
        $('#score').text(score);
    }
    
    // ready to start the game
    setValue (grid, player, PLYR);
    updateDisplay();

    function setPlayerPosition (destination, destinationValue, degrees) {
        if (destinationValue === null || destinationValue === WALL) {
            return false;
        }
        // Moves the player image to the new location
        setValue(grid, destination, PLYR);
        // Sets the player's previous location to none (ate the food)
        setValue(grid, player, NONE);
        // Sets the players coordinates to the new location
        player = destination;
        return true;
    }

    $(document).keydown(function (event) {
        var key = event.key;
        var neighbors = findNeighbors(grid, player);
        var destination = null;
        // to address rotating pacman based on direction
        var degrees = 0;
        // Find out which key was pressed and what the neighbor is
        switch(key){
            case LEFT:
                destination = neighbors.left;
                break;
            case RIGHT:
                destination = neighbors.right;
                degrees = 182;
                break;
            case UP:
                destination = neighbors.up;
                degrees = 94;
                break;
            case DOWN:
                destination = neighbors.down;
                degrees = -84;
                break;
        }
        // Prepare CSS for pacman rotation
        var rotation = '.plyr{ transform: rotate(' + degrees + 'deg);}';
        $('style').html(rotation);
        // Get the value of the destination
        var destinationValue = null;
        if (destination) {
            event.preventDefault();
            destinationValue = findValue(grid, destination);
        }
        // Update score when eating
        if (destinationValue === FOOD){
            score += 10;
        }

        // Determine if position & therefore display should update
        var shouldUpdateDisplay = setPlayerPosition(destination, destinationValue, degrees);

        if (shouldUpdateDisplay) {
            updateDisplay();
        }
    });
});