import React from "react";
import "./Article.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Loader from "../components/Loader";

const Article = () =>{
    const store = useSelector(state => state.articles)
    const {isLoading} = useSelector(state => state.articles)

    console.log(store)
    return(
        <div className="container mt-5">
            {
                isLoading &&
            <Loader/>
            }
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        store?.articles.map((item)=>{
                            return(
                                <div className="col">
                                    <div className="card h-100">
                                        <img src="https://source.unsplash.com/random/?Cryptocurrency&1" className="card-img-top img-box cursor-pointer" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title cursor-pointer">
                                                <Link to="/">

                                                {item?.title}
                                                </Link>
                                                </h5>
                                            <p className="card-text">{item?.description}.</p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-center">
                                            <div className="btn btn-group">
                                                <div className="btn btn-outline-success">View</div>
                                                <div className="btn btn-outline-primary">Edit</div>
                                                <div className="btn btn-outline-danger">Delete</div>
                                            </div>
                                            <small className="text-muted">{item?.author.username}</small>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Article