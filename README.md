### `Doc`

I used the functional components instead of React Classes in order to work with Hooks.
I defined a constant array which contains the input labels in order to fetch and display all inputs.
I created a state named checkedBoxes by using useState Hook.
This state is an array of boolean to specify the checked inputs.
The first value of the array is related to 'Select All' input.
I created an arrow function named handleToggle to manage the values of Checkbox inputs.
If the first input is clicked we will enter in the first condition when the index equal zero.
In this case all values of checkedBoxes array will be take the opposite value of the first one.
Else we will opposite only the value of the clicked input.
