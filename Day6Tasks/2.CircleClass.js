// A class Circle
// The constructor will set the properties radius to 1 and color to "red" as default

class Circle {
    constructor(radius = 1.0, color = "red"){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(newRadius){
        this.radius = newRadius;
    }

    getColor(){
        return this.color;
    }

    setColor(newColor){
        this.color = newColor;
    }

    toString(){
        return `Circle { radius: ${this.radius}, color: ${this.color} }`;
    }

    getArea(){
        return (3.14 * this.radius * this.radius);
    }

    getCircumference(){
        return ((2 * 3.14 * this.radius).toFixed(2));
    }
}

const circle1 = new Circle(2, "blue");
const circle2 = new Circle();

console.log(circle1);
console.log(circle1.getRadius());
console.log(circle1.getColor());
console.log(circle1.toString());
circle1.setRadius(10);
circle1.setColor("yellow");
console.log(circle1.toString());
console.log(circle1.getRadius());
console.log(circle1.getColor());

console.log(circle1.getArea());
console.log(circle1.getCircumference());

// console.log(circle2);
// console.log(circle2.getRadius());
// console.log(circle2.getColor());
// console.log(circle2.toString());
// circle2.setRadius(100);
// circle2.setColor("orange");
// console.log(circle2.toString());
// console.log(circle2.getRadius());
// console.log(circle2.getColor());
// console.log(circle2.getArea());
// console.log(circle2.getCircumference());


