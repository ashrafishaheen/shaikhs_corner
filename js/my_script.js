$.ajax("http://acadprojects.com/py/fabsos/location?city_id=1", {
	success: function(data) {
		console.log("success")
		a = data.data;
		for(i = 1; i < a.length; i++) {
			$("#loc").after("<li id='loc'><a href=''#'>"+a[i]["location_name"]+"</a></li>");

		}
	},
	error: function() {
		console.log("error");
	}
});
