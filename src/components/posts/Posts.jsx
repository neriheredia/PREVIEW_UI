import Post from '../post/Post';
import './posts.css';
import foto1 from '../../assets/foto1.jpeg';
import foto2 from '../../assets/foto2.webp';
import foto3 from '../../assets/foto3.jpeg';
import foto4 from '../../assets/foto4.webp';
import foto5 from '../../assets/foto5.webp';

export default function Posts() {
	return (
		<div className='posts'>
			<Post img={foto1} />
			<Post img={foto2} />
			<Post img={foto3} />
			<Post img={foto4} />
			<Post img={foto5} />
		</div>
	);
}
