$(document).ready(function() {
  // form for user information 
  $("#userInfo").submit(function(event){
    event.preventDefault();
    //user parameters 
    const age = parseInt($("input#age").val());
    const gender = $("input#gender").val();
    const zodiac = $("input#zodiac").val();

    if ( age <= 18) {
      $().hid
      $(#kool).show(1000);
    } else if ( gender === female && age >= 18 && age <= 35 && zodiac === "pisces" ) {
      $(#ryan).show(1000);
    }

  });
});