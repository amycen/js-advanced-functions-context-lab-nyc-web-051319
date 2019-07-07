/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let createEmployeeRecord = function (personArr) {
  return {
    firstName: personArr[0],
    familyName: personArr[1],
    title: personArr[2],
    payPerHour: personArr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployees = function(arrays){
  return arrays.map(x => createEmployeeRecord(x))
}

let createTimeInEvent = function (dateStamp) {
  const [dateString, hours] = dateStamp.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    hour: hours,
    date: dateString
  })
  return this
}

let createTimeOutEvent = function (dateStamp) {
  const [dateString, hours] = dateStamp.split(" ")
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: hours,
    date: dateString
  })
  return this
}



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
