 const Student =(props)=>{
    return(
        <>
        <h1>Collage name : {props.clname}.</h1>
        <h2>Total seats : {props.seat} seats.</h2>
        <h2>Total fees : Rs - {props.fs}. </h2>
        
        </>
    )
 }

 export default Student;