import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Draggable from 'react-draggable'
import "./App.css"
import AboutImg from './assets/images/About.png'
import BuyImg from './assets/images/Buy.png'
import PresaleImg from './assets/images/Presale.png'
import RoadmapImg from './assets/images/Roadmap.png'
import SocialsImg from './assets/images/Socials.png'
import WhitepaperImg from './assets/images/Whitepaper.png'
import TelebotsImg from './assets/images/robo2.png'

import AboutUs from './components/AboutUs'
import Buy from './components/Buy'
import Loading from './components/Loading'
import NavBar from './components/Navbar'
import Presale from './components/Presale'
import Presale2 from './components/Presale2'
import RoadMap from './components/RoadMap'
import Socials from './components/Socials'
import Whitepaper from './components/Whitepaper'

function App() {
  const w = 1 - (window.innerWidth > 500 ? 0.5 : 0.1)
  const theWidth = parseInt(window.innerWidth * w);

  const [pageWidth, setPageWidth] = useState(theWidth)

  window.addEventListener('resize', function () {
    let theWidth = parseInt(window.innerWidth * w);
    setPageWidth(theWidth);
  });

  const [tab, setTab] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) return <Loading />

  const tabs = [
    { title: 'About us', longTitle: 'About us', component: AboutUs, img: AboutImg, imgW: 60 },
    { title: 'Telebots', longTitle: 'Telebots', link: 'https://www.linktr.ee/TelebotsbyJeets', img: TelebotsImg, imgW: 60 },
    { title: 'Whitepaper', longTitle: 'Whitepaper', component: Whitepaper, img: WhitepaperImg, imgW: 50 },
    { title: 'Roadmap', longTitle: 'Roadmap', component: RoadMap, img: RoadmapImg, imgW: 50 },
    { title: 'Socials', longTitle: 'Socials', component: Socials, img: SocialsImg, imgW: 50 },
    { title: 'Buy', longTitle: 'How to buy', component: Buy, img: BuyImg, imgW: 50 },
    { title: 'Presale', longTitle: 'Presale', component: Presale, img: PresaleImg, imgW: 60 },
    { title: 'Presale 2', longTitle: 'Presale 2', component: Presale2, img: PresaleImg, imgW: 60 },
  ]

  const chunks = sliceIntoChunks(tabs, 2)

  const activeTab = tabs.find((t) => t.title === tab)

  const openTab = (tab) => {
    if (tab.component) return setTab(tab.title)
    else window.open(tab.link, '_blank')
  }

  return (
    <>
      <NavBar pageWidth={pageWidth} />

      <Container>
        <div style={{ position: "fixed", top: 120, left: "50%", transform: "translateX(-50%)" }}>
          {
            activeTab &&
            <Draggable handle="strong">
              <div className="box no-cursor" style={{ display: 'flex', flexDirection: 'column', width: pageWidth, maxWidth: pageWidth, height: "50vh", position: 'relative' }}>
                <div style={{ backgroundColor: "#FFDD00", padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                    <a style={{ textDecoration: "none", color: "#000", fontSize: 24, fontWeight: "bold" }} onClick={() => setTab(null)}>&times;</a>
                    <div style={{ textAlign: "center", fontWeight: "bold", fontFamily: "charcoal", color: "#420000" }}>{activeTab.title}</div>
                    <span></span>
                </div>

                <div style={{ height: 10, backgroundColor: "#000" }}></div>

                <div style={{ backgroundColor: "#FFDD00", overflow: 'auto', height: "100%" }}>
                  <div className="p-4 p-lg-5" style={{ whiteSpace: 'pre-wrap', height: "100%", fontFamily: "Poly" }}>
                    <activeTab.component close={() => setTab(null)} />
                  </div>
                </div>
              </div>
            </Draggable>
          }
        </div>

        {chunks.map((chunk) => (
          <Row style={{ marginTop: "32px" }}>
            {chunk.map((item) => (
              <div onClick={() => openTab(item)} style={{ width: 100, borderColor: "#fff", borderWidth: 0, borderStyle: "solid", float: "left", marginRight: 30, cursor: 'pointer' }}>
                <Row>
                  <img src={item.img} style={{ marginLeft: "auto", marginRight: "auto", height: 50, width: 'auto', marginBottom: 8 }} alt="" />
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
