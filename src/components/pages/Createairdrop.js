import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Createairdrop  = ()=> {
   
    const dn = "none";
    const dop = "block";
    const[op, setOp] = useState(dop);
    const alerti =()=>{
        alert ("only completed UI here is don't have any backend or solidty smart contract Work")
    }
    return(
        <>

<section className="home_contents">
  

  <div className="wrapiContent">
  <div className="container mt-5 mx-auto ">
      <h2>Create New Airdrop</h2>
      <div className="searchBox">
      <form>
<div className="form-group mt-2">
<input type="text"  className="form-control preinput"   placeholder="Ex: CodeCoin "/>


</div>
</form>
<div className="btnWraper">
<button className='next'onClick={()=> alerti()}>Next </button>

</div>
      </div>



   </div>
  </div>
   </section>
   
        </>
    )
}

export default Createairdrop;