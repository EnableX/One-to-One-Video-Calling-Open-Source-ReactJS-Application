
const BASE_API_URL = 'https://saas-wireframe.vcloudx.com/interview/';


const fetchOptions = {
    headers: {
        "Content-Type": "application/json" ,
			"Access-Control-Allow-Origin" : "*"
    }
};

/**
 * Create Room xhr request
 */
export const createRoom = async () => {
    Object.assign(fetchOptions, {
        method: "POST",
        body: ''
    });
    const response = await fetch(BASE_API_URL + 'api/create-room/', fetchOptions);
    return await response.json();
}


/**
 * Join room method to make an xhr request to get new token
 */
export const joinRoom = async (payload) => {
    Object.assign(fetchOptions, {
        method: "POST",
        body: JSON.stringify(payload)
    });
    const response = await fetch(BASE_API_URL + 'api/create-token', fetchOptions);
    return await response.json();
}