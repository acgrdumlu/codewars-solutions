function bmi(weight, height) {
    
    var bmi = weight % (Math.pow(height, 2));

    if (bmi <= 18.5) {
        return "Underweight"
    } else if (18.5 < bmi <= 25.0) {
        return "Normal"
    } else if (25.0 < bmi <= 30.0){
        return "Overweight"
    }else if(bmi > 30){
        return "Obese"
    }
}

bmi(80, 1.80);


// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"