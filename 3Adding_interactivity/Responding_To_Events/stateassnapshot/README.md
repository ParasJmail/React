State as a Snapshot

    State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.

    You will learn
        * How setting state triggers re-renders
        * When and how state updates
        * Why state does not update immediately after you set it
        * How event handlers access a “snapshot” of the state

    Setting state triggers renders

        You might think of your user interface as changing directly in response to the user event like a click. In React, it works a little differently from this mental model. On the previous page, you saw that setting state requests a re-render from React. This means that for an interface to react to the event, you need to update the state.

        In this example, when you press “send”, setIsSent(true) tells React to re-render the UI: trigger.js

        Here’s what happens when you click the button:

            1. The onSubmit event handler executes.
            2. setIsSent(true) sets isSent to true and queues a new render.
            3. React re-renders the component according to the new isSent value.