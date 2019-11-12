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
  popup.setContent(`<input type="file" accept="image/*"/><textarea></textarea><button class="button">Submit</button>`);
  popup.openOn(map);
  
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    addImage(popup)
  })
}

function addPin(e) {
  var marker = L.marker(e.latlng).addTo(map)
  marker.bindPopup(addPop(e)).openPopup();
  console.log('done?')
}

map.on('click', addPin)



