/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filter'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilter extends React.Component {
        state = {
            calendarFocused : null,
        }
    render() {
        return (
            <div className="container">
                <div className="input-group ">
                    <div className="input-group__item ">
                        <input className="text-input "
                            type="text" placeholder="Search Expense" value={this.props.filters.text} onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value))
                        }} />
                    </div>
                     <div className="input-group__item ">
                        <select 
                            className="text-input"
                            value={this.props.filters.sortBy} 
                            onChange = {(e) => {
                                if(e.target.value === 'date'){
                                    this.props.dispatch(sortByDate())
                                }
                                else if(e.target.value === 'amount'){
                                    this.props.dispatch(sortByAmount())
                                }
                            }} >
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                        </div>
                    <div className="input-group__item ">
                        <DateRangePicker
                        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={ ( { startDate, endDate } ) => { 
                            this.props.dispatch(setStartDate(startDate))
                            this.props.dispatch(setEndDate(endDate))
                        }} // PropTypes.func.isRequired,
                        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ calendarFocused : focusedInput })} // PropTypes.func.isRequired,
                        isOutsideRange = { () => (false)}
                        showClearDates = {true}
                    />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)
