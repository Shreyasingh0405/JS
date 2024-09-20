/*| Feature              | Regular Function                                        
|----------------------|---------------------------------------------------------
| **Syntax**           | `function name() { ... }`                                                                 
| **`this` Binding**   | Dynamic, based on how the function is called.            
| **`arguments` Object**| Has its own `arguments` object.                         
| **Constructor Usage**| Can be used as a constructor (`new` keyword).           
| **Implicit Return**  | Requires an explicit `return` statement.                

*/

/*| Feature            | Arrow Function                                               
|----------------------|---------------------------------------------------------
| **Syntax**           | `const name = () => { ... }`                                 
| **`this` Binding**   | Lexically bound, inherits `this` from the surrounding scope. 
| **`arguments` Object**| Does not have its own `arguments` object.                    
| **Constructor Usage**| Cannot be used as a constructor (`new` will throw an error). 
| **Implicit Return**  | Implicit return if the body has a single expression.         

*/