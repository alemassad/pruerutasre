import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    
    const {id} =useParams();
    

    const [pueblo, setPueblo] = React.useState([]);
    
    React.useEffect(()=>{
        //console.log(datos)    
    
        const obtenerDatos =async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const user = await data.json()
            console.log(user)
            setPueblo(user)
        }
        obtenerDatos()
    }, [id])

  return (
    <div>
        <h3>{pueblo.name}</h3>
        <p>{pueblo.expansion}</p>
    </div>
  )
}

export default User;
