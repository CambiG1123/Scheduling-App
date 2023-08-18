const timeBlocks = [`#hour-1`,`#hour-2`,`#hour-3`,`#hour-4`,`#hour-5`,`#hour-9`,`#hour-10`,`#hour-11`,`#hour-12`]


// this code displays the current date in the header 
var dayStamp = moment().format('dddd' + ', ' + 'MMMM Do');
  $('#currentDay').text(dayStamp);