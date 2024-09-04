import { useState, useEffect } from 'react';
import axios from 'axios';
import GameItems from '../componentes/games/GameItems';
import GameItem from '../componentes/games/GameItems';



const Juegos = (props) => {

    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]); // pe

    useEffect(() => {
        const cargaJuego = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api'); // posible error
            setGames(response.data);
            setLoading(false);
        };

        cargaJuego();
    }, []);
    return (

        <section>
            <h2>Juegos</h2>
            {
                loading ? (
                    <p>Cargando</p>
                ) : (
                    games.map(item => <GameItems key={item.id}
                        Nombre={item.Nombre} Tipo={item.Tipo} Precio={item.Precio} 
                        Stock={item.Stock} Descripcion={item.Descripcion} imgId={item.imgId}  />
                    )
                )
            }
        </section>
    )
};

export default Juegos; 