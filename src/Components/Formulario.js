import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Form, Col } from 'react-bootstrap';


const Formulario = () => {
	const [show, setShow] = useState(false);
	const [opciones, setoptiones] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const optiones = ["",'cauca', 'valle','huila'];
	const Departamentos = [""];
	
	
	
	if (opciones === 'valle') {
		Departamentos.push('cali','cartago','restro','Alcalá','Andalucía','Ansermanuevo','Argelia')
	}else if (optiones === 'cauca'){
		Departamentos.push('Popayán','Almaguer','Argelia','Balboa','Bolívar','Buenos Aires','Cajibío')
	}
	
	console.log(opciones);
	console.log(Departamentos);

	return (
		<>
			<div className="col-md-3 mx-auto ">
				<Button variant="primary" onClick={handleShow}>
					Departamentos
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Departamentos</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Departamento</Form.Label>
										<Form.Control as="select" onChange={e => setoptiones(e.target.value)}>
											{optiones.map(option => (
												<option>{option}</option>
											))}
										</Form.Control>
									</Form.Group>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>municipio</Form.Label>
										<Form.Control as="select" >
										{Departamentos.map(options => (
												<option>{options}</option>
											))}
										</Form.Control>
									</Form.Group>
									
								</Col>
							</Row>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
};

export default Formulario;
