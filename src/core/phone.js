'use strict';
function PhoneCall(hours, minutes, seconds, phoneNumber) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.phoneNumber = phoneNumber;
}

function PhoneCallAdapter(duration) {
  var pattern = /^(\d{2}):(\d{2}):(\d{2}),(\d{3}-\d{3}-\d{3})$/;
  var result = pattern.exec(duration);
  this.hours = parseInt(result[1]);
  this.minutes = parseInt(result[2]);
  this.seconds = parseInt(result[3]);
  this.phoneNumber = result[4];
}

PhoneCallAdapter.prototype = Object.create(PhoneCall.prototype);
PhoneCallAdapter.prototype.constructor = PhoneCallAdapter;

function splitLines(logs) {
  return logs.split('\n');
}

function hoursToSeconds(hours) {
  return minutesToSeconds(hoursToMinutes(hours));
}

function minutesToSeconds(minutes) {
  return minutes * 60;
}

function secondsToMinutes(seconds) {
  return seconds / 60;
}

function costCalculator(phoneCall) {
  var totalInMinutes =
    hoursToMinutes(phoneCall.minutes) +
    phoneCall.minutes +
    secondsToMinutes(phoneCall.seconds);

  if (totalInMinutes < 5) {
    return minutesToSeconds(totalInMinutes) * 3;
  }

  var countMinutes = hoursToMinutes(phoneCall.hours) + phoneCall.minutes;
  if (phoneCall.seconds === 0) {
    return countMinutes * 150;
  }

  return (countMinutes + 1) * 150;
}

function hoursToMinutes(hours) {
  return hours * 60;
}

function solution(S) {
  var records = splitLines(S);
  records = records.map(function(r) {
    return r.trim();
  });
  records = records.map(function(r) {
    return new PhoneCallAdapter(r);
  });

  var totalDurationByPhone = {};

  var topRecord = {
    duration: 0,
    phoneNumber: '',
  };
  records.forEach(function(r) {
    var totalInSeconds =
      hoursToSeconds(r.hours) + minutesToSeconds(r.minutes) + r.seconds;
    if (totalDurationByPhone.hasOwnProperty(r.phoneNumber)) {
      totalDurationByPhone[r.phoneNumber] += totalInSeconds;
    } else {
      totalDurationByPhone[r.phoneNumber] = totalInSeconds;
    }

    if (totalDurationByPhone[r.phoneNumber] > topRecord.duration) {
      topRecord.duration = totalDurationByPhone[r.phoneNumber];
      topRecord.phoneNumber = r.phoneNumber;
    } else if (totalDurationByPhone[r.phoneNumber] === topRecord.duration) {
      var phone1 = parseInt(r.phoneNumber.replace('-', ''));
      var phone2 = parseInt(topRecord.phoneNumber.replace('-', ''));
      if (phone1 < phone2) {
        topRecord.phoneNumber = phone1;
      }
    }
  });
  records = records.filter(function(r) {
    return r.phoneNumber !== topRecord.phoneNumber;
  });
  var costs = records.map(function(r) {
    return costCalculator(r);
  });
  var totalCost = costs.reduce(function(acc) {
    return acc;
  });

  return totalCost;
}

solution(
  '00:01:07,400-234-090 \n' +
    '00:05:01,701-080-080\n' +
    '00:05:00,701-080-080\n' +
    '00:05:00,705-080-080\n' +
    '00:05:00,400-234-090'
);
