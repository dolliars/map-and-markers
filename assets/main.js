// map is set in a config file
// that contains access token

// find location
function onLocationFound(e) {
	var radius = e.accuracy;

	L.marker(e.latlng).addTo(map)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();

	L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
	alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
//map.locate({setView: true, maxZoom: 16});


var marker = L.marker([ 45.5017, -73.5673]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>Click an area of the map to add an image.").openPopup();

function addImage(popup) {
  const fileInput = document.querySelector('input');
  const fileObject = fileInput.files[0];
  const path = URL.createObjectURL(fileObject); // is a string

  const textInput = document.querySelector('textarea');
  const text = textInput.value;

  const imgHTML = `<img src="${path}" />`;
  const textHTML = `<p>${text}</p>`;
  popup.setContent(imgHTML + textHTML);
}

function addPin(e) {
	L.marker(e.latlng).addTo(map)
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
    addImage(popup)
  })
}


map.on('click', onMapClick)
//map.on('click', addPin)

//marker.bindPopup(popupContent).openPopup();

