import { clients } from "../exports"

import ClientGrid from "../components/ClientGrid";

const Testimonials = () => {
	return (
		<section id="testimonials" className="w-full flex-col gap-5 h-fit p-7 lg:p-20">
			<p className="text-center text-xl">Testimonials</p>
			<h1 className="text-green-600 font-bold text-6xl text-center leading-[68px]">What Client says</h1>
			<p className="text-slate-950 text-2xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
			<div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
				{clients.map((client) => (
					<div key={client.name} className="w-80">
						<ClientGrid {...client} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Testimonials