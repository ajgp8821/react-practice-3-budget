import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  // Definir el State
  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showQuestion, setShowQuestion] = useState(true);
  const [ expenses, setExpenses] = useState([]);
  const [ expense, setExpense] = useState({});
  const [ createExpense, setCreateExpense] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (createExpense) {

      // Agrega el nuevo presupuesto
      setExpenses([
        ...expenses,
        expense
      ]);

      // Resta del presupuesto actual
      const remainingBudget = remaining - expense.quantity;
      setRemaining(remainingBudget);

      // Resetear al false
      setCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? 
            (
              <Question
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowQuestion={setShowQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />
                  <BudgetControl
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
