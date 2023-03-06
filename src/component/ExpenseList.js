/*eslint-disable no-unused-vars */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import { visibleExpense }  from '../selectors/expenses.js'

const ExpenseList = (props) => (
    <div className="expense-list-title">
    <div className="container ">
        <div className="flex-row expense-list__title">
        <p>Expense List</p>
        <p>Amount </p>
       </div>            
            {props.expenses.length === 0 ? <p className="expense-list-no-expense">No Expense</p> :
            <div>
            {props.expenses.slice(0).reverse().map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)} 
            </div>
            }     
        
    </div>
    </div>
    
);

const mapStateToProps = (state) => {
    return {
        expenses : visibleExpense(state.expenses, {...state.filters})
    };
}
const ConnectedExpenseList = connect( mapStateToProps )(ExpenseList);

export default ConnectedExpenseList;