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
