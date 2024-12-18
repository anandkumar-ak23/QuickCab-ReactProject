
import React, { useEffect } from "react";
import { useBooking } from "./BookingContext";
import Header from "./frontend/Header";
import Footer from './frontend/Footer';
const BookingHistory = () => {
  const { bookingHistory, clearBookingHistory } = useBooking();

  // Clear all booking history
  const handleClearAll = () => {
    clearBookingHistory();
  };

  // Scroll to the top of the page when the component loads
  const makeCenter = () => {
    window.scrollBy({
      top: -2000,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    makeCenter(); // Call makeCenter when the Profile page is visited
  }, []);

  return (
      <>
      <Header />
    <div className="history-page">
      <h2>Booking History</h2>

      {/* Grid Layout for Bookings */}
      <div className="booking-grid">
        {bookingHistory.length > 0 ? (
          bookingHistory.map((booking, index) => (
            <div key={index} className="booking-card">
              <p>
                <strong>Pickup Location:</strong> {booking.pickupLocation}
              </p>
              <p>
                <strong>Drop-off Location:</strong> {booking.dropoffLocation}
              </p>
              <p>
                <strong>Cab Type:</strong> {booking.cabType}
              </p>
              <p>
                <strong>Date and Time:</strong>{" "}
                {new Date(booking.rideDate).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No booking details found.</p>
        )}
      </div>

      <button onClick={handleClearAll} className="clear-btn">
        Clear all
      </button>
    </div>
      <Footer />
    </>
  );
};

export default BookingHistory;
