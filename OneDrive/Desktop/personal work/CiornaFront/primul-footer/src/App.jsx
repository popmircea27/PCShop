import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import BodyMain from './body-main/BodyMain'
import moduleName from 'module';
import LoginSignIn from './navBarWindows/userPanel/LoginSingIn'
import VCadou from './navBarWindows/Vouchere Cadou/VCadou'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel from './navBarWindows/userPanel/UserPanel'
import zoneActivitate from './navBarWindows/zoneActivitate/zoneActivitate'
import ZoneActivitate from './navBarWindows/zoneActivitate/zoneActivitate'

function App() {
  return (
      <>
      <Header/>
      <Router>
            <Routes>
                <Route path="/user-panel" element={<UserPanel />} />
                <Route path="/login-signIn" element={<LoginSignIn />} />
                <Route path="/vouchere-cadou" element={<VCadou/>} />
                <Route path="/zone-activitate" element={<ZoneActivitate/>} />

            </Routes>
        </Router>
      </>
  );
}

export default App
