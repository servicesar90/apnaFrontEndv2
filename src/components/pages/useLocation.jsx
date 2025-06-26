import { useState } from "react";

export default function UseLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        getAddressFromCoords(
         28.6960,
          77.5654
        );
        setError("");
      },
      (err) => {
        setError("Permission denied or unable to fetch location.");
        console.error(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const getAddressFromCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      console.log("Address:", data.display_name);
      return data.display_name;
    } catch (err) {
      console.error("Error in reverse geocoding:", err);
      return "Unable to fetch address";
    }
  };

  return (
    <div className="p-4 space-y-2">
      <button
        onClick={handleLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Get My Location
      </button>

      {location && (
        <div className="text-sm text-gray-800">
          📍 Latitude: {location.latitude.toFixed(4)}, Longitude:{" "}
          {location.longitude.toFixed(4)}
        </div>
      )}

      {error && <div className="text-red-600 text-sm">{error}</div>}
    </div>
  );
}
