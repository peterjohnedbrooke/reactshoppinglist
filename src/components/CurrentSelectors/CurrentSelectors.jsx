import React from 'react'
import styles from './CurrentSelectors.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faEraser, faTrashCan, faFolder } from '@fortawesome/free-solid-svg-icons';

const CurrentSelectors = (props) => {
  const { handleRemoveSelected, handleSaveList, handleDeleteList, handleOpen, handleEdit} = props;  
  return (
    <>
        <ul className={styles.buttonList}>
            <li>
                <button className={styles.mainButton} onClick={handleSaveList}>Save
                    <FontAwesomeIcon icon={faFloppyDisk} />
                </button>
            </li>
            <li>
                <button className={styles.mainButton} onClick={handleRemoveSelected}>Clear Selected
                    <FontAwesomeIcon icon={faEraser} />
                </button>
            </li>
            <li>
                <button className={styles.mainButton} onClick={handleDeleteList}>Clear All
                <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </li>
            <li>
                <button className={styles.mainButton} onClick={handleOpen}>Load
                <FontAwesomeIcon icon={faFolder} />
                </button>
            </li>
            {/* <li>
                <button className={styles.mainButton} onClick={handleEdit}>save edit?
                <FontAwesomeIcon icon={faFolder} />
                </button>
            </li> */}
        </ul>
    </>
  )
}

export default CurrentSelectors