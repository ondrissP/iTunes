module.exports = {
	runtimeCompiler: true,
	chainWebpack: config => {
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.options({
				fix: true
			})
	},
	css: {
		loaderOptions: {
			sass: {
				data: `
					@import '@/assets/scss/_variables.scss';
				`
			}
		}
	}
}
