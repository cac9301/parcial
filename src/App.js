import React, { useState, useEffect } from 'react';
import FormularioComponent from './Components/FormularioComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaUsua from './Components/ListaUsua';
import axios from 'axios';
import Navbar from './Components/Navbar';

function App() {
	const [productos, guardarproductos] = useState([]);
	const [recargarproducto, guardarRecargarproducto] = useState(true);

	useEffect(() => {
		//consultar api Json-server
		if (recargarproducto) {
			const consultarapi = async () => {
				const url = await axios.get('http://localhost:4000/Restaurant');

				guardarproductos(url.data);
			};
			consultarapi();
			//cambiar a false
			guardarRecargarproducto(false);
		}
  }, [recargarproducto]);
  

	return (
		<Router>
			<Navbar/>
			<main className="container mt-5">
				<Switch>
					<Route
						exact
						path="/ListaUsua"
						render={() => (
							<ListaUsua productos={productos} guardarRecargarproducto={guardarRecargarproducto} />
						)}
					/>
           <Route exact path="/nuevoUsuario"
          render={
            ()=>(
              <FormularioComponent/>
                                ) 
          } />
				</Switch>
			</main>
			<p className="mt-4  p-2 text-center">tods los derechos reservados</p>
		</Router>
	);
}

export default App;
