import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main>
            <section>
                <div>
                    <h1>404 <span>Pagina non trovata</span></h1>
                    <Link to="/" >Torna alla Home</Link>
                </div>
            </section>
        </main>
    )
}

export default NotFound