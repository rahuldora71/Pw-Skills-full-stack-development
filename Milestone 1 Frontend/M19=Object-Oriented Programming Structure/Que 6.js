// TASK 6 
// Problem Statement 6: Design a Class for a Geometric Shape 
// Design a class called Shape that can represent various geometric shapes. 
// Implement subclasses for specific shapes like Circle, Rectangle, and RightTriangle. 
// Each subclass should have properties of that shape (e.g.. Width, height for a rectangle) 
// and methods for calculating the area and perimeter of the shape. 
// Create instances of these shapes and calculate their areas and perimeters.

class Shape{
 
    constructor(name){
        this.name = name;
    }
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
    perimeter() {
        throw new Error("Method 'perimeter()' must be implemented.");
    }
    
}   

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}



class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class RightTriangle extends Shape {
    constructor(base, height) {
        super("Right Triangle");
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    perimeter() {
        const hypotenuse = Math.sqrt(this.base * this.base + this.height * this.height);
        return this.base + this.height + hypotenuse;
    }
}

//create instances
const c1=new Circle(5)

console.log("Area of the circle : "+ c1.area().toFixed(2));
console.log("Perimeter of Circle : "+ c1.perimeter().toFixed(2));


const r1=new Rectangle(10,5)

console.log("Area Of Rectangle is : "+r1.area());
console.log("Perimeter Of Rectangle is : "+r1.perimeter());


const rt=new RightTriangle(3,4)

console.log("Area Of RightTriangle is : "+rt.area());
console.log("Perimeter Of RightTriangle is : "+rt.perimeter());






