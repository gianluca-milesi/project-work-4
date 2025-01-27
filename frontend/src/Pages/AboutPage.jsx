import aboutImg from "../assets/about-stock.png";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";

function AboutPage() {
    let faqs = ["Che servizi offriamo?","Come posso registrarmi?","I nostri medici sono verificati?","Posso contattare direttamente il medico?"]
    return (
        <div className="container flex justify-center my-10 align-center">
            <div className="hidden lg:block w-6/12">
                <img src={aboutImg} className="w-8/12"/>
            </div>
            <div className="w-full lg:w-6/12">
                <div className="mb-10">
                    <p className="text-3xl font-bold uppercase mb-[1rem]">Chi siamo</p>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum doloremque voluptatem, in, dolorem debitis illo mollitia sint dolore aspernatur animi corporis molestias nobis unde. Culpa in accusantium quisquam laudantium architecto, quas hic blanditiis assumenda ullam dignissimos ad. Officia quaerat dicta quo doloremque, consequatur ipsa itaque ex quos sequi omnis.</p>
                </div>

                <p className="text-3xl font-bold">F.A.Q.</p>
                {faqs.map((faq) => (<CustomAccordion title={faq} key={faq}/>))}
            </div>
        </div>
    )
}

export default AboutPage;