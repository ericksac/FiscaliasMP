import React from 'react';
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6"
        >
                <div
                    class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
                >
            <div className= "flex items-center flex-shrink-0 text-white mr-6">
                <h1>
                    <Link  to={'/'} className="font-semibold text-4xl tracking-tight" >
                    Fiscalías MP
                    </Link>    
                </h1>
            </div>
                <Link to="/fiscalias/nuevo"
                className="bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-medium hover:bg-blue-900 "
             > &#43; Agregar Fiscalía  </Link>
            </div>

        </nav>
    );

}

export default Header;