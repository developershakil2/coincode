import React, {useState} from 'react';
import {Route,Link, Routes} from 'react-router-dom';
import Home from './Home';
import CreateToken from './pages/CreateToken';
import Presale from './pages/Presale';
import Locker from './pages/CreateLock';
import Token from './pages/Token';
import Lp  from './pages/Lp';
import Createairdrop from './pages/Createairdrop';
import Airdrop from './pages/AirdropList';
import AntiBot from './pages/AntiBot';
const Nav = ({setSec, coller})=> {
      
     const dblock = "0px";
     const dnone = "-205px";

     const dno1 = 'none';
     const dopen1 = "block";
     const [asidNo , setAsidNo] = useState(dopen1);
     const [mobilnav, setMobileNav] = useState(dno1);
     const mobileNavi = ()=> {
      setMobileNav(dopen1);
      setMobileNavClose(dopen1);
      setMobileNavClose2(dno1);
     }
     const mobileNavi1 = ()=> {
      setMobileNav(dno1);
      setMobileNavClose(dno1);
      setMobileNavClose2(dopen1);
     }
     const[mobileNavClose , setMobileNavClose] = useState(dno1);
     const[mobileNavClose2 , setMobileNavClose2] = useState(dopen1);
    
    const [asider, setAsider] = useState(dblock);

    const dconnect = ()=>{
      setTimeout(()=>{
          setAcc(null)
      },[300])
     }
      const dno = 'none';
      const dblo = "block";
    const [navSign , setNavSign] = useState(dblo);
    const [navSign2 , setNavSign2] = useState(dno);
   const navFunc = ()=>{
      setAsider(dnone);
      setAsidNo(dno1);
      setNavSign(dno);
      setNavSign2(dblo);
   }
   const navFunc1 = ()=>{
    setAsider(dblock);
    setNavSign(dblo);
    setNavSign2(dno);
    setAsidNo(dopen1);
 }
   const [acc, setAcc] = useState();
   const ConnectWallet = ()=>{

    if(window.ethereum){
 
   window.ethereum.request({method:'eth_requestAccounts'}).then(res => setAcc(res));
   window.eth.request('eth_getBalance').then(accountBalance => document.write(accountBalance));
 
    }else {
     alert("please install metamask in your Browser extention");
 
    }
 
   }


    return (
        <>
        <nav >
           <div className="navWrapper">
           <div className="topNav">
                <div className="topNavLeft">
                   <button onClick={()=> navFunc()} className="desknav" style={{display:navSign}}>
                   <i className="fa-solid fa-bars"></i>
                   </button>
                     
                   <button onClick={()=> navFunc1()} className="desknav" style={{display:navSign2}}>
                   <i className="fa-solid fa-bars"></i>
                   </button>
                    <div className="nvwrapi">
                      
                   <button style={{display:mobileNavClose2}} className="mnv" onClick={()=> mobileNavi()}>
                   <i className="fa-solid fa-bars"></i>
                   </button>
                   <button  className="mnv" style={{display:mobileNavClose}} onClick={()=> mobileNavi1()}>
                   <i class="fa-solid fa-xmark"></i>
                   </button>

                    </div>
                 <Link to="/" className="navbar-brand">
                 <img src="images/logo.png" alt="logo" className="logo"/>
                 <img src="images/slogo.png" alt="logo" className="mlogo"/>
                 </Link>
                </div>
                <div className="tonNavRight">
                         

                     <button className="chainBtn">
                        <img src="images/bsc.png" alt="bsc" className="bscImg"/>
                        <span>BSC MAINNET</span>

                     </button>
                    
                     <button classname="connect" onClick={()=> ConnectWallet()}>
                     {acc ? <div onClick={()=> dconnect()}>{acc[0].substring(0, 7)+"..."}</div>: 'Connect'}
                     </button>
                   <div className="themColorControlWrap">
                   <button onClick={()=> setSec(coller === "light"? 'dark':'light')}  className="sun">
                    <i className="fa-solid fa-sun"></i>
                    </button>
                  
                   </div>
                </div>
            </div>
           </div>
        </nav>





        <div  id="mobilNav" style={{display:mobilnav}} >

<aside >
<div className="accordion" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<button  style={{textDecoration:'none'}} type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<i class="fa-solid fa-rocket" style={{fontSize:"27px"}}></i>  <span style={{marginLeft:'10px'}}>Launchpad</span>
</button>
</h2>

</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<i class="fa-solid fa-rocket"></i>    <span style={{marginLeft:'10px'}}>DEV TOOLS</span>
</button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div className="accordion-body">
<li><Link to="/createtoken" onClick={()=> mobileNavi1()}>Create Token</Link></li>
<li style={{marginTop:'10px'}} onClick={()=> mobileNavi1()}><Link to="/createpresale">Create Presale</Link></li>

</div>
</div>
</div>



<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
<i class="fa-solid fa-lock"></i>  <span style={{marginLeft:'10px'}}>CoincodeLock</span>
</button>
</h2>
<div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div className="accordion-body">
<li><Link to="/createlock" onClick={()=> mobileNavi1()}>Create Lock</Link></li>
<li style={{marginTop:'10px'}}><Link to="/tokenlock" onClick={()=> mobileNavi1()}>Token Locked</Link></li>
<li style={{marginTop:'10px'}}><Link to="/lpLocked" onClick={()=> mobileNavi1()}>LP Locked</Link></li>

</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
<i class="fa-solid fa-golf-ball-tee"></i> <span style={{marginLeft:'10px'}} onClick={()=> mobileNavi1()}>Airdrop</span>
</button>
</h2>
<div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div className="accordion-body">
<li><Link to="/createairdrop"onClick={()=> mobileNavi1()}>Create Airdrop</Link></li>
<li style={{marginTop:'10px'}} onClick={()=> mobileNavi1()}><Link to="/airdroplist">Airdrop List</Link></li>

</div>
</div>
</div>


<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<Link to="/antibot" style={{textDecoration:'none'}} onClick={()=> mobileNavi1()} className="accordion-button antil collapsed">
<i className="fa-solid fa-shield-halved"></i> <span style={{marginLeft:'10px'}}>Anti Bot</span>
</Link>
</h2>

</div>



<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<Link to="/" style={{textDecoration:'none'}}onClick={()=> mobileNavi1()} className="accordion-button antil collapsed">
<i className="fa-brands fa-telegram"></i><span style={{marginLeft:'10px'}}>Telegram</span>
</Link>
</h2>

</div>


<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<Link to="/" style={{textDecoration:'none'}} onClick={()=> mobileNavi1()} className="accordion-button antil collapsed">
<i className="fa-brands fa-twitter"></i><span style={{marginLeft:'10px'}}>Twitter</span>
</Link>
</h2>

</div>




</div>

</aside>
</div>



































           <div className="sid_content_wrap" >
              <div className="sidnav_wrap" style={{display:asidNo}}>

              <aside style={{left:asider}}>
              <div className="accordion" id="accordionExample">
              <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button  style={{textDecoration:'none'}} type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <i class="fa-solid fa-rocket" style={{fontSize:"27px"}}></i>  <span style={{marginLeft:'10px'}}>Launchpad</span>
      </button>
    </h2>
   
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <i class="fa-solid fa-rocket"></i>    <span style={{marginLeft:'10px'}}>DEV TOOLS</span>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          <li><Link to="/createtoken">Create Token</Link></li>
          <li style={{marginTop:'10px'}}><Link to="/createpresale">Create Presale</Link></li>
         
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
      <i class="fa-solid fa-lock"></i>  <span style={{marginLeft:'10px'}}>CoincodeLock</span>
      </button>
    </h2>
    <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          <li><Link to="/createlock">Create Lock</Link></li>
          <li style={{marginTop:'10px'}}><Link to="/tokenlock">Token Locked</Link></li>
          <li style={{marginTop:'10px'}}><Link to="/lpLocked">LP Locked</Link></li>
         
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
      <i class="fa-solid fa-golf-ball-tee"></i> <span style={{marginLeft:'10px'}}>Airdrop</span>
      </button>
    </h2>
    <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          <li><Link to="/createairdrop">Create Airdrop</Link></li>
          <li style={{marginTop:'10px'}}><Link to="/airdroplist">Airdrop List</Link></li>
         
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <Link to="/antibot" style={{textDecoration:'none'}} className="accordion-button antil collapsed">
      <i className="fa-solid fa-shield-halved"></i> <span style={{marginLeft:'10px'}}>Anti Bot</span>
      </Link>
    </h2>
   
  </div>



  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <Link to="/" style={{textDecoration:'none'}} className="accordion-button antil collapsed">
      <i className="fa-brands fa-telegram"></i><span style={{marginLeft:'10px'}}>Telegram</span>
      </Link>
    </h2>
   
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <Link to="/" style={{textDecoration:'none'}} className="accordion-button antil collapsed">
      <i className="fa-brands fa-twitter"></i><span style={{marginLeft:'10px'}}>Twitter</span>
      </Link>
    </h2>
   
  </div>




</div>
            
 </aside>
            </div>



            <div className=" content row  mt-5 pt-5">
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createtoken" element={<CreateToken/>}/>
            <Route path="/createpresale" element={<Presale/>}/>
            <Route path="/createlock" element={<Locker/>}/>
            <Route path="/tokenlock" element={<Token/>}/>
            <Route path="/lplocked" element={<Lp/>}/>
            <Route path="/createairdrop" element={<Createairdrop/>}/>
            <Route path="/airdroplist" element={<Airdrop/>}/>
            <Route path="/antibot" element={<AntiBot/>}/>
            </Routes>
            </div>
           </div>
        
        </>
    )
}

export default Nav;