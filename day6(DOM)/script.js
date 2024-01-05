// ==================================== DOM (Document Object Model) =================================

//WINDOW OBJECT -
               // It represents an open window in a browser. 
               // It is a browser's object (not Js).
               // It is automatically created by browser.
               // It is a global object with lots of properties & methods.
               // Like window.alert / window.prompt.

// ==================== what is DOM ===============================================================

//It is the data representation of the objects that comprise the structure and content of a document on the web.
// It is a tree like structure.
// When a web page is loaded, the browser creates a DOM of the page.

                        //          Window       // cld node
                        //             |
                       //           document     // node 
                       //              |
                       //             html
                       //             / \                           // tree like structure
                       //          head  body
                       //          |  |      \
                       //       meta title    script
                       
// console.log(window) acess the data of window.
// we can write console.dir(window.document) to see all html in document 
         
// ========================= DOM MANIPULATION =====================================================

// 1) SELECTING WITH ID --
                    // Id should be unique.
                    // document.getElementById("heading") .
                    // let a = document.getElementById("heading");
                    // console.log(a);
                    // console.dir(a);          // for object view
                    // In css accessed by # .
                    // If write wrong id, it shows null.

// 2) SELECTING WITH CLASS --
                         // class is for multiple things.
                         // In css accessed by .
                         // document.getElementById("heading1") .
                         // let a = document.getElementsByClassName("heading1");
                         // console.log(a);
                         // console.dir(a);
                         // If write wrong class, shows length 0 (empty HTML collection).

// 3) SELECTING WITH TAG --               
                        // directly accessed by tag name (like p, h1).
                        // document.getElementsByTagName     
                        // document.getElementById("button") .
                        // let button = document.getElementsByTagName("button");
                        // console.log(button);
                        // console.dir(button);

// 4) QUERY SELECTOR -- 
                    // It is a JavaScript method used to select the first element that matches a specified CSS selector within a document.
                    // It is part of the DOM API and is commonly used to manipulate and interact with HTML elements dynamically.
                    // document.querySelector(id/class/tag)  -- return 1st element.
                    // document.querySelectorAll(id/class/tag)  -- return nodeList. -- (in class only)
                    // document.querySelector("#heading") -- example
                    // document.querySelectorAll(.heading1") -- example


// ========================= PROPERTIES ==========================================================

// tagName --
           // returns tag for element nodes.
           // 3 types of nodes are present (textNode, commentNode, elementNode).
           // parent --> child --> siblings
           // if 3 child then access by like document.firstChild / document.lastChild.

// innerText --
           // returns the text content of the element & all its children.
           // only text is present.

// innerHtml --
           // returns the plain text or Html contents in the element.
           // we can see text with its tags.

// textContent --
            // returns textual content even for hidden content.

////////////////////////////////////////////////////////////////////////////////////////////////////////

//1) 
    //    let text = document.querySelector("h2");
    //    console.dir(text.innerText);

    //    text.innerText = text.innerText + "from Stuti"

// 2) 
    //   let divs = document.querySelectorAll(".box");
    //   console.log(divs);
    //   divs[0].innerText = "hello";
    //   divs[1].innerText = "me";
    //   divs[2].innerText = "you";

    // Alternate with loop ----------
                                    //   let i =0;
                                    //   for(let val of divs){
                                    //     val.innerText = `new unique value ${i}`
                                    //     i++;
                                    //   }


// Attribute --
            // attributes refer to additional information or properties associated with HTML elements.
            // Attributes provide extra details about an element, and they are always included in the opening tag of an HTML element. 
            // syntax: attributeName="attributeValue".
            // getAttribute(attr) -- to get the attribute value.                                   
            // setAttribute(attr, value) -- to set the attribute value.

            // let div = document.querySelector("div");
            // console.log(div);

            // let val = document.querySelector("id");
            // console.log(val);                                   


// Insert Element -- 
                 // let el = document.createElement("div");

// #) node.append --
                // adds at the end of the node (inside)

// #) node.prepend --
                  // adds at the start of the node (inside)

// #) node.before --
                 // adds before the node (outside)

// #) node.after --
               // adds after the node (outside)


// Delete Element -- 
                // node.remove (remove the node)

///////////////////////////////////////////////////////////////////////////////////
//======================== Practice =================================================
//1)
    // let btn = document.querySelector("button");
    // btn.innerText = "click me !";

    // btn.style.color = "white";
    // btn.style.backgroundColor = "red";

    // document.querySelector("body").prepend(btn);

//2)
    // let me = document.querySelector("me");
    // console.log(me);
    
    // me.classList.add("new")