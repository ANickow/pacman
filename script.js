// game cell classes
var PLYR = 'plyr';
var WALL = 'wall';
var FOOD = 'food';
var NONE = 'none';

// define game board
var grid = [
    [ WALL, WALL, WALL, WALL ],
    [ WALL, NONE, FOOD, WALL ],
    [ WALL, FOOD, PLYR, WALL ],
    [ WALL, WALL, WALL, WALL ],
];

function findValue (grid, point) {
    var row = grid[point.y];
    if (!row) {
        return null;
    }
    var value = row[point.x];
    if (!value) {
        return null;
    }
    return value;
}

function findNeighbors (grid, point) {
    var x = point.x;
    var y = point.y;
    var neighbors = {};
    neighbors.up    = { x: x   , y: y-1 };
    neighbors.down  = { x: x   , y: y+1 };
    neighbors.left  = { x: x-1 , y: y   };
    neighbors.right = { x: x+1 , y: y };
    return neighbors;
}

//create game board HTML content
function generateGridHTML(grid){
    var gridHTML = '<div class="grid">';
    // for each row in the grid
    for (var y = 0; y < grid.length; y++) {
        var row = grid[y];
        var rowHTML = '<div class="row">';
        // for each cell in each row
        for (var x = 0; x < row.length; x++) {
            var point = {x: x, y: y};
            var value = findValue(grid, point);

            var cell = '<div class="' + value + '"></div>';
            rowHTML += cell;
        }
        rowHTML += '</div>';
        gridHTML += rowHTML;
    }
    gridHTML += '</div>';

    return gridHTML;
}

var gridHTML = generateGridHTML(grid);

$(document).ready(function () {
    // Display gameboard
    $('#container').html(gridHTML);
});