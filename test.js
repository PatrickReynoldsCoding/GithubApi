const got = require('got');

const {headers} = await got(
	'https://httpbin.org/anything',
	{
		headers: {
			foo: 'bar'
		}
	}
).json();