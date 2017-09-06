const path = require('path');

module.exports = () => {
	return [
		{
			entry: {'test': 'test.js'} ,
			resolve: { modules: ['node_modules', 'src'], extensions: ['.js'] },
			module: {rules: [{test: /\.js$/, use: [{loader: 'cache-loader', options: {cacheDirectory: path.resolve('node_modules/.cache-loader-cache')}}, 'babel-loader']}]},
			output: {
				filename: '[name]_built.js'
			}
		}
	];
};
