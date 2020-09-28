import React, { useState } from 'react';



const AddCommentForm = () => {

    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

    return (
        <div id="add-comment-form">
            <h3>Add a comment</h3>
            <label>
                Name: <input type="text" value={username} onChange = {(event)=>setUsername(event.target.value)} />
            </label>
            <label>
                Comment: <textarea rows="4" cols="50" value={commentText} onChange = {(event)=>setCommentText(event.target.value)} />
            </label>
            <button>Add comment</button>
        </div>
    );
};



export default AddCommentForm;