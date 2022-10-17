const path = require('path');
module.exports = {
	mode: 'development',
	devtool:'cheap-module-source-map', 
	devServer:{
		hot:true,
		open:true,
		port: '3000',
		static: path.join(__dirname, 'build'),
		watchFiles: ['src/**/*'],
	}
}