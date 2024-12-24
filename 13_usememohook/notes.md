useMemo hook => It uses the concept of memoisation which means that it stores the data/value in cache(memory)
and once the component is rendered again n again then it takes the data/value from cache(memory) and provide
it to the called function. (optimised way)

=> but cache(memory) should have the data/value stored in it first
=> if not then using the concept of memoisation, useMemo will store the outcome/value/data
=> in cache(memory), and once the function is called then useMemo hook will return the memoised value 
=> to the function

but useMemo only memoise the previous value and not every single value