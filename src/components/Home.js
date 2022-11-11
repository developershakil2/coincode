import React from 'react';
import { Link } from 'react-router-dom';

const Home = ()=> {
    return(
        <>
        <div className="homeContent">
            <h1 style={{padding:'10px 0px', marginTop:'40px'}}>The Protocol for Everyone!</h1>
            <p>
          CoinCode assists everyone in creating their own token and launch it on our very own launchpad within minutes and absolutely no coding skills required! All tokens created through CoinCode are going to be verified and published on the explorer websites. You bring the ideas, we bring the tech.
            </p>

            <Link className="homeLaunchpad" to="/createtoken">LAUNCHPAD</Link>


            <div className="homeStatusValWrap">
                <div className="homeStatusValBox">
                    <h2>500K </h2>
                    <p>Total Liquidity Raised</p>
                </div>

                <div className="homeStatusValBox middle2">
                <h2>400+</h2>
                    <p>Total Projects</p>
                </div>
                <div className="homeStatusValBox">
                <h2>15k</h2>
                    <p>Total Participants</p>
                </div>

                <div className="homeStatusValBox">
                    <h2>2.5M </h2>
                    <p>Total Value Locked</p>
                </div>
            </div>

            <h1 style={{padding:'10px 0px', marginTop:'40px'}}>A Suite of Tools for Project Owner.</h1>
            <p>
            A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized! Wish to have a fully custom made token dashboard or staking pool? Reach out to our team.
            </p>


            <div className="homeStatusValWrap2">
                <div className="homeStatusValBox">
                    <h2>Standard </h2>
                    <p>Mint standard tokens on ETH, CRO, DOGECHAIN.</p>
                </div>

                <div className="homeStatusValBox middle2">
                <h2>Deflationary
                          </h2>
                    <p>Generate deflationary tokens with tax and/or charity functions.</p>
                </div>
                <div className="homeStatusValBox">
                <h2>Customization</h2>
                    <p>Create a token sale for your own custom token.</p>
                </div>

                <div className="homeStatusValBox">
                    <h2>Launchpad </h2>
                    <p>Use the token you mint to create a Presale with just a few clicks</p>
                </div>
            </div>

            <div className="homeStatusValWrap2" style={{marginTop:"10px"}}>
                <div className="homeStatusValBox">
                    <h2>Certify </h2>
                    <p>Give your project more legitimacy, we're offering a variety of certificates. Ranging from KYC to Audits</p>
                </div>

                <div className="homeStatusValBox middle2">
                <h2>Management</h2>
                    <p>The portal to help you easily update content for your Token/Presale.</p>
                </div>
                <div className="homeStatusValBox">
                <h2>Community</h2>
                    <p>Promote your Project to thousands of potential investors on CoinCode.</p>
                </div>

                <div className="homeStatusValBox">
                    <h2>Locking </h2>
                    <p>Lock your liquidity with AlienLock. Customize duration and add different vesting periods + unlock schedule</p>
                </div>
            </div>



            <h1 style={{padding:'10px 0px', marginTop:'40px'}}>You got the IDEA, We got the TECH !</h1>
            <p>
            Enjoy full decentralization and control of Smart Contracts after deployment, We do NOT have any access to your project, so make sure it's all correct before you deploy
          
            </p>




          <div className="bottonLogoWrap">
            <img src="images/slogo.png" alt="logo"/>
            <h2>CoinCode</h2>
            <p>
            Launch a token sale with a few clicks.
            </p>
          </div>



<p className="text-center mt-5">All Rights Reserved CodeCoin &copy; 2022</p>
 
        </div>
        
        
        </>
    )
}

export default Home;