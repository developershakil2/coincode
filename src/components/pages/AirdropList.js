import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Airdrop  = ()=> {
   
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
      <h2>Airdrop</h2>
      <div className="searchBox">
      <form>
<div className="form-group mt-2  row">
    <div className="col-6 text-center">
         <p>AIRDROP LAUNCHED</p>
         <h2>-</h2>
    </div>
    <div className="col-6 text-center">
         <p>PARTICIPANTS IN ALL-TIME</p>
         <h2>-</h2>
    </div>


</div>
</form>

      </div>




      
      <Tabs style={{marginTop:'40px'}}>
    <TabList>
      <Tab >ALL AIRDROPS</Tab>
      <Tab >MY AIRDROPS</Tab>
      <Tab >MY CREATED AIRDROPS</Tab>
    </TabList>

    <TabPanel>
      
      <div className="mt-5 row inputWrapper2">
             {/* here will tab content number 1 */}
        <p className="mt-5 text-center"> No Data</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-5 row inputWrapper2">
        {/* here will tab content number 2 */}
        <p className="mt-5 text-center"> No Data</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-5 row inputWrapper2">
      {/* here will tab content number 3 */}
      <p className="mt-5 text-center"> No Data</p>
      </div>
    </TabPanel>
  </Tabs>



   </div>
    </div>
   </section>
   
        </>
    )
}

export default Airdrop;