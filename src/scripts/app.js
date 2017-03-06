import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


var ClonePage = React.createClass({
	render: function() {
		return (
			<div className="clonePage">
				<Wrapper />
				<ClassContent />
				<ClassMiddle />
				<Banner />
			</div>
			)
	}
})


var Wrapper = React.createClass({
	render: function() {
		return (
			<div id="wrapper">
				<img className="skyline" src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
        		<img className="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
    		</div>
			)
	}
})

var ClassContent = React.createClass({
	render: function() {
		return (
			<div className="left">
				<p className="left-title"><b>THE IRON YARD | HOUSTON</b></p>
				<p>Happenings and updates from The Iron Yard in Houston, TX</p>
				<p>SEARCH</p>
				<input className="search" placeholder="Search Keywords" />
				</div>
			)
	}
})

var ClassMiddle = React.createClass({
	render: function() {
		return (
			<div className="middle">
				<h2>September 22 Starts a New Class of The Iron Yard Houston Students</h2>
				<p className='img-text'><em><small>By Brian Dorton, Campus Director at <a href='https://www.theironyard.com' target= '_blank'>The Iron Yard</a> Houston</small></em></p>
            <img className='classroom' src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, placeat dolorem maiores distinctio nobis ducimus assumenda hic nam nemo iure illum earum est cum! Rerum eveniet voluptatum facere quaerat.</p>
			</div>
			)
	}
})

var Banner = React.createClass({
	render: function() {
		return(
			<div id='banner'>
            <div id='banner-top'>
                <p><b>Never miss a Post!</b></p>
            </div>
            <div id='banner-bottom'>
                <div id='bottom-left'>
                    <img src='http://magentanova.github.io/html-intro-1/images/ironyardlogo.png' />
                </div>
                <div id='bottom-middle'>
                    <p id='top-sentence'><b>tiyhouston</b></p>
                    <p>The Iron Yard | Houston</p>
                    <hr />
                </div>
                <div id='bottom-right'>
                    <p><b>+ Follow</b></p>
                </div>
            </div>
        </div>
			)
	}
})

var app = function() {
	var libraryName = 'react'
	ReactDOM.render(<ClonePage />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..