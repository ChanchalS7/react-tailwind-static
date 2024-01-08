import { fb, insta, twitter, yt } from "../assets/icons"
const Footer = () => {
	return (
		<section className="w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28">
			<div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
				<h1 className="text-green-600 font-bold text-4xl">DEBUG ENTITY</h1>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

				<div className="flex justify-center items-center ga4 mt-7" id="logos">
					<span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
						<img src={fb} alt="fb-icon" width={20} height={20} />
					</span>

					<span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
						<img src={insta} alt="insta-icon" width={20} height={20} />
					</span>

					<span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
						<img src={yt} alt="youtube-icon" width={20} height={20} />
					</span>

					<span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
						<img src={fb} alt="twitter-icon" width={20} height={20} />
					</span>
				</div>
			</div>
			<div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
				<ul className="flex flex-col justify-center items-start gap-3">
					<h1 className="text-xl font-semibold">PAGES</h1>
					<li className="text-slate-300 cursor-pointer">Home</li>
					<li className="text-slate-300 cursor-pointer">Services</li>
					<li className="text-slate-300 cursor-pointer">Testimonials</li>
					<li className="text-slate-300 cursor-pointer">Pricing</li>
					<li className="text-slate-300 cursor-pointer">Contact</li>
				</ul>
			</div>
			<div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
				<ul className="flex flex-col justify-center items-start gap-3">
					<h1 className="text-xl font-semibold">PAGES</h1>
					<li className="text-slate-300 cursor-pointer">Home</li>
					<li className="text-slate-300 cursor-pointer">Services</li>
					<li className="text-slate-300 cursor-pointer">Testimonials</li>
					<li className="text-slate-300 cursor-pointer">Pricing</li>
					<li className="text-slate-300 cursor-pointer">Contact</li>
				</ul>
			</div>
			<div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
				<ul className="flex flex-col justify-center items-start gap-3">
					<h1 className="text-xl font-semibold">PAGES</h1>
					<li className="text-slate-300 cursor-pointer">Home</li>
					<li className="text-slate-300 cursor-pointer">Services</li>
					<li className="text-slate-300 cursor-pointer">Testimonials</li>
					<li className="text-slate-300 cursor-pointer">Pricing</li>
					<li className="text-slate-300 cursor-pointer">Contact</li>
				</ul>
			</div>
		</section>
	)
}

export default Footer
