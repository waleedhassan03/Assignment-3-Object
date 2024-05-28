// Part 1: Employee Data:

// 1. Design a type alias named Employee to represent an employee object with properties like name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if any).


type Employee = {
    name: string;
    department: string;
    role: "Manager" | "Engineer" |"Doctor";   //This is union type. we will choose from these options

    contact?: {
        phone?: number;     //this is optional with ? sign
        email?: string
    };
    skills?: ["Typescript" | "Python" | "HTML" | "CSS"]   //This is also union type.it means we have only these options to choose from
};


let employee: Employee = {
    name: "Waleed Hassan",
    department: "IT",
    role: "Manager",

    contact: {
        phone: 12345678,
        email: "abcd@gmail.com"
    },

    skills: ["Typescript"]
}

console.log(employee);



//Part 2: Car Details:

// Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the engine's horsepower.

type Car = {
    name : string;
    color: string;
    model: string;
    year: number;

    engine : {
        horsepower: number;
    };

    getHorsepower: () => number;
        
}

let myCar: Car = {
    name: "Tesla",
    color: "Grey",
    model: "Model X",
    year: 2024,

    engine: {
        horsepower: 2000
    },

    getHorsepower: function(){

        return this.engine.horsepower
    }
}
console.log(myCar)
console.log(myCar.getHorsepower());





// Part 3: Colorful T-Shirts:

// 1. Design a type alias named Product to represent a T-shirt object with properties like name (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).

//Type Alias of the Product
type Product = {
    name: string,
    price: number,
    color: string,

    Inventory: {

        stock: number,
        colorOptions?: string[],

        changeColor: (newColor:string) => string

        
    }
}


//object, nested object and function inluded here  accoeding to type alias
let tShirt: Product = {
    name: "Polo T-Shirt",
    price: 500,
    color: "white",

    Inventory: {

        stock: 200,
        colorOptions: ["Red", "Black", "Blue"],

        changeColor: function(newColor){
            
            if(this.colorOptions.includes(newColor)){

                tShirt.color = newColor;

                if(newColor === "Red"){

                    tShirt.price *= 1.10; // Adjusting price for red increased by 10%

                }else if(newColor === "Blue"){

                    tShirt.price *= 0.95;  // Adjusting price for blue decreased by 5%
                }
                this.stock--; // Decrease the stock by 1 if colorchange is true

                return `Color changed to ${newColor}, new price is ${tShirt.price}`

            }else {
                return (`Color ${newColor} is not available`) /// Return a message if color is not available
            }
        }
    }
}


// using the changeColor function
let result = tShirt.Inventory.changeColor("Red");

console.log(result);  // Output the result of the color change operation

//updated information about the T-shirt after a color change operation.
console.log(`New color: ${tShirt.color}, New price: ${tShirt.price}, Stock: ${tShirt.Inventory.stock}`);




