// Using the arguments passed by forEach - compact

[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
  });
  
  let rectangles = [
    { length: 10, width: 5 },
    { length: 7, width: 3 },
    { length: 15, width: 8 }
  ];
  
  rectangles.forEach(function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
    console.log(`Rectangle - Length: ${rectangle.length}, Width: ${rectangle.width}, Area: ${rectangle.area}`);
  });
  
  
  
  /* Further Adventures
   *
   * 1) Create an array of rectangle objects.
   *    Each rectangle should have a length
   *    property and a width property.
   *
   * 2) Define an assignArea function that
   *    takes a rectangle as an argument and
   *    assigns an area property holding
   *    the area of the rectangle.
   *
   * 3) Define a showInfo function that
   *    takes a rectangle as an argument and
   *    displays its properties on the console.
   *
   * 4) Use forEach and your two functions
   *    to display info about each of
   *    the rectangles in the array.
   *
   */