import { aboutgrids } from "../exports"
import AboutGrid from "../components/AboutGrid"
const About = () => {
	return (
		<section id='serivces' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12'>
			<div className='flex justify-center items-start flex-col gap-8 lg:w-1/2'>
				<h1>Hosting solution with benefits</h1>
				<p className='text-slate05 text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
				<div className='flex justify-center items-center gap-7'>
					<button className='bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black'>Read more</button>
				</div>
			</div>
			<div className='flex justify-between items-center w-full lg:w-1/2 flex-wrap'>
				{aboutgrids.map((grid) => (
					<div key={grid.label} className="w-full lg:w-1/2"><AboutGrid {...grid} /></div>
				))}
			</div>
		</section>
	)
}

export default About