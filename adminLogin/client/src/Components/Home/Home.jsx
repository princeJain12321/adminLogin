import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from 'axios';
import {slice} from"lodash";

const Home = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {

        const response = await axios.get("http://localhost:3002/api/get");

        setData(response.data);

    };

    useEffect(() => {

        loadData();

    }, []);
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const deleteContact = (id) => {

        if (

            window.confirm("Are you sure that you wanted to delete it"

            )) {

            axios.delete(`http://localhost:3002/api/remove/${id}`);

            toast.success("Deleted successfully");

            setTimeout(() => loadData(), 500);

        }

    }

    return (

        <>

            <header class="dropdown" data-bs-theme="dark">

                <nav class="navbar navbar-expand-lg bg-body-tertiary ">

                    <div class="container-fluid">

                        <text class="navbar-brand" href="#">Admin Panel</text>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                            <span class="navbar-toggler-icon"></span>

                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                {/* <li class="nav-item">

                                    <a class="nav-link active" aria-current="page" href="/panel">Home</a>

                                </li> */}
                                
                <div style={{ marginLeft: "20px" }}>

<Link to="/panel">

    <button type="button" className=" buttonsss btn btn-success ">Home</button>

</Link>

</div>
                                

                                <div style={{ marginLeft: "20px" }}>

                                    <Link to="/addProducts">

                                        <button type="button" class=" buttonsss btn btn-success ">Add Products</button>

                                    </Link>

                                </div>

                                <div style={{ marginLeft: "30px" }}>

                                    <Link to="/ShowOrders">

                                        <button type="button" class=" buttonsss btn btn-success ">

                                            Orders

                                        </button>

                                    </Link>

                                </div>
                            </ul>
                           
                            
                            <Link to={"/"}>
                                <button className="btn btn-primary flex">LogOut</button>
                            </Link>
                            
                        </div>
                    </div>
                </nav>
            </header>

            <div >

                <div className='cards'>
                    
                    {data.map((item, index) => {
                        return (
                            <div class="card" style={{ width: "21rem" }}>
                                {/* <tr key={item.id}> */}
                                    {/* <th scope="row">{index + 1}</th> */}
                                    <img class="card-img-top" src={item.url} alt="Card img cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <h5 class="card-title">₹{item.price}</h5>
                                    </div>
                                    <div className="buttoncontainer">
                                        <Link to={`/update/${item.id}`}>
                                            <button type="button" class="buttonsss btn btn-secondary btn-sm">Edit</button>
                                        </Link>
                                        <button type="button" class=" buttonsss btn btn-danger btn-sm" onClick={() => deleteContact(item.id)}>Delete</button>
                                        {/* <Link to={`/update/${item.id}`}>
                                            <button type="button" class=" buttonsss btn btn-primary btn-sm">View</button>
                                        </Link> */}
                                    </div>
                                {/* </tr> */}
                            </div>
                            
                        )
                    })}
                </div>
                <div className="pagination_section">
                            <ul className="flex inputlogin" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="page-item">
                                    <a href="#" className="page-link" onClick={prePage}>Go To Top</a>
                                </div>
                                {/* {
                                    numbers.map((n, i) => (

                                        <a href="#" onClick={() => changeCPage(n)} >{n}</a>

                                    ))
                                }<div className="page-item">
                                    <a href="#" className="page-link" onClick={nextPage}>Next&gt;&gt;</a>
                                </div> */}
                            </ul>
                        </div>
            </div>
        </>
    )
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }


    }

    function nextPage() {
        if (currentPage !== npage) {
            // setCurrentPage(currentPage + 1)

            setCurrentPage(currentPage + 1)
        }

    }
    function changeCPage(id) {
        setCurrentPage(id)
    }
}
export default Home;