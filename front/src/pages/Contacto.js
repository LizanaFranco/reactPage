
import { useState} from 'react';
import axios from 'axios'; 
const Contacto = (props) => {


        const initialForm={
            nombre:'',
            email:'',
            telefono:'',
            mensaje:''
        }

        const [sending, setSending]= useState(false);
        const [msg,setMsg] = useState('');
        const [formData, setFormData]= useState(initialForm);

        const handleChange = e =>{
            const{ name , value}=e.target;
            setFormData(oldData=>({
                ...oldData,
                [name]:value // forma dinamica
            }));
        }


        const handleSubmit = async e=>{
            e.preventDefault();
            setMsg('');
            setSending(true)
            const response = await axios.post('http://localhost:3000/api/contacto',formData);
            setSending(false);
            setMsg(response.data.message);
            if(response.data.error === false){
                setFormData(initialForm)
            };
        }
 



    return (
        <section class="MensajeEmail">
            <form action="/contacto" method='post' onSubmit={handleSubmit} class="formContacto">
                <p class="pFormContacto"> 
                    <label for="nombre" class="labelFormContacto">Nombre:</label>
                    <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} />
                </p>
                <p class="pFormContacto">
                    <label for="email" class="labelFormContacto">Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p class="pFormContacto">
                    <label for="telefono" class="labelFormContacto">Telefono:</label>
                    <input type="text" name='telefono' value={formData.telefono} onChange={handleChange} />
                </p>
                <p class="pFormContacto">
                    <label for="comentario" class="labelFormContacto">Comentario</label>
                    <textarea name="comentario" class="textareaFormContacto" value={formData.comentario} onChange={handleChange}></textarea>
                </p>
                <p class="pFormContacto">
                    <input class="submitFormContacto" type="submit" value="enviar" />
                </p>
            </form>
            {sending ? <p>Enviando...</p>:null}
            {msg ? <p>{msg}</p> : null}
        </section>
    );
}
export default Contacto;