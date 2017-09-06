module.exports = () => {
	return [
		{
			entry: {'test': 'test.js'} ,
			resolve: { modules: ['node_modules', 'src'], extensions: ['.js'] },
			output: {
				filename: '[name]_built.js'
			}
		}
	];
};
