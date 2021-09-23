import React from 'react'
import Head from 'next/head'
import { TextField } from '@material-ui/core';
const hero_section = () => {
    return (
        <>
       <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>      
        <div className="hero-background d-flex justify-content-center">
  <div className="hero-container"> 
  <div className="hero-section "><div className="hero-main">
               <div className="hero-content-left">
               <p className="testings">Your wish is <br/> our command.</p>
               <div className="hero-left-main-content">
               <h1 class="-home">Start your switch <span className="">with Broadband Genie</span> </h1>


               <div class="pc-checker">
    <form action="#" >
     <div className='hero-form-container'>
{/* <input  type="text" className="hero-text-input" required="true"/> */}
{/* <label className="hero-hint-input">Enter Your Postcode</label> */}
{/* <TextField id="standard-basic" className="hero-text-input mt-5" label="Standard" /> */}
<div class="form-floating mb-3"> 
  <input type="text" class="form-control hero-text-input" id="floatingInput" placeholder="&nbsp"/>
  <label for="floatingInput" className="hero-hint-input">Enter Your Postcode</label>
</div>
<a href="#" id="postcode-submit">Start</a>
</div>
</form>
</div>

<a href="#" className="hero-why-postcode-link">Why do we need your postcode?</a>
</div>
               </div> 
               <div className="hero-content-right">
                   <img className="hero-rigth-img" src="https://www.broadbandgenie.co.uk/img/kazaam/genie/genie-bank-l@2x.png" alt="" />
                   </div> 
                
                </div></div>
                </div>
                </div>

        </>
    )
}

export default hero_section
