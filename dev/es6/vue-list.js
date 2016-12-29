var app = new Vue({
	el: '#root',
	data: {
		names: ['Joe', 'Mary', 'Jane', 'Jack']
	},
	mounted: function() {
			document.querySelector('#button').addEventListener('click', function() {
			name = document.querySelector('#input').value;
			app.names.push(name);
		});
	} 
});

