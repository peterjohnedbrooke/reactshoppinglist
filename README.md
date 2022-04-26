Misc - 
Added postit note colours to the list elements, colours found here- https://www.color-hex.com/color-palette/29241
Could possibly use these ideas for an interesting UI, to give the style of paper effect found here- https://freefrontend.com/css-paper-effects/ 
Use of Google Fonts
Quick way of changing box shadow with this box shadow generator (nice and old school) https://html-css-js.com/css/generator/box-shadow/
some ideas regarding UI https://dribbble.com/shots/14775121-Gronik-Grocery-Shop-Mobile-App/attachments/6480244?mode=media
I used FontAwesome for the various icons on the page - https://fontawesome.com/ 
https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another

Time Keeping Log
20/04/22 - 1hrs
Built basic UI with all buttons and current & previous list components with basic styling

21/04/22 - 1.5hrs 
I spent some time reading the docs and getting refreshed on lists, keys and arrays in react as this was the main focus of the job specs. 
https://reactjs.org/docs/lists-and-keys.html

My original thought process was to use vanilla JS but the benefit of Reacts Virtual DOM in this instance was very helpful. In this way we can keep properties in useState before any interaction on the page and add items dynamically. A sizable chunk of the learning process with react was learning how to make dynamically rendered cards for a recipe app using a user input search bar. I have done similar with my portfolio website (albeit far less complicated) creating a card component that is generated with different info on each project page, passing down that info to the card using props, negating the need to create the component more than once. But this was far more basic as it doesn't include any user generated elements. 

22/04/2022 2hrs

I referred back the card project aswell as the poke API project I built and made a simple compoment that adds li elements dynamically everytime we hit the + on the input. This uses useState to create an empty array(for the shopping list) and an empty string (for the list item) and assigns values when the user clicks add, aswell as rendering an li with this value. 

Although we did do this while learning react I was having issues with assigning an individual key to an item when it was clicked, I could make it change state and therefore style onclick but it did this for all li elements rather than the specific one I was selecting. My thought process here was if I can click one Item, change isSelected : true, then I can store the selected items in state and then use this to move that item(s) up and down the list aswell as onto the previous list. 

https://codesandbox.io/s/cocky-oskar-tdv9n?file=/src/Tabs/Tabs.js
This solution was done using class based react components so I had to figure out how to destructure it to fit my project which uses functional based components. But this solves the issue nicely. 

23/04/2022 - 2hrs 
I was looking for a solution to capturing the objects that were selected into a variable, this for whatever reason had totally escaped me. 
https://stackoverflow.com/questions/48385283/how-to-delete-object-from-array-using-object-property-react

24/04/2022 - 2hrs 
Made it relatively responsive and styled up a bit. Needs a complete redesign but as a starting point looks acceptable. In hindsight I should have implemented bootstrap for the project but will need to familiarise myself with it further. There is a bug involving the loading of shopping lists from the saved lists aswell as the fact it only loads the last saved list which needs fixing. Lots of validation to add on almost all functions, have made notes on functions to add. 

26/04/22 - Spent 3 extra hours today trying to complete the functionailty of the the app as I would like to fully finish the project. Add load functionality and move selected list items up and down the current list. The last important thing that needs doing in terms of functionailty is fixing the handleSelect to turn any objects with the value isSelected: true to false when selecting a new item. This is so that moving selected items up and down the list is properly functional. I also need to look into editing items on current list
I also need to give each savedlist a unique key, or more preferably save the name as todays date, or let the user edit themselves. 
Also need to add validation so no duplicate items are added to a list 


https://stackoverflow.com/questions/51462062/loop-through-array-of-objects-check-for-a-matching-parameter-and-add-the-matchi
Top Priorities to complete - Saved Lists feature fix, up and down functionality on current, UI design improvements 

Tickets- 
TICKET 1 - Create UI layout in HTML as per prototype document
PRIORITY: URGENT - Completed

TICKET 2 - Style Shopping List App using css and Bootstrap 4
PRIORITY: URGENT - I haven't used bootstrap for this project but will study it for future use. 

TICKET 3 - Create models for 'Current' and 'Previous' lists and display in the HTML
PRIORITY: URGENT- Completed

TICKET 4 - Implement functionality for moving items between the 'Current' and 'Previous' lists using arrow buttons
PRIORITY: URGENT- Completed

Ticket 5 - Implement functionality for adding a new item to the 'Current' list
PRIORITY: URGENT- Completed 
NOTE: the UI element for this functionality is not included in the mock-up.
NOTE: It is not expected that changes persist after the browser is closed or the app is restarted.
EXTRA CREDIT: Use a modal element for adding a new item.

Ticket 6 - Implement functionality for editing an item on the either list
PRIORITY: URGENT - Not Completed 

Ticket 7 - Implement functionality for deleting an item from the 'Previous' list
PRIORITY: URGENT- Completed 

Ticket 8 - Implement functionality for manually re-ordering 'Current' list
PRIORITY: URGENT- Not Completed 

Ticket 9 - Validation to prevent duplicate items being added to either list
PRIORITY: MINOR- Not Completed 

Ticket 10 - Flag 'High Priority' items on the 'Current' List
PRIORITY: MINOR- Not Completed 

Ticket 11 - Save and Load data user the browser's local storage
PRIORITY: MINOR

Ticket 12 - Responsive UI - Allow the app to scale flexibly when viewed on desktop or mobile
PRIORITY: MINOR- Partially Completed 

Make the app look beautiful regardless of whether it is viewed on a desktop or mobile platform.
In mobile mode, optimise UI elements for the finger-presses instead of mouse clicks.

Ticket 13 - Format the list of links at the top of the page into an elegant navigation banner
PRIORITY: MINOR - Completed as Side Nav 

Ticket 14 - Allow the user to export the 'Current' list into another format
PRIORITY: MINOR- Not Completed 

