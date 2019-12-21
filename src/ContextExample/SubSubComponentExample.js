import React from 'react';
import Context from './Context';

import styles from "./styles.module.css"

const SubSubComponent = (props) => {
    const context = React.useContext(Context);
    return (
        <>
            <div className={styles.component}>{context}</div>
            <div className={styles.component}>SubSubComponent</div>
        </>
    )
};

export default SubSubComponent;