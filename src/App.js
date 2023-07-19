import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import Draggable from 'react-draggable';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutImg from './About.png';
import PresaleImg from './Presale.png';
import WhitepaperImg from './Whitepaper.png';
import RoadmapImg from './Roadmap.png';
import SocialsImg from './Socials.png';
import BuyImg from './Buy.png';
import Logo from './logo.png';
import Divider from './divider.png';
import us from './us.png';
import world from './world.png';
import fullscreen from './fullscreen.png';
import Jeet from './Jeet.png';
import "./App.css";

function App() {

  var w = 20 / 100;

  let theWidth = parseInt(window.innerWidth) - parseInt(window.innerWidth * w);

  if (window.innerWidth > 500) {

    w = 50 / 100;

    theWidth = parseInt(window.innerWidth) - parseInt(window.innerWidth * w);

  }

  const [pageWidth, setPageWidth] = useState(theWidth)

  window.addEventListener('resize', function () {
    let theWidth = parseInt(window.innerWidth) - parseInt(window.innerWidth * w);
    setPageWidth(theWidth);
    console.log(theWidth)
  });


  const [aboutUs, setAboutUs] = useState(false);

  const [Presale, setPresale] = useState(false);

  const [Whitepaper, setWhitepaper] = useState(false);

  const [Roadmap, setRoadmap] = useState(false);

  const [Socials, setSocials] = useState(false);

  const [Buy, setBuy] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const navBarStyle = { backgroundColor: '#DDDDDD', color: '#fff' };

  const whiteColor = { color: "#fff" }

  var today = new Date();

   // current datetime string in America/Chicago timezone
   let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

   // create new Date object
   let date_chicago = new Date(chicago_datetime_str);

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

      if(today.getSeconds()==0){

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
  },[minutes])

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

  const closeOtherWindows = (current) => {
    
    let modules = ['aboutUs', 'Presale'];
    for (var i = 0; i < modules.length; i++) {
      if (modules[i] == current) {
        if (current == "aboutUs") {
          setAboutUs(true);
        }
        if (current == "Presale") {
          setPresale(true);
        }
        if (current == "Whitepaper") {
          setWhitepaper(true);
        }
        if (current == "Roadmap") {
          setRoadmap(true);
        }
        if (current == "Socials") {
          setSocials(true);
        }
        if (current == "Buy") {
          setBuy(true);
        }
      }

      if (current != "aboutUs") {
        setAboutUs(false);
      }
      if (current != "Presale") {
        setPresale(false);
      }
      if (current != "Whitepaper") {
        setWhitepaper(false);
      }
      if (current != "Roadmap") {
        setRoadmap(false);
      }
      if (current != "Socials") {
        setSocials(false);
      }
      if (current != "Buy") {
        setBuy(false);
      }
    }

  }

  return (
    <>
      {isLoading &&
        <div style={{ width: "260px", position: "absolute", top: 250, left: "50%", transform: "translate(-50%, 0)" }}>
          <div style={{ height: 100, width: "100px", marginLeft: "auto", marginRight: "auto" }}>
            <img src={Jeet} style={{ width: "90px" }} />
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
      }
      {!isLoading &&
        <>
          <Navbar style={navBarStyle} className="">
            <Container >
              <Navbar.Brand href="#home" style={whiteColor}><img src={Logo} style={{ height: 25, width: 30, padding: 0 }} /><span style={{ paddingLeft: "0", marginTop: 30, fontFamily: 'charcoal', fontStyle: "normal", fontWeight: 800, fontSize: "17px", lineHeight: "16px", color: "#000" }}>Jeets</span></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <img src={world} style={{ marginLeft: 10, marginRight: 5 }} />
                  <span style={{ fontSize: 13 }}>Your Time: {userTime}</span>
                </Navbar.Text>
                <img src={Divider} style={{ marginLeft: 10, marginRight: 10 }} />
                <Navbar.Text>
                  <img src={us} style={{ marginLeft: 5, marginRight: 5 }} />
                  <span style={{ fontSize: 13 }}>USA: {usaTime}</span>
                </Navbar.Text>
                {pageWidth > 400 &&
                  <>
                    <img src={Divider} style={{ marginLeft: 10, marginRight: 10 }} />
                    <Navbar.Text>
                      <img src={fullscreen} style={{ marginLeft: 10, marginRight: 10 }} />
                      Full Screen
                    </Navbar.Text>
                  </>
                }
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container>
            <div style={{ position: "absolute", top: 120, left: "50%", transform: "translate(-50%, 0)" }}>

              {
                aboutUs == true &&

                <Draggable handle="strong">
                  <div className="box no-cursor" style={{ position: "absolute", display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "50vh", }}>


                    <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>

                      <div style={{ float: "left", width: 20 }}>
                        <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: 18, fontWeight: "bold" }} onClick={() => { setAboutUs(false); }}>x</a>
                      </div>
                      <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal", color: "#420000" }}>About us</div>

                    </div>


                    <div style={{ height: 10, backgroundColor: "#000" }}></div>

                    <div style={{ overflow: 'scroll', height: "100%" }}>
                      <div style={{ backgroundColor: "#FFDD00", whiteSpace: 'pre-wrap', padding: 50 }}>
                        <p style={{ fontFamily: "Poly" }}>Lol😂 About Us? More like “About You”. Everyone’s been a JEET at some Point.</p>
                        <p style={{ fontFamily: "Poly" }}>Sold too Early, Bought at the Top, Being weird in the TG chats and Fudding your Bags. </p>
                        <p style={{ fontFamily: "Poly" }}>Hop on the $JEETS train, We can Fix you. You have just one Job, Buy Early, HODL and Lambo!</p>

                        <p style={{ fontFamily: "Poly" }}><b>Contract Address:</b><br />
                          (Not LIVE Yet)</p>
                      </div>
                    </div>
                  </div>
                </Draggable>
              }

              <Draggable handle="strong">
                <div className="box no-cursor" style={{ display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: 10, zIndex: 2 }}>

                </div>
              </Draggable>

              {
                Presale == true &&
                <Draggable handle="strong">

                  <div className="box no-cursor" style={{ position: "absolute", display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "50vh", }}>

                    <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>
                      <div style={{ float: "left", width: 20 }}>
                        <a href="#" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }} onClick={() => { setPresale(false); }}>x</a>
                      </div>
                      <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal" }}>Presale</div>
                    </div>

                    <div style={{ height: 10, backgroundColor: "#000" }}></div>

                    <div style={{ overflow: 'scroll', height: "100%" }}>
                      <div style={{ backgroundColor: "#FFDD00", whiteSpace: 'pre-wrap', padding: 50 }}>
                        <p style={{ fontFamily: "Poly" }}>Whitelisted PreSale on PinkSale (Coming Soon) </p>
                      </div>
                    </div>

                  </div>

                </Draggable>
              }

              {
                Whitepaper == true &&
                <Draggable handle="strong">
                  <div className="box no-cursor" style={{ position: "absolute", display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "50vh", zIndex: 2 }}>

                    <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>
                      <div style={{ float: "left", width: 20 }}>
                        <a href="#" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }} onClick={() => { setWhitepaper(false) }}>x</a>
                      </div>
                      <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal" }}>Whitepaper</div>
                    </div>

                    <div style={{ height: 10, backgroundColor: "#000" }}></div>

                    <div style={{ overflow: 'scroll', height: "100%" }}>

                      <div style={{ backgroundColor: "#FFDD00", whiteSpace: 'pre-wrap', padding: 50 }}>

                        <p style={{ fontFamily: "Poly" }}>The $JEETS Contract is coded to Award Holders on a Lottery Basis! You stand a chance to win big by NOT being a Fucking Buzz kill and selling too early.</p>

                        <p style={{ fontFamily: "Poly" }}>Asides that, We’ve got this cool thingy planned where we Hold Raffle Draws for NFTs, Tokens and what not! </p>

                        <p style={{ fontFamily: "Poly" }}>And most importantly, We plan to Enjoy the Ride to the Moon! </p>

                      </div>
                    </div>

                  </div>
                </Draggable>
              }


              {
                Roadmap == true &&
                <Draggable handle="strong">
                  <div className="box no-cursor" style={{ position: "absolute", display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "60vh", zIndex: 2 }}>

                    <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>
                      <div style={{ float: "left", width: 20 }}>
                        <a href="#" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }} onClick={() => { setRoadmap(false) }}>x</a>
                      </div>
                      <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal" }}>Roadmap</div>
                    </div>

                    <div style={{ height: 10, backgroundColor: "#000" }}></div>

                    <div style={{ overflow: 'scroll', height: "100%" }}>

                      <div style={{ backgroundColor: "#FFDD00", whiteSpace: 'pre-wrap', padding: 50 }}>

                        <p style={{ fontFamily: "Poly" }}>ATH 1</p>
                        <ul>
                        <li style={{ fontFamily: "Poly" }}>PreSale</li>

                          <li style={{ fontFamily: "Poly" }}>$JEETS Token Launch</li>

                          <li style={{ fontFamily: "Poly" }}>CoinGecko/CoinMarketcap Listings</li>

                          <li style={{ fontFamily: "Poly" }}>1,000+ Holders</li>
                        </ul>

                        <p style={{ fontFamily: "Poly" }}>
                          ATH 2
                        </p>

                        <ul>
                          <li style={{ fontFamily: "Poly" }}>Community Partnerships</li>
                          <li style={{ fontFamily: "Poly" }}>10,000+holders</li>
                          <li style={{ fontFamily: "Poly" }}>Massive raffle draw Promotion</li>
                        </ul>

                        <p style={{ fontFamily: "Poly" }}>
                          ATH 3
                        </p>
                        <ul>
                          <li style={{ fontFamily: "Poly" }}>100,000+ holders</li>

                          <li style={{ fontFamily: "Poly" }}>$JEETS Dominating Hard!</li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </Draggable>
              }

              {
                Socials == true &&
                <Draggable handle="strong">
                  <div className="box no-cursor" style={{ position: "absolute", display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "50vh", zIndex: 2 }}>

                    <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>
                      <div style={{ float: "left", width: 20 }}>
                        <a href="#" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }} onClick={() => { setSocials(false) }}>x</a>
                      </div>
                      <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal" }}>Socials</div>
                    </div>

                    <div style={{ height: 10, backgroundColor: "#000" }}></div>

                    <div style={{ overflow: 'scroll', height: "100%" }}>
                      <div style={{ backgroundColor: "#FFDD00", whiteSpace: 'pre-wrap', padding: 50 }}>

                        <p style={{ fontFamily: "Poly" }}>Twitter: <a href="https://twitter.com/jeets4l" target="_blank">@jeets4l</a></p>

                        <p style={{ fontFamily: "Poly" }}>Telegram: <a href="https://t.me/jeets4l" target="_blank">@jeets4l</a></p>

                      </div>
                    </div>
                  </div>
                </Draggable>
              }

              {
                Buy == true &&
                <Draggable handle="strong">
                  <div className="box no-cursor" style={{ position: "absolute", display: 'flex', flexDirection: 'column', width: `${pageWidth}px`, height: "70vh", zIndex: 2 }}>

                    <div style={{ backgroundColor: "#FFDD00", padding: 5, textAlign: "center" }}>
                      <div style={{ float: "left", width: 20 }}>
                        <a href="#" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }} onClick={() => { setBuy(false) }}>x</a>
                      </div>
                      <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal" }}>Buy</div>
                    </div>

                    <div style={{ height: 10, backgroundColor: "#000" }}></div>

                    <div style={{ overflow: 'scroll', height: "100%" }}>

                      <div style={{ backgroundColor: "#FFDD00", whiteSpace: 'pre-wrap', padding: 50 }}>

                        <p style={{ fontFamily: "Poly" }}><b>How to Buy After $JEETS Launch! (Not Launched Yet)</b></p>
                        <ol>
                          <li style={{fontFamily:"Poly", marginBottom:20}}><b>Set up your wallet</b><br />Create a Metamask/Trust Wallet account and top up your ETH balance on the Ethereum Chain.<br /></li>
                          <li style={{fontFamily:"Poly", marginBottom:20}}><b>Go to UniSwap</b> (<a href="https://app.uniswap.org" target="_blank">https://app.uniswap.com</a>) and connect your wallet safely.<br /></li>
                          <li style={{fontFamily:"Poly", marginBottom:20}}>
                            <b>Set Slippage</b><br />
                            Adjust your Slippage to 5-6%!<br />
                            *Buy Sell Tax will be used for the Lottery Pool, Developments, Marketing etc!
                            <br />
                          </li>

                          <li style={{fontFamily:"Poly", marginBottom:20}}>
                            <b>Copy $JEETS Contract</b><br />
                            Copy the $JEETS Contract address and Paste in the requested field
                            <br />
                          </li>

                          <li style={{fontFamily:"Poly", marginBottom:20}}>
                            <b>Swap for $JEETS Tokens</b><br />
                            Swap your ETH for $JEETS Tokens and prepare yourself for the Crazy Ride!
                            <br />
                          </li>

                        </ol>

                        <span style={{fontFamily:"Poly"}}>Remember… Don’t Jeet your Bags!</span>
                        

                      </div>
                    </div>
                  </div>
                </Draggable>
                                      }
                                    </div>

            <Row style={{ marginTop: "50px" }}>

              <div style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30 }}>
                                        <Row>
                  <img src={AboutImg} style={{ marginLeft: "auto", marginRight: "auto", width: 60 }} />
                </Row>
                <Row>
                  <a onClick={() => { setAboutUs(true); closeOtherWindows("aboutUs"); }} href='#' style={{ marginLeft: "auto", marginRight: "auto", textDecoration: "none", color: "#FFFFFF", width: 120, fontFamily: 'Charcoal' }} >
                    About us
                  </a>
                </Row>
              </div>

              <div style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30 }}>
                <Row>
                  <img src={PresaleImg} style={{ marginLeft: "auto", marginRight: "auto", width: 60 }} />
                </Row>
                <Row>
                  <a onClick={() => { setPresale(true); closeOtherWindows("Presale"); }} href='#' style={{ marginLeft: "auto", marginRight: "auto", textDecoration: "none", color: "#FFFFFF", width: 80, fontFamily: 'Charcoal' }} >
                    Presale
                  </a>
                </Row>
              </div>

            </Row>

            <Row style={{ marginTop: "50px" }}>

              <div style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30 }}>
                <Row>
                  <img src={WhitepaperImg} style={{ marginLeft: "auto", marginRight: "auto", width: 50 }} />
                </Row>
                <Row>
                  <a onClick={() => { setWhitepaper(true); closeOtherWindows("Whitepaper"); }} href='#' style={{ marginLeft: "auto", marginRight: "auto", textDecoration: "none", color: "#FFFFFF", width: 130, fontFamily: 'Charcoal' }} >
                    Whitepaper
                  </a>
                </Row>
              </div>

              <div style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30 }}>
                <Row>
                  <img src={RoadmapImg} style={{ marginLeft: "auto", marginRight: "auto", width: 50 }} />
                </Row>
                <Row>
                  <a onClick={() => { setRoadmap(true); closeOtherWindows("Roadmap"); }} href='#' style={{ marginLeft: "auto", marginRight: "auto", textDecoration: "none", color: "#FFFFFF", width: 80, fontFamily: 'Charcoal' }} >
                    Roadmap
                  </a>
                </Row>
              </div>

            </Row>

            <Row style={{ marginTop: "50px" }}>

              <div style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30 }}>
                <Row>
                  <img src={SocialsImg} style={{ marginLeft: "auto", marginRight: "auto", width: 50 }} />
                </Row>
                <Row>
                  <a onClick={() => { setSocials(true); closeOtherWindows("Socials"); }} href='#' style={{ marginLeft: "auto", marginRight: "auto", textDecoration: "none", color: "#FFFFFF", width: 80, fontFamily: 'Charcoal' }} >
                    Socials
                  </a>
                </Row>
              </div>

              <div style={{ width: 120, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30 }}>
                <Row>
                  <img src={BuyImg} style={{ marginLeft: "auto", marginRight: "auto", width: 50 }} />
                </Row>
                <Row>
                  <a onClick={() => { setBuy(true); closeOtherWindows("Buy"); }} href='#' style={{ marginLeft: "auto", marginRight: "auto", textDecoration: "none", color: "#FFFFFF", width: 150, fontFamily: 'Charcoal' }} >
                    How to buy
                  </a>
                </Row>
              </div>

            </Row>



          </Container>
        </>
      }
    </>
  );
}

export default App;
