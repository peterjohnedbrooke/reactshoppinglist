import React from 'react'
import styles from './Previous.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFlag } from '@fortawesome/free-solid-svg-icons';

const Previous = (props) => {
  const { previousList, handlePreviousSelect, highPriority} = props;

  return (
    <>
    
    <div className={styles.listWrapper}> 
        <div className={styles.listContainer}>
          <h2>Previous</h2>
          <ul>
            {previousList.map((item, index) => (
              <li onClick={()  => handlePreviousSelect(index)} className={ item.isSelected ? styles.selected : styles.unSelect} key={item.newItem} >  
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
            ))}
            
          </ul>
        </div>
    </div>  
    </>
  )
}

export default Previous