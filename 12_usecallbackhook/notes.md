useCallback hook :- using the useCallback we can prevent the re-creation of function whenever
component is rendered and we can use dependencies to re-create the function once component is rendered.

Which means that whenver the any dependency is changed then only we want function to be re-created or otherwise no

in this case, we memoise the functions reference where as in case of useMemo we memoise the result/data 

useMemo => prevents function re-run (memoise result/data/value)
useCallback =>  prevents function re-creation (function reference)


Mostly used for preventing below scenarios:-
=> prevents re-rendering of child component
=> handling the expensive operations (component => ExpensiveComponent)

Whenever any componet is re-render on UI then then whatever or how many functions will be there inside that
component, those function will be re-created. Re-created means, for the previous function reference will be different and for newly created (re-created function) function reference will be different.

and React.memo doesn't understand/able to differentiate between these two reference that's why child component
get's re-rendered again n again when component is rendered.

useCallback prevents the re-creation of function and stores/momoize the function in the cache which is 
an optimized way to handle the re-rendering of child componet or stop preventing the re-creation of function.
