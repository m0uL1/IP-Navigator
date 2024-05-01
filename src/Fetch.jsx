import React, { useState } from "react";
import arrow from '/icon-arrow.svg';
import './Fetch.css';


function FetchAPI(){
    const url="https://geo.ipify.org/api/v2/country?apiKey=at_brXgWS1UDw9v5NWKbiyH3j9nDexYb&ipAddress=";
    let c;
    
    const [data, setData] = useState()  
    const apiGet = async () => {
        try {
            c = document.getElementById("ip").value; 
            const response = await fetch(`${url}${c}`);
            const json = await response.json();
            setData(`${json.location.region}${json.location.timezone}`);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const [reg,setReg] = useState()
    const apiReg = async () => {
        try {
            c = document.getElementById("ip").value; 
            const response = await fetch(`${url}${c}`);
            const region = await response.json();
            setReg(region.ip);
        } catch (error) {
            console.error("Error fetching region:", error);
        }
    };
    const [isp,setIsp] = useState()
    const apiIsp = async () => {
        try {
            c = document.getElementById("ip").value; 
            const response = await fetch(`${url}${c}`);
            const ip = await response.json();
            setIsp(ip.location.country);
        } catch (error) {
            console.error("Error fetching ISP:", error);
        }
    };
    const [pp,setPp] = useState()
    const apiPp = async () => {
        try {
            c = document.getElementById("ip").value; 
            const response = await fetch(`${url}${c}`);
            const Pp = await response.json();
            setPp(Pp.isp);
        } catch (error) {
            console.error("Error fetching ISP:", error);
        }
    };
    return (
        <div id="main">
            <div className="ip">
            <input type="text" id="ip" placeholder="Search for any IP address or domain"></input>
            <button  id="search" onClick={() => {
                apiIsp();
                apiReg();
                apiGet();
                apiPp();
            }}><img src={arrow} ></img></button>
            </div>
            <div id="disp">
                <div id="first"><p>IP ADDRESS</p><h2>{reg}</h2></div>
                <div id="second"><p>LOCATION</p><h2>{isp}</h2></div>
                <div id="third"><p>TIMEZONE</p><h2>{data}</h2></div>
                <div id="forth"><p>ISP</p><h2>{pp}</h2></div>
            </div>   
        </div>
    );
}
export default FetchAPI;