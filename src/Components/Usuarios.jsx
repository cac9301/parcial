import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';

const Usuarios = ({ producto, guardarRecargarproducto }) => {
    

    const eliminarProducto = id => {
        console.log('eliminando', id);

        // TODO: Eliminar los registros
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "Un Platillo eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText : 'Cancelar'
        }).then( async (result) => {
            if (result.value) {
                try {
                    const url = `http://localhost:4000/restaurant/${id}`;
                    const resultado = await axios.delete(url);
                    if(resultado.status === 200){
                        Swal.fire(
                            'Eliminado!',
                            'El Producto se ha eliminado',
                            'success'
                        )
                        // Consultar la api nuevamente
                        guardarRecargarproducto(true);
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error, vuelve a intentarlo'
                    })
                }
            }
        })
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p data-categoria={producto.categoria}>
                {<br>
                
                </br>}
                {<b>
                    NOMBRE PRODUCTO:
                </b>}
                
                {producto.nombreproducto}
                {<br>
                
                </br>}
                {'   '}
                {<b>
                    CODIGO:
                </b>}
                {producto.codigo}
                {' '}
                {<br>
                
                </br>}
                {<b>
                    TIPO DE EMPAQUE:
                </b>}
                {producto.empaque}

                {<br>
                
                </br>}
                {' '}
                {<b>
                    PRECIO:
                </b>}
                {producto.precio}
                {' '}

                {<br>
                
                </br>}
                {' '}
                {<b>
                    FECHA:
                </b>}
                {producto.Fecha}
                {' '}
            </p>
            <div>
                <Link 
                to={`/productos/editar/${producto.id}`}
                className="btn btn-success mr-2"
                >
                Editar
                </Link>
                <button
                type="button"
                onClick={()=>{eliminarProducto(producto.id)}}
                className="btn btn-danger">
                Elimnar &times;
                </button>
            </div>
        </li>
            );
        };
        
export default Usuarios;