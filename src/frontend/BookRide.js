
import React, { useState } from "react";
import { useBooking } from "../BookingContext"; // Import the context
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
const BookRide = () => {
  const { addBooking } = useBooking(); // Access the addBooking function from context
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [cabType, setCabType] = useState("");
  const [rideDate, setRideDate] = useState(new Date());

  const suggestions = ["New York", "San Francisco", "Los Angeles", "Chicago", "Houston"];
  const filterSuggestions = (input) => {
    return suggestions.filter((location) =>
      location.toLowerCase().includes(input.toLowerCase())
  );
};
const navigate= useNavigate();
const username = localStorage.getItem("uname");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
            alert("User not logged in.");
            navigate("/auth");
            return;
          }
      
    // Create a new booking object
    const newBooking = { pickupLocation, dropoffLocation, cabType, rideDate };
    
    // Add the new booking to the global booking history
    addBooking(newBooking);

    // Reset form fields after submission
    setPickupLocation("");
    setDropoffLocation("");
    setCabType("");
    setRideDate(new Date());
    navigate("/history");
  };

  return (
    <div className="bookride-page">
      <h2>Book a Ride</h2>
      <form onSubmit={handleSubmit}>
        {/* Pickup Location Input */}
        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickupLocation"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            list="pickupSuggestions"
            placeholder="Enter pickup location"
            required
          />
          <datalist id="pickupSuggestions">
            {filterSuggestions(pickupLocation).map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
        </div>

        {/* Drop-off Location Input */}
        <div className="form-group">
          <label htmlFor="dropoffLocation">Drop-off Location:</label>
          <input
            type="text"
            id="dropoffLocation"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            list="dropoffSuggestions"
            placeholder="Enter drop-off location"
            required
          />
          <datalist id="dropoffSuggestions">
            {filterSuggestions(dropoffLocation).map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
        </div>

        {/* Cab Type Dropdown */}
        <div className="form-group">
          <label htmlFor="cabType">Cab Type:</label>
          <select
            id="cabType"
            value={cabType}
            onChange={(e) => setCabType(e.target.value)}
            required
          >
            <option value="">Select a cab type</option>
            <option value="Economy">Economy</option>
            <option value="Standard">Standard</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        {/* Date and Time Picker */}
        <div className="form-group">
          <label htmlFor="rideDate">Date and Time:</label>
          <input
            type="datetime-local"
            id="rideDate"
            value={rideDate}
            onChange={(e) => setRideDate(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookRide;