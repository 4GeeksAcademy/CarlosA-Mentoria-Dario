import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!! {store.slug}</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<Link to="/patata">Ir a patata</Link>
		</div>
	);
}; 