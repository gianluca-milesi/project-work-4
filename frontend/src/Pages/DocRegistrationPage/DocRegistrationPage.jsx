import { FinalAddDoctorForm } from "../../Components/AddDoctorForm";
import SecondBanner from "../../components/Banner/SecondBanner";
import { useEffect } from "react";
import styles from "./DocRegistrationPage.module.css";

function DocRegistrationPage() {
  useEffect(() => {
    document.body.classList.add(styles.docRegistrationPage); // Add the class to the body
    return () => {
      document.body.classList.remove(styles.docRegistrationPage); // Remove the class to the body
    };
  }, []);
  return (
    <section>
      <FinalAddDoctorForm />
      <SecondBanner />
    </section>
  );
}

export default DocRegistrationPage;
