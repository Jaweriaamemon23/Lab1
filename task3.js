let obj={name:"ABC" , id: 1 , dep: "CSE"  };
let text="";
function func(obj){
for(let x in obj){
    if(typeof (obj[x])==='string')
    console.log(`$x: ${obj[x]}`)
text+=obj[x]+" ";
}
}
func(obj);
console.log(text);