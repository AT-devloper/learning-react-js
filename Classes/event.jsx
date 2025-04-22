const Event=()=>{

        const disp=()=>{
            alert("Name - ")
        }

    return(
        <>
        <button id="btn" name="bTn" value="200" 
        onClick = {disp} >
       <h1> BUTTON </h1>
        </button>
        </>
    )
}
export default Event;