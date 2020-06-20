import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense }) => {

    // Extraer valores 
    const { name, quantity} = expense;

    return (
        <li className="gastos">
            <p>
                {name}
                <span className="gasto">$ {quantity}</span>
            </p>
        </li>
    );
};

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
}
 
export default Expense;
