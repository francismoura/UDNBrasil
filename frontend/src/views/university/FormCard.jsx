import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/formCard.scss';
import { useState } from 'react';
import Estados from '../../utils/estados';
import { Collapse, Row, Col, Button } from 'react-bootstrap';
import { BsPlusCircleFill, BsXCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function FormCard(props) {

	const [open, setOpen] = useState(false);
	const [iconChange, setIconChange] = useState(false);
	const [indexWebPage, setIndexWebPage] = useState([0]);
	const [indexDomain, setIndexDomain] = useState([0]);

	const actionIcon = () => {
		setOpen(!open);
		setIconChange(!iconChange);
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

	const handleSubmit = (data) => {
		props.save(data);
	}

	// const checkForm = () => {
	// 	return true;
	// }

	return (

		<div className="card border-secondary mt-4">
			<div className="card-header d-flex flex-row align-items-center justify-content-between">
				<h4>Cadastrar Universidades</h4>
				<div className="div-cadastrar align-items-end">
					{ !iconChange&&
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
					{ iconChange&&
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
					<Form id="formUniversity" initialData={props.university} onSubmit={handleSubmit}>
						<fieldset>
							<Row className="mb-3">
								<Col xs={12} md={8}>
									<div className="form-group">
										<label className="form-label">Nome da universidade</label>
										<Input
											className="form-control"
											id="inputNome"
											name="name"
											type="text"
											placeholder="Nome da universidade"
											aria-label="nome da universidade"
										/>
										{/* {name && <span className="error-message">Nome é obrigatório</span>} */}
									</div>
								</Col>
								<Col xs={12} md={4}>
									<div className="form-group">
										<label className="form-label">Estado</label>
										<Select
											className="form-select"
											id="selectState"
											name="state_province"
											aria-label="selecionar um estado brasileiro"
											options={Estados}
										/>
									</div>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<div className="form-group d-flex flex-column">
										<label>Endeços Web</label>
										{
											indexWebPage.map( (index) => {
												return (
													<div className="d-flex flex-row align-items-center justify-content-center mb-2">
														<Input
															className="form-control"
															id={`web_pages${index}`}
															name={`web_pages[${index}]`}
															type="text"
															aria-label="endereço web da universidade"
															placeholder="https://"
														/>
													{ indexWebPage.length > 1 && <BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeWebPage(index)}/> }
													</div>
												)
											})
										}
									{/* { errors.web_pages && <span className="error-message">Ao menos uma endereço web deve ser cadastrado</span>} */}

									</div>
									<Button type="button" onClick={addWebPage} variant="success">Novo Endereço</Button>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group d-flex flex-column">
										<label className="form-label">Domínios</label>
										{
											indexDomain.map( (index) => {
												return (
													<div className="d-flex flex-row align-items-center justify-content-center mb-2">
														<Input
															className="form-control"
															id={`inputDomains[${index}]`}
															name={`domains[${index}]`}
															type="text"
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
									<button type="submit" value="submit" className="btn btn-success">Cadastrar</button>
								</Col>
							</Row>
						</fieldset>
					</Form>
				</div>
			</Collapse>
		</div>
	)

}
