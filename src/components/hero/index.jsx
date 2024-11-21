import HeroImage from "../../assets/hero_one.png";

const HeroSection = () => {
	return (
		<section className='w-full flex items-center justify-center min-h-screen'>
			<div className='w-full flex flex-col md:flex-row md:items-center md:space-x-16'>
				<div className='w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1 mb-8 lg:mb-0'>
					<img
						src={HeroImage}
						alt='Hero Image'
						className='w-full sm:max-w-[600px]'
					/>
				</div>

				<div className='w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start md:pl-16 order-1 md:order-2'>
					<h1 className='text-[45px] font-bold leading-[60px] capitalize mb-6'>
						Transform Your Photos Into Medieval Art
					</h1>
					<p className='text-gray-600 text-lg mb-6 max-w-lg'>
						Snap 15 photos and watch the magic unfold! Get ready to
						receive 50 fabulous, crafted portraits that turn your
						face into a dazzling medieval masterpiece.
					</p>
					<a
						href='#'
						className='px-8 py-3 bg-orange-500 text-white text-lg rounded-full shadow-md hover:bg-orange-600 transition duration-300'
					>
						Create Your Portraits
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
