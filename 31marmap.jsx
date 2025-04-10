
const Student=[
    {
        "rollno":1,
        "name":"Ayush",
        "city":"Bhopal",
        "Contact":12345,
    },
    {
        "rollno":2,
        "name":"Ayush",
        "city":"Bhopal",
        "Contact":12345,
    },
    {
        "rollno":3,
        "name":"Ayush",
        "city":"Bhopal",
        "Contact":12345,
    },
    {
        "rollno":4,
        "name":"Ayush",
        "city":"Bhopal",
        "Contact":12345,
    },
];
const Map=()=>{
    // const subject =["ALL","HTML","REACT","PHP","JAva"];
    // const ans =subject.map((key)=>{
    //     return(
    //         <>
    //         <option>{key}</option>
    //         {/* <li>{key}</li> */}
    //             </>
    //   )
    // });
    // return(
    //     <>
    //     <h1 align ="center">welcome to cybrom</h1>
    //     <select>{ans}</select>
    //     {/* <ul>{ans}</ul> */}
    //     </>
    // )

const ans =Student.map((key)=>{
  return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.Contact}</td>
            </tr>
            </>
        )
    });
    return(
        <>
        <table border="1" width ="400">
            <tr>
        <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Contact</th>
        </tr>
        {ans}
        </table>
        </>
    )

   
  }
  export default Map;
