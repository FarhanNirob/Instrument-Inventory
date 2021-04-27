import Header from './Header'
import {withRouter} from 'react-router-dom'
import {useState,useEffect} from 'react'

function UpdateProduct(props)
{
    const [data, setData] = useState([]);
    useEffect(async()=>{
       let result = await fetch("http://localhost:8000/api/product/"+props.match.params.id);
       result = await result.json();
       setData(result)
    })
    console.warn("props",props.match.params.id)
    return(
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
            <h1>Update Product</h1>
            <input type="text" className="form-control" defaultValue={data.name}  /> <br/> 
            <input type="text" className="form-control" defaultValue={data.price}  /> <br/> 

            <input type="text" className="form-control" defaultValue={data.description}  /> <br/> 
            <input type="file" className="form-control" defaultValue={data.file_path}  /> <br/> <br/>
            <img style={{width:200}} src={"http://localhost:8000/"+data.file_path}  /> <br/> <br/>


            <button className="btn btn-primary">Update Product</button>
            </div>
        </div>
    )
}
export default withRouter(UpdateProduct)