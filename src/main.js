var montrealMarker = L.marker([ 45.5017, -73.5673]).addTo(map);
montrealMarker.bindPopup("<b>Click an area of the map to add an image.</b>").openPopup();

function addImage(popup) {
  const fileInput = document.querySelector('input');
  const fileObject = fileInput.files[0];
  const path = URL.createObjectURL(fileObject);
  const textInput = document.querySelector('textarea');
  const text = textInput.value;
  const imgHTML = `<img src="${path}" />`;
  const textHTML = `<p>${text}</p>`;
  popup.setContent(imgHTML + textHTML);
}

function addPop(e){
  const popup = L.popup();
  popup.setLatLng(e.latlng);
  popup.setContent(`<input type="file" accept="image/*"/><textarea rows="4" maxlength="152" placeholder="add a description"></textarea><button class="button">Submit</button>`);
  popup.openOn(map);
  return popup
}

function addPin(e) {
  const marker = L.marker(e.latlng).addTo(map)
  marker.bindPopup(addPop(e))
  marker.openPopup()
}

map.on('click', addPin)

