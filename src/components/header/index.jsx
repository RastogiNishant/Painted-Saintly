import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogoText from "../../assets/logotext.png";

const Header = () => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header
			className='fixed top-0 left-0 w-full bg-white z-50 border-b border-black px-[25px] py-[35px] md:px-[90px] cursor-pointer'
			onClick={() => navigate("/")}
		>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<div className='flex items-center space-x-2'>
					<img src={Logo} alt='Logo' className='h-10' />
					<img src={LogoText} alt='Logo' className='h-10' />
				</div>

				<nav className='hidden lg:flex space-x-8'>
					<a
						href='#why-use'
						className='text-gray-600 hover:text-gray-900 transition duration-300'
					>
						Why Use
					</a>
					<a
						href='#process'
						className='text-gray-600 hover:text-gray-900 transition duration-300'
					>
						Process
					</a>
					<a
						href='#price'
						className='text-gray-600 hover:text-gray-900 transition duration-300'
					>
						Price
					</a>
					<a
						href='#result'
						className='text-gray-600 hover:text-gray-900 transition duration-300'
					>
						Result
					</a>
					<a
						href='#login'
						className='text-gray-600 hover:text-gray-900 transition duration-300'
					>
						Log In
					</a>
				</nav>

				<div className='hidden lg:block'>
					<a
						href='#start-now'
						className='text-black border border-black rounded-full hover:bg-orange-600 transition duration-300 py-[17px] px-[33px]'
					>
						Start Now
					</a>
				</div>

				<div className='lg:hidden'>
					<button
						onClick={toggleMenu}
						className='text-gray-600 focus:outline-none'
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							></path>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div
					className='absolute top-16 right-0 w-64 bg-white shadow-lg rounded-md transition transform origin-top-right'
					onMouseLeave={closeMenu}
				>
					<nav className='flex flex-col p-4 space-y-4'>
						<a
							href='#why-use'
							onClick={closeMenu}
							className='text-gray-600 hover:text-gray-900 transition duration-300'
						>
							Why Use
						</a>
						<a
							href='#process'
							onClick={closeMenu}
							className='text-gray-600 hover:text-gray-900 transition duration-300'
						>
							Process
						</a>
						<a
							href='#price'
							onClick={closeMenu}
							className='text-gray-600 hover:text-gray-900 transition duration-300'
						>
							Price
						</a>
						<a
							href='#result'
							onClick={closeMenu}
							className='text-gray-600 hover:text-gray-900 transition duration-300'
						>
							Result
						</a>
						<a
							href='#login'
							onClick={closeMenu}
							className='text-gray-600 hover:text-gray-900 transition duration-300'
						>
							Log In
						</a>
						<a
							href='#start-now'
							onClick={closeMenu}
							className='px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300 text-center'
						>
							Start Now
						</a>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
