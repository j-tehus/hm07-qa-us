// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "Going into space",
  	"cardId": 1
}
const putRequestBody = {
	"name": "example"
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

		const putResponse = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(putRequestBody),
		})
		actualStatusCode = putResponse.status; 
	} catch (error) {
		console.error(error);
	}
	expect (actualStatusCode).toBe(200);
});

test('Response body should contain ....', async () => {
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

		const putResponse = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await putResponse.json();
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody.ok).toBeTruthy();
});