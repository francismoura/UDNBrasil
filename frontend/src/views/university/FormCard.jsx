import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/formCard.scss';
import { useState } from 'react';
import Estados from '../../utils/estados';
import { Collapse, Row, Col, Button } from 'react-bootstrap';
import { BsPlusCircleFill, BsXCircleFill, BsFillDashCircleFill } from 'react-icons/bs';

export default function FormCard() {

	const university = {};

	const [open, setOpen] = useState(false);
	const [changeIcon, setChangeIcon] = useState(false);
	const [indexWebPage, setIndexWebPage] = useState([]);
	const [indexDomain, setIndexDomain] = useState([]);
	const [counterWebPage, setCounterWebPage] = useState(0);
	const [counterDomain, setCounterDomain] = useState(0);

	const actionIcon = () => {
		setOpen(!open);
		setChangeIcon(!changeIcon);
	}

	const addWebPage = () => {
		setIndexWebPage(prevIndexes => [...prevIndexes, counterWebPage]);
		setCounterWebPage(prevCounter => prevCounter + 1);
	}

	const addDomain = () => {
		setIndexDomain(prevIndexes => [...prevIndexes, counterDomain]);
		setCounterDomain(prevCounter => prevCounter + 1);
	}

	const removeWebPage= index => () => {
		setIndexWebPage(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
		setCounterWebPage(prevCounter => prevCounter - 1);
	};

	const removeDomain= index => () => {
		setIndexDomain(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
		setCounterDomain(prevCounter => prevCounter - 1);
	};

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
					<form>
						<fieldset>
							<Row>
								<Col xs={12} md={8}>
									<div className="form-group">
										<label>Nome da universidade</label>
										<input type="text" className="form-control" id="inputNome" placeholder="Nome da universidade" />
									</div>
								</Col>
								<Col xs={12} md={4}>
									<div className="form-group">
										<label>Estado</label>
										<select className="form-control">
											<option defaultValue="DEFAULT" disabled selected>Estados...</option>
											{
												Object.entries(Estados).map((uf, index) => {
													return <option key={index} value={uf[0]}>{uf[1]}</option>
												})
											}
										</select>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group">
										<label>Endeços Web</label>
										<div className="d-flex flex-direction-column align-items-center justify-content-center mb-3">
											<input
												className="form-control"
												id="inputWebPage"
												type="text"
												name={university.web_pages}
												placeholder="https://"
											/>
											{
												indexWebPage.length > 0 &&
												<BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeWebPage(indexWebPage[0])}/>
											}
										</div>
										{
											indexWebPage.map( (index) => {
												const fieldName = `university[${index}]`;
												const inputWebPage = `inputWebPage[${index}]`;
												return (
													<div className="d-flex flex-direction-column align-items-center justify-content-center mb-3">
														<input
															id={inputWebPage}
															type="text"
															className="form-control"
															name={`${fieldName}.web_pages`}
															placeholder="https://"
														/>
														<BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeWebPage(index)}/>
													</div>
												)
											})
										}
										<Button type="button" onClick={addWebPage} variant="success">Novo Endereço</Button>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group">
										<label>Domínios</label>
										<div className="d-flex flex-direction-column align-items-center justify-content-center mb-3">
											<input type="text" className="form-control" id="inputDomain" placeholder="universidade.br" />
											{
												indexDomain.length > 0 &&
												<BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeDomain(indexDomain[0])}/>
											}
										</div>
										{
											indexDomain.map( (index) => {
												const fieldName = `university[${index}]`;
												const inputIndex = `intutDomain[${index}]`
												return (
													<div className="d-flex flex-direction-column align-items-center justify-content-center mb-3">
														<input
															id={inputIndex}
															type="text"
															className="form-control"
															name={`${fieldName}.domains`}
															placeholder="universidade.br"
														/>
														<BsFillDashCircleFill className="mx-2" color="#F56C6C" size="1.4em" onClick={removeDomain(index)}/>
													</div>
												)
											})
										}
										<Button type="button" onClick={addDomain} variant="success">Novo Domínio</Button>
									</div>
								</Col>
							</Row>
							<Row>
								<Col className="d-flex justify-content-end">
									<button type="submit" className="btn btn-success">Cadastrar</button>
								</Col>
							</Row>
						</fieldset>
					</form>
				</div>
			</Collapse>
		</div>
	)

}
