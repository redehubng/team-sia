// <script>

	var mymap = L.map('mapid').setView([10.214679, 7.841492], 8);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	var m1 = L.marker([10.5952, 7.4373]).addTo(mymap)
		.bindPopup("<b>Airforce Comprehensive school <br> 9th December 2019</b>.").openPopup();

	L.marker([10.4141, 7.4039]).addTo(mymap)
		.bindPopup("<b>Learn city Model School <br> 12th December 2019</b>.").openPopup();

	L.marker([9.5849, 8.2924]).addTo(mymap)
	.bindPopup("<b>Kafanchan Community College <br> 14th December 2019 </b>").openPopup();

	L.circle([10.214679, 7.841492], 100000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.1
	}).addTo(mymap).bindPopup("Boundaries of the Hour of Code");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

	// m1.addEventListener('click', function(){
	// 	alert('clicked');
	// });


	var countdown = function(date, container){
		var countDownDate = new Date(date).getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get today's date and time
		  var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in the element with id="demo"
		  document.getElementById(container).innerHTML = days + "d " + hours + "h "
		  + minutes + "m " + seconds + "s ";

		  // If the count down is finished, write some text
		  if (distance < 0) {
		    clearInterval(x);
		    document.getElementById(container).innerHTML = "EXPIRED";
		  }
		}, 1000);
	}


	countdown("Dec 9, 2019 12:00:00", 'k');
	countdown("Dec 12, 2019 12:00:00", 'a');
	countdown("Dec 14, 2019 12:00:00", 'l');

// </script>
