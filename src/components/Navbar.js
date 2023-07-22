import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import { useEffect, useState } from 'react'

import Divider from '../assets/images/divider.png'
import fullscreen from '../assets/images/fullscreen.png'
import Logo from '../assets/images/logo.png'
import us from '../assets/images/us.png'
import world from '../assets/images/world.png'

export default function NavBar (props) {
	const navBarStyle = { backgroundColor: '#DDDDDD', color: '#fff' };
  	const whiteColor = { color: "#fff" }

	const today = new Date();
	// current datetime string in America/Chicago timezone
	const chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
	// create new Date object
	const date_chicago = new Date(chicago_datetime_str);

	const [hours,setHours] = useState(today.getHours()<10? '0'+today.getHours(): today.getHours());
	const [minutes,setMinutes] = useState(today.getMinutes()<10? '0'+today.getMinutes(): today.getMinutes());
	const [chicagoHours,setChicagoHours] = useState(date_chicago.getHours()<10? '0'+date_chicago.getHours(): date_chicago.getHours());
	const [chicagoMinutes,setChicagoMinutes] = useState(date_chicago.getMinutes()<10? '0'+date_chicago.getMinutes(): date_chicago.getMinutes());
	const [userTime, setUserTime] = useState(hours + ":" + minutes);
	const [usaTime, setUsaTime] = useState(chicagoHours + ":" + chicagoMinutes);

  	useEffect(() => {
		setInterval(() => {
			var today = new Date();
			// current datetime string in America/Chicago timezone
			let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
			// create new Date object
			let date_chicago = new Date(chicago_datetime_str);

			if(today.getSeconds() === 0){
				setHours(today.getHours()<10? '0'+today.getHours() : today.getHours());
				setMinutes(today.getMinutes()<10? '0'+today.getMinutes() : today.getMinutes());

				setChicagoHours(date_chicago.getHours()<10? '0'+date_chicago.getHours():date_chicago.getHours());
				setChicagoMinutes(date_chicago.getMinutes()<10? '0'+date_chicago.getMinutes():date_chicago.getMinutes());
			}
		}, 1000);
	}, [])


	useEffect(()=>{
		setUserTime(hours+":"+minutes);
		setUsaTime(chicagoHours + ":" + chicagoMinutes);
	},[minutes, hours, chicagoHours, chicagoMinutes])


	return  <Navbar style={navBarStyle} className="">
        <Container >
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2" style={whiteColor}>
          <img src={Logo} style={{ height: 20, padding: 0 }} alt="" />
          <span style={{ fontFamily: 'charcoal', fontStyle: "normal", fontWeight: 800, fontSize: "17px", lineHeight: "17px", color: "#000" }}>Jeets</span>
        </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img src={world} style={{ marginLeft: 10, marginRight: 5 }} alt="" />
              <span style={{ fontSize: 13 }}>Your Time: {userTime}</span>
            </Navbar.Text>
            <img src={Divider} style={{ marginLeft: 10, marginRight: 10 }} alt="" />
            <Navbar.Text>
              <img src={us} style={{ marginLeft: 5, marginRight: 5 }} alt="" />
              <span style={{ fontSize: 13 }}>USA: {usaTime}</span>
            </Navbar.Text>
            {props.pageWidth > 400 &&
              <>
                <img src={Divider} style={{ marginLeft: 10, marginRight: 10 }} alt="" />
                <Navbar.Text>
                  <img src={fullscreen} style={{ marginLeft: 10, marginRight: 10 }} alt="" />
                  Full Screen
                </Navbar.Text>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
}