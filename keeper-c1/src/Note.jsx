import React from "react";

const noticedesign = {
    display: "inline-block",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px"
}

function Note(props) {
    return (
        <div className="notediv" style={noticedesign}>
               <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
}


export default Note;


