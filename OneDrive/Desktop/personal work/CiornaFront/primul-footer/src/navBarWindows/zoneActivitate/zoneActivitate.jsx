import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ZoneActivitate() {
  return (
    <div style={{ height: '500px', width: '100%', border: '2px solid black' }}>
      <MapContainer center={[45.9432, 24.9668]} zoom={7} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker pentru Cluj-Napoca */}
        <Marker position={[46.7712, 23.6236]}>
          <Popup>
            Cluj-Napoca
          </Popup>
        </Marker>
        {/* Marker pentru Bucovina (Suceava) */}
        <Marker position={[47.6513, 26.2555]}>
          <Popup>
            Bucovina (Suceava)
          </Popup>
        </Marker>
        {/* Marker pentru Cazanele Dunării */}
        <Marker position={[44.6308, 22.3691]}>
          <Popup>
            Cazanele Dunării
          </Popup>
        </Marker>
      </MapContainer>
      {/* aici tre sa mai scriu infromatii si locgurile sa le bag +scroll on track */}
    </div>
  );
}

export default ZoneActivitate;
