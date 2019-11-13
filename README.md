# map-and-markers
This uses the JS library [Leaflet][https://leafletjs.com/] for interacting with maps.

You'll need to [request an access token from Mapbox][https://www.mapbox.com/studio/account/tokens/] to create a tile layer.

Here's a sample of the config file I've set up which also instantiates the map and tile layer.

```
var config = {                                                                                                             
  attribution: `Map data &copy;
                <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
                <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © 
                <a href="https://www.mapbox.com/">Mapbox</a>`,
  maxZoom: 18,
  id: 'mapbox.streets',
  access_token: 'YOUR MAPBOX ACCESS TOKEN HERE'
}

var map = L.map('mapid').setView([45.5017, -73.5673], 12);
 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: config.attribution,
  maxZoom: config.maxZoom,
  id: config.id,
  accessToken: config.access_token
}).addTo(map);
```
