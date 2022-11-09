export default class CalcDate {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }

  checkDate() {
    // const jan = 1;
    // const feb = 4;
    // const march = 4;
    // const april = 0;
    // const may = 2;
    // const june = 5;
    // const july = 0;
    // const aug = 3;
    // const sept = 6;
    // const oct = 1;
    // const nov = 4;
    // const dec = 6;
    // const janLeapYear = 0;
    // const febLeapYear = 3;

    let monthKey = 0;



    switch (this.month) {
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
    const num2 = finalYearNum + num1 + this.day + monthKey;
    let num3 = 0;

    if (this.year > 1800) {
      num3 = ((num2) % 7);

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
        console.log('Not a day of week');
    }

    return weekDay;

  }


}