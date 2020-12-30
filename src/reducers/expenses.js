

const expenseReducerDefaultState = [];
export const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_EXPENSES':
            return state.concat(action.expense);

        case 'REMOVE_EXP':
            const newState = state.filter((exp) => {
                return exp.id !== action.id
            })
            return newState 

        case 'EDIT_EXP':
           return state.map(exp => {
                console.log("From Action Update",action.update, state)
                if(exp.id === action.id){
                   return {
                       ...exp,
                       ...action.update
                   };
                }
                else {
                    return exp
                };
           })
        case 'SET_EXP': 
            return action.expenses
        
        default: return state
    }
}
