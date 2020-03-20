1. What problem does the context API help solve?

Helps avoid passing props through many levels.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions send data from our application to our store.

Reducers manages our applications state updates/changes in response to the actions sent to our store.

Store holds our applications state/data and allows components to take what they need from it where ever they need it. 

It is know as the single source of truth because it brings all the pieces together. We only have a single store in a redux application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and can be accessed by any component.
Component state is local and can only be accessed/passed down to anyone in its bubble/children components.

Application state should be used when certain information needs to be accessed throughout the entire application.
Component state should be used when that information/data is specific for that section/components in the providers bubble.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Its a middleware that allows us to calll action creators that return a function instead of an action. Passes in our stores dispatch method into that function. 


1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite would be Context because its simple and requires much less 'setting up' or 'boilerplate' code.