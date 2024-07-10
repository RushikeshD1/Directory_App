import AddNewPerson from "./component/addNewPerson/addNewPerson"
import Header from "./header/header"


function App() {  

  return (
    <>
      <Header/>
      <div className="w-full h-full">
        <div className="w-full p-2">
          <div className="">
            <button className="bg-blue-500 text-white pb-1 pt-1 pl-6 pr-6 mr-12">Add New Person</button>
            <button className="bg-blue-500 text-white pb-1 pt-1 pl-6 pr-6">Retrieve Information</button>
          </div>
          <AddNewPerson/>
        </div>
      </div>
    </>
  )
}

export default App
