var map = L.map('mapid').setView([45.5017, -73.5673], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiZG9sbGlhcnMiLCJhIjoiY2syYXBhc2owNGF3bzNkbXQ1N3NoNnc2eSJ9.-Kjht58fgFxz81TAqI6khw'
}).addTo(map);

//map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
	var radius = e.accuracy;

	L.marker(e.latlng).addTo(map)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();

	L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
	alert(e.message);
}

map.on('locationerror', onLocationError);

var marker = L.marker([ 45.5017, -73.5673]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

function submitImage(popup) {
  const fileInput = document.querySelector('input');
  const fileObject = fileInput.files[0];
  const path = URL.createObjectURL(fileObject); // is a string

  const textInput = document.querySelector('textarea');
  const text = textInput.value;

  const imgHTML = `<img src="${path}" />`;
  const textHTML = `<p>${text}</p>`;
  popup.setContent(imgHTML + textHTML);
}

function onMapClick(e) {
  const popup = L.popup();
  popup.setLatLng(e.latlng);
  popup.setContent(`<h2>Add an image</h2>
    <input type="file" accept="image/*"/>
    <textarea rows="4" maxlength="152" placeholder="add a description"></textarea>
    <br>
    <button class="button">Submit</button>`);
  popup.openOn(map);
  
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    submitImage(popup)
  })
}

map.on('click', onMapClick)

