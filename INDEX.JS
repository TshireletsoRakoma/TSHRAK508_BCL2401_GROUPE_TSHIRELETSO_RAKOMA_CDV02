function loop(value, test, update, body) {
    // Initialize the loop with the starting value
    for (let i = value; test(i); i = update(i)) {
      // Execute the body function with the current value of i
      body(i);
    }
  }
  
  // Call the loop function with:
  // - Initial value: 3
  // - Test function: checks if the current value is greater than 0
  // - Update function: decrements the current value by 1
  // - Body function: logs the current value to the console
  loop(3, n => n > 0, n => n - 1, console.log);
  