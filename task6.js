let array=[90,80,70,60]
let sum=0;
let count=0
let fun=(array)=>
{
    for(let j=0;j<array.length; j++){
sum+=array[j];
count++;
}
console.log(sum)
}
fun(array)
let average=sum/count;

console.log(average);