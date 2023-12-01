import React, { useEffect, useState } from "react";
import '../style/Sidebar.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Sidebar_Admin = ({ logo, name, children, openOnHover }) => {

	const navigate =useNavigate();
	const [userData, setUserData] = useState([]);
	let id = localStorage.getItem("ID_Admin")
	// useEffect(() => {
	// 	axios
	// 	.get(`http://localhost:4000/users/${id}`)
	// 	.then((res) => {
	// 		setUserData(res.data);
	// 	})
	// 	.catch((err)=> console.log(err));
	// });

	const logout = () => {
		// Get the current URL.
		const currentUrl = window.location.href;
		// Set the current URL to the login page.
		window.location.href = "/";
		// Prevent the user from going back to the previous page.
		window.history.pushState({}, "", "/");
		// Clear the browser's local storage.
		window.localStorage.clear();
		console.log("Logged out!");
	  };
	  
	const links = [
		{
			to: '/login/DashBoard/Courses_admin',
			label: 'Avalible Courses',
			icon: <i class='bx bx-book-alt'></i>,
			sublinks: []
		},
		{
			to: '/login/DashBoard/View_Instractors',
			label: 'ALL Instractors',
			icon: <i class='bx bx-collection'></i>,
			sublinks: []
		},
		// {
		// 	to: '#',
		// 	label: 'Category',
		// 	icon: <i className='bx bx-collection'></i>,
		// 	sublinks: [
		// 		{
		// 			to: '#',
		// 			label: 'HTML & CSS'
		// 		},
		// 		{
		// 			to: '#',
		// 			label: 'JavaScript'
		// 		},
		// 		{
		// 			to: '#',
		// 			label: 'PHP & MySQL'
		// 		}
		// 	]
		// },
		
		
		
	];
	
	const profile = {
		name: id,
		job: 'Admin'
	};
	
	const [isClose, setIsClose] = React.useState(true);
	const toggleIsClose = () => setIsClose(!isClose);
	
	const Link = ({to, icon, label, sublinks}) => {
		
		const [isOpen, setIsOpen] = React.useState(false);
		const toggleIsOpen = () => setIsOpen(!isOpen);
		
		const SubLinks = ({ links }) => (
			links.map(({to, label}, key) => (
				<li key={key}>
					<a href={to}>{label}</a>
				</li>
			))
		);
		
		const Dropdown = ({to, icon, label, linksCount}) => {
			let dropdown = null;
			
			if (linksCount > 0) {
				dropdown = <i className='bx bxs-chevron-down arrow' onClick={toggleIsOpen}></i>;
			}
			
			return (
				<div className="iocn-link">
					<a href={to}>
						{ icon }
						<span className="link_name">{label}</span>
					</a>
					{ dropdown }
				</div>
			);
		};
		
		return (
			<li className={isOpen ? 'showMenu' : ''}>
				<Dropdown to={to} icon={icon} label={label} linksCount={sublinks.length} />
				<ul className={sublinks.length > 0 ? 'sub-menu' : 'sub-menu blank'}>
					<li><a className="link_name" href={to}>{label}</a></li>
					<SubLinks links={sublinks} />
				</ul>
			</li>
		);
	};
	
	const Links = ({ links }) => (
		links.map((link, key) => (
			<Link key={key} {...link} />
		))
	);
	
	return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
		<main>
			<aside
				className={isClose ? 'sidebar close' : 'sidebar'}
			>
				<section className='logo-details'>
					{ logo }
					<span className='logo_name'>{ name }</span>
				</section>
				<ul className='nav-links'>
					<Links links={links} />
					<li>
						<div className="profile-details">
							<div className="name-job">
								<div className="profile_name">{profile.name}</div>
								<div className="job">{profile.job}</div>
							</div>
							<i className="bx bx-log-out" onClick={logout}></i>
						</div>
					</li>
				</ul>
				{
					openOnHover ? null : (
						<div className="menu">
							<i className='bx bx-menu' onClick={toggleIsClose}></i>
						</div>
					)
				}
			</aside>
			<section className="home-section">
					{ children }
			</section>
		</main>
    </div>
	);
};

export default Sidebar_Admin;