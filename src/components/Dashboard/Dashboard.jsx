import React, {useState} from 'react'
import styles from './Dashboard.module.scss'
import Current from '../Current/Current';
import Previous from '../Previous/Previous';
import ArrowSelectors from "../ArrowSelectors"
import SavedLists from '../SaveLists/SavedList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [counter, setCounter] = useState(0);
  const clearList = [];
  const [currentList, setCurrentList] = useState([
    
  ]);
  const [highPriority, setHightPriority] = useState(false);
  const [isSelected, setIsSelected] = useState([])

  const [previousList, setPreviousList] = useState([
    { 
      newItem: "apples", 
      isSelected: false,
    },
    { 
      newItem: "bread", 
      isSelected: false,
    }
  ]);

 

  const [savedList, setSavedList] = useState([
    {
      newItem: "cheese",
      isSelected: false,
    },
    {
      newItem: "bacon",
      isSelected: false,
    },
    {
      newItem: "bread",
      isSelected: false,
    },
    {
      newItem: "eggs",
      isSelected: false,
    },
    {
      newItem: "colin the caterpiller",
      isSelected: false,
    }
  ])

  const [allSavedLists, setAllSavedLists] = useState([])

  const [newItem, setNewItem] = useState('');
  const [previousItem, setPreviousItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [newEdit, setNewEdit] = useState([]);

  const handleEditChange = (e) => {
    setNewEdit(e.target.innerHTML);
    console.log(e.target.innerHTML)
  }

  const handleEdit = (index) => {
    handleEditChange()
    const newCurrentList = [...currentList];
    newCurrentList[index].newItem = newEdit.innerHTML;
    setCurrentList(newCurrentList)
    setNewEdit('')
  }

  const handleIncreaseCounter = () => {
    const newAllSavedLists = [...allSavedLists]
    for(let i=0; newAllSavedLists.length > 0; i++) {
        // if(newAllSavedLists[i])
    }
    setCounter(count => count + 1)
  }

  const handleHighPriority = () => {
    setHightPriority(true);
  }

  const handleChange = (e) => {
    setNewItem(e.target.value);
  }

  const handleAdd = () => {
    if (newItem === "") {
      alert("You forgot to type in an item!")
      return
    }
    // catch duplicate words 
    const newProduct = {
      newItem: newItem, 
      isSelected: false,
      isPrevious: false,
    }
    const newProducts = [...currentList, newProduct]; 
    setCurrentList(newProducts)
    setNewItem('')
    console.log(newProducts)
  }
  
  
  const handleSelect = (index) => { 
    const newCurrentList = [...currentList];
    const filterSelected = newCurrentList.filter(item => item.isSelected === true);
    const indexFilterSelected = newCurrentList.indexOf(filterSelected)
    console.log(indexFilterSelected.length)
    if ( filterSelected.length > 0) {
      const filtered = newCurrentList.find(item => item.isSelected === true);
      const indexOfSelected = newCurrentList.indexOf(filtered)
      newCurrentList[index].isSelected = !newCurrentList[index].isSelected;
      newCurrentList[indexOfSelected].isSelected = !newCurrentList[indexOfSelected].isSelected;
      setCurrentList(newCurrentList)
    }
     else {
      newCurrentList[index].isSelected = !newCurrentList[index].isSelected;
      setCurrentList(newCurrentList)
    }
  }

  const handlePreviousSelect = (index) => { 
    const newPreviousList = [...previousList];
    newPreviousList[index].isSelected = !newPreviousList[index].isSelected
    setPreviousList(newPreviousList)
  }

  const handleRemoveSelected = () => {
    const newCurrentList = [...currentList];
    const newClearList = [...clearList]
    const selectedItem = newCurrentList.filter(item => item.isSelected === true)
    const notSelected = newCurrentList.filter(item => item.isSelected === false)
    console.log(selectedItem)
    console.log(notSelected)
    if ( selectedItem.length <=0 ) {
      alert("Please select items to be deleted")
    } else {
    setCurrentList([...newClearList, ...notSelected])
    }
  }

  const handleDeleteList = () => {
    const newClearList = [...clearList]
    setCurrentList(newClearList)
  }

  const handleSaveList = () => {
    const newClearList = [...clearList]
    const newSave = [...currentList];
    const newSaveAll = [...allSavedLists, newSave]
    setSavedList(newSave);
    setAllSavedLists(newSaveAll)
    setCurrentList(newClearList)
  }

  const handleLoad = (index) => {
    const newClearList = [...clearList]
    setCurrentList(newClearList);
    const loadFromSave = [...allSavedLists];
    // loadFromSave[index];
    console.log(loadFromSave[index])
    setIsOpen(false)
    setCurrentList(loadFromSave[index])
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleMoveRight = () => {
    const newCurrentList = [...currentList]
    const newPreviousList = [...previousList]
    const newClearList = [...clearList];
    const selectedItem = newCurrentList.filter(item => item.isSelected === true)
    const notSelected = newCurrentList.filter(item => item.isSelected === false)
    if ( selectedItem.length <= 0) {
      alert("Please select an item(s) from Current to move")
    } else {
    setPreviousList([...newPreviousList, ...selectedItem]) 
    setCurrentList([...newClearList, ...notSelected])
    console.log(newCurrentList)
    console.log(selectedItem)
    }
    // make a catch for whenever the Current List is empty alert("There is nothing to move from "Current")
  }

  const handleMoveLeft = () => {
    const newCurrentList = [...currentList]
    const newPreviousList = [...previousList]
    const newClearList = [...clearList];
    const selectedItem = newPreviousList.filter(item => item.isSelected === true)
    const notSelected = newPreviousList.filter(item => item.isSelected === false)
    if( selectedItem <= 0 ) {
      alert("Please select an item(s) from Previous to move!")
    } else {
    setCurrentList([...newCurrentList, ...selectedItem])
    setPreviousList([...newClearList, ...notSelected]);
    }
    // make a catch for whenever the Previous List is empty alert("There is nothing to move from "Previous")
  }

  const handleMoveUp = () => {
    const newCurrentList = [...currentList]
    const selectedItem = newCurrentList.find(item => item.isSelected === true)
    const index = newCurrentList.indexOf(selectedItem)
    const newIndex = index - 1;
    if (newIndex <= -1) {
      return
    } else {
    newCurrentList.splice(newIndex, 0, newCurrentList.splice(index, 1)[0]);
    setCurrentList([...newCurrentList])
    }
  }

  const handleMoveDown = () => {
    const newCurrentList = [...currentList]
    const selectedItem = newCurrentList.find(item => item.isSelected === true)
    const index = newCurrentList.indexOf(selectedItem)
    const newIndex = index +1;
   if (newIndex <= newCurrentList + 1) {
      return
    } else {
    newCurrentList.splice(newIndex, 0, newCurrentList.splice(index, 1)[0]);
    setCurrentList([...newCurrentList])
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.listConverted}>
            <Current handleEdit={handleEdit} handleEditChange={handleEditChange} handleAdd={handleAdd} handleChange={handleChange} handleSelect={handleSelect} currentList={currentList} newItem={newItem} ></Current>
            <ArrowSelectors handleMoveRight={handleMoveRight} handleMoveLeft={handleMoveLeft} handleMoveDown={handleMoveDown} handleMoveUp={handleMoveUp}></ArrowSelectors>
            <Previous handleSelect={handleSelect} previousList={previousList} handlePreviousSelect={handlePreviousSelect}></Previous>
          <div className={styles.logo}>
            <FontAwesomeIcon icon={faCartShopping}/>
          </div>
        </div>
        <div>
        <SavedLists savedList={savedList} handleEdit={handleEdit} allSavedLists={allSavedLists} handleLoad={handleLoad} isOpen={isOpen} handleRemoveSelected={handleRemoveSelected} handleSaveList={handleSaveList} handleDeleteList={handleDeleteList} handleOpen={handleOpen}></SavedLists>
        </div>
      </div>
    </div>
  )
}

export default Dashboard