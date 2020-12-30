import ExpenseForm from "./ExpenseForm"
import { connect } from "react-redux"
import { startAddExpense } from "../actions/epenses"

const AddExpenceAppPage = (props) => (
  <div>
    <div className="expense-summery">
      <div className="container">
        <p className="expense-summery__title">Add Expense</p>
      </div>
    </div> 
    <ExpenseForm  onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/')
      }}/>

    </div>
  );
export default connect()(AddExpenceAppPage);