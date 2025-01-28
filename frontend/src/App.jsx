/* eslint-disable react-hooks/exhaustive-deps */
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Context
import GlobalContext from "./contexts/GlobalContext.js"
//Hooks
import { useState, useEffect } from "react"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout.jsx"
//Pages
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import SearchDocPage from "./pages/SearchDocPage/SearchDocPage.jsx"
import DocDetailsPage from "./pages/DocDetailsPage.jsx"
import DocRegistrationPage from "./pages/DocRegistrationPage/DocRegistrationPage.jsx"
import NotFound from "./pages/NotFound.jsx"
//Components
import { Toast } from "./Components/MsgToast.jsx"
import axios from "axios"


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [seeToast, setSeeToast] = useState(false)
  const [msgToast, setMsgToast] = useState('')
  const [doctors, setDoctors] = useState([])
  const [search, setSearch] = useState('')
  const [doctorData, setDoctorData] = useState([]);

  async function fetchDoctor() {
    try{
      const result = await axios.get('http://localhost:3000/api/doctors',{params: {search: search}} )
      setDoctors(result.data)
    }catch(error){
      setSeeToast(true)
      setMsgToast(error.message)
    }
  }

  useEffect(() => {
    fetchDoctor()
  },[search])

  
  return (
    <>
      <GlobalContext.Provider value={{
        isLoading, setIsLoading, 
        seeToast, setSeeToast,
        msgToast, setMsgToast,
        doctors, setDoctors,
        search, setSearch,
        doctorData, setDoctorData
      }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchDocPage />} />
              <Route path="/doctor/:id" element={<DocDetailsPage />} />
              <Route path="/registration" element={<DocRegistrationPage />} />
            </Route>
            <Route element={<BlankLayout />}>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toast />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
