import React from 'react';
import './index.css';

export const LoadingPage = () => {
    return (
        <div className='main_container_loading'>
            <div className="card">
                <h2>The page is currently waiting for the data, please wait awhile ...</h2>
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
