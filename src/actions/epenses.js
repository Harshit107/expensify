import database from '../firebase/firebase'

//ADD_EXPENSES
 export const addExpenses = (expense) => ({
   type : 'ADD_EXPENSES',
   expense
});

export const startAddExpense = (expenseData = {}) => {

   return (dispatch, getState) => {
      const { 
         description = '',
         note = '',
         amount = 0, 
         createdAt = 0 
      } = expenseData
      
      const expense = { description, note, amount, createdAt };
      database.ref('users').child(getState().auth.uid).child('expense').push(expense).then((ref) => {
         dispatch(addExpenses({
            id: ref.key,
            ...expense
         }))
      })
   }  
}

                   /*********************************************************************/

//remove Expmense
export const removeExpense = (id) => ({
   type : 'REMOVE_EXP',
   id
});
export const startRemoveExpense = ({ id } = {}) => {

   return (dispatch, getState) => {
      database.ref('users').child(getState().auth.uid).child('expense').child(id).remove().then(() => {
         console.log(id)
         dispatch(removeExpense(id));
      })
   }

}

                   /*********************************************************************/
//edit expense
export const editExpense = (id, update = {} ) => {
   return ({
   type : 'EDIT_EXP',
   id,
   update
})
} 
export const startEditExpense = (id, update = {}) => {
   return (dispatch, getState) => {
      database.ref('users').child(getState().auth.uid).child('expense').child(id).update(update).then(() => {
         dispatch(editExpense(id, update))
      }).catch(err => {
         console.error(err)
      })
   }
}

                   /*********************************************************************/
//set expense
export const setExpense = (expenses) => {
   return {
      type: 'SET_EXP',
      expenses
   }
}
export const startSetExpense = () => {
   console.log('here')
   return (dispatch, getState) => {
      return  database.ref('users').child(getState().auth.uid).child('expense').once('value').then((dataSnapshot) => {
         const allExpenses = [];
         dataSnapshot.forEach((expense) => {
            allExpenses.push({
               id: expense.key,
               ...expense.val()
            })
         });
         dispatch(setExpense(allExpenses))
      }).catch((error) => {
         console.error(error)
      })
   }
}
