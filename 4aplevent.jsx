const Eve=()=>{
    const dis=(nm,e)=>{
        alert("Name : "+ nm + " btnname : " + e.target.name +
             "value : "+ e.target.value)
    // const Myname=(nm)=>{
    //     return(
    //         alert(`My Name is ${nm}.`)
    //     )
    }
    return(
        <>
        <button name="myBtn"  value="BTN0" onClick={(e)=>{dis("Ayush",e)}} >
            Click here
        </button>
        </>
    )
}
export default Eve;