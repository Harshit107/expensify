import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify App</h1>
                <p className="box-layout__sub_title">Its Time to get your expenses under control</p>
                 <button className="box-layout__button" onClick={startLogin} >Login with Google</button>
            </div>
        </div>
    );
}

const mapStateToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default withRouter(connect(undefined,mapStateToProps)(LoginPage));
