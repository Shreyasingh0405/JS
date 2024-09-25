//custome events:- basically this is an event that defined by the user that allows user to create and dispatch their own events according to specific needs.
 //eg:- WorkDocs change

//  const abc = new CustomEvent("documentChange",{
//     detail:{
//         user:"A",
//         change:"hello",
//         position:12
//     },
//  }
// )
// document.dispatchEvent(abc)
// document.addEventListener(documentChange,(event)=>{
//  console.log(`update ${event.detail.user}:${event.detail.change}`)
// })

// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');
// Create a custom class that extends EventEmitter
class CustomEmitter extends EventEmitter {
    // You can add custom methods if needed
    emitDocumentChange(user, change, position) {
        // Emit the custom event
        this.emit('documentChange', { user, change, position });
    }
}

// Instantiate the custom emitter
const myEmitter = new CustomEmitter();

// Listen for the 'documentChange' event
myEmitter.on('documentChange', (event) => {
    console.log(`Document update by ${event.user}: ${event.change} at position ${event.position}`);
});

// Emit the custom 'documentChange' event
myEmitter.emitDocumentChange('A', 'hello', 12);

//closure:- it function bundle with its lexical scope.it remember the pointer of its reference of the variable.
//eg:- 
function manager(){
     let a = "key"
     guard()
     function guard(){
        console.log(a)
     }
}
manager()