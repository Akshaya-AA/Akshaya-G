function oddSeries(count){
    if(count <= 0){
        return "value must be greater than 0"
    }

    let result = [];
    let number = 1;

    for(let i=0; i < count; i++){
        result.push(number);
        number = number+2;
    }
    return result.join(", ")
}
console.log(oddSeries(4))