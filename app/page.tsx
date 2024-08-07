

import Button from '@/components/Button'
import ArrowSec from '@/components/icons/arrow-sec'
import CallIcon from "@/components/icons/call"
import Experience from '@/components/Experienc'

const services = [
	{
		title: 'Project Plan',
		text: `Our project plan includes a detailed consultation, design and material selection, and meticulous implementation, ensuring a quality finish and client satisfaction.`
	},
	{
		title: 'Interior Work',
		text: 'We specialize in high-quality interior finishes, offering custom cabinetry, flooring, wall treatments, and bespoke design elements to create beautiful and functional spaces.'
	},
	{
		title: 'Realization',
		text: 'We bring the design vision to life with precision and care, ensuring every detail is flawlessly executed and the final result exceeds expectations.'
	},
]

const reviews = [
	{
		img: '/sample/natasha.png',
		name: 'Nattasha Mith',
		location: 'Sydney, USA',
		review: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.'
	},
	{
		img: '/sample/benny.png',
		name: 'Benny Roll',
		location: 'Sydney, New York',
		review: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.'
	},
	{
		img: '/sample/raymond.png',
		name: 'Raymond Galario',
		location: 'Sydney, Australia',
		review: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.'
	},
]

const projects = [
	{
		img: '/sample/project1.png',
		name: 'Modern Kitchen',
		text: 'Decor / Artchitecture'
	},
	{
		img: '/sample/project2.png',
		name: 'Modern Bedroom',
		text: 'Decor / Artchitecture'
	},
	{
		img: '/sample/project3.png',
		name: 'Modern Dining Hall',
		text: 'Decor / Artchitecture'
	},
	{
		img: '/sample/project4.png',
		name: 'Modern Living Room',
		text: 'Decor / Artchitecture'
	},
]

const clientLogos = [
	{
		img: '/sample/clientLogo1.svg',
	},
	{
		img: '/sample/clientLogo2.svg',
	},
	{
		img: '/sample/clientLogo3.svg',
	},
	{
		img: '/sample/clientLogo4.svg',
	},
	{
		img: '/sample/clientLogo5.svg',
	},
]

const experiences = [
	{
		num: 12,
		text:'Years Of Experiance'
	},
	{
		num: 85,
		text:'Success Project'
	},
	{
		num: 15,
		text:'Active Project'
	},
	{
		num: 95,
		text:'Happy Customers'
	},
]

function Home() {
  return (
    <>
    <section className="w-full bg-hero bg-no-repeat bg-cover h-screen lg:min-h-[110vh] px-12 xl:px-0 flex items-center ">
		<div className="lg:max-w-[1200px] w-full mx-auto flex flex-col">
			<h1 className="text-[40px] leading-[50px] md:text-[60px] xl:text-[85px] pb-4 font-dm md:leading-[106.25px] w-full xl:max-w-[50%] text-primary-200"> Let Your Home Be Unique </h1>
			<p className="text-base md:text-[22px] pb-5 font-jost text-text-gray-200 w-full lg:max-w-[50%]"> Experience the difference that thoughtful design and quality finishes can make in your home.</p>
			<Button text="Get Started"/>
		</div>
	</section>

	 {/* Services Section */}

	<section className="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 lg:flex-row px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] justify-between ">
		{
			services.map((service) => {
				return (
					<div key={service.title} className="w-full max-w-[358px] mx-auto flex flex-col justify-center items-center gap-3 md:gap-5">
						<h3 className="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose">{service.title}</h3>
						<p className="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center"> {service.text}</p>
						<a href="/services" className="text-text-gray-200 leading-snug text-lg tracking-tight font-jost font-semibold gap-2 py-4 md:py-8 startCenter">Read More <ArrowSec /></a>
					</div>
				)
			})
		}
	</section>

	{/* About Section */}

	<section className="w-full lg:max-w-[1200px] mx-auto px-12 xl:px-0 flex flex-col-reverse justify-center items-center lg:grid grid-cols-2 gap-[75px] pt-[100px] lg:pt-[200px]">
		<div className="flex flex-col gap-8 max-w-[472px] items-center lg:items-start py-6">
			<h2 className="text-[30px] text-center capitalize lg:text-left font-dm tracking-wide leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue ">We Create The Art Of Stylish Living Stylishly</h2>
			<p className="text-base md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
			<div className="flex gap-4 pt-3 items-center">
				<CallIcon/>
				<p className="flex flex-col text-text-gray-200 font-jost tracking-tight">
					<span className="text-2xl font-bold leading-9 ">012345678</span>
					<span className="text-[22px] leading-8">Call Us Anytime</span>
				</p>
			</div>
			<Button text="Get Free Estimate"/>
		</div>

		<div>
			<img src="/sample/about-img.png" alt="" />
		</div>
	</section>

	{/* What People Think About Us Section */}

	<section className="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
	<div className="w-full flex flex-col bg-primary-300 rounded-[48px] px-6 py-[88px]">
		<h2 className="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto">What the People Thinks About Us</h2>
		<div className="flex flex-col gap-8 lg:gap-10 lg:flex-row justify-between">
			{
			reviews.map((rev) => {
				return (
					<div key={rev.name} className="w-full bg-white max-w-[370px] px-[37px] py-[53px] rounded-3xl mx-auto flex flex-col justify-center gap-4 md:gap-6">
						<div className="flex flex-col sm:flex-row gap-6 items-center">
							<img src={rev.img} alt="" />
							<p className="flex flex-col tracking-tight leading-9">
								<span className="text-primary-200 text-lg lg:text-[25px] font-dm">{rev.name}</span>
								<span className="text-text-gray-200 text-base lg:text-lg font-jost">{rev.location}</span>
							</p>
						</div>
						<p className="font-jost tracking-tight leading-8 text-base text-center sm:text-left text-text-gray lg:text-[22px]">{rev.review}</p>
					</div>
			)
		})
		}
		</div>
	</div>
	</section>

	 {/* Client Logo Section */}

	<section className="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
		<div className="w-full flex flex-row justify-between items-center gap-12 max-w-[1200px] overflow-x-scroll no-scrollbar">
			{
				clientLogos.map((logo, index) => <img key={index} src={logo.img} alt="" />)
			}
		</div>
	</section>

	 {/* Projects Section  */}

	<section className="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] ">
		<h2 className="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-2 mx-auto">Follow Our Projects</h2>
		<p className="text-base md:text-[22px] text-center tracking-tight font-jost text-text-gray leading-[33px] lg:max-w-[60%] mx-auto">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-[104px] lg:gap-y-[56px] mt-12 lg:mt-[93px]">
			{
			projects.map((proj) => {
				return (
					<div key={proj.name} className="w-full flex flex-col gap-4">
					<img src={proj.img} alt="" />
							<p className="flex flex-col tracking-tight leading-9">
								<span className="text-primary-200 text-lg lg:text-[25px] font-dm">{proj.name}</span>
								<span className="text-text-gray-200 text-base lg:text-lg font-jost">{proj.text}</span>
							</p>
					</div>
			)
		})
		}
		</div>
	</section>

	{/* Experience Section */}
	<section className="w-full bg-primary-300 px-12 xl:px-0 mx-auto mt-[100px] lg:mt-[200px] py-[151px]">
		<div className="w-full max-w-[1200px] mx-auto flex lg:justify-center items-center overflow-x-scroll no-scrollbar">
			{
				experiences.map((exp, i) => {
					return(
						<Experience key={i} text={exp.text} num={exp.num} i={i}  />
					)
				})
			}
		</div>
	</section>
  </>
  )
}

export default Home