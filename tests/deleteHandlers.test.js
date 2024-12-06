// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
    "name": "Going into space",
  	"cardId": 1
}

test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody),
		});
		const postResponseBody = await postResponse.json();
		const kitId = postResponseBody.id; 
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect (actualStatusCode).toBe(200);
});

test('DELETE request should return 200 status code', async () => { 
	let actualResponseBody;
	try {
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody),
		});
		const postResponseBody = await postResponse.json();
		const kitId = postResponseBody.id; 
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE', 
			headers: { 
			'Content-Type': 'application/json' 
			} 
		}); 
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBeTruthy(); 
	});

