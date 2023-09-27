import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Order.css";
import { slice } from "lodash";

const Order = () => {


    const [search,setSearch]=useState('');
    console.log(search)
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3002/api/getOrder");
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
    return (
        <>

            <div class="background">
                <header class="dropdown" data-bs-theme="dark">

                    <nav class="navbar navbar-expand-lg bg-body-tertiary " style={{ backgroundColor: "black" }}>

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

                                            <button type="button" class=" buttonsss btn btn-success ">Home</button>

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

                <div style={{ marginTop: "40px" }}>

                    <form class="d-flex" role="search">

                       <div style={{paddingLeft:'15%',width:'82%'}}>
                       <center>
                            <input class="form-control me-2" onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        </center>
                       </div>
                        
                        <input type="image" src="https://th.bing.com/th/id/R.716d3d685b0417138a41354bf0e69bd6?rik=JVLOZ0782GajHg&riu=http%3a%2f%2fwww.androidpolice.com%2fwp-content%2fuploads%2f2014%2f06%2fnexusae0_search.png&ehk=lW0%2bgqwY4bopqQI0NHgqpyZeX0OwG%2fZCGhx9Es1bi70%3d&risl=&pid=ImgRaw&r=0" alt="Submit" width="38" height="37" style={{ position: "absolute", marginLeft: "173.5vh", }}></input>

                        {/* <button class="btn btn-outline-success" type="submit" style={{position:"absolute",marginLeft:"146vh",marginBottom:"10vh"}}>Search</button> */}

                    </form>
                    <table className="styled-table">
                        <thead>

                            <tr>
                                <th style={{ textAlign: "center" }}>UserId</th>
                                <th> </th>
                                <th style={{ textAlign: "center" }}>product_id</th>
                                <th style={{ textAlign: "center" }}>price</th>
                                <th style={{ textAlign: "center" }}>Email</th>
                                <th style={{ textAlign: "center" }}>order_date</th>
                                <th style={{ textAlign: "center" }}>created_at</th>
                                <th style={{ textAlign: "center" }}>updated_at</th>
                            </tr>
                        </thead>
                        <tbody style={{backgroundColor:'white'}}>
                            {records.
                            filter((item)=>{
                                return search.toLowerCase()=== ''
                                ? item 
                                :item.email.toLowerCase().includes(search);
                            })
                                .map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.userid}</td>
                                        <td>{item.product_id}</td>
                                        <td>₹{item.price}</td>
                                        <td>{item.email}</td>
                                        <td>{item.order_date}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.updated_at} IST</td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <nav>
                        <div className="pagination_section">
                            <ul className="flex inputlogin" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="page-item">
                                    <a href="#" className="page-link" onClick={prePage}>&lt;&lt;Prev</a>
                                </div>
                                {
                                    numbers.map((n, i) => (

                                        <a href="#" onClick={() => changeCPage(n)} >{n}</a>

                                    ))
                                }<div className="page-item">
                                    <a href="#" className="page-link" onClick={nextPage}>Next&gt;&gt;</a>
                                </div>
                            </ul>
                        </div>
                    </nav>
                    <Link to="/panel">
                        <center><input type="button" value="Go Back" style={{ height: "40%", width: "10% ", textAlign: "center" }} /></center>
                    </Link>
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
export default Order;