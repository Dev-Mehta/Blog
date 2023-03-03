import addToMailChimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";
export default class MailChimpForm extends React.Component{
	constructor() {
		super()
		this.state = {email:"", result: {"msg":""}}
	}


	_handleSubmit = async (e) => {
		e.preventDefault();
		if(this.state.email.trim() === ""){
			
		}
		const result = await addToMailChimp(this.state.email);
		this.setState({result:result})
	}
	handleChange = event => {
		this.setState({email:event.target.value})
	}
	render() {
		return this.state.result === "success" ? (
			<div>
				<blockquote>
					Thanks for subscribing to our newsletter.
				</blockquote>
			</div>
		) ? this.state.result === "error" : (
			<form onSubmit={this._handleSubmit}>
				<br />
				<hr />
				<h3>Subscribe to our newsletter</h3>
				<p>Stay up-to-date and join our newsletter to recieve the latest updates. 100% spam free.</p>
				<input 
				id="outlined-email-input"
				label="Email"
				type="email"
				placeholder="Enter your email to continue..."
				autoComplete="email"
				pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
				style={{maxWidth: "600px", width: "100%", height: "40px", background: "#0f0f0f", outline: "0", border: "0", borderWidth: 1, borderColor: "#50fa7b", borderStyle: "solid", color: 'white', fontFamily: 'inherit',padding:"4px 9px"}}
				onChange={this.handleChange}
				required=""
				/>
				<p>
					{this.state.error.message}
				</p>
				
				<p>&nbsp;</p>
				<button 
				type="submit"
				label="submit"
				
				style={{width:"auto",height: "40px", background: "#50fa7b", outline: "0", border: "0", borderWidth: 1, borderColor: "#50fa7b", borderStyle: "solid", color: 'black', fontFamily: 'inherit',padding:"4px 22px", cursor: "pointer"}}
				>Submit</button>
				
			</form>
		) : (
			<form onSubmit={this._handleSubmit}>
				<br />
				<hr />
				<h3>Subscribe to our newsletter</h3>
				<p>Stay up-to-date and join our newsletter to recieve the latest updates. 100% spam free.</p>
				<input 
				id="outlined-email-input"
				label="Email"
				type="email"
				placeholder="Enter your email to continue..."
				autoComplete="email"
				pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
				style={{maxWidth: "600px", width: "100%", height: "40px", background: "#0f0f0f", outline: "0", border: "0", borderWidth: 1, borderColor: "#50fa7b", borderStyle: "solid", color: 'white', fontFamily: 'inherit',padding:"4px 9px"}}
				onChange={this.handleChange}
				required=""
				/>
				<p>{this.state.result.msg}</p>
				<p>&nbsp;</p>
				<button 
				type="submit"
				label="submit"
				
				style={{width:"auto",height: "40px", background: "#50fa7b", outline: "0", border: "0", borderWidth: 1, borderColor: "#50fa7b", borderStyle: "solid", color: 'black', fontFamily: 'inherit',padding:"4px 22px", cursor: "pointer"}}
				>Submit</button>
			</form>
		);
	}
}