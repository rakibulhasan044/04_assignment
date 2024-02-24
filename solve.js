function calculateMoney(ticketSell) {
    const ticketPrice = 120;
    const guardCost = 500;
    const staffCost = 400;
    if(typeof ticketSell !== "number") {
        return 'Invalid!! Please Enter A number'
    }
    else {
        if(ticketSell < 0) {
            return 'Invalid Number';
        }
        else{
            const totalCost = guardCost + staffCost;
            const profit = (ticketSell* ticketPrice) - totalCost;
            return profit;
        }
    }
}


function checkName(name) {
    if(typeof name !== 'string') {
        return 'invalid';
    }
    else {
        const lowName = name.toLowerCase();
        const checks = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        const lastChar = lowName[lowName.length - 1];
        for(let i = 0; i < checks.length; i++) {
        if(lastChar === checks[i]) {
            return 'Good Name';
            }
       }
       return 'Bad Name'; //mara khailam
    }
}

const dekh = checkName("jaforgat");
console.log(dekh)


function deleteInvalids(array) {
    if(Array.isArray(array) === false) {
        return 'Invalid Array'
    }
    else {
        let arr2 = [];
        for(let i = 0; i < array.length; i++) {
            if(typeof array[i] === 'number' &&  !isNaN(array[i])) {
                arr2.push(array[i]);
            }
        }
        return arr2;
    }
}


function password(object) {
    if(typeof object.name !== 'string' || typeof object.birthYear !== 'number' || typeof object.siteName !== 'string' || object.name === '' || object.siteName === '') {
        return 'invalid';
    }
    else {
        let str = object.birthYear;
        let str1 = str.toString();
        if(str1.length < 4) {
            return 'invalid';
        }
        else {
            let str = object.siteName;
            let capital = str.charAt(0).toUpperCase() + str.slice(1);
            let pass = capital + '#' + object.name + '@' + object.birthYear;
            return pass;
        }
    }
}


function monthlySavings(array, livingCost) {
    if (!Array.isArray(array) || typeof livingCost !== 'number') {
        return 'invalide input'
    }
    else {
        let totalIncome = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] >= 3000){
                array[i] = array[i] * 0.8;
            }
            totalIncome += array[i];
        }
        totalSaving = totalIncome - livingCost;
        if(totalSaving >= 0) {
            return totalSaving;
        }
        else {
            return 'earn more'
        }
    }
}
