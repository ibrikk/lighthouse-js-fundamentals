const talkingCalendar = function(date) {
  let dateArr = date.split('/');
  let year = dateArr[0];
  let month = talkingMonth(parseInt(dateArr[1]));
  let day = talkingDay(parseInt(dateArr[2]));
  return (month + ' ' + day + ', ' + year);
};

const talkingMonth = (monthNum) => {
  switch (monthNum) {
    case 1: 
    return 'January';
    case 2: 
    return 'February';
    case 3: 
    return 'March';
    case 4: 
    return 'April';
    case 5: 
    return 'May';
    case 6: 
    return 'June';
    case 7: 
    return 'July';
    case 8: 
    return 'August';
    case 9: 
    return 'September';
    case 10: 
    return 'October';
    case 11: 
    return 'November';
    case 12: 
    return 'December';
  }
}

const talkingDay = (dayNum) => {
  if (dayNum === 1 || dayNum === 21 || dayNum === 31) {
    return dayNum.toString() + 'st'
  } else if (dayNum === 2 || dayNum === 22) {
    return dayNum.toString() + 'nd'
  } else if (dayNum === 3 || dayNum === 23) {
    return dayNum.toString() + 'rd'
  } else {
    return dayNum.toString() + 'th'
  }
} 

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
