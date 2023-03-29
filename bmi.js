const btnEl = document.getElementById('btn');
const bmiEl = document.getElementById('bmi-result');
const detail = document.getElementById('weight-condition');

function calculateBMI(){
    const heightvalue = document.getElementById('height').value;
    const weightValue = document.getElementById('weigth').value;
    console.log(heightvalue,weightValue);

    const bmiValue = weightValue / (heightvalue*heightvalue);
    bmiEl.value = bmiValue;

    if( bmiValue < 18.5){
        detail.innerText = "Under weigth";
    }else if(bmiValue >=18.5 && bmiValue <=24){
        detail.innerText = "Normal weight";
    }else if(bmiValue >=25 && bmiValue <=29.9){
        detail.innerText = "Over weight";
    }else if(bmiValue <=30){
        detail.innerText="Obesity";
    }
}



btnEl.addEventListener('click',calculateBMI)