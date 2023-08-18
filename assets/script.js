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
    });

    // when the document is loaded a click event listener is attatched to the save btns
    $('.saveBtn').on('click', function() {
      const timeBlock = $(this).closest('.time-block'); //selects the closest parent with the class time-block
      const timeBlockId = timeBlock.attr('id'); //detects that parent's id
      const userInput = timeBlock.find('.description').val(); // finds the text area with the class description and gets its value
  //if the timeBlockId and the userInput are present it saves to local storage the value of  the userInput and the key of the timeBlockId
      if (timeBlockId && userInput) {
        localStorage.setItem(timeBlockId, userInput);
      }
    });
    //for each time-block this if function is ran
  $('.time-block').each(function() {
    const timeBlockId = $(this).attr('id'); //finds the id of the given time block
    const storedInput = localStorage.getItem(timeBlockId); 
//if there is storedInput, finds the text area with the class description for each of the respective time blocks and changes its value to the value of storedInput 
    if (storedInput) {
      $(this).find('.description').val(storedInput);
    }
  });
});
