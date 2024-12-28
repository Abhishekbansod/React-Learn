Context API : Context API is an inbuilt library provided by React js for state management.

=> Just like Redux, Redux Toolkit and Zustand, Context API is also used for state management.
=> Where above three libraries are external and COntext API is react js library
=> Users doesn't need to install any packages for it
=> whereas for external libraries, users needs to install extra packages

=> Props drilling can be avoided by the concept of Context API
=> Where we create the one global store/global state and store all the data there
=> And we can fetch/get the data from that created store/global state and also update it
=> We can access/get the data from Store/global global state into all the componets 
=> Also all the components are aware of the created store/ global state


steps to follow/create context :-

CREATE REACT/VITE APP => CREATE CONTEXT => PROVIDE THE CONTEXT => CONSUME CONTEXT IN CHILD COMPONENTS

step 1 => create a context using React.createContext() method
    => create a separate folder for context
    => inside that, create one file name with contextName_context(eg UserContext)
    => create one more file for providing the context to previously created file
