import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
  const [bookingHistory, setBookingHistory] = useState([]);

  const addBooking = (newBooking) => {
    setBookingHistory((prevHistory) => [...prevHistory, newBooking]);
  };

  const clearBookingHistory = () => {
    setBookingHistory([]); // Reset the booking history
  };

  return (
    <BookingContext.Provider value={{ bookingHistory, addBooking, clearBookingHistory }}>
      {children}
    </BookingContext.Provider>
  );
};
