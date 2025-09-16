function scuberGreetingForFeet(feet){
  // Write your code here!
  // if the ride 400 feet or less,its free!
  if (feet <= 400) {
    return 'This one is on me!';
}
  // if the ride is between 400 and 2000 feet, the fare is $2.00
  else if (feet > 400 && feet <= 2000){
    return 'That will be twenty bucks.';
  
  }
  // if the ride is between 2000 and 2500 feet, the fare is $25.00
  else if(feet<=2500){
    return 'I will gladly take your thirty bucks.';
  }
  // if the ride is over 2500 feet, the ride is not allowed
  if (feet > 2500){
    return 'No can do.';
  }

  }


function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';


  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}