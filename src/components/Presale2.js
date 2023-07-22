import CryptoIcon from '../assets/images/crypto.svg'
import InfoIcon from '../assets/images/info.svg'
import Logo from '../assets/images/logo.png'

export default function Presale (props) {
	return <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', minHeight: '100%', backgroundColor: 'white', padding: 32, display: 'flex', flexDirection: 'column', fontFamily: 'Charcoal', alignItems: 'center', fontSize: 14 }}>

		<div style={{ marginBottom: 32, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
			<a style={{ textDecoration: "none", color: "#000", fontSize: 24, fontWeight: "bold" }} onClick={props.close}>&times;</a>
			<h4 style={{ marginBottom: 0 }}>PRESALE</h4>
			<span></span>
		</div>
		<div style={{ marginBottom: 24, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
			<div style={{ backgroundColor: '#C7CED3', height: 1, width: '100%' }}></div>
			<span style={{ whiteSpace: 'nowrap' }}>22D 17H 20M 33S</span>
			<div style={{ backgroundColor: '#C7CED3', height: 1, width: '100%' }}></div>
		</div>
		<div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', marginBottom: 24 }}>
			<div style={{ width: '100%' }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, fontSize: 12 }}>
					<span>YOU PAY</span>
					<span style={{ color: '#F26133' }}>MAX</span>
				</div>
				<div style={{ border: '1px solid #727B83', padding: 16, background: '#F9F4F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
					<input type="number" min="0" style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 18 }} placeholder="0" />
					<img src={CryptoIcon} style={{ width: 28, height: 28 }} alt="" />
				</div>
			</div>
			<div style={{ width: '100%' }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, fontSize: 12 }}>
					<span>AMOUNT OF TOKENS</span>
					<span style={{ color: '#F26133' }}></span>
				</div>
				<div style={{ border: '1px solid #727B83', padding: 16, background: '#F9F4F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
					<input type="number" min="0" style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 18 }} placeholder="0" />
					<img src={Logo} style={{ width: 28, height: 28 }} alt="" />
				</div>
			</div>
		</div>
		<div style={{ marginBottom: 24, width: '100%', display: 'flex', alignItems: 'center', gap: 16, border: '1px solid rgba(38, 38, 38, 0.33)', background: 'white', padding: 16 }}>
			<input type="range" style={{ width: '100%', border: '1px solid #C7CED3', borderRadius: 8 }} placeholder="0.00" />
			<span>6ETH</span>
		</div>
		<button style={{ backgroundColor: 'black', color: '#FFE600', padding: 16, width: '100%', border: '1px solid black', marginBottom: 16 }}>
			BUY
		</button>
		<button style={{ backgroundColor: 'transparent', color: 'black', padding: 16, width: '100%', border: '1px solid black', marginBottom: 16 }}>
			CONNECT WALLET
		</button>
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontSize: 12 }}>
			<img src={InfoIcon} style={{ width: '1.2em', height: '1.2em' }} alt="" />
			<span style={{ color: '#535353' }}>How To Buy</span>
		</div>
	</div>
}