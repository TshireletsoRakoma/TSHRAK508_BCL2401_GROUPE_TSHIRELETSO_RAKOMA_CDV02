## Custom Loop Function

This project demonstrates a higher-order function called `loop` that mimics the functionality of a for loop in JavaScript. The function accepts four parameters: an initial value, a test function, an update function, and a body function. Each iteration of the loop follows these steps:

### Function Definition

Define the `loop` function with four parameters: `value`, `test`, `update`, and `body`.

### Example

Use the `loop` function to execute a loop from 3 to 1, decrementing by 1 each time and logging the value to the console.

```javascript
// Example usage
loop(3, n => n > 0, n => n - 1, console.log);
