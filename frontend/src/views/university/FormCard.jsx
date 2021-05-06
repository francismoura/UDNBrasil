import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/formCard.scss';
import { useState } from 'react';
import Estados from '../../utils/estados';
import { Collapse, Row, Col, Button } from 'react-bootstrap';
import { BsPlusCircleFill, BsXCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
// import form react hook


export default function FormCard(props) {

	const [open, setOpen] = useState(false);
	const [changeIcon, setChangeIcon] = useState(false);
	const [indexWebPage, setIndexWebPage] = useState([0]);
	const [indexDomain, setIndexDomain] = useState([0]);

	const actionIcon = () => {
		setOpen(!open);
		setChangeIcon(!changeIcon);
	}

	const addWebPage = () => {
		const max = Math.max(...indexWebPage);
		setIndexWebPage([...indexWebPage, max + 1]);
	}

	const addDomain = () => {
		const max = Math.max(...indexDomain);
		setIndexDomain([...indexDomain, max + 1]);
	}

	const removeWebPage= index => () => {
		setIndexWebPage([...indexWebPage.filter(item => item !== index)]);
		props.university.web_pages.splice(index, 1);
		indexWebPage.sort();
	};

	const removeDomain= index => () => {
		setIndexDomain([...indexDomain.filter(item => item !== index)]);
		props.university.domains.splice(index, 1);
		indexDomain.sort();
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (checkForm());
		console.log(props.university);
		console.log("testeda porra");
	}

	const checkForm = () => {
		return true;
	}

	return (

		<div className="card border-secondary mt-4">
			<div className="card-header d-flex flex-row align-items-center justify-content-between">
				<h4>Cadastrar Universidades</h4>
				<div className="div-cadastrar align-items-end">
					{ !changeIcon &&
						<BsPlusCircleFill
							className="icon-plus"
							size={32}
							data-toggle="tooltip"
							data-placement="top"
							title="Cadastrar"
							onClick ={() => actionIcon()}
							aria-controls="card-body"
							aria-expanded={!open}
						/>
					}
					{ changeIcon &&
						<BsXCircleFill
							className="icon-close"
							size={32}
							data-toggle="tooltip"
							data-placement="top"
							title="Fechar"
							onClick ={() => actionIcon()}
							aria-controls="card-body"
							aria-expanded={open}
						/>
					}
				</div>
			</div>
			<Collapse in={open}>
				<div className="card-body">
					<form id="formUniversity" onSubmit={onSubmit}>
						<fieldset>
							<Row>
								<Col xs={12} md={8}>
									<div className="form-group">
										<label>Nome da universidade</label>
										<input
											className="form-control"
											id="inputNome"
											name="name"
											type="text"
											value={props.university.name}
											placeholder="Nome da universidade"
										/>
									</div>
								</Col>
								<Col xs={12} md={4}>
									<div className="form-group">
										<label>Estado</label>
										<select className="form-control" value={props.university.state_province}>
											<option defaultValue="DEFAULT" disabled>Estados...</option>
											{
												Object.entries(Estados).map((uf, index) => {
													return <option key={index} value={uf[0]}>{uf[1]}</option>
												})
											}
										</select>
									</div>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<div className="form-group d-flex flex-column">
										<label>Endeços Web</label>
										{
											indexWebPage.map( (index) => {
												const fieldName = `web_pages[${index}]`;
												const fieldId = `inputWebPages[${index}]`;
												return (
													<div className="d-flex flex-row align-items-center justify-content-center mb-2">
														<input
															className="form-control"
															id={fieldId}
															type="text"
															name={`${fieldName}`}
															value={props.university.web_pages[index]}
															placeholder="https://"
														/>
													{ indexWebPage.length > 1 && <BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeWebPage(index)}/> }
													</div>
												)
											})
										}
									</div>
									<Button type="button" onClick={addWebPage} variant="success">Novo Endereço</Button>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group d-flex flex-column">
										<label>Domínios</label>
										{
											indexDomain.map( (index) => {
												const fieldName = `domains[${index}]`;
												const fieldId = `inputDomains[${index}]`
												return (
													<div className="d-flex flex-row align-items-center justify-content-center mb-2">
														<input
														className="form-control"
															id={fieldId}
															type="text"
															name={`${fieldName}`}
															value={props.university.domains[index]}
															placeholder="universidade.br"
														/>
														{ indexDomain.length > 1 && <BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeDomain(index)}/> }
													</div>
												)
											})
										}
									</div>
									<Button type="button" onClick={addDomain} variant="success">Novo Domínio</Button>
								</Col>
							</Row>
							<Row>
								<Col className="d-flex justify-content-end">
									<button form="formUniversity" type="submit" className="btn btn-success">Cadastrar</button>
								</Col>
							</Row>
						</fieldset>
					</form>
				</div>
			</Collapse>
		</div>
	)

}
