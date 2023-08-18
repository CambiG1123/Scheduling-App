const timeBlocks = [`#hour-1`,`#hour-2`,`#hour-3`,`#hour-4`,`#hour-5`,`#hour-9`,`#hour-10`,`#hour-11`,`#hour-12`]


// this code displays the current date in the header 
var dayStamp = moment().format('dddd' + ', ' + 'MMMM Do');
  $('#currentDay').text(dayStamp);

  $(document).ready(function() {
    const currentHour = dayjs().hour();
  
    $('.time-block').each(function() {
      const timeBlockId = $(this).attr('id');
      const timeBlockHour = parseInt(timeBlockId.split('-')[2]); // Extract the hour from the ID
  // checks if the time block hour is less than the current hour
  // if it is add ckass past and remove classes present & future
      if (timeBlockHour < currentHour) {
        $(this).addClass('past').removeClass('present future');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present').removeClass('past future');
      } else {
        $(this).addClass('future').removeClass('past present');
      }
    })
  });