/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DoctorsList from './components/DoctorsList/DoctorsList';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import ReserveForm from './components/Reserve/ReserveForm';
import MyReservations from './components/MyReservations/MyReservations';
import AddDoctorForm from './components/AddDoctor/AddDoctorForm';
import DeleteDoctorForm from './components/DeleteDoctor/DeleteDoctorForm';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" exact element={<DoctorsList />} />
      <Route path="/doctors" element={<DoctorDetails />} />
      <Route path="/reserve" element={<ReserveForm />} />
      <Route path="/my-reservations" element={<MyReservations />} />
      <Route path="/add-doctor" element={<AddDoctorForm />} />
      <Route path="/delete-doctor" element={<DeleteDoctorForm />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>

  </>
);

export default App;
