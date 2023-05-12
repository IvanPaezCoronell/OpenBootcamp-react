import { useEffect, useState } from 'react';
import getRandomMeme from '../services/axiosService';
import { Card } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const AxiosHttp = () => {
	const [meme, setMeme] = useState();
	const [like, setLike] = useState(0);
	const [dislike, setDislike] = useState(0);

	useEffect(() => {
		obtainMeme;
	}, []);

	const obtainMeme = () => {
		getRandomMeme()
			.then(response => {
				setMeme(response.data);

				console.log(response);
			})
			.catch(error => {
				alert(`Something went wrong: ${error}`);
			});
	};

	const likeCount = () => {
		setLike(like + 1);
	};

	const dislikeCount = () => {
		setDislike(dislike + 1);
	};

	return (
		<div>
			<h1>Petición HTTP con Axios</h1>

			{meme
				? <div>
						<Card>
							{' '}<img src={meme.icon_url} alt="Image Meme" />
							<br />
							<br />
							{meme.value} <br />
							<br />
							<button
								onClick={likeCount}
								style={{ background: '#2ed573', color: 'white' }}
							>
								<FavoriteIcon
									fontSize="small"
									style={{ display: 'flex', flexDirection: 'row' }}
								/>

								{like}
							</button>
							<button
								onClick={dislikeCount}
								style={{ background: '#ff4757', color: 'white' }}
							>
								<ThumbDownIcon
									fontSize="small"
									style={{ display: 'flex', flexDirection: 'row' }}
								/>
								{dislike}
							</button>
							<br />
							<br />
						</Card>
						<br />
						<button onClick={obtainMeme}>Random meme</button>
					</div>
				: <button onClick={obtainMeme}>Random meme</button>}
		</div>
	);
};

export default AxiosHttp;
