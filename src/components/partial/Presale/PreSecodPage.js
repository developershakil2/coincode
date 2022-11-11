import React, {useReducer,useState, createContext} from 'react';


export const Dat = createContext();
const PreSecondPage = ({pdn, pBtn  })=>{
        const  vali = document.getElementById('valinput');

const [datas , setDatas] = useState({
  text01:'',
  
});

const texting = (e)=>{
   const {name, value} = e.target;
    setDatas({
      ...datas,
      [name]: value
    })



}
const alerti =()=>{
  alert ("only completed UI here is don't have any backend or solidty smart contract Work")
}
console.log(datas)

const dn = "none";
const dg = 'grid';
const [usePop2, setUsePop2] = useState(dn);
    const openPop = ()=> {
        setUsePop2(dg);
    }
   
    const popupC = ()=>{
        setUsePop2(dn);
    }
  
    return(
        <>
        <Dat.Provider value={datas}>
         <div className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale" style={{display:pdn}}>
         <p>{"(*)"} is required field.1</p>
         <div className="antiBtnWrap">
    <label for="exampleInputEmail1">Token Address <span style={{color:"red"}}>*</span></label>
    <button className="tbtn" onClick={()=>openPop()}>
                    Create Token
                </button>
    </div>
         <div>
  <div className="form-group">
    
 











    <div className="popWrapper" style={{display:usePop2}}>
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












 
    <input type="text" className="form-control preinput" id="valinput"name="text01" onChange={texting}  placeholder="Ex 0X..."/>
  </div>
    <div className="form-group mt-5" >
    <label for="currency">Currency</label>
  <select className="form-select  preinput" aria-label="Default select example">
  <option selected>BNB</option>
  <option value="1">BUSD</option>
</select>
    </div>
</div>
<label className="mt-5">Fee Option</label>

<h6 style={{display:"flex", alignItems:'center'}}><input style={{marginLeft:'8px'}} type="radio"/>  % BSC raised + % token raised</h6>
 
<h6 style={{display:"flex", alignItems:'center'}}><input style={{marginLeft:'8px'}} type="radio" />  % BSC raised only</h6>
 
 
 
 <button onClick={()=> pBtn()} className="nextBtn" >Next</button>


    </div>
    </Dat.Provider>
   
        </>
    )
}

export default PreSecondPage;
