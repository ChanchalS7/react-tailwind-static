import { useEffect, useState } from "react";
import { menu } from "../assets/icons";
import { close } from "../assets/icons";


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [iconToggle, setIconToggle] = useState('')
	const [menuClass, setMenuClass] = useState('')
	const toggleMenu = () => {
		setToggle(!toggle)
	}
	const toggleIcon = () => {
		setIconToggle(!iconToggle)
	}
	useEffect(() => {
		setMenuClass(toggle ? 'transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100' : 'transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0')
	}, [toggle])
	return (
		<section className="w-full bg-black text-white flex-wrap justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40">
			<h1 className="text-green-600 text-3xl font-bold">CS Vertex</h1>
			<div className="hidden lg:flex justify-end items-center gap2">
				<ul className="flex justify-center items-center gap3">
					<li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white" href="/">HOME</a></li>

					<li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white" href="services">Services</a></li>

					<li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white" href="#testimonials">Testimonials</a></li>
					<li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white" href="#pricing">Pricing</a></li>

					<li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white" href="#contact">Contact</a></li>
				</ul>
			</div>
			<div className="flex lg:hidden flex-col">
				{
					iconToggle ?
						(
							<img src={close} alt="close icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon(); }} />
						)
						:
						(
							<img src={menu} alt="menu icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon(); }} />
						)
				}</div>
			{toggle && (
				<div id="mob-menu" className={`bg-green-500 text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}>
					<ul className="flex flex-col justify-center items-center gap-2">

						<li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center">Home</li>

						<li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center">Services</li>

						<li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center">Testimonials</li>

						<li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center">Pricing</li>

					</ul>
				</div>

			)}
		</section>
	)
}

export default Header