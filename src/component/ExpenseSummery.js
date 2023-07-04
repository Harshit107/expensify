import { connect } from 'react-redux';
import { visibleExpense } from '../selectors/expenses'
import expenseTotal from '../selectors/expenses-total'
import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseSummery = ( {expenseCount, expenseAmount } ) => {
    const expenseWords = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="expense-summery">
        <div className="container">
          <p className="expense-summery__title">Viewing <span className="expense-summery__bold">{expenseCount}</span> {expenseWords} totaling &#8377;<span className="expense-summery__bold">{expenseAmount}/-</span></p>
                <Link to="/create" >
                    <button className="box-layout__button expense-summery__button">Add Expense</button>
                </Link>
       </div>
      </div>  
       
    );
 
}
const mapStateToProps = (state) => {
    const varVisExp = visibleExpense(state.expenses, {...state.filters} );
    return {
        expenseCount: varVisExp.length,
        expenseAmount: expenseTotal(varVisExp)
    }
}

export default connect(mapStateToProps)(ExpenseSummery);

