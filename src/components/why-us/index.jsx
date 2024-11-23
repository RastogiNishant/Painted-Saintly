import Bulb from "@assets/bulb.svg";
import User from "@assets/user.svg";
import Dollar from "@assets/dollar.svg";

const WhyUs = () => {
	return (
		<section className='w-full xs:px-[25px] sm:px-[90px] py-[100px] border-black border-b flex flex-col justify-center items-center gap-[100px]'>
			<div className='flex flex-col lg:flex-row justify-start items-start gap-[50px]'>
				<div className='flex flex-col justify-start items-start gap-[60px] lg:w-1/2'>
					<p className='text-black text-[40px] font-bold capitalize'>
						Why Choose Painted Saintly?
					</p>
					<button
						role='button'
						className='px-[33px] py-[17px] bg-[#fd6944] rounded-[128px] border border-black justify-center items-center gap-2.5 inline-flex hover:bg-[#F6E596] transition duration-300'
					>
						Get Started Now
					</button>
				</div>
				<div className='flex flex-col gap-[40px] lg:w-1/2'>
					<div className='px-[30px] py-[20px] bg-white rounded-sm border border-black flex flex-col md:flex-row gap-5'>
						<img
							src={Bulb}
							alt='No Templates, No Repeats'
							className='w-[65px] h-[65px]'
						/>
						<div>
							<p className='text-black text-[26px] font-medium leading-[44px]'>
								No Templates, No Repeats
							</p>
							<p className='text-black text-base font-normal'>
								Every portrait is one-of-a-kind — your face,
								your style, no duplicates.
							</p>
						</div>
					</div>
					<div className='px-[30px] py-[20px] bg-white rounded-sm border border-black flex flex-col md:flex-row gap-5'>
						<img
							src={User}
							alt='Truly Personalized Art'
							className='w-[65px] h-[65px]'
						/>
						<div>
							<p className='text-black text-[26px] font-medium leading-[44px]'>
								Truly Personalized Art
							</p>
							<p className='text-black text-base font-normal'>
								No filters or stock images — just custom artwork
								crafted for you.
							</p>
						</div>
					</div>
					<div className='px-[30px] py-[20px] bg-white rounded-sm border border-black flex flex-col md:flex-row gap-5'>
						<img
							src={Dollar}
							alt='50 Portraits, One Low Price'
							className='w-[65px] h-[65px]'
						/>
						<div>
							<p className='text-black text-[26px] font-medium leading-[44px]'>
								50 Portraits, One Low Price
							</p>
							<p className='text-black text-base font-normal'>
								Get a collection of medieval art — at a price
								you won’t believe!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
