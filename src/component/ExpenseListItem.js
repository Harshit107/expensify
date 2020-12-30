import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ( {id, description, amount, createdAt} ) => (
    <div className="expense-list-item-box">
    <Link to={`/edit/${id}`} className="flex-row link-decoration">
      <div>
      <h3 className="expense-list-item-desc">{description}</h3>
      <p>{moment(createdAt).format("DD MMMM YYYY")}</p>
      </div>
      <p className="expenseItemList-amount">&#8377;{amount}</p>
    </Link>
    </div>
);

export default connect()(ExpenseListItem);