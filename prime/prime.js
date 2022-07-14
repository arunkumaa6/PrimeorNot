// prime number

let lowernum=prompt('enter lower number');
let highernum=prompt('enter higher number');
console.log(`the prime number between ${lowernum} and ${highernum} are:`);

for(i=lowernum; i<=highernum; i++){
    let x=0;

    for(let j=2; j<i; j++){
        if(i%j==0){
            x=1;
            break;
        }
    }
    if(i>1 && x==0){
        console.log(i);
    }

}