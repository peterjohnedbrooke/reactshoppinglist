import React from 'react'
import styles from './Current.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFlag} from '@fortawesome/free-solid-svg-icons';
import Input from './Input/Input';

const Current = (props) => {
  const {currentList, handleSelect, highPriority, handleAdd, newItem, handleChange} = props;

  return (
      <div className={styles.currentWrapper}>
        <div className={styles.listContainer}>
            <h2>Current</h2>
            <Input handleAdd={handleAdd} newItem={newItem} handleChange={handleChange}></Input>
            <ul>
            { currentList.length > 0 ? // added as it was trying to read isSelected when repopulating arrays 
              currentList.map((item, index) => (
                <li onClick={() => handleSelect(index)} key={item.newItem} className={ item.isSelected ? styles.selected : styles.unSelect}>
                    {item.newItem}
                    {
                      item.isSelected ? 
                      <FontAwesomeIcon icon={faCheck} />
                      :
                      null
                    }
                    {
                      highPriority ? 
                      <FontAwesomeIcon icon={faFlag} />
                      :
                      null
                    } 
                </li>
              ))
                :
                null
            } 
          </ul>          
        </div>
      </div>  
  )
}

export default Current