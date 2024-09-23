import './App.css';
import './index.css'

import React from 'react';
import Card from 'C:/Users/willv/collegeProjects/codePath/board/src/components/Card.jsx';

const App = () => {
    return (
        <div className="container">
            <h1>New Mexican Food To Try</h1>
            <p className='desc'>Here are 10 easy Mexican foods to make or try and some with extra challenge</p>
            <Card length={10} /> 
        </div>
    );
};

export default App;
