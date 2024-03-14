import React, { useState } from 'react'

function HomePage() {
    const [userdata, setdata] = useState({ topic: " ", description: " " })
    const [submitData, setsubmitData] = useState([])
    const [isEdite, setEdite] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const handleChanges = (e) => {
        const { name, value } = e.target
        setdata({ ...userdata, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userdata)
        setsubmitData([...submitData, userdata]);
        setdata({ topic: "", description: "" })
    }
    const handleDelete = (index) => {
        setsubmitData(submitData.filter((_, i) => i !== index))
    }

    const handleEdit = (index) => {
        setEdite(true)
        setEditIndex(index)
        const edititem=submitData[index]
        setdata({ topic: edititem.topic, description: edititem.description })

    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const Update=[...submitData]
        Update[editIndex]=userdata;
        
        setsubmitData(Update);
        setdata({ topic: "", description: "" })
        setEdite(false)
    };

    return (
        <div className='container mt-3 w-50 border border-light'>{isEdite ? (
            <div className='my-2'>
                <h2 className='text-center'>My Todo</h2>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Topic</label>
                    <input type="text" className="form-control" value={userdata.topic} onChange={handleChanges} name='topic' id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" onChange={handleChanges} value={userdata.description} name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" onClick={handleEditSubmit} className="btn btn-outline-light rounded-pill">Update</button>
                <button className="btn btn-outline-light m-2 rounded-pill" onClick={() => {
                    setdata({ topic: "", description: "" })
                    setEdite(false)
                    }}>Cancel</button>
            </div>
        ) : (
            <div className='my-2'>
                <h1 className='text-center'>My Todo</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Topic</label>
                    <input type="text" className="form-control" value={userdata.topic} onChange={handleChanges} name='topic' id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" onChange={handleChanges} value={userdata.description} name='description' id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-outline-light rounded-pill">Add</button>
                
            </div>
        )}

            <div>
                {submitData.map((data, index) => {
                    return (
                        <div class=" container my-2 card text-white w-85" style={{ backgroundColor: "#4c5252" }} key={index}>
                            <div class="card-body">
                                <h5 class="card-title" >{data.topic}</h5>
                                <p class="card-text" >{data.description}</p>
                                <div className='d-grid gap-2 d-md-block'>
                                <button type="submit" onClick={() => handleDelete(index)} className="btn btn-outline-light btn-sm rounded-pill">Delete</button>
                                <button type="submit" onClick={() => handleEdit(index)} className="btn btn-outline-light btn-sm mx-2 rounded-pill">Edit</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
