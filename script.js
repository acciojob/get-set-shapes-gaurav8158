//complete this code
class Rectangle {
	constructor(width,height){
this.width= width;
		this.height=height;
	}
	getArea(){
		return this.width*this.height;
	}
}

class Square extends Animal {
	constructor(width,height){
		super(width,height);
	}
	getPerimeter(){
		return 2*(width+height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
