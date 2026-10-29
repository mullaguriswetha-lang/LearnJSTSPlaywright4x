let arr1 = [1, 2, 3, 4];
let odd = [];
let even = [];
let i = 0;

while (i < arr1.length) {
    if (arr1[i] % 2 === 0) {
        even.push(arr1[i]);
    } else {
        odd.push(arr1[i]);
    }
    i++;
}

console.log(`Even Numbers: ${even.join(" ")} Odd Numbers: ${odd.join(" ")}`);
