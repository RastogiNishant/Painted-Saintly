import Header from "@components/header";
import HeroSection from "@components/hero";
import WhyUs from "@components/why-us";

const App = () => {
	return (
		<main className='font-spacemono'>
			<Header />
			<div className='mx-auto my-[110px]'>
				<HeroSection />
				<section className='w-full bg-yellow px-[30px] py-[52px] text-center border-b border-t border-black'>
					<p>
						Over 10,000 unique portraits crafted for 1,000+ happy
						customers
					</p>
				</section>
				<WhyUs />
				<div className='mt-6'>
					<div className='w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center'>
						<p className='text-gray-500'>Image Placeholder</p>
					</div>
				</div>

				{/* Why Choose Us */}
				<section className='mt-10'>
					<h2 className='text-lg font-bold text-center'>
						Why Choose Painted Saints?
					</h2>
					<button className='mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg block mx-auto'>
						Learn More
					</button>
				</section>

				{/* Steps Section */}
				<section className='mt-8'>
					{[1, 2, 3].map((step) => (
						<div key={step} className='flex items-start gap-4 mb-6'>
							<div className='text-orange-500 font-bold text-lg'>
								{step}
							</div>
							<div>
								<p className='text-sm font-bold'>
									Step {step} Title
								</p>
								<p className='text-xs text-gray-600'>
									Description for step {step}. Provide
									detailed instructions or explanations.
								</p>
							</div>
						</div>
					))}
				</section>

				{/* Example Images */}
				<section className='mt-10'>
					<h2 className='text-lg font-bold text-center'>
						See What You Can Become
					</h2>
					<div className='grid grid-cols-2 gap-4 mt-6'>
						{[1, 2, 3, 4].map((item) => (
							<div
								key={item}
								className='w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center'
							>
								<p className='text-gray-500'>Image {item}</p>
							</div>
						))}
					</div>
					<button className='mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg block mx-auto'>
						See Examples
					</button>
				</section>

				{/* Pricing Section */}
				<section className='mt-10'>
					<div className='bg-yellow-100 p-4 rounded-lg'>
						<h2 className='text-lg font-bold text-center'>
							Affordable Art Awaits
						</h2>
						<p className='text-sm text-center mt-2'>
							Your medieval transformation for only
						</p>
						<p className='text-3xl font-bold text-center mt-2 text-orange-500'>
							$9.99
						</p>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mt-10'>
					<h2 className='text-lg font-bold text-center'>
						FAQ: All You Need To Know
					</h2>
					<div className='mt-4 space-y-2'>
						{[1, 2, 3].map((faq) => (
							<details
								key={faq}
								className='bg-gray-100 p-3 rounded-lg'
							>
								<summary className='text-sm font-bold'>
									FAQ Question {faq}?
								</summary>
								<p className='text-xs mt-2 text-gray-600'>
									Answer for FAQ question {faq}. Provide
									helpful and concise information.
								</p>
							</details>
						))}
					</div>
				</section>

				{/* Footer */}
				<footer className='mt-10 text-center'>
					<p className='text-sm text-gray-500'>
						Ready To Become A Medieval Masterpiece?
					</p>
					<button className='mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg'>
						Get Started
					</button>
					<p className='mt-6 text-xs text-gray-400'>
						© 2024 Painted Saints. All Rights Reserved.
					</p>
				</footer>
			</div>
		</main>
	);
};

export default App;
