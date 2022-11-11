import React from 'react';

const Locker = ()=> {
    const alerti =()=>{
        alert ("only completed UI here is don't have any backend or solidty smart contract Work")
    }
       
    return(
        <>


 

<section className="home_contents">

   <div className="container  mx-auto row">
   <div className="col-12 col-md-11  rightPresale" >
    
    <div className="">
<div className="lockInputFild">

<form>
<div className="form-group">
<label for="exampleInputEmail1">Token or LP Token address<span style={{color:"red"}}>*</span></label>
<input type="text"  className="form-control preinput"   placeholder="Token or LP Token address"/>

</div>
</form>
</div>

</div>
    
    <div className="radio my-4">
        <input type="radio"/>  use another owner?
    </div>
 
<form>
<div className="form-group mt-2">
<label for="exampleInputEmail1">Title<span style={{color:"red"}}>*</span></label>
<input type="text"  className="form-control preinput"   placeholder="Ex : My Lock"/>

</div>
</form>
<form>
<div className="form-group mt-2">
<label for="exampleInputEmail1">Ammount<span style={{color:"red"}}>*</span></label>
<input type="number"  className="form-control preinput"   placeholder="0"/>

<div className="radio my-4">
        <input type="radio"/> use vesting?
    </div>
 
</div>
</form>

<form>
<div className="form-group mt-2">
<label for="exampleInputEmail1">{"Lock until (UTC time)"}<span style={{color:"red"}}>*</span></label>
<input type="date"  className="form-control preinput"   />


 
</div>
</form>



<button className="nextBtn" onClick={()=> alerti()}>Next</button>


</div>

    </div>

    </section>


        
        </>
    )
}


export default Locker;