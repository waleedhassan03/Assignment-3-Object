// Part 1: Employee Data:
var employee = {
    name: "Waleed Hassan",
    department: "IT",
    role: "Manager",
    contact: {
        phone: 12345678,
        email: "abcd@gmail.com"
    },
    skills: ["Typescript"]
};
console.log(employee);
var myCar = {
    name: "Tesla",
    color: "Grey",
    model: "Model X",
    year: 2024,
    engine: {
        horsepower: 2000
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    }
};
console.log(myCar);
console.log(myCar.getHorsepower());
var tShirt = {
    name: "Polo T-Shirt",
    price: 500,
    color: "white",
    Inventory: {
        stock: 200,
        colorOptions: ["Red", "Black", "Blue"],
        changeColor: function (newColor) {
            if (this.colorOptions.includes(newColor)) {
                tShirt.color = newColor;
                if (newColor === "Red") {
                    tShirt.price *= 1.10;
                }
                else if (newColor === "Blue") {
                    tShirt.price *= 0.95;
                }
                this.stock--;
                return "Color changed to ".concat(newColor, ", new price is ").concat(tShirt.price);
            }
            else {
                return ("Color ".concat(newColor, " is not available"));
            }
        }
    }
};
var result = tShirt.Inventory.changeColor("Red");
console.log(result); // Output the result of the color change operation
console.log("New color: ".concat(tShirt.color, ", New price: ").concat(tShirt.price, ", Stock: ").concat(tShirt.Inventory.stock));
