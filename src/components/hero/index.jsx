import HeroImage from "@assets/hero_one.png";

const HeroSection = () => {
	return (
		<section className='w-full pt-[30px] md:pt-0'>
			<div className='w-full flex flex-col md:flex-row md:items-center md:space-x-16'>
				<div className='w-full md:w-2/5 flex justify-center md:justify-start order-2 md:order-1 lg:mb-0'>
					<img
						src={HeroImage}
						alt='Hero Image'
						className='w-full md:max-w-[600px]'
					/>
				</div>

				<div
					className='w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start order-1 mb-[43px] md:mb-0 md:order-2 md:mr-5
					md:max-w-[600px] md:px-0 px-[25px]'
				>
					<h1 className='text-[45px] font-bold leading-[60px] capitalize mb-6'>
						Transform Your Photos Into Medieval Art
					</h1>
					<p className='text-gray-600 text-lg mb-6 max-w-lg'>
						Snap 15 photos and watch the magic unfold! Get ready to
						receive 50 fabulous, crafted portraits that turn your
						face into a dazzling medieval masterpiece.
					</p>
					<button
						role='button'
						className='px-8 py-3 bg-[#FD6944] text-black text-lg rounded-full shadow-md hover:bg-[#F6E596] transition duration-300 border border-black'
					>
						Create Your Portraits
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
