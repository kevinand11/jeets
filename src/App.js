import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Draggable from 'react-draggable'
import AboutImg from './About.png'
import "./App.css"
import BuyImg from './Buy.png'
import Jeet from './Jeet.png'
import PresaleImg from './Presale.png'
import RoadmapImg from './Roadmap.png'
import SocialsImg from './Socials.png'
import WhitepaperImg from './Whitepaper.png'
import Divider from './divider.png'
import fullscreen from './fullscreen.png'
import Logo from './logo.png'
import TelebotsImg from './robo2.png'
import us from './us.png'
import world from './world.png'

import AboutUs from './components/AboutUs'
import Buy from './components/Buy'
import Presale from './components/Presale'
import RoadMap from './components/RoadMap'
import Socials from './components/Socials'
import Whitepaper from './components/Whitepaper'

function App() {
  const w = window.innerWidth > 500 ? 0.5 : 0.2
  const theWidth = parseInt(window.innerWidth) - parseInt(window.innerWidth * w);

  const [pageWidth, setPageWidth] = useState(theWidth)

  window.addEventListener('resize', function () {
    let theWidth = parseInt(window.innerWidth) - parseInt(window.innerWidth * w);
    setPageWidth(theWidth);
    console.log(theWidth)
  });

  const [tab, setTab] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

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

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  useEffect(()=>{
    setUserTime(hours+":"+minutes);
    //console.log(userTime)
    setUsaTime(chicagoHours + ":" + chicagoMinutes);
  },[minutes, hours, chicagoHours, chicagoMinutes])

  setInterval(function () {
    if (document.getElementById("di1") != null) {

      let element1 = document.getElementById("di1");

      let element2 = document.getElementById("di2");

      let element3 = document.getElementById("di3");

      let element4 = document.getElementById("di4");

      let element5 = document.getElementById("di5");

      let element6 = document.getElementById("di6");

      let element7 = document.getElementById("di7");

      let element8 = document.getElementById("di8");

      // -> removing the class
      element1.classList.remove("div1");

      element2.classList.remove("div2");

      element3.classList.remove("div3");

      element4.classList.remove("div4");

      element5.classList.remove("div5");

      element6.classList.remove("div6");

      element7.classList.remove("div7");

      element8.classList.remove("div8");

      void element1.offsetWidth;

      // -> and re-adding the class
      element1.classList.add("div1");
      element2.classList.add("div2");
      element3.classList.add("div3");
      element4.classList.add("div4");
      element5.classList.add("div5");
      element6.classList.add("div6");
      element7.classList.add("div7");
      element8.classList.add("div8");
    }
  }, 4200);

  if (isLoading) return (
    <div style={{ width: "260px", position: "absolute", top: 250, left: "50%", transform: "translate(-50%, 0)" }}>
      <div style={{ height: 100, width: "100px", marginLeft: "auto", marginRight: "auto" }}>
        <img src={Jeet} style={{ width: "90px" }} alt="" />
      </div>

      <div id="logo" style={{ width: "230px", height: "80px", borderWidth: "10px", borderStyle: "solid", borderColor: "green", padding: "5px" }}>
        <div id="di1" className="div1" ></div>
        <div id="di2" className="div2" ></div>
        <div id="di3" className="div3" ></div>
        <div id="di4" className="div4" ></div>
        <div id="di5" className="div5" ></div>
        <div id="di6" className="div6" ></div>
        <div id="di7" className="div7" ></div>
        <div id="di8" className="div8" ></div>
      </div>
    </div>
  )

  const tabs = [
    { title: 'About us', longTitle: 'About us', component: AboutUs, img: AboutImg, imgW: 60 },
    { title: 'Presale', longTitle: 'Presale', component: Presale, img: PresaleImg, imgW: 60 },
    { title: 'Whitepaper', longTitle: 'Whitepaper', component: Whitepaper, img: WhitepaperImg, imgW: 50 },
    { title: 'Roadmap', longTitle: 'Roadmap', component: RoadMap, img: RoadmapImg, imgW: 50 },
    { title: 'Socials', longTitle: 'Socials', component: Socials, img: SocialsImg, imgW: 50 },
    { title: 'Buy', longTitle: 'How to buy', component: Buy, img: BuyImg, imgW: 50 },
    { title: 'Telebots', longTitle: 'Telebots', link: 'https://www.linktr.ee/TelebotsbyJeets', img: TelebotsImg, imgW: 75 },
  ]

  const chunks = sliceIntoChunks(tabs, 2)

  const activeTab = tabs.find((t) => t.title === tab)

  const openTab = (tab) => {
    if (tab.component) return setTab(tab.title)
    else window.open(tab.link, '_blank')
  }

  return (
    <>
      <Navbar style={navBarStyle} className="">
        <Container >
        <Navbar.Brand href="#home" style={whiteColor}>
          <img src={Logo} style={{ height: 25, width: 30, padding: 0 }} alt="" />
          <span style={{ paddingLeft: "0", marginTop: 30, fontFamily: 'charcoal', fontStyle: "normal", fontWeight: 800, fontSize: "17px", lineHeight: "16px", color: "#000" }}>Jeets</span>
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
            {pageWidth > 400 &&
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

      <Container>
        <div style={{ position: "fixed", top: 120, left: "50%", transform: "translateX(-50%)" }}>
          {
            activeTab &&
            <Draggable handle="strong">
              <div className="box no-cursor" style={{ display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "50vh", }}>
                <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>
                  <div style={{ float: "left", width: 20 }}>
                    <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: 18, fontWeight: "bold" }} onClick={() => setTab(null)}>x</a>
                  </div>
                    <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal", color: "#420000" }}>{activeTab.title}</div>
                </div>

                <div style={{ height: 10, backgroundColor: "#000" }}></div>

                <activeTab.component />
              </div>
            </Draggable>
          }
        </div>

        {chunks.map((chunk) => (
          <Row style={{ marginTop: "32px" }}>
            {chunk.map((item) => (
              <div onClick={() => openTab(item)} style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30, cursor: 'pointer' }}>
                <Row>
                  <img src={item.img} style={{ marginLeft: "auto", marginRight: "auto", width: item.imgW, marginBottom: 8 }} alt="" />
                </Row>
                <Row>
                  <span
                    style={{ marginLeft: "auto", marginRight: "auto", whiteSpace: 'nowrap', textDecoration: "none", color: "#FFFFFF", fontFamily: 'Charcoal', textAlign: 'center' }}
                    dangerouslySetInnerHTML={{ __html: item.longTitle }}
                  >
                  </span>
                </Row>
              </div>
            ))}
          </Row>
        ))}
      </Container>
    </>
  );
}

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export default App;
