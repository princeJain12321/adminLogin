import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import "./AddEdit.css";

const initialState = {
    title: "",
    description: "",
    price: "",
    url:""
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const { title, description, price,url} = state;
    const {id} = useParams();

    useEffect(() => {
     axios
     .get(`http://localhost:3002/api/get/${id}`)
     .then((resp)=> setState({...resp.data[0]}));
    }, [id]);

    const navigate = useNavigate();
    
    // const handleClick = () => {

    //     navigate("/panel");

    //   };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !price ||!url) {
            toast.error("Please provide value into each input field");
        } else {
         if(!id){
            axios
            .post('http://localhost:3002/api/post', {
                title,
                description,
                price,
                url
            }).then(() => {
                setState({ title: "", description: "", price: "" })
            }).catch((err) => toast.error(err.response.data))
            toast.success("Product Added Successfully");
         }else{
            axios
            .put(`http://localhost:3002/api/update/${id}`, {
                title,
                description,
                price,
                url
            }).then(() => {
                setState({ title: "", description: "", price: "" ,url: ""})
            }).catch((err) => toast.error(err.response.data))
            toast.success("Product Updated Successfully");
         }
           
            setTimeout(() =>
                navigate("/panel")
                , 500);
        }

    };
     const [image,setImage] =useState('')
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    //createProducts
    // const createProducts=(e)=>{
    //     e.preventDefault();
    //     Axios.post("http://localhost:3002/addProducts",{

    //     })
    // }
    function handleApi(){
        const formData =new FormData()
        formData.append('image',image)
        axios.post('url',formData).then((res)=>{
            console.log(res)
        })
    }
    return (
        <div  style={{ paddingTop: "50px",paddingBottom: "50px",backgroundColor:'lightblue'}}>
            {/* background: 'linear-gradient(to bottom,#ffffff, #9a9797' */}

         <div className='formborder'>

         
            <form  style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
                onSubmit={handleSubmit}
            >

                <label htmlFor='title'>Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter the Title..."
                    value={title || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor='description'>Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter the Description..."
                    value={description || ""}
                    onChange={handleInputChange}
                />


                <label htmlFor='price'>Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Enter the Price..."
                    value={price || ""}
                    onChange={handleInputChange}
                />
                <div style={{paddingTop:"10px",paddingBottom:'10px'}}> 
                <label style={{paddingRight:'10px'}} htmlFor='url'>Image</label>
                <input 
                    style={{height:'30px'}}
                    type="file" 
                    id="url"
                    name="url"
                    accept="image/*" capture onChange={handleInputChange} />

                </div>

                
                <input type="submit" onClick={handleApi} value={id ? "Update" :"Save"} />
                <Link to="/panel">
                    <input type="button" value="Go Back" />
                </Link>

            </form>
            </div>
        </div>
    )
}

export default AddEdit;
