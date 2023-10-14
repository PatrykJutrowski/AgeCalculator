const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const calculateButton = document.getElementById('calculateButton');

const day1 = document.getElementById('day1');
const month1 = document.getElementById('month1');
const year1 = document.getElementById('year1');



const date = new Date();
const days = date.getDate();
const months = date.getMonth() + 1;
const years = date.getFullYear();

calculateButton.addEventListener('click', calculateAge);
let resultDays, resultMonths, resultYears;
function calculateAge (){
    const userYear = year.value;
    const userMonth = month.value;
    const userDay = day.value;
    if (userDay > 31 || userMonth > 12 || userYear < 1923 || userYear > years || isNaN(userDay) || isNaN(userMonth) || isNaN(userYear)){
        alert("invalid");
        year.value = ""
        month.value = ""
        day.value = ""
        return 0;
    }
    resultYears =   years - userYear;
    resultMonths =  months - userMonth ;
    resultDays =  days - userDay ;
    if (resultDays < 0){
        resultMonths--;
        if (resultMonths % 2 ){
            resultDays+= 31;
        }else {
            resultDays += 30
        }
    }
    if (resultMonths < 0){
        resultYears--;
        resultMonths += 12;
    }


    year1.innerText = resultYears;
    month1.innerText = resultMonths;
    day1.innerText = resultDays;
}


function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}