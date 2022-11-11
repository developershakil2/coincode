import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const AntiBot  = ()=> {
   
    const dn = "none";
    const dop = "block";
    const[op, setOp] = useState(dop);
    const alerti =()=>{
        alert ("only completed UI here is don't have any backend or solidty smart contract Work")
    }

  
    const dg = 'grid';
const [usePop, setUsePop] = useState(dn);
const [usePop1, setUsePop1] = useState(dn);
    const openPop = ()=> {
        setUsePop(dg);
    }
    const openPop1 = ()=> {
        setUsePop1(dg);
    }
    const popupC = ()=>{
        setUsePop(dn);
    }
    const popupC1 = ()=>{
        setUsePop1(dn);
    }
    return(
        <>

<section className="home_contents">
  
        

          <div className="popWrapper" style={{display:usePop}}>
        <div className="popBox">
            <div className="creatt">
                <span>Create Token</span>
                <button onClick={()=> popupC()}>
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div className='blockRow'>
                <label>Token Type <span style={{color:'red'}}>*</span></label>
                <select className="selecttok">
                    <option>Standard</option>
                   
                    <option>Liquidity Genaretor Token</option>
                    <option>Baby Token</option>
                    <option>Buyback Baby Token</option>
                </select>
                <span>Fee: 0.1 BNB</span>
            </div>


            <div className='blockRow '>
                <label>Name <span style={{color:'red'}}>*</span></label>
                 <input type="text" className="selecttok" placeholder="Ex: Ethereum"/>
            </div>

            <div className='blockRow '>
                <label>Symbo <span style={{color:'red'}}>*</span></label>
                 <input type="text" className="selecttok" placeholder="Ex: ETH"/>
            </div>

            <div className='blockRow '>
                <label>Total supply <span style={{color:'red'}}>*</span></label>
                 <input type="text" className="selecttok" placeholder="Ex: 1000000"/>
            </div>


            <div className='blockRow'>
                <label>Router <span style={{color:'red'}}>*</span></label>
                <select className="selecttok">
                    <option>---Select Router Exchange---</option>
                   
                    <option>pancakeswap</option>
                    <option>MDex</option>
                    <option>Biswap</option>
                    <option>ApeSwap</option>
                    <option>PinkSwap</option>
                </select>
            </div>
            
            <div className='blockRow '>
               <div className="row">
                <div className="col-7">
                    
                <label>Reward token <span style={{color:'red'}}>*</span></label>
                 <input type="text" className="selecttok" placeholder="Ex: 0x..."/>
                
                </div>

                <div className="col-5">
               <label> Minimum token balance</label>
                 <input type="text" className="selecttok" placeholder="Ex: 10000000"/>
                 <span><p className="longText1">Min hold each wallet must be over $50 to receive rewards.</p></span>
                
                </div>
               </div>
            </div>


            <div className='blockRow '>
              
               <div className="row onerow">
                <div className="col-6">
                <label>Reward token <span style={{color:'red'}}>*</span></label>
                 <input type="text" className="selecttok" placeholder=" 0-100"/>
                
                </div>

                <div className="col-6">
               <label>Auto add liquidity (%)</label>
                 <input type="text" className="selecttok" placeholder=" 0-100"/>
                 
                </div>
               </div>
            </div>

            <div className='blockRow '>
              
              <div className="row onerow">
               <div className="col-6">
               <label>Marketing Fee % <span style={{color:'red'}}>*</span></label>
                <input type="text" className="selecttok" placeholder="0-100"/>
               
               </div>

               <div className="col-6">
              <label>Marketing Wallet</label>
                <input type="text" className="selecttok" placeholder="Ex: 0x.."/>
                
               </div>
              </div>
           </div>


           <div className="py-3 px-3">
            <input type="checkbox" />
            <label>  Implement CodeCoin AntiBot system</label>
           </div>


           <button onClick={()=> alerti()} id="creati">Create Token</button>
        </div>
       </div>


       <div className="popWrapper" id="popwrap" style={{display:usePop1}}>
        <div className="popBox"  >
            <div className="creatt">
                <span>Select a token to enable CoinCode Anti-Bot</span>
                <button onClick={()=> popupC1()}>
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>


            <p className="text-center mt-5 text-light">No Data</p>
            </div>
            </div>


   <div className="wrapiContent">
   <div className="container mt-5 mx-auto ">
      
      <div className="searchBox">
        <div className="antiBtnWrap">
            <span>Token address</span>
            <div className="tokenBtn">
                <button className="tbtn" onClick={()=>openPop1()}>
                    Select Token
                </button>
                <button className="tbtn" onClick={()=>openPop()}>
                    Create Token
                </button>
            </div>
        </div>
      <form>
   <div className="form-group mt-2">
   <input type="text"  className="form-control preinput"   placeholder="EX: CoinCode"/>
   <p className="choose">Choose a token to integrate Anti-Bot.</p>
</div>
</form>

      </div>



   </div>
   </div>
   </section>
   
        </>
    )
}

export default AntiBot;