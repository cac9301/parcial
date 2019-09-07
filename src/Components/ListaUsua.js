import React from 'react';
import Usuarios from './Usuarios';

const ListaUsua = ({ productos,guardarRecargarproducto }) => {
    return (
        <>
            
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <Usuarios
                        key={producto.id}
                        producto={producto}
                        guardarRecargarproducto={guardarRecargarproducto}
                    />
                ))}
            </ul>
        </>
    );
};

export default ListaUsua;