import './App.css'
import {useForm} from 'react-hook-form'

function App() {

  // below are the utilities in useForm hook
  const {
    register,
    handleSubmit,
    watch,
    formState : {errors, isSubmitting}
  } = useForm()


  async function onsubmit(data){
    await new Promise((resolve) => setInterval(resolve, 2000))
    console.log("submitted the form", data);
    
  }

  // handleSubmit provides the form data to onsubmit function
  return (
    <form onSubmit={handleSubmit(onsubmit)} >

      <div>
        <label>First Name : </label>
        {/* linking input with reactform n validation part */}
        <input className={errors.firstname ? "input-err" : ""} {...register("firstname", {
          required:true, 
          minLength:{value: 5, message: "min length is 5"}, 
          maxLength:{value: 7, message: "max length is 7"} })} />
          {errors.firstname && <p className='err_msg' >{errors.firstname.message}</p> }
      </div> <br />


      <div>
        <label>Middle Name : </label>
        <input {...register("middlename", {required: true})} />
      </div> <br />


      <div>
        <label>Last Name : </label>
        <input className={errors.lastname ? "input-err" : ""  } 
        {
          ...register("lastname", 
          { pattern:{value: /^[A-Za-z]+$/i, message: "lastname is not following rules"} 
        } )} />
        {errors.lastname && <p className='err_msg'>{errors.lastname.message}</p> }
      </div> <br />

      <input type="submit" disabled = {isSubmitting}
      value={isSubmitting ? "submitting" : "Submit"} />

    </form>
  )
}

export default App
