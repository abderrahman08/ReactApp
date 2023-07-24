import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Assurez-vous d'importer le CSS de Leaflet pour une bonne apparence

const MyMap = () => {
    const position = [51.505, -0.09]; // Coordonnées de la localisation (latitude, longitude)
  
    return (
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Remplacez l'URL par un autre fournisseur de tuiles si nécessaire
        />
        <Marker position={position}>
          <Popup>
            Emplacement du lieu ici.
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  
  export default MyMap;
  