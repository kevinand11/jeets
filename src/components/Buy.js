import { ContractAddress } from '../utils'

export default function Buy (props) {
	return <>
		<p style={{ fontFamily: "Poly" }}><b>How to Buy After $JEETS Launch!</b></p>
		<ol>
			<li style={{fontFamily:"Poly", marginBottom:20}}><b>Set up your wallet</b><br />Create a Metamask/Trust Wallet account and top up your ETH balance on the Ethereum Chain.<br /></li>
			<li style={{fontFamily:"Poly", marginBottom:20}}><b>Go to UniSwap</b> (<a href="https://app.uniswap.org" target="_blank" rel="noreferrer">https://app.uniswap.com</a>) and connect your wallet safely.<br /></li>
			<li style={{fontFamily:"Poly", marginBottom:20}}>
			<b>Set Slippage</b><br />
			Adjust your Slippage to 5-6%!<br />
			*Buy Sell Tax will be used for the Lottery Pool, Developments, Marketing etc!
			<br />
			</li>

			<li style={{fontFamily:"Poly", marginBottom:20}}>
			<b>Copy $JEETS Contract</b><br />
			Copy the $JEETS Contract address ({ ContractAddress }) and Paste in the requested field
			<br />
			</li>

			<li style={{fontFamily:"Poly", marginBottom:20}}>
			<b>Swap for $JEETS Tokens</b><br />
			Swap your ETH for $JEETS Tokens and prepare yourself for the Crazy Ride!
			<br />
			</li>

		</ol>

		<span style={{fontFamily:"Poly"}}>Remember… Don’t Jeet your Bags!</span>
	</>
}