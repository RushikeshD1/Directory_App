import { useState } from "react"

const AddNewPerson = () => {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [add, setAdd] = useState("")
    const [mobile, setMobile] = useState("")

    const [isForm, setIsForm] = useState(false)
    const [save, setSave] = useState([])

    const openForm = () => {
        setIsForm(!isForm)
    }

    const saveData = () => {
        
        if (!name || !date || !add || !mobile) {
            alert("Please fill out all fields.");
            return;
        }

        const savedData = { name, date, add, mobile }
        setSave([...save, savedData])
        setName("")
        setDate("")
        setAdd("")
        setMobile("")
        setIsForm(false)        
    }

    console.log(save);

    const deleteData = (index) => {
        const updateData = save.filter((item, idx) => (idx !== index))
        setSave(updateData)
    }

    return (
        <>
            <div className="border-2 border-black w-full h-[75vh]  mt-2  relative">
                <div className=" w-56 h-10 border-b-2 border-r-2 border-black flex justify-center text-center pt-2 font-semibold ">Add New Person</div>
                <div className="w-full p-2 ">
                    <table className="w-full">
                        <thead>
                            <tr className="w-full bg-blue-500 text-white">
                                <th className="border-r-2 border-gray-500 px-4 py-2">Name</th>
                                <th className="border-r-2 border-gray-500 px-4 py-2">Date of Birth</th>
                                <th className="border-r-2 border-gray-500 px-4 py-2">Aadhar Number</th>
                                <th className="border-r-2 border-gray-500 px-4 py-2">Mobile Number</th>
                                
                                <th className="border-r-2 border-gray-500 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        {!isForm && <tbody> 
                           { save.map ((person, index) => (<tr key={index} className="w-full border">
                                <td className="border-r-2 border-gray-500 px-4 py-2">{person.name}</td>
                                <td className="border-r-2 border-gray-500 px-4 py-2">{person.date}</td>
                                <td className="border-r-2 border-gray-500 px-4 py-2">{person.add}</td>
                                <td className="border-r-2 border-gray-500 px-4 py-2">{person.mobile}</td>                            
                                <td className="border-r-2 border-gray-500 px-4 py-2">
                                
                                <button onClick={() => deleteData(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
                                </td>
                            </tr>))}
                        </tbody> }                      
                    </table>
                    {isForm && <form action="" className=" bg-blue-500 mt-4" >
                        <h1 className="text-white font-bold text-center">Fill below form for New Entry</h1>
                        <div className="text-center pb-1">
                             
                            <input type="text" placeholder="Name" required className="mr-2" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="date" className="mr-2" value={date} required  onChange={(e) => setDate(e.target.value)}/>
                            <input type="text" placeholder="Aadhar Number" required className="mr-2" value={add} onChange={(e) => setAdd(e.target.value)}/>
                            <input type="text" placeholder="Mobile Number" required  className="mr-2" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                            <input type="button" value="save" onClick={saveData} className="bg-white w-40 text-blue-700 underline cursor-pointer"/>                            
                        </div>
                    </form>}
                </div>
                <button className="bg-blue-500 text-white pt-1 pb-1 pl-6 pr-6 absolute bottom-4 right-4" onClick={openForm}>Add</button>
            </div>
        </>
    )
}

export default AddNewPerson