// //complete this code
// class Rectangle {
// 	constructor(width,height){
// this.width= width;
// 		this.height=height;
// 	}
// 	get width(){
// 		return this.width;
// 	}
// 	get height(){
// 		return this.height;
// 	}
// 	getArea(){
// 		return this.width*this.height;
// 	}
// }

// class Square extends Rectangle {
// 	constructor(side) {
//     super(side, side);
//   }
// 	getPerimeter(){
// 		var par = 4*width;
// 		return par;
// 	}
// }



class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  
  get width() {
    return this._width;
  }
  
  get height() {
    return this._height;
  }
  
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  
  getPerimeter() {
    return 4 * this._width;
  }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

