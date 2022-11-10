export default class CalcDate {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }

  checkDate() {
    
    let monthKey = 0;

    switch (parseInt(this.month)) {
      case 1:
        monthKey = 1;
        break;
      case 2:
        monthKey = 4;
        break;
      case 3:
        monthKey = 4;
        break;
      case 4:
        monthKey = 0;
        break;
      case 5:
        monthKey = 2;
        break;
      case 6:
        monthKey = 5;
        break;
      case 7:
        monthKey = 0;
        break;
      case 8:
        monthKey = 3;
        break;
      case 9:
        monthKey = 6;
        break;
      case 10:
        monthKey = 4;
        break;
      case 11:
        monthKey = 1;
        break;
      case 12:
        monthKey = 6;
        break;
      default:
        console.log("Enter a valid number");
    }

    const newArr = [];
    let yearArr = Array.from(String(this.year), Number);
    yearArr.forEach(function (element, index) {
      if (index > 1) {
        newArr.push(element);
      }
    });

    let yearNumString = newArr.join('');
    let finalYearNum = parseInt(yearNumString);
    const num1 = Math.trunc(finalYearNum * .25);
    const num2 = parseInt(finalYearNum) + parseInt(num1) + parseInt(this.day) + (monthKey);
    let num3 = 0;

    if (this.year < 1800) {
      num3 = ((num2 + 4) % 7);
    } else if (this.year < 1900) {
      num3 = ((num2 + 2) % 7);
    } else if (this.year >= 1900 && this.year <= 2000) {
      num3 = ((num2) % 7);
    } else if (this.year > 2000 && this.year < 2099) {
      num3 = ((num2 - 1) % 7);
    }

    let weekDay = '';
    switch (num3) {
      case 1:
        weekDay = 'Sunday';
        break;
      case 2:
        weekDay = 'Monday';
        break;
      case 3:
        weekDay = 'Tuesday';
        break;
      case 4:
        weekDay = 'Wednesday';
        break;
      case 5:
        weekDay = 'Thursday';
        break;
      case 6:
        weekDay = 'Friday';
        break;
      case 7:
        weekDay = 'Saturday';
        break;
      default:
        weekDay = 'Not a day of week';
    }

    return weekDay;

  }


}