// prime or not

// let num=parseInt(prompt('Enter the positive value:'));
// console.log('vlaue:',num);
// let isPrime=true;

// if(num===1){

// }
// else if(num>1){
//     for(let i=2; i<num;i++){
//         if(num%i==0){
//             isPrime=false;
//             break;
//         }

//     }
//     if(isPrime){
//         console.log(`${num} is a prime number`);
// }
// else{
//     console.log(`${num} is a not primr number`);
// }

//     }
    
// else{
//     console.log('the number is not a prime number');
// }




let num=prompt('enter the vlaue');
console.log('value:',num);
let y=0;

for(i=2 ;i<num ;i++){
    if(num%i==0){
        y=1;
        break;
    }
}

if(y==1){
    console.log('not prime');
}
else{
    console.log('prime');
}
