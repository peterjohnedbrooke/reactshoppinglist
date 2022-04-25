import React from 'react'
import styles from "./SavedLists.module.scss"
import CurrentSelectors from '../CurrentSelectors';

const SavedLists = (props) => {
  const { allSavedLists, handleLoad, isOpen, handleRemoveSelected, handleSaveList, handleDeleteList, handleOpen} = props;  
  return (
    <div className={styles.container}>
      <div className={ isOpen ? styles.isOpen : styles.isClosed}>
          <ul>
          <h2>Saved</h2>
              {allSavedLists.map((item, index) =>(
                  <li onClick={() => handleLoad(index)} className={styles.shoppingLists}> Shopping List #1 {item.length}</li>
              ))}

          </ul>
          <CurrentSelectors handleRemoveSelected={handleRemoveSelected} handleSaveList={handleSaveList} handleDeleteList={handleDeleteList} handleOpen={handleOpen}></CurrentSelectors>
      </div>
    </div>
  )
}

export default SavedLists