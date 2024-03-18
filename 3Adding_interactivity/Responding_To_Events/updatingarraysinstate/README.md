Updating Arrays in State

    Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

    You will learn

        * How to add, remove, or change items in an array in React state
        * How to update an object inside of an array
        * How to make array copying less repetitive with Immer

    Updating arrays without mutation

    In JavaScript, arrays are just another kind of object. Like with objects, you should treat arrays in React state as read-only. This means that you shouldn’t reassign items inside an array like arr[0] = 'bird', and you also shouldn’t use methods that mutate the array, such as push() and pop().

    Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map(). Then you can set your state to the resulting new array.

    Here is a reference table of common array operations. When dealing with arrays inside React state, you will need to avoid the methods in the left column, and instead prefer the methods in the right column:

                    avoid (mutates the array)	        prefer (returns a new array)
        adding	    push, unshift	                    concat, [...arr] spread syntax (example)
        removing	pop, shift, splice	                filter, slice (example)
        replacing	splice, arr[i] = ... assignment	    map (example)
        sorting	    reverse, sort	                    copy the array first (example)

    Alternatively, you can use Immer which lets you use methods from both columns.

        Pitfall

            Unfortunately, slice and splice are named similarly but are very different:

                * slice lets you copy an array or a part of it.
                * splice mutates the array (to insert or delete items).

            In React, you will be using slice (no p!) a lot more often because you don’t want to mutate objects or arrays in state. Updating Objects explains what mutation is and why it’s not recommended for state.

    Adding to an array

        push() will mutate an array, which you don’t want: Add.js

        Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the ... array spread syntax:

            setArtists( // Replace the state
                [ // with a new array
                    ...artists, // that contains all the old items
                    { id: nextId++, name: name } // and one new item at the end
                ]
            );

        Now it works correctly: AddCorrect.js

        The array spread syntax also lets you prepend an item by placing it before the original ...artists:

            setArtists([
                { id: nextId++, name: name },
                ...artists // Put old items at the end
            ]);

        In this way, spread can do the job of both push() by adding to the end of an array and unshift() by adding to the beginning of an array. Try it in the sandbox above!

    Removing from an array

        The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item. To do this, use the filter method, for example: Remove.js

        Click the “Delete” button a few times, and look at its click handler.

            setArtists(
                artists.filter(a => a.id !== artist.id)
            );

        Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists whose IDs are different from artist.id”. In other words, each artist’s “Delete” button will filter that artist out of the array, and then request a re-render with the resulting array. Note that filter does not modify the original array.

    Transforming an array

        If you want to change some or all items of the array, you can use map() to create a new array. The function you will pass to map can decide what to do with each item, based on its data or its index (or both).

        In this example, an array holds coordinates of two circles and a square. When you press the button, it moves only the circles down by 50 pixels. It does this by producing a new array of data using map(): Tramsform.js

    Replacing items in an array

        It is particularly common to want to replace one or more items in an array. Assignments like arr[0] = 'bird' are mutating the original array, so instead you’ll want to use map for this as well.

        To replace an item, create a new array with map. Inside your map call, you will receive the item index as the second argument. Use it to decide whether to return the original item (the first argument) or something else: Replace.js

    Inserting into an array

        Sometimes, you may want to insert an item at a particular position that’s neither at the beginning nor at the end. To do this, you can use the ... array spread syntax together with the slice() method. The slice() method lets you cut a “slice” of the array. To insert an item, you will create an array that spreads the slice before the insertion point, then the new item, and then the rest of the original array.

        In this example, the Insert button always inserts at the index 1: Insert.js

    Making other changes to an array

        There are some things you can’t do with the spread syntax and non-mutating methods like map() and filter() alone. For example, you may want to reverse or sort an array. The JavaScript reverse() and sort() methods are mutating the original array, so you can’t use them directly.

        However, you can copy the array first, and then make changes to it.

        For example: Reverse.js

        Here, you use the [...list] spread syntax to create a copy of the original array first. Now that you have a copy, you can use mutating methods like nextList.reverse() or nextList.sort(), or even assign individual items with nextList[0] = "something".

        However, even if you copy an array, you can’t mutate existing items inside of it directly. This is because copying is shallow—the new array will contain the same items as the original one. So if you modify an object inside the copied array, you are mutating the existing state. For example, code like this is a problem.

            const nextList = [...list];
            nextList[0].seen = true; // Problem: mutates list[0]
            setList(nextList);

        Although nextList and list are two different arrays, nextList[0] and list[0] point to the same object. So by changing nextList[0].seen, you are also changing list[0].seen. This is a state mutation, which you should avoid! You can solve this issue in a similar way to updating nested JavaScript objects—by copying individual items you want to change instead of mutating them. Here’s how.

    Updating objects inside arrays

        Objects are not really located “inside” arrays. They might appear to be “inside” in code, but each object in an array is a separate value, to which the array “points”. This is why you need to be careful when changing nested fields like list[0]. Another person’s artwork list may point to the same element of the array!

        When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level. Let’s see how this works.

        In this example, two separate artwork lists have the same initial state. They are supposed to be isolated, but because of a mutation, their state is accidentally shared, and checking a box in one list affects the other list: Update.js

        The problem is in code like this:

            const myNextList = [...myList];
            const artwork = myNextList.find(a => a.id === artworkId);
            artwork.seen = nextSeen; // Problem: mutates an existing item
            setMyList(myNextList);
