import React, { Component } from "react";
import logo from '../../images/main_logo.png';
// import disimg from '../../images/DSC_0795.JPG';
class Home extends Component {
  render() {
    return (
      <div>
	<header className="top-navbar">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img className="logoimg" src={logo}  />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
						<li className="nav-item"><a className="nav-link" href="menu.html">Menu</a></li>
						<li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Pages</a>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<a className="dropdown-item" href="reservation.html">Reservation</a>
								<a className="dropdown-item" href="stuff.html">Stuff</a>
								<a className="dropdown-item" href="gallery.html">Gallery</a>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog</a>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<a className="dropdown-item" href="blog.html">blog</a>
								<a className="dropdown-item" href="blog-details.html">blog Single</a>
							</div>
						</li>
						<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<div id="slides" className="cover-slides">
		<ul className="slides-container">
			<li className="text-left">
				<img src={require('../../images/DSC_0884.JPG')} alt="image" />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To <br/> Frunchy Restaurant</strong></h1>
							<p className="m-b-40">Delight in every bite.</p>
						
						</div>
					</div>
				</div>
			</li>
			<li className="text-left">
				<img src={require('../../images/momo.JPG')} alt="" />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To <br/> Live Dinner Restaurant</strong></h1>
							<p className="m-b-40">See how your users experience your website in realtime or view  <br/> 
							trends to see any changes in performance over time.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			</li>
			<li className="text-left">
				<img src="../../images/DSC_0745.JPG" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To <br/> Frunchy Restaurant</strong></h1>
							<p className="m-b-40">See how your users experience your website in realtime or view  <br/> 
							trends to see any changes in performance over time.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div className="slides-navigation">
			<a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
			<a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
		</div>
	</div>
	<div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>Frunchy Restaurant</span></h1>
						<h4>Little Story</h4>
						<p>WE are a new and upcoming restaurant providing the best delicious food that makes you come back for more with each bite"
							At frunchy resto,
							"Our main mission hear at frunchy resto is to give our customers a place to celebrate life’s special moments by offering the best quality hygienic food, service, and ambiance
							we make sure that the customer is happy and satisfied by what they had and leave the restaurant with a full belly and in a good mood", Because as they say "good food equals good mood.</p>
						<a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img src="../../images/DSC_0738.JPG" alt="" className="img-fluid" />
				</div>
			</div>
		</div>
	</div>
	<div className="qt-box qt-background">
		<div className="container">
			<div className="row">
				<div className="col-md-8 ml-auto mr-auto text-center">
					<p className="lead ">
						" If you're not the one cooking, stay out of the way and compliment the chef. "
					</p>
					<span className="lead">Michael Strahan</span>
				</div>
			</div>
		</div>
	</div>
	<div className="gallery-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Gallery</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div className="tz-gallery">
				<div className="row">
					<div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href='../../images/DSC_0735.JPG'>
							<img className="img-fluid" src={require('../../images/DSC_0735.JPG')} alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="../../images/DSC_0798.JPG">
							<img className="img-fluid" src={require('../../images/DSC_0798.JPG')} alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="../../images/DSC_1229.JPG">
							<img className="img-fluid" src={require('../../images/DSC_1229.JPG')} alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="../../images/DSC_0787.JPG">
							<img className="img-fluid" src={require('../../images/DSC_0787.JPG')} alt="Gallery Images" />
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="../../images/DSC_0784.JPG">
							<img className="img-fluid" src={require('../../images/DSC_0784.JPG')} alt="Gallery Images" />
						</a>
					</div> 
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="../../images/DSC_0738.JPG">
							<img className="img-fluid" src={require('../../images/DSC_0738.JPG')} alt="Gallery Images" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="contact-imfo-box">
		<div className="container">
			<div className="row">
				<div className="col-md-4 arrow-right">
					<i className="fa fa-volume-control-phone"></i>
					<div className="overflow-hidden">
						<h4>Phone</h4>
						<p className="lead">
							977-9849717706
						</p>
					</div>
				</div>
				<div className="col-md-4 arrow-right">
					<i className="fa fa-envelope"></i>
					<div className="overflow-hidden">
						<h4>Email</h4>
						<p className="lead">
							frunchyresto@gmail.com
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-map-marker"></i>
					<div className="overflow-hidden">
						<h4>Location</h4>
						<p className="lead">
							Banasthali,Kathmandu
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
      </div>
    );
  }
}
 
export default Home;