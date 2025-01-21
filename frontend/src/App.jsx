import { useState } from "react"
import { GlobalContext } from "./Utils/GlobalContext"
import { Toast} from "./Components/MsgToast"
import {FinalAddDoctorForm} from './Components/AddDoctorForm'
function App() {
  const [seeToast, setSeeToast]  = useState(false)
  const [msgToast, setMsgToast]  = useState('')
  return (
    <GlobalContext.Provider value={{
      seeToast, setSeeToast,
      msgToast, setMsgToast}}>
    <FinalAddDoctorForm/>
    <Toast/>
    </GlobalContext.Provider>
  )
}

export default App
