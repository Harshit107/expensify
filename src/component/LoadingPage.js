import React from 'react'
import loading from '../images/loader.gif'

// eslint-disable-next-line import/no-anonymous-default-export
export const LoadingPage = () => (
    <div className="loader">
        <img alt="" className="loading__gif" src={loading} />
    </div>
);