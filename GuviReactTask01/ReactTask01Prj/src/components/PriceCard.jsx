import '../App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function PriceCard(){
    return (
        <>
        <h1 style={{textAlign:"center"}}>React Price Card</h1>
        <div className='cardDiv'>
           
            <div className='innerCard' >
                <h4 style={{textAlign:"center",color:"gray",fontSize:"15px"}}>Free</h4>
                <h2 style={{textAlign:"center"}}>$0/month</h2>
                <hr style={{color:"gray"}}/>
                <div >
                <ul style={{textAlign:"start"}}>✔️ Single User</ul>
                <ul>✔️ 50GB Storage</ul>
                <ul>✔️ Unlimited Public Projects</ul>
                <ul>✔️ Community Access</ul>
                <ul style={{color:"gray",paddingTop:"3%"}}>× Unlimited Private Projects</ul>
                <ul style={{color:"gray",paddingTop:"2%"}}>× Dedicated Phone Support</ul>
                <ul style={{color:"gray",paddingTop:"1%" }}>× Free subdomain</ul>
                <ul style={{color:"gray",paddingTop:"1%"}}>× Monthly Status Reports</ul>
                <Button style={{paddingLeft:"50px",paddingRight:"89px", margin:"0 2%",textAlign:"center"}} variant="contained" disableElevation>Button</Button>
                </div>
                
            </div>
            <div className='innerCard' >
            <h4 style={{textAlign:"center",color:"gray",fontSize:"15px"}}>PLUS</h4>
            <h2 style={{textAlign:"center"}}>$9/month</h2> 
            <hr style={{color:"gray"}}/>
            <ul>✔️ Single User</ul>
            <ul>✔️ 50GB Storage</ul>
            <ul>✔️ Unlimited Public Projects</ul>
            <ul>✔️ Community Access</ul>
            <ul>✔️ Unlimited Private Projects</ul>
            <ul>✔️ Dedicated Phone Support</ul>
            <ul>✔️ Free subdomain</ul>
            <ul style={{color:"gray",paddingTop:"1%"}}>× Monthly Status Reports</ul>
            <Button  style={{paddingLeft:"50px",paddingRight:"89px",paddingTop:"3%", margin:"0 2%",textAlign:"center"}} variant="contained" disableElevation>Button</Button>
            </div>
            <div className='innerCard' >
            <h4 style={{textAlign:"center",color:"gray",fontSize:"15px"}}>PRO</h4>
            <h2 style={{textAlign:"center"}}>$49/month</h2>
            <hr style={{color:"gray"}}/>
            <ul>✔️ Single User</ul>
            <ul>✔️ 50GB Storage</ul>
            <ul>✔️ Unlimited Public Projects</ul>
            <ul>✔️ Community Access</ul>
            <ul>✔️ Unlimited Private Projects</ul>
            <ul>✔️ Dedicated Phone Support</ul>
            <ul>✔️ Free subdomain</ul>
            <ul>✔️ Monthly Status Reports</ul>
            <Button  style={{paddingLeft:"50px",paddingRight:"89px", margin:"0 2%",textAlign:"center"}} variant="contained" disableElevation>Button</Button> 
            </div>
        </div>
        </>
    )
}
export default PriceCard