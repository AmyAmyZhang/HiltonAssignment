import React from 'react';
import SinglePage from './assessment1/index';
import CheckForm from './assessment2/index';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <CheckForm /> 
                <SinglePage /> 
            </div>
        )
    }
}
