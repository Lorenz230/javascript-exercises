const sumAll = function(num1, num2) {


    let total = 0;
    let min = 0; 
    let max = 0;

    if(num1 < num2){
        min = num1;
        max = num2;
    }
    else{
        min = num2;
        max = num1;
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }


    if (min < 0 || max < 0) {
        return "ERROR";
    }



    max++;
    for(i = min; i < max; i++){
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
