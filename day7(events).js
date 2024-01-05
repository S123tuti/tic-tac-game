//============================= Events in Js ==============================================================

// The change in the state of an object is known as an Event.
//Mouse Events (click, double click).
//keyboard Events (keypress, keyup, keydown).
//Form Event (submit etc).
//Print Event & many more.
//These are inline event handling.
// node.event = () =>{
//     handle event
// }
//example ---
         // let btn = document.querySelector('#btn');
        //  btn.onClick = () => {
        //     console.log("btn was clicked");
        //     let a = 5;
        //     a++
        //     console.log(a);
        //  };

// EVENT OBJECT -- 
              // It is a special object that has details about the event.
              // All event handlers have access to the event object's properties & methods.
              // node.event = (e) => {
                //handle here
            //   }
            // e.target, e.type, e.clientX, e.clientY etc

// EVENT LISTENERS --
                 // node.addEventListener(event, callback).
                 // node.removeEventListener(event, callback).
