const Empdes=(props)=>{
    return(
        <>
        <tr align="center">
            
            <td >{props.Empno}</td>
            <td bgcolor="yellow">{props.Name}</td>
            <td>{props.Profil}</td>
            <td bgcolor="yellow">{props.City}</td>
            <td>{props.Contact}</td>
        </tr>
        </>
    )
}

export default Empdes;