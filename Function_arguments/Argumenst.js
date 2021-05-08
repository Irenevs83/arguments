// No arguments
/*
const paintWall = function () {
    console.log("The wall has been painted red");
}; */

// Single argument
/*
const paintWall = function (color) {
    console.log("The wall has been painted" + color);
};

paintWall("green");
paintWall("blue");
*/

// zonder argument staat er alleen The wall has been painted.

const paintWall = function (wallside, color) {
    console.log("The" + wallside + "has been painted" + color);
};

const wall = "north wall";
const wallColor = "green";

paintWall(wall, wallColor);

// de volgorde van de arguments in de fuction definition is bepalend voor de volgorde in mijn tekst.
