import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@assets/logo.png";
import LogoText from "@assets/logotext.png";

const Header = () => {
	const menuRef = useRef(null);
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, []);

	return (
		<header className='fixed top-0 left-0 w-full bg-white z-50 border-b border-black px-[25px] py-[35px] md:px-[90px] cursor-pointer'>
			<div className='mx-auto flex justify-between items-center'>
				<div
					className='flex items-center cursor-pointer'
					onClick={() => navigate("/")}
				>
					<img src={Logo} alt='Logo' className='h-10' />
					<img src={LogoText} alt='Logo' className='h-10' />
				</div>

				<nav className='hidden lg:flex space-x-8'>
					<a
						href='#why-use'
						className='text-black hover:text-gray-900 transition duration-300'
					>
						Why Use
					</a>
					<a
						href='#process'
						className='text-black hover:text-gray-900 transition duration-300'
					>
						Process
					</a>
					<a
						href='#price'
						className='text-black hover:text-gray-900 transition duration-300'
					>
						Price
					</a>
					<a
						href='#result'
						className='text-black hover:text-gray-900 transition duration-300'
					>
						Result
					</a>
					<a
						href='#login'
						className='text-black hover:text-gray-900 transition duration-300'
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

			{isMenuOpen && (
				<div
					ref={menuRef}
					className='text-black absolute top-16 right-2 w-64 bg-gray shadow-lg rounded-md transition transform origin-top-right lg:hidden md:right-[90px] md:w-[850px] md:h-[338px] md:px-[30px] md:py-[50px]'
				>
					<nav className='flex flex-col md:flex-row md:justify-around items-center p-4 space-y-4 md:space-y-0 md:space-x-4 md:mb-[46px] md:h-[130px]'>
						<a
							href='#why-use'
							onClick={closeMenu}
							className='hover:text-gray-900 transition duration-300'
						>
							Why Use
						</a>
						<a
							href='#process'
							onClick={closeMenu}
							className='hover:text-gray-900 transition duration-300'
						>
							Process
						</a>
						<a
							href='#price'
							onClick={closeMenu}
							className='hover:text-gray-900 transition duration-300'
						>
							Price
						</a>
						<a
							href='#result'
							onClick={closeMenu}
							className='hover:text-gray-900 transition duration-300'
						>
							Result
						</a>
						<a
							href='#login'
							onClick={closeMenu}
							className='hover:text-gray-900 transition duration-300'
						>
							Log In
						</a>
					</nav>

					<div className='flex justify-center mt-4 md:mt-0'>
						<a
							href='#start-now'
							onClick={closeMenu}
							className='border border-black rounded-full hover:bg-orange-600 transition duration-300 py-[10px] px-[20px]'
						>
							Start Now
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
