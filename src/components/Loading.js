import Jeet from '../assets/images/Jeet.png'

export default function Loading (props) {
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

	return <div style={{ width: "260px", position: "absolute", top: 250, left: "50%", transform: "translate(-50%, 0)" }}>
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
}