import aboutImg from "../assets/about-stock.png";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";

function AboutPage() {
  const faqs = [
    {
      title: '"Che servizi offriamo?',
      content:
        "Servizi offerti da BDoctors: Profili Medici con informazioni dettagliate su medici specialisti, Recensioni trasparenti dai pazienti, Ricerca Medici con un sistema avanzato per trovare specialisti, Sicurezza dei Dati con protezione dei dati personali, e Supporto Clienti con assistenza dedicata.",
    },
    {
      title: "Come posso registrarmi?",
      content:
        "Per registrarti su BDoctors, visita il nostro sito web ufficiale e clicca sul pulsante di registrazione. Inserisci le tue informazioni personali, crea un nome utente e una password, e segui le istruzioni per completare la registrazione. Una volta completata, potrai accedere al tuo profilo e iniziare a utilizzare i nostri servizi.",
    },
    {
      title: "I nostri medici sono verificati?",
      content:
        "Sì, i nostri medici sono verificati. Ogni medico iscritto a BDoctors passa attraverso un rigoroso processo di verifica per garantire la loro qualifica e professionalità. Ci impegniamo a fornire informazioni affidabili e accurate ai nostri utenti, assicurando che tutti i medici presenti sulla nostra piattaforma siano debitamente accreditati e qualificati.",
    },
    {
      title: `Posso contattare direttamente il medico?`,
      content:
        "Sì, puoi contattare direttamente il medico. Una volta trovato lo specialista che ti interessa su BDoctors, avrai accesso ai dettagli di contatto e potrai inviare un messaggio direttamente attraverso la nostra piattaforma. Questo facilita la comunicazione tra pazienti e medici, rendendo il processo più semplice e immediato.",
    },
  ];
  return (
    <div className="bgprimary py-3">
      <div className="container bgsecondary p-6 custom-search-section ">
        <div className="flex justify-center align-center z-1">
          <div className="hidden lg:block w-5/12">
            <img src={aboutImg} className="w-11/12" />
          </div>
          <div className="w-full lg:w-6/12">
            <div className="mb-10">
              <p className="text-3xl font-bold uppercase mb-[1rem]">
                Chi siamo
              </p>
              <p className="text-l">
                BDoctors è una piattaforma innovativa creata per migliorare la
                comunicazione tra medici e pazienti. Fondata da un team di
                sviluppatori esperti, BDoctors mira a fornire un servizio
                affidabile e intuitivo per facilitare l'accesso alle cure
                mediche. Il nostro obiettivo principale è quello di offrire uno
                spazio dove i pazienti possano facilmente trovare informazioni
                sui medici specialisti, leggere le recensioni lasciate da altri
                utenti e lasciare feedback sui servizi ricevuti. Questo sistema
                di recensioni trasparente consente ai medici di migliorare
                continuamente la qualità delle loro prestazioni e ai pazienti di
                prendere decisioni informate. Il team di BDoctors lavora
                costantemente per migliorare la piattaforma, integrando le più
                recenti tecnologie e mantenendo alti standard di sicurezza per
                proteggere i dati degli utenti. La nostra missione è quella di
                rivoluzionare il settore della sanità, rendendo il processo di
                ricerca e contatto con i medici più semplice e efficace.
                Crediamo fermamente che l'innovazione tecnologica possa portare
                a un miglioramento significativo nella qualità della vita delle
                persone e ci impegniamo a continuare a sviluppare soluzioni che
                rispondano alle esigenze dei nostri utenti.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-9/12 mx-auto">
          <p className="text-3xl font-bold">F.A.Q.</p>
          <CustomAccordion faqs={faqs} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
