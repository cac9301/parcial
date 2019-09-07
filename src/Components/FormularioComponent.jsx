import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import Formulario from '../Components/Formulario'
//import { withRouter } from 'react-router-dom';
//import Modal from './Modal'

const FormularioComponent = () => {
    const [nombreproducto, guardarproducto] = useState('');
    const [codigo, guardarcodigo] = useState('');
    const [fecha, guardarfecha] = useState('')
    const [error, guardarerror] = useState(false)
    const [error1, guardarerror1] = useState(false)
    const [error2, guardarerror2] = useState(false)


    const verificarcod = codigo.split("")
    const verificarfecha=fecha.split("-")
    const añofecha=parseInt(verificarfecha[0]);
    console.log(typeof(añofecha));

    
    console.log(verificarcod);
    console.log(verificarcod[0]);
    console.log(verificarcod.length);
    console.log(verificarfecha[0]);
    
  
    const agregarproducto = async e => {
        e.preventDefault();

        const verificarcod = codigo.split("")
        
        console.log(verificarcod);
        

        //construimos el objeto
        
        if (nombreproducto  === '' || fecha === ''|| codigo=== '') {
            guardarerror(true)
            return;
        } else if (verificarcod[0] === "0" || verificarcod.length < 4) {
            console.log("entre en el error de 0 o de fecha");
            
            guardarerror(false)// todos los campos son requeridos
            guardarerror2(true)// el numero no comienza  con 0
            guardarerror1(false)
            
            return;
        }else if (añofecha <= 2000) {
            guardarerror(false)// todos los campos son requeridos
            guardarerror2(false)// el numero no comienza  con 0
            guardarerror1(true)//la fecha tiene que ser mayor al año 2000
        }
        
        else {
            //ahora si construimos el objeto

            const objetoContenido = {
                nombreproducto,
                codigo,
                fecha

            }
               // mandamos la info
               try {

                const resultado = await axios.post('http://localhost:4000/Restaurant', objetoContenido);
                console.log(resultado);
                if (resultado.status === 201) {
                    Swal.fire(
                        'bien hecho has creado un nuevo producto!',
                        'producto creado',
                        'success'
                    )
                }

            } catch (error) {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'algo ocurrio amigo!',

                })
            }

            guardarerror(false)// todos los campos son requeridos
            guardarerror2(false)// el numero no comienza  con 0
            guardarerror1(false)// el numero no comienza  con 0
            // mandamos la info
            console.log(objetoContenido);
            console.log("objeto enviado");
            
        }

    }
    return (
    <>
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Parcial WWWW</h1>
            {(error ? <Error mensaje="todos los campos son obligatorios" /> : null)}
            {(error2 ? <Error mensaje=" el codigo de barras no puede comenzar con 0 o tener mas de 4 digitos"  /> : null)}
            {(error1 ? <Error mensaje="la fecha tiene que ser mayor al año 2000"  /> : null)}
            <Formulario/>
            <form
                className="mt-5"
                onSubmit={agregarproducto}>

                <div className="form-group">
                    <label>Nombre producto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Nombre producto"
                        onChange={e => guardarproducto(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Numero Bar</label>
                    <input
                        type="text"
                        className="form-control"
                        name="codigo_bar"
                        placeholder="codigo de barras"
                        onChange={e => guardarcodigo(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>fecha</label>
                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        placeholder="escribe una fecha"
                        onChange={e => guardarfecha(e.target.value)}

                    />
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Comprobar validacion" />
                
            </form>
            
        </div >
    </>
    );
};

export default FormularioComponent;
