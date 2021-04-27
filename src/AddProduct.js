import Header from './Header'
import {useState} from 'react'
function AddProduct()
{
    const [name,setName]=useState("")
    const [file,setFile]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    async function addProduct()
    {
        console.warn(name,file,price,description)
        const formData = new FormData();
        formData.append('name',name);
        formData.append('file',file);
        formData.append('price',price);
        formData.append('description',description);
        let result = await fetch("http://localhost:8000/api/addproduct",{
            method: 'POST',
            body: formData
        });
        alert("Product Added Successfully")

    }
    return(
        <div>
            <Header/>
            <div className= "col-sm-6 offset-sm-3">
            <h1>Add Product</h1>

            <input type="text"  onChange={(e)=>setName(e.target.value)}
             className= "form-control" placeholder= "Enter Product Name" /> <br/>
            <input type="file"  onChange={(e)=>setFile(e.target.files[0])}
             className= "form-control" placeholder= "Enter Image" /> <br/>
            <input type="text"  onChange={(e)=>setPrice(e.target.value)}
             className= "form-control" placeholder= "Enter Price" /> <br/>
             <input type="text" onChange={(e)=>setDescription(e.target.value)}
             className= "form-control" placeholder= "Describe Here" /> <br/>
            <button onClick={addProduct} className="btn btn-primary">Add Product</button>
        </div>
        </div>
    )
}
export default AddProduct