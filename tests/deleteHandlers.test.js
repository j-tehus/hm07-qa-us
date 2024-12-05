// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
});

test('DELETE request should return 200 status code', async () => { 
	const response = await fetch(`${config.API_URL}/api/v1/kits/7`, { 
	method: 'DELETE', 
	headers: { 
	'Content-Type': 'application/json' 
	} 
	}); 
	expect(response.status).toBe(200); 
	});

