import {useParams, Navigate} from 'react-router-dom'
import '../style/DetailPortfolio.css'
import {portfoliolist} from "../data/dataPortfolio.jsx"
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

function DetailPortfolio() {
    const {id} = useParams();
    const data = portfoliolist.find((item) => item.id === id)

    if (data == undefined){
        return <Navigate to='/page-not-found'/>
    }
    console.log(data)
    return (
        <> < Navbar /> <section id="detail-portfolio">
            <div className="wrapper">
                <h1>{data.title}</h1>
                <a href={data.link} target="_blank" rel="noopener noreferrer"> <img src={data.image} alt={data.title} /> </a>
                <p className="skill"><b>Skills:</b>{data.skill}</p>
            </div>
        </section>
        <Footer/>
        <ScrollToTop/>
    </>
    )
}

export default DetailPortfolio