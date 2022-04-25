import React from 'react'
import styles from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Input = (props) => {
  const {handleAdd, newItem, handleChange} = props;

  return (
    <>
    <div className={styles.inputWrapper}>
        <input type="text" id='inputtext' value={newItem} onChange={handleChange} className={styles.inputBox}/>
        <button onClick={handleAdd}>
          +   <FontAwesomeIcon icon={faCartShopping}/>
        </button>
    </div>
    </>
  )
}

export default Input

// onclick add- add item to the current list 
// onclick add- assign item to new list item 
// onclick add- assign new list item an ID 

//onlick save- store the current list into a new array titled & add it to the previous list array 
// save in local storage this list in local storage 
// onclick load-  open the appendix of saved local storage lists 
// onlick clear- wipe the current list 
// if the div with id currentList  