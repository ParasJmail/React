Render and Commit

    Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.

    You will learn
        * What rendering means in React
        * When and why React renders a component
        * The steps involved in displaying a component on screen
        * Why rendering does not always produce a DOM update

    Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:

        1. Triggering a render (delivering the guest’s order to the kitchen)
        2. Rendering the component (preparing the order in the kitchen)
        3. Committing to the DOM (placing the order on the table)

    Step 1: Trigger a render
        There are two reasons for a component to render:

            1. It’s the component’s initial render.
            2. The component’s (or one of its ancestors’) state has been updated.
