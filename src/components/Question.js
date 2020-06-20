import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {

    // Definir el State
    const [ quantity, setQuantity ] = useState(0);
    const [ error, setError ] = useState(false);

    // Función que lee el presupuesto
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const addBudget = e => {
        e.preventDefault();

        // Validar
        if (quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }
        
        // Si pasa la validación
        setError(false);
        setBudget(quantity);
        setRemaining(quantity);
        setShowQuestion(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error message="El Presupuesto es incorrecto" /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired,
}
 
export default Question;
