import React from 'react'
import styles from "./SavedLists.module.scss"
import CurrentSelectors from '../CurrentSelectors';

const SavedLists = (props) => {
  const { allSavedLists, handleLoad, isOpen, handleRemoveSelected, handleSaveList, handleDeleteList, handleOpen, handleEdit} = props;  
  return (
      <div className={ isOpen ? styles.isOpen : styles.isClosed}>
          <ul className={styles.container}>
                <h2>Saved</h2>
                {allSavedLists.map((item, index) =>(
                    <li onClick={() => handleLoad(index)} className={styles.shoppingLists}> Shopping List # {item.length}
                    
                    </li>
                    // add in a unique numbering system from each new saved list
                ))}
          </ul>
          <CurrentSelectors handleEdit={handleEdit} handleRemoveSelected={handleRemoveSelected} handleSaveList={handleSaveList} handleDeleteList={handleDeleteList} handleOpen={handleOpen}></CurrentSelectors>
      </div>
    
  )
}

export default SavedLists