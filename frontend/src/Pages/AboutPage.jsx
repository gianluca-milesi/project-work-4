import aboutImg from "../assets/about-stock.png";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";

function AboutPage() {
    const faqs = [
        { title: '"Che servizi offriamo?', content: 'Content for section 1' },
        { title: 'Come posso registrarmi?', content: 'Content for section 2' },
        { title: 'I nostri medici sono verificati?', content: 'Content for section 3' },
        { title: `Posso contattare direttamente il medico?`, content: 'Content for section 4' }
    ];
    return (
        <div className="container flex justify-center my-10 align-center z-1">
            <div className="hidden lg:block w-6/12">
                <img src={aboutImg} className="w-8/12"/>
            </div>
            <div className="w-full lg:w-6/12">
                <div className="mb-10">
                    <p className="text-3xl font-bold uppercase mb-[1rem]">Chi siamo</p>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum doloremque voluptatem, in, dolorem debitis illo mollitia sint dolore aspernatur animi corporis molestias nobis unde. Culpa in accusantium quisquam laudantium architecto, quas hic blanditiis assumenda ullam dignissimos ad. Officia quaerat dicta quo doloremque, consequatur ipsa itaque ex quos sequi omnis.</p>
                </div>

                <p className="text-3xl font-bold">F.A.Q.</p>
                <CustomAccordion faqs={faqs}/>
            </div>
        </div>
    )
}

export default AboutPage;