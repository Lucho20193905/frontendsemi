import React from "react";
import { ButtonGroup,Button, Form} from 'react-bootstrap'

const FiltroComponente = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Pc armada</Form.Label>
            <Form.Select
                onChange={ (evt) => { props.onPcArmadaSelected(evt.target.value) }}>
                <option value={"-1"}>---- Seleccione pc armada ----</option>
                {
                    props.pcarmado.map((pc_armado_producto) => {
                        return <option key={pc_armado_producto.id} value={pc_armado_producto.id}>
                            { pc_armado_producto.nombre }
                        </option>
                    })
                }
            </Form.Select>
        </Form.Group>
    </Form> 
}
export default FiltroComponente;
