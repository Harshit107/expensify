


const getExpensesTotal = (expenses) => {
    const totalSum = expenses
        .map(exp => exp.amount)
        .reduce((sum, value) => (sum + value), 0);
    return (Math.floor(totalSum *100)/100)

}
export default getExpensesTotal