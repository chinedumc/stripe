import { useGlobalContext } from "../context";
import phoneImg from '../images/phone.svg'

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();
	return (
		<>
			<section className="hero" onMouseOver={closeSubmenu}>
				<div className="hero-center">
					<article className="hero-info">
						<h1>Lorem ipsumametdol dolor sit amet</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
							vel ipsa excepturi maiores placeat doloremque esse laborum sit
							velit. Cum vel ipsa excepturi maiores.
						</p>
						<button className="btn">Start now</button>
					</article>
					<article className="hero-images">
						<img src={phoneImg} className="phone-img" alt="phone img" />
					</article>
				</div>
			</section>
		</>
	);
};

export default Hero;
