//Write a program to get area of shapes

var areaofShape = 0
var shape = "Rectangleee"
switch(shape)
{
    case "Circle" :
    {
        var radii = 5
        areaofShape = 3.14 * radii * radii
        console.log("Area of circle is :" +areaofShape)
        break;
    }
    case "Square" :
    {
        var side = 5
        areaofShape = side * side
        console.log("Area of square is :" +areaofShape)
        break;
    }
    case "Rectangle" :
    {
        var length = 5
        var width = 10
        areaofShape = length * width
        console.log("Area of rectangle is :" +areaofShape)
        break;
    } 

    default:
        console.log("Sorry the shape is not avaliable.")
}