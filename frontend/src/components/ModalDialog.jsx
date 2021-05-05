import { Modal, Button } from 'react-bootstrap';


export default function modalDialog(props) {

	return (
		<Modal
			{...props}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Remover universidade
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Ao remover os dados dessa universidade, ela não estará mais disponível no sistema.
				</p>
				<p>
					Tem certeza que deseja remover? Esta opção não pode ser desfeita.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={props.removeItem}>Remover</Button>
				<Button variant="secondary" onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)

}
