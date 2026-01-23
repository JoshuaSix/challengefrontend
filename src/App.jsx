
import './App.css'

function App() {


  return (
    <>
    <div className= "font-geist p-4 space-y-4 ">
      <h1 className= "text-3xl font-semibold text-center color-gray-900"
       >Monthly Challenges Application</h1>


        <div className="border p-4 rounded space-y-4 color-gray-900 background-gray-100">
          <h4>Add New Challenge</h4>

          <label htmlFor="">Month</label>
          <input type="text" placeholder='e.g January'/>


          <label htmlFor="">Description</label>
          <input type="text" placeholder='Describe the challenge'/>

          <button>Submit</button>
        </div>

    </div>

    <div>
      <p>January</p>
      <p>Building a full-stack application</p>

      <p>February</p>
      <p>Launching a blog to share my learning</p>
    </div>
      
    </>
  )
}

export default App
