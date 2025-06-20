import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, Settings } from 'lucide-react';

const bestPlaces = [
  { img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg', watermark: true },
  { img: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg', watermark: true },
  { img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg', watermark: true },
];
const pins = [
  { img: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg' },
  { img: 'https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg' },
  { img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg' },
];

const Watermark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span className="text-4xl font-extrabold text-yellow-300 opacity-60 select-none" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>VOAT Network</span>
  </div>
);

function MapSearchPan({ position, bounds }) {
  const map = useMap();
  React.useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { animate: true, padding: [20, 20] });
    } else if (position) {
      map.setView(position, 13, { animate: true });
    }
  }, [position, bounds, map]);
  return null;
}

const Explore = () => {
  const [search, setSearch] = useState('');
  const [mapCenter, setMapCenter] = useState([17.4375, 78.4451]);
  const [mapBounds, setMapBounds] = useState(null);
  const [searching, setSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionLoading, setSuggestionLoading] = useState(false);
  const debounceRef = useRef();

  // Fetch suggestions as user types
  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }
    setSuggestionLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}&addressdetails=1&limit=5&countrycodes=in`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        setSuggestions([]);
      }
      setSuggestionLoading(false);
    }, 350);
    return () => clearTimeout(debounceRef.current);
  }, [search]);

  // Handle search submit (Enter or search icon)
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}&countrycodes=in`
      );
      const data = await res.json();
      if (data && data.length > 0) {
        if (data[0].boundingbox) {
          const bounds = [
            [parseFloat(data[0].boundingbox[0]), parseFloat(data[0].boundingbox[2])],
            [parseFloat(data[0].boundingbox[1]), parseFloat(data[0].boundingbox[3])],
          ];
          setMapBounds(bounds);
        } else {
          setMapCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
          setMapBounds(null);
        }
        setShowSuggestions(false);
      } else {
        alert('Location not found');
      }
    } catch (err) {
      alert('Error searching location');
    }
    setSearching(false);
  };

  // Handle suggestion click
  const handleSuggestionClick = (sugg) => {
    if (sugg.boundingbox) {
      const bounds = [
        [parseFloat(sugg.boundingbox[0]), parseFloat(sugg.boundingbox[2])],
        [parseFloat(sugg.boundingbox[1]), parseFloat(sugg.boundingbox[3])],
      ];
      setMapBounds(bounds);
    } else {
      setMapCenter([parseFloat(sugg.lat), parseFloat(sugg.lon)]);
      setMapBounds(null);
    }
    setSearch(sugg.display_name);
    setShowSuggestions(false);
  };

  // Helper to bold state name in suggestion
  function highlightState(displayName) {
    // Try to bold the state name if present
    const states = [
      'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Jammu and Kashmir','Ladakh'
    ];
    for (const state of states) {
      if (displayName.includes(state)) {
        return displayName.replace(state, `<b>${state}</b>`);
      }
    }
    return displayName;
  }

  return (
    <div className="bg-black min-h-screen w-full font-sans">
      {/* Map with overlays */}
      <div className="relative w-full h-[400px] rounded-b-3xl overflow-hidden">
        <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true} zoomControl={false} className="w-full h-full z-0">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapSearchPan position={mapCenter} bounds={mapBounds} />
        </MapContainer>
        {/* Header text over map */}
        <h1 className="absolute left-2 top-2 text-4xl font-extrabold text-black drop-shadow-lg z-10" style={{letterSpacing: '-2px'}}>Explore</h1>
        {/* Search bar over map */}
        <form
          onSubmit={handleSearch}
          className="absolute right-20 top-4 w-56 flex flex-col z-20"
          autoComplete="off"
        >
          <div className="flex items-center bg-white rounded-full shadow px-2 py-1 relative">
            <button
              type="submit"
              className="mr-1 text-gray-500 hover:text-black focus:outline-none cursor-pointer"
              tabIndex={-1}
            >
              <Search size={18} />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-black text-sm flex-1"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              disabled={searching}
            />
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 top-10 w-full bg-white rounded-b-xl shadow-lg z-30 max-h-48 overflow-y-auto">
              {suggestions.map((sugg, idx) => (
                <div
                  key={sugg.place_id}
                  className="px-3 py-2 text-sm text-black hover:bg-gray-200 cursor-pointer border-b last:border-b-0"
                  onClick={() => handleSuggestionClick(sugg)}
                  dangerouslySetInnerHTML={{ __html: highlightState(sugg.display_name) }}
                />
              ))}
            </div>
          )}
        </form>
        {/* Settings icon over map */}
        <button className="absolute right-4 top-4 bg-gray-800 p-2 rounded-full flex items-center justify-center z-10">
          <Settings size={22} className="text-white" />
        </button>
      </div>

      {/* Best Places Near You Card */}
      <div className="mx-2 mt-4 rounded-2xl bg-[#2d2320]/90 shadow-lg p-3">
        <h2 className="text-2xl font-bold text-white mb-2">Best Places Near You</h2>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
          {bestPlaces.map((place, i) => (
            <div key={i} className="relative w-36 h-36 rounded-xl overflow-hidden flex-shrink-0">
              <img src={place.img} alt="place" className="object-cover w-full h-full" />
              {place.watermark && <Watermark />}
            </div>
          ))}
        </div>
      </div>

      {/* Your Pin's to Explore Card */}
      <div className="mx-2 mt-4 rounded-2xl bg-[#2d2320]/90 shadow-lg p-3">
        <h2 className="text-2xl font-bold text-white mb-2">Your Pin's to Explore</h2>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
          {pins.map((pin, i) => (
            <div key={i} className="relative w-36 h-36 rounded-xl overflow-hidden flex-shrink-0">
              <img src={pin.img} alt="pin" className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-white text-black font-bold rounded-full px-8 py-2 text-lg shadow border border-gray-400">Add A Missing Place</button>
        </div>
      </div>

      <div className="pb-24" />
    </div>
  );
};

export default Explore;