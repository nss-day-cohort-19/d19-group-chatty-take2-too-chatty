## Expected Behavior
- 1. New user input prints to DOM(resolved).
- 2. Input is removed from both DOM and array when "remove" button is clicked (resolved).
- 3. JSON file loads to DOM.
- 4. Scroll added to div when messages overflow within div.

## Actual Behavior
- 1. Input prints to DOM, but compounds with previous input despite being cleared (resolved).
- 2. New user input prints to DOM and is added to array, but is not removed from array when checked in console.
- 3. JSON not loading to DOM.
- 4. Messages overflow.

## Steps to Reproduce Behavior
- 1. Follow Code
- 2. Figure out way to call function when page loads.
- 3. n/a

## Module Suspected / Relevant Files
- 1. Shared variables(resolved).


## Related Issues
-Input added to array and not removed after clicking remove button.
