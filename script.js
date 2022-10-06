let button = document.getElementById('btn');

button.addEventListener('click', () => {
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let hasil = document.getElementById('hasil');

    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    if (bmi < 18.5){
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Underweight'
    }else if (bmi >= 18.5 && bmi <= 24.9){
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Normal weight'
    }else if (bmi >= 25 && bmi <= 29.9){
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Overweight'
    }else{
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Obesity'
    }
})