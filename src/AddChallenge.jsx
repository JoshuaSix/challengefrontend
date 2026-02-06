import axios from "axios";
import { useState } from "react";


function AddChallenge({onHandleChallenge}) {
    const [age, setAge] = useState('');
    const [month, setMonth] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/challenges',{age, month, description})
            setAge('');
            setMonth('');
            setDescription('');
            onHandleChallenge();
        }
        catch (error) {
            console.log("error message>>>>>>", error);
        }
    }


    return (

        <div className="font-geist min-h-screen flex flex-col items-center justify-center bg-[#F9F8F6] px-4">
            <div>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-semibold text-center text-gray-900">
                        Monthly Challenges Application
                    </h1>

                    {/* Card Form */}
                    <div className="mx-auto my-8 w-full max-w-[600px] h-[500px] rounded-lg bg-[#F9F8F6] shadow-sm ring-1 ring-[#E5E2DC] p-6 flex flex-col space-y-4">
                        <h4 className="text-2xl font-bold">Add New Challenge</h4>


                        <label>Age</label>
                        <input
                            type="text"
                            value={age}
                            placeholder="12,55,32"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setAge(e.target.value)}
                        />


                        <label>Month</label>
                        <input
                            type="text"
                            value={month}
                            placeholder="e.g January"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setMonth(e.target.value)}
                        />

                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            placeholder="Describe the challenge"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>

            
        </div>




    )
}

export default AddChallenge;