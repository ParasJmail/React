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

    Rendering takes a snapshot in time

        “Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.

        Unlike a photograph or a movie frame, the UI “snapshot” you return is interactive. It includes logic like event handlers that specify what happens in response to inputs. React updates the screen to match this snapshot and connects the event handlers. As a result, pressing a button will trigger the click handler from your JSX.

        When React re-renders a component:

            1. React calls your function again.
            2. Your function returns a new JSX snapshot.
            3. React then updates the screen to match the snapshot your function returned.

        As a component’s memory, state is not like a regular variable that disappears after your function returns. State actually “lives” in React itself—as if on a shelf!—outside of your function. When React calls your component, it gives you a snapshot of the state for that particular render. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!


        Here’s a little experiment to show you how this works. In this example, you might expect that clicking the “+3” button would increment the counter three times because it calls setNumber(number + 1) three times.

        See what happens when you click the “+3” button: snap.js

        Notice that number only increments once per click!

        Setting state only changes it for the next render. During the first render, number was 0. This is why, in that render’s onClick handler, the value of number is still 0 even after setNumber(number + 1) was called:

            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>

        Here is what this button’s click handler tells React to do:

            1. setNumber(number + 1): number is 0 so setNumber(0 + 1).
                * React prepares to change number to 1 on the next render.
            2. setNumber(number + 1): number is 0 so setNumber(0 + 1).
                * React prepares to change number to 1 on the next render.
            3. setNumber(number + 1): number is 0 so setNumber(0 + 1).
                * React prepares to change number to 1 on the next render.

        Even though you called setNumber(number + 1) three times, in this render’s event handler number is always 0, so you set the state to 1 three times. This is why, after your event handler finishes, React re-renders the component with number equal to 1 rather than 3.

        You can also visualize this by mentally substituting state variables with their values in your code. Since the number state variable is 0 for this render, its event handler looks like this:

            <button onClick={() => {
                setNumber(0 + 1);
                setNumber(0 + 1);
                setNumber(0 + 1);
            }}>+3</button>

        For the next render, number is 1, so that render’s click handler looks like this:

            <button onClick={() => {
                setNumber(1 + 1);
                setNumber(1 + 1);
                setNumber(1 + 1);
            }}>+3</button>

        This is why clicking the button again will set the counter to 2, then to 3 on the next click, and so on.

    State over time

        Well, that was fun. Try to guess what clicking this button will alert: StateOverTime.js

        If you use the substitution method from before, you can guess that the alert shows “0”:

            setNumber(0 + 5);
            alert(0);

        But what if you put a timer on the alert, so it only fires after the component re-rendered? Would it say “0” or “5”? Have a guess!

        StateWithTime.js


