
var app = new Vue({
	el: '#root',
	data: {
		newName: '',
		names: ['Joe', 'Mary', 'Jane', 'Jack']
	},

	methods: {
		addName: function() {
			this.names.push(this.newName);
			this.newName = '';
		}
	}
	
});

