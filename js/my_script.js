$(document).ready(function(){

$.ajax("http://acadprojects.com/py/fabsos/location?city_id=1", {
      success: function(content) {
        console.log("success")
        a = content.data;
        for (i = 0; i < a.length; i++) {
          $("#sel1").append("<option class='option_content' id="+i +">"+a[i]["location_name"]+"</option>");
        //  $("#1").after("<li id='1'><a href='#'>"+a[i]["location_name"]+"</a></li>");


        }
      },
      error: function() {
         console.log("error");
      }
   });



   });
//
last_value=22;

$("#btn_order").click(function(){



    loc = $(".form-control option:selected").val();




    if (loc!=="Select location") {
    console.log(loc);
    localStorage.setItem("location", loc);
    window.location.href = "https://ashigh-techinstitute.netlify.com/";
  }

});
