class calculator{
    addition(a, b){
        return a + b;
    }
    subtraction(a, b){
        return a - b;
    }
    multiplication(a, b){
        return a* b;
    }
    division(a, b){
        return  b === 0 ? "cannot divide by zero" : a/b
    }
    calculate(a, b, type){
        if(type === "addition"){
            return this.addition(a, b)
        }
        else if(type === "subtraction"){
            return this.subtraction(a, b)
        }
        else if(type === "multiplication"){
            return this.multiplication(a, b)
        }
        else if(type === "division"){
            return this.division(a, b)
        }
        else{
            return "Invalid"
        }
    }
}
const calc = new calculator();
console.log(calc.calculate(10,20, "addition"));
console.log(calc.calculate(10, 20, "subtraction"));
console.log(calc.calculate(10, 20, "multiplication"));
console.log(calc.calculate(10, 20, "division"))
console.log(calc.calculate(10, 20, "plus"))