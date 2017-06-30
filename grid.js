// game cell classes
var PLYR = 'plyr';
var WALL = 'wall';
var FOOD = 'food';
var CHER = 'cherry';
var NONE = 'none';

// define game board
var lvl1Grid = [
// [  0      1    2      3     4     5    6     7     8(6)  9(5) 10(4)  11(3) 12(2) 13(1) 14(0)]
    [ WALL, WALL, WALL, WALL, WALL, WALL, WALL, NONE, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
    [ WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, NONE, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL],
    [ WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL],
    [ WALL, FOOD, FOOD, CHER, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, CHER, FOOD, FOOD, WALL],
    [ WALL, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, WALL],
    [ WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL],
    [ WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL],
    [ NONE, NONE, NONE, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, NONE, NONE, NONE],
    [ WALL, WALL, WALL, WALL, FOOD, FOOD, WALL, WALL, WALL, FOOD, FOOD, WALL, WALL, WALL, WALL],
// TO DO FOR LATER - MAKE THE ROW BELOW THIS END WITH FOOD AND FOOD SO PACMAN CAN EAT THROUGH AND JUMP TO THE OTHER SIDE . . . 
    [ WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL],
    [ WALL, WALL, WALL, WALL, FOOD, FOOD, WALL, FOOD, WALL, FOOD, FOOD, WALL, WALL, WALL, WALL],
    [ NONE, NONE, NONE, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, NONE, NONE, NONE],
    [ WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL],
    [ WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL],
    [ WALL, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, WALL],
    [ WALL, FOOD, FOOD, CHER, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, CHER, FOOD, FOOD, WALL],
    [ WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL],
    [ WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, NONE, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL],
    [ WALL, WALL, WALL, WALL, WALL, WALL, WALL, NONE, WALL, WALL, WALL, WALL, WALL, WALL, WALL]
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

function setValue (grid, point, newValue) {
    var row = grid[point.y];
    if (!row) {
        return false;
    }
    var value = row[point.x];
    if (!value) {
        return false;
    }
    row[point.x] = newValue;
    return true;
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