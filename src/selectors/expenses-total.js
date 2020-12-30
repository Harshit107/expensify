


const getExpensesTotal = (expenses) => {

    return expenses
    .map(exp => exp.amount)
    .reduce( (sum, value) => (sum + value) , 0 );

}
export default getExpensesTotal