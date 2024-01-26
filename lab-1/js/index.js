 /* Task: Reference Variables 
    - create reference variable for the call to action button, the dialog element, and the close button inside the dialog element 
    - Use semantic variable names 
 */

const openModalButton = document.querySelector('#open-modal'); //reference variable to speed test button id
const emailDialog = document.querySelector('#email-dialog'); // reference variable to the dialog element's unique id
const closeModalButton = document.querySelector('#close-modal'); //reference variable to the close modal button's unique id

/* Task: Add Event Listeners
   - add event listeners with the relevant eventType and eventTypeHandlerFunctions
*/

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
emailDialog.addEventListener("click", onClickOutside);


/* Task: Event Handler Functions */
function openModal(){
    emailDialog.showModal();
}

function closeModal(){
    emailDialog.close();
}

function onClickOutside(e){
    const dialogDimensions = emailDialog.getBoundingClientRect();

    if
    (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    )
    {
        e.currentTarget.close();
    }
}