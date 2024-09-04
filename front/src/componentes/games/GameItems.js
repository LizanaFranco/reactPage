import React from 'react';
import { Link } from 'react-router-dom';


const GameItem = (props) => {
    const { Nombre, Tipo, Precio, Stock, Descripcion, imagen, body, id } = props;

    return (
        <article>

            <p>{Nombre}</p>
            <figcaption>
                <figure>
                    <img src={imagen}></img>
                </figure>
                
                <button><p>${Precio} </p></button>
            </figcaption>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>

        </article>

    )
}

export default GameItem;