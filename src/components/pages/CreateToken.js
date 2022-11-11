import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CreateToken = ()=> {
    return (

        <>
      <div className="ctWrapper">
        <h1>CURRENT IDOS/PRESALES</h1>

        <Tabs style={{marginTop:'40px'}}>
    <TabList>
      <Tab >ALL IDOS/PRESALES</Tab>
      <Tab >MY CONTRIBUTIONS</Tab>
    </TabList>

    <TabPanel>
      
      <div className="mt-5 row inputWrapper2">
       <div className="col-12 col-md-8 col-lg-8 col-xl-8 ">
       <input className="createInput" placeholder="Enter Token address or Token Sybol"/>
       </div>
        <div className="filterWrap col-12 col-md-4 col-lg-4 col-xl-4 mt-2 ">
        <select>
                <option>All Status</option>
                <option>KYC</option>
                <option>upcomming</option>
                <option>InProgress</option>
                <option>Filled</option>
                <option>Ended</option>
                <option>Canceled</option>
            </select> <select>
                <option>No Filter</option>
                <option>Hard Cap</option>
                <option>Soft Cap</option>
                <option>Lp Parcent</option>
            </select>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-5 row inputWrapper2">
       <div className="col-12 col-md-8 col-lg-8 col-xl-8 ">
       <input className="createInput" placeholder="Enter Token address or Token Sybol"/>
       </div>
        <div className="filterWrap col-12 col-md-4 col-lg-4 col-xl-4 mt-2 ">
        <select>
                <option>All Status</option>
                <option>KYC</option>
                <option>upcomming</option>
                <option>InProgress</option>
                <option>Filled</option>
                <option>Ended</option>
                <option>Canceled</option>
            </select> <select>
                <option>No Filter</option>
                <option>Hard Cap</option>
                <option>Soft Cap</option>
                <option>Lp Parcent</option>
            </select>
        </div>



        <p className="mt-5 text-center"> No Data</p>
      </div>
    </TabPanel>
  </Tabs>
      </div>
        
        
        </>
    )
}


export default CreateToken;