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
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody),
		});
		actualStatusCode = response.status;

		const putResponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(putRequestBody),
		})
	} catch (error) {
		console.error(error);
	}
});

test('Response body should contain ....', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody.ok).toBe(true);
});