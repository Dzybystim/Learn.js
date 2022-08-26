
function getCommonElements(array1, array2) {
  // Change code below this line
  result=[];

for (let i=0; i<array1.length; i+=1) {

 const resultArray1 = array1[i];

 const arra1IncludesArray2 = array2.includes(resultArray1);

 if (arra1IncludesArray2===true) {
  result.push(resultArray1);
 }


}
return result;
 // Change code above this line
}
console.log(result);

getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])


//  разложить первый массив
// разложить второй массив
// через иф сравнить значения 
// через пуш вывести новый массив



//if (array2.includes(resultArray1)) {
//  result.push(resultArray1)
// }

// console.log(result);

// return