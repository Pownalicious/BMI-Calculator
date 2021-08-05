
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let weightInKG = document.getElementById("weight").value;
    let heightInM = document.getElementById("height").value;
    let totalBMI = (weightInKG / (heightInM * heightInM) * 10000)
    document.getElementById('bmi-output').value = Math.round(totalBMI)
})




// OUTCOME ASSIGNMENT
// console.log(`
// weight: ${weightInKG}
// height: ${heightInM}
// Youre BMI is: ${BMI}
// *******************************************
// A BMI under 18.5 is considered underweight
// A BMI above 25 is considered overweight
// *******************************************
// `)

// const userBMI = document.getElementById("bmi.index")
// userBMI.textContent = BMI.toFixed(2);

