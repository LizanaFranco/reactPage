import { useState, useEffect } from 'react';
import axios from 'axios';
import GameItems from '../componentes/games/GameItems';


const Simulacion = (props) => {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);

    useEffect(() => {
        const cargaGame = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/api');
                console.log('datos obtenidos',response.data);
                const filtro = response.data.filter(game => game.Tipo.toLowerCase().includes('simulacion'));
                setGames(filtro);
                console.log('juegos filtrados',filtro);
            } catch (error) {
                console.error('Error al cargar los datos', error)
            } finally {
                setLoading(false);
            }
        };

        cargaGame();
    }, []);


    return (
        <section>
            <h2>Simulacion</h2>
            <div class="section">
                {

                    loading ? (
                        <p>Cargando...</p>

                    ) : (
                        games.map(item => (<GameItems key={item.key}
                            Nombre={item.Nombre}
                            Tipo={item.Tipo}
                            Precio={item.Precio}
                            Stock={item.Stock}
                            Descripcion={item.Descripcion}
                            imagen={item.imagen} />
                        ))
                    )
                }
            </div>
        </section>


    );
}
export default Simulacion;