import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        // console.log("At on Expense Form : " , props)
       this.state = {
            description: props.expense ? props.expense.description : "",
            note : props.expense ? props.expense.note : "",
            amount : props.expense ? props.expense.amount.toString() : "",
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error : ''
        }

    }
    
    onDescriptionChange =(e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange =(e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange =(e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,1})?$/)){
            this.setState( () => ({ amount } ) )
        }

        }
    onDateChange =(createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }        
    }    
    onFocusChange =({focused}) => {
        this.setState(() => ({ calendarFocused : focused }));
    }
    onSubmit =(e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //set Error please provide some info
            this.setState(() => ({error : 'Please provide Description and Amount '}))
        }
        else{
            this.setState(() => ({error : ''}))
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount, 10),
                note : this.state.note,
                createdAt : this.state.createdAt.valueOf()

            })
        }
    }

    render() {
        return (
            <div >
                <form onSubmit={this.onSubmit} className="container flex expanse-form">
                {this.state.error && <p>{this.state.error}</p>}
                    <input className="text-input space"
                         type="text"
                         placeholder='Description'
                         autoFocus
                         value = {this.state.description}
                         onChange={this.onDescriptionChange}
                         />
                    <input className="text-input space"
                         type="text"
                         placeholder='Amount'
                         value = {this.state.amount}
                         onChange={this.onAmountChange}
                         />
                    <SingleDatePicker
                        className="expense-date"
                            date={this.state.createdAt} // momentPropTypes.momentObj or null
                            onDateChange={ this.onDateChange} // PropTypes.func.isRequired
                            focused={this.state.calendarFocused} // PropTypes.bool
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                            id="your_unique_id" // PropTypes.string.isRequired,
                            numberOfMonths = {1}
                            isOutsideRange = {() => (false)}
                            />
                    <textarea
                        className="text-input  note-expense space"
                         placeholder='Add a note for your expense ( optional )'
                         value = { this.state.note }
                         onChange={ this.onNoteChange }
                         >
                    </textarea>
                    <button className="box-layout__button">Save Expense</button>
              
                </form>
            </div>
        );
    }
}
export default ExpenseForm;