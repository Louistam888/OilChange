//input on starting mileage

//input on current mileage

//add considerations of oil conventional 5k synthetic 10k dont know 5k

//create variable for starting milage
//create variable for ending mileage
//create variable for total mileage travelled 
//create boolean operators for oil types 

//create remaining mileage count variable for syntethnic and other options 


$(document).ready(function(){

// VARIABLES FOR MILEAGE CALCULATIONS  

  let odoStart = 0;
  let odoEnd = 0;
  let lastOilType = undefined;

//***ON CLICKING SUBMIT BUTTON***//

  $('form').on('submit', function(event) {
    event.preventDefault();
    odoStart = $('#odoStart').val();
    odoEnd = $('#odoEnd').val();
    lastOilType = $('#lastOilType').val();

// MILEAGE CALCULATIONS 
 
    const mileage = odoEnd-odoStart;

    const rawSyntheticRemaining = 10000-mileage;
    const synthenticRemaining = rawSyntheticRemaining.toLocaleString('en-us');

    const rawConNoIdeaRemaining = 5000-mileage;
    const conNoIdeaRemaining = rawConNoIdeaRemaining.toLocaleString('en-us');

    const rawOverdueSyn = mileage-10000;
    const overdueSyn = rawOverdueSyn.toLocaleString('en-us');

    const rawOverdueConNoIdea = mileage-5000;
    const overdueConNoIdea = rawOverdueConNoIdea.toLocaleString('en-us');


//  ANSWERS IF MILEAGE IS OVER 10,000KM
    if (mileage >= 10000) {
      if (lastOilType == "synthetic") {
        $('.oilChangeStatus').text(`Yes`),
        $('.remaining').text(`You are overdue for an oil change. Since synthetic oil needs to be changed every 10,000 km, you are ${overdueSyn} km overdue. Get an oil change now.`),
        $('.nextChange').text(``);

      } else if (lastOilType == "conventional") {
        $('.oilChangeStatus').text(`Yes`),
        $('.remaining').text(`You are overdue for an oil change. Since conventional oil needs to be changed every 5,000 km, you are ${overdueConNoIdea} km overdue. Get an oil change now.`),
        $('.nextChange').text('');

      } else if (lastOilType == "noIdea") {
        $('.oilChangeStatus').text(`Yes`),
        $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional.Conventional oil needs to be changed every 5,000 km, so you may be ${overdueConNoIdea} km overdue.\n\nGet an oil change now.`),
        $('.nextChange').text('');
      }

// ANSWERS IF MILEAGE IS BETWEEN 5,000KM AND 10,000KM
    } else if (mileage < 10000 && mileage >= 5000) {
      if (lastOilType == "synthetic") {
        $('.oilChangeStatus').text(`No`), 
        $('.remaining').text(`With synthetic oil, your next oil change will be in:`),
        $('.nextChange').text(`${synthenticRemaining} km`);

      } else if ((lastOilType == "conventional")) {
        $('.oilChangeStatus').text(`Yes`),
        $('.remaining').text(`You are ${overdueConNoIdea} km overdue for an oil change. Get on oil change now.`),
        $('.nextChange').text('');

      } else if ((lastOilType == "noIdea")) {
        $('.oilChangeStatus').text(`Yes`),
        $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional. Conventional oil needs to be changed every 5,000 km, so you may be ${overdueConNoIdea} km overdue.\n\nGet an oil change now.`),
        $('.nextChange').text('');
      }

// ANSWERS IF MILEAGE IS UNDER 5,000KM
    } else if (mileage <= 4999 && mileage >= 0) {
      if (lastOilType == "synthetic") { 
        $('.oilChangeStatus').text(`No`), 
        $('.remaining').text(`With synthetic oil, your next oil change will be in:`),
        $('.nextChange').text(`${synthenticRemaining} km`);

      } else if ((lastOilType == "conventional")) {
        $('.oilChangeStatus').text(`No`), 
        $('.remaining').text(`With conventional oil, your next oil change will be in:`),
        $('.nextChange').text(`${conNoIdeaRemaining} km`);

      } else if ((lastOilType =="noIdea")) {
        $('.oilChangeStatus').text(`No`), 
        $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional.Conventional oil needs to be changed every 5,000 km.\n\nBased on this assumption, your next oil change will be in:\n`),
        $('.nextChange').text(`${conNoIdeaRemaining} km`);
      }

// ANSWER IF SOMEONE ENTERS A LARGER END ODOMETER READING THAN THE STARTING READING      
    } else {
      $('.oilChangeStatus').text('?'), 
      $('.remaining').text(`Your odometer can't go backwards! Try again.`),
      $('.nextChange').text('');
    };   
  }); // for functionevent submit


//***ON CLICKING RESET BUTTON***//
  $('form').on('reset', function(reset) {
    odoStart = 0;
    odoEnd = 0;

    $('.oilChangeStatus').text(``),
    $('.remaining').text(``),
    $('.nextChange').text(``);
  });

}); //for document ready



