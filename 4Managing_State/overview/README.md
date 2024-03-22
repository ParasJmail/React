Managing State

    INTERMEDIATE

    As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.

    In this chapter

        * How to think about UI changes as state changes
        * How to structure state well
        * How to “lift state up” to share it between components
        * How to control whether the state gets preserved or reset
        * How to consolidate complex state logic in a function
        * How to pass information without “prop drilling”
        * How to scale state management as your app grows

    Reacting to input with state

        With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input. This is similar to how designers think about UI.

        Here is a quiz form built using React. Note how it uses the status state variable to determine whether to enable or disable the submit button, and whether to show the success message instead.

        Reacting.js

    Choosing the state structure

        Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs. The most important principle is that state shouldn’t contain redundant or duplicated information. If there’s unnecessary state, it’s easy to forget to update it, and introduce bugs!

        For example, this form has a redundant fullName state variable:

        Choosing.jsx

        You can remove it and simplify the code by calculating fullName while the component is rendering:

        Choosing2.jsx

        This might seem like a small change, but many bugs in React apps are fixed this way.

    Sharing state between components

        Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code.

        In this example, only one panel should be active at a time. To achieve this, instead of keeping the active state inside each individual panel, the parent component holds the state and specifies the props for its children.

        Sharing.jsx

    Preserving and resetting state

        When you re-render a component, React needs to decide which parts of the tree to keep (and update), and which parts to discard or re-create from scratch. In most cases, React’s automatic behavior works well enough. By default, React preserves the parts of the tree that “match up” with the previously rendered component tree.

        However, sometimes this is not what you want. In this chat app, typing a message and then switching the recipient does not reset the input. This can make the user accidentally send a message to the wrong person:

        preserve.jsx

        React lets you override the default behavior, and force a component to reset its state by passing it a different key, like <Chat key={email} />. This tells React that if the recipient is different, it should be considered a different Chat component that needs to be re-created from scratch with the new data (and UI like inputs). Now switching between the recipients resets the input field—even though you render the same component.

        PreserveCorrect.jsx
