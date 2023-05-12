import APIRequest from "../utils/axios.config";

export default function getRandomMeme() {
	return APIRequest.get('', {
		validateStatus: function(status) {
			return status < 500;
		},
	});
}
