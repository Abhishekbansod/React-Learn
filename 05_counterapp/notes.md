Why hooks are required ?

-> React hooks are basically used for updating the UI (User Interface). 
-> We don’t need to reflect each and every change manually. 
-> React makes UI updation easy. That’s why we should learn about hooks in React.
-> There are number of cases where the same value of the (variable = 45) is used in an application for n number of times
-> And to update all those n values at one time we use useState hook

Example : Counter Project using React JS

syntax :   let [counter, setCounter] = useState(15)

counter -> represent the current value/starting value, here it is 15
setCounter -> It used to set/change all the values of counter on UI

Note : [counter, setCounter] 
-> These names are user defined
-> Developer can provide any name to it