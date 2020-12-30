/* eslint-disable no-unused-vars */
import ExpenseList from './ExpenseList'
import ExpeseListFilter from './ExpenseListFilter'
import  ExpenseSummery  from './ExpenseSummery'

const ExpenceDashboardAppPage = () => (
  <div>
    <ExpenseSummery />
    <ExpeseListFilter />
    <ExpenseList/>
    </div>
  );
export default ExpenceDashboardAppPage;

