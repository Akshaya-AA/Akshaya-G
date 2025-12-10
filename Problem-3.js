function oddConditionalSeries(n){
    if(n <=0){
        return "value must be greater than 0"
    }
    let length

    if(n%2 !==0){
        length = n;
    }
    else{
        length = n-1;
    }
    let result = [];
    let num = 1;
    for(let i=0; i < length; i++){
        result.push(num);
        num = num + 2
    }
    return result.join(", ")
}
console.log(oddConditionalSeries(4))