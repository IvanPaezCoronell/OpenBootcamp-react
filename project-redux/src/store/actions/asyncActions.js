export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const login = (email, password) => {
	return {
		type: API_CALL_REQUEST,
		payload: {
			method: 'post',
			url: 'https://reqres.in/api/login',
			data: {
				email: email,
				password: password,
			},
			okAction: API_CALL_SUCCESS,
			failAction: API_CALL_FAILURE,
		},
	};
};

// Generic httpRequest
export const httpRequest = (data, method, url) => {
	return {
		type: API_CALL_REQUEST,
		payload: {
			method: method,
			url: url,
			data: data,
			okAction: API_CALL_SUCCESS,
			failAction: API_CALL_FAILURE,
		},
	};
};
