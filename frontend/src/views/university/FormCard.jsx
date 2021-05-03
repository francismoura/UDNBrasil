import 'bootswatch/dist/flatly/bootstrap.css';
import '../../styles/formCard.scss';
import { useState } from 'react';
import Estados from '../../utils/estados';
import { Collapse, Row, Col } from 'react-bootstrap';
import { BsPlusCircleFill, BsXCircleFill } from 'react-icons/bs';

export default function FormCard() {

	const [open, setOpen] = useState(false);
	const [changeIcon, setChangeIcon] = useState(false);

	const actionIcon = () => {
		setOpen(!open);
		setChangeIcon(!changeIcon);
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
										<input type="text" className="form-control" id="inputPageWeb" placeholder="htt://" />
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="form-group">
										<label>Domínios</label>
										<input type="text" className="form-control" id="inputPageWeb" placeholder="Ex.: universidade.br" />
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
