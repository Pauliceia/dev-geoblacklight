// basemaps

GeoBlacklight.Basemaps = {
  positron: L.tileLayer(
    'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  )
};
