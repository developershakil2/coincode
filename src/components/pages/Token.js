import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Token  = ()=> {
   
    const dn = "none";
    const dop = "block";
    const[op, setOp] = useState(dop);

    return(
        <>

<section className="home_contents">
  

  <div className="wrapiContent">
  <div className="container mt-5 mx-auto ">
      <h2>Token Locked</h2>
      <div className="searchBox">
      <form>
<div className="form-group mt-2">
<input type="text"  className="form-control preinput"   placeholder="Search By Token Address"/>


</div>
</form>
<div className="btnWraper">
<button onClick={()=> setOp(dop)}>All</button>
<button  onClick={()=> setOp(dn)}>My Locks</button>

</div>
      </div>



   </div>
  </div>
   </section>
   
        </>
    )
}

export default Token;