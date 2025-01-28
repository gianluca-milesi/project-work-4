import styles from "./DocRegistrationPage.module.css";
//Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Components
import { FinalAddDoctorForm } from "../../Components/AddDoctorForm";
import SecondBanner from "../../components/Banner/SecondBanner";


function DocRegistrationPage() {

  //Navigate
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }

  useEffect(() => {
    document.body.classList.add(styles.docRegistrationPage); // Add the class to the body
    return () => {
      document.body.classList.remove(styles.docRegistrationPage); // Remove the class to the body
    };
  }, []);


  return (
    <>
      <section className="form_add_doctor m-5">
        <button onClick={goBack} className="back_button mb-5 bg-[#00c3a5] text-white rounded font-semibold py-1 px-2">Indietro</button>
        <FinalAddDoctorForm />
      </section>

      <section>
        <SecondBanner />
      </section>
    </>
  );
}

export default DocRegistrationPage;
