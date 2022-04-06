$(document).ready(function() {
  // form for user information 
  $("#userInfo").submit(function(event){
    event.preventDefault();
    //user parameters 
    const age = parseInt($("input#age").val());
    const gender = $("input#gender").val();
    const zodiac = $("input#zodiac").val();

    if ( age <= 18 ) {
      $(#dolly).hide(1000);
      $(#ryan).hide(1000);
      $(#ramones).hide(1000);
      $(#kool).show(1000);  //<< SHOW
    } else if ( gender === "female" && age >= 18 && age <= 35 && zodiac === "pisces" ) {
      $(#dolly).hide(1000);
      $(#ryan).show(1000);  //<< SHOW
      $(#ramones).hide(1000);
      $(#kool).hide(1000);
    } else if ( gender === "male" && age >= 30 && zodiac === "virgo" ) {
      $(#dolly).show(1000); //<< SHOW
      $(#ryan).hide(1000); 
      $(#ramones).hide(1000);
      $(#kool).hide(1000);
    } else ( gender === "male" || gender === "female" && age >= 18) {
      $(#dolly).hide(1000);
      $(#ryan).hide(1000); 
      $(#ramones).show(1000); //<< SHOW
      $(#kool).hide(1000);
    }

  });
});