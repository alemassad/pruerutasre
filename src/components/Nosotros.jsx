import React from 'react';
import { Link } from "react-router-dom";

const Nosotros = () => {

    const datos = [
        {id: 1, nombre: 'pedro'},
        {id: 2, nombre: 'norma'},
        {id: 3, nombre: 'coki'}
    ]
    const [equipo, setEquipo] = React.useState([]);

    React.useEffect(()=>{
        //console.log(datos)
        obtenerDatos()
    }, [])
    
    const obtenerDatos =async () => {
    const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
    const user = await data.json()
    //console.log(users)
        setEquipo(user.civilizations)
}

    return ( 
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                 {item.name} - {item.expansion}
                             </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Nosotros;