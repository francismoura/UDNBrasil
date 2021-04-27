import 'bootswatch/dist/flatly/bootstrap.css'
import { Form, Col, Button } from 'react-bootstrap'

export default function cardForm() {

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nome da Universidade</Form.Label>
          <Form.Control type="text" placeholder="Nome da universidade" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Páginas Web</Form.Label>
          <Form.Control type="text" placeholder="http://" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Domínios</Form.Label>
        <Form.Control placeholder="Domínios" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Estado</Form.Label>
        <Form.Control placeholder="Sigla do" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )

}
