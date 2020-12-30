/* eslint-disable no-unused-vars */
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/epenses'
const EditPage = (props) => {
    return (
    <div>
      <div className="expense-summery">
      <div className="container">
        <p className="expense-summery__title">Edit Expense</p>
      </div>
    </div> 
    <ExpenseForm 
    expense = {props.expense}
    onSubmit={ (expense) => {
      props.dispatch(startEditExpense(props.expense.id, expense))
      props.history.push('/')
          }} />
     <div className="container">
      <button
      className=" box-layout__button remove-button"  
      onClick={() => {
      props.dispatch(startRemoveExpense({ id : props.expense.id }))
      props.history.push('/')
      } }>Remove</button>
     </div>
    </div>
  )};
  
  const editConnect = connect((state, props)=> {
    return {
      expense : state.expenses.find( (expense) =>  props.match.params.id === expense.id
      )
    }
  })(EditPage);

export default editConnect;