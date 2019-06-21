1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, reduce, concat
concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: objects and functions that send data to the store.

reducers: define how state responds to actions, transforms data

store: manages the state, stores state, allows updates to state. 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
component state is a local state that is private inside a component. can be used for data input, before it is dispatched to the store.

1.  What is middleware?

an abstraction of the store, actions, and reducers used for routing, async logic and logging.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

helps turn action objects into usable functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
