import React from 'react'
import styles from '../App.module.css'

function ConditionalWrapper({condition, children}) {
    if(condition){
        return (
            <div className={styles.me}>
                {children}
            </div>
        )
    }
    else{
        return (children)
    }

}

export default ConditionalWrapper
