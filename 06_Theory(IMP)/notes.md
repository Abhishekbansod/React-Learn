Concept of Virtual DOM, Fibre and reconciliation in React JS
(Link for reference - https://github.com/acdlite/react-fiber-architecture)

Virtual DOM 
-> The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
-> But the browser removes the whole DOM and then recreates the whole DOM with the updated values this is called reload.

-> However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
-> But some values depends on network call so if we update a value it might get update immediately via a network call.
-> So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.

Reconciliation
-> The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
-> Reconciliation is the algo behind what popularly known as the Virtual-DOM.
-> In UI it is not necessary for every update to be applied immediately. 

-> In other words, Reconciliation is nothing but a diffing algorithm which differentiates between web browser's DOM(tree) and 
-> React DOM(tree) formed by 'createRoot' and determines which parts need to be changed.

React Fibre
-> The current algorithm used by the React is called as React Fibre algorithm