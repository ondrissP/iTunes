const MyHelper = {
	install(Vue) {
		Vue.prototype.$log = function(data) {
			return data
		}
	}
}

export default MyHelper
