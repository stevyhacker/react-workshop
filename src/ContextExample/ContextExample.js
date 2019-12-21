import React from 'react';
import SubComponentExample from './SubComponentExample';
import Context from './Context';

const ContextExample = () => {

    return (
        <Context.Provider value='test message'>
            <SubComponentExample />
        </Context.Provider>
    );

};

export default Context