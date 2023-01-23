/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import DoctorsList from './components/DoctorsList/DoctorsList';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
// import ReserveForm from './components/Reserve/ReserveForm';
import Home from './components/Reserve/Home';
import MyReservations from './components/MyReservations/MyReservations';
import AddDoctorForm from './components/AddDoctor/AddDoctorForm';
import DeleteDoctorForm from './components/DeleteDoctor/DeleteDoctorForm';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <div className="main-container">
        {sessionStorage.getItem('token') ? <Navigation /> : null}
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
      </div>
    </>
  );
}

export default App;
