State: A Component's Memory

    Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

    You will learn
        * How to add a state variable with the useState Hook
        * What pair of values the useState Hook returns
        * How to add more than one state variable
        * Why state is called local

    When a regular variable isn’t enough

    Here’s a component that renders a sculpture image. Clicking the “Next” button should show the next sculpture by changing the index to 1, then 2, and so on. However, this won’t work (you can try it!): Regular.js

    The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:

        1. Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
        2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

    To update a component with new data, two things need to happen:

        1. Retain the data between renders.
        2. Trigger React to render the component with new data (re-rendering).
