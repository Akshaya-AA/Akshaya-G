function countNumberMultiples(numbers){
    const counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
    for(const num of numbers){
        for(let i=1; i<=9; i++){
            if(num % i === 0){
                counts[i] +=1
            }
        }
    }
    return counts;
}
let input =[1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countNumberMultiples(input))