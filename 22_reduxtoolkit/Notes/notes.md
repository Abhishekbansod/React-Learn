Redux Toolkit(RTK) 

=> Redux is standalone library which is used for state management.
=> This library can be used react, angualr and many more techs.
=> It is designed to simplify the process of using Redux by reducing boilerplate and enforcing best practices.
=> It offers powerful utilities that make managing state in complex applications easier and more efficient.


Why Redux Toolkit?

=> Reduces Boilerplate: Traditional Redux requires writing a lot of boilerplate code. Redux Toolkit abstracts much of this, making it quicker to implement.
=> Built-in Best Practices: It encourages a predictable state management pattern and ensures immutability.
=> Includes Middleware: RTK comes with built-in middleware like redux-thunk for handling asynchronous actions.
=> Improved Developer Experience: It integrates well with the Redux DevTools for debugging and makes state management more intuitive.


Steps to configure the redux toolkit in react app :- 
1. create store (in 'redux' folder)
2. wrap the App.js with Provider
3. create slice (in 'features' folder)
4. create Reducers in slice 
5. register the created reducers in the store

Redux - Alternative of prop drilling (prop drilling was a headache)
Centralized store

Some important terms in RTK :-
Action {event/object}(It's a [event] or [event+additional info], additional info like ex.- payload, object or data)
Store {hold states} (It contains state,the data you want to manupulate, it also contains reducers)
Reducer {functions}(This contains the entire logic for updating or changing a data)
Slice {features}(The logics of maintaining states for every features is in 'Slice', this contains initial state and reducer function)
State {data}

Whole path - 
UI trigger -> Action dispatch -> store -> reducer -> state update in store -> UI update 
ex- button click -> handlefunc() -> store -> increment() -> num+1 in store -> num+1 in UI

useSelector, dispatch, useDispatch

