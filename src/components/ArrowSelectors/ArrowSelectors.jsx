import React from 'react'
import styles from './ArrowSelectors.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ArrowSelectors = (props) => {
  const {handleMoveRight, handleMoveLeft, handleMoveDown, handleMoveUp, index} = props; 
  

  return (
    <div className={styles.arrowWrapper}>
      <ul>
        <li>
          <button className={styles.right} onClick={handleMoveRight}>
            <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </li>
        <li>
          <button className={styles.left} onClick={handleMoveLeft}>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </button>
        </li>
        <li>
          <button className={styles.up} onClick={handleMoveUp}>
            <FontAwesomeIcon icon={faArrowUp}/>
          </button>
        </li>
        <li>
          <button className={styles.down} onClick={handleMoveDown}>
            <FontAwesomeIcon icon={faArrowDown}/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ArrowSelectors