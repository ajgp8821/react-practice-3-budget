import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({ setExpense, setCreateExpense }) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    // Cuando el usuario agrega un gasto
    const addExpenses = e => {
        e.preventDefault();

        // Validar
        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // Construir el gasto
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        };

        // Pasar el gasto al componente principal
        setExpense(expense);
        setCreateExpense(true);

        // Resetear el form
        setName('');
        setQuantity(0);
        
    }

    return ( 
        <form
            onSubmit={addExpenses}
        >
            <h2>Tus gastos aquí</h2>

            {error ? <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto" />: null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
}

export default Form;
