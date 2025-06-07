// An event listener in JavaScript is a procedure or function that waits for an event to occur. 
// You use event listeners to run a piece of code (a callback function) when a certain event (like a click, keypress, or mouse move) happens on an HTML element or the document itsel



function attachEventListeners(){
    let count=0
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("button clicked",++count)
    })
}
attachEventListeners()
