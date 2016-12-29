var app = new Vue({
	el: "#root",
	data: {
		className: 'color-red',
		title: 'This is a title taken from vue',
		isLoading: false,
	},

	methods : {
		toggleClass: function() {
			this.isLoading = true;
		}
	}
});