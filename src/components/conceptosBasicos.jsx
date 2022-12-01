import React from "react";
import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom';

const Home = () => <h3>home</h3>
const Dash = () => <h3>DASHBOARD</h3>
const SearchPage = () => {
    const tacos = [
        'cochinita',
        'chile',
        'carnita',
        'quesadilla'
    ]
    return (
        <div>
            <h1>Search Page</h1>
            <ul>
                
            {tacos.map(taco => (
                <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
            ))}
            </ul>
        </div>
    );
};



const Tacos = () => {
    const {name} = useParams()
    return (
        <div>
            <h1>Tacos</h1>
            {name}
            <Link to="detalle"> Ir a los detallers</Link>
            <Outlet/>
        </div>
    )
}


const TacoIndex = () => {

    return (
        <div>
            <h1>Index Router de tacos</h1>
        </div>
    );
}


const TacosDetalles = () => {
    const {name} = useParams()
    return (
        <div>
            <h1>detalles del taco {name}</h1>
        </div>
    );
};


function ConceptosBasicos() {

    return (
        <div className="">
            <nav>
                <h2>Nav</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dash">DASH</Link></li>
                    <li><Link to="/search-page">Search Page</Link></li>
                </ul>
            </nav>
            <h3>Conceptos Basicos</h3>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dash" element={<Dash />} />
                <Route path="/search-page" element={<SearchPage/>}/>
                <Route path="/tacos" element={<Tacos />}>{/* Manejo de variables en la ruta */}
                    <Route index element={<TacoIndex/>}/>
                    <Route path=":name" element={<TacosDetalles/>}/>
                    <Route path="detalle" element={<TacosDetalles/>}/>{/*Este es un andicacion de rutas */}
                </Route>
                <Route path="*" element={<h1>Not Found Error 404</h1>}/>{/*Error 404 soft */}
            </Routes>
        </div>
    );
};


export default ConceptosBasicos;