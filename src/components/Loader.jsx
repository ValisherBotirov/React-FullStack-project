import React from "react";

const Loader = () =>{
    const style = {
        width : '100%',
        height:"85vh",
        display:"flex",
        justifyContent : "center",
        alignItems:"center"
    }
    return (
        <div style={style}>
            <div className="spinner-border d-block mx-auto" role="status" >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default Loader