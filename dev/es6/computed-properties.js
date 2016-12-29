
var app = new Vue({
	el: '#root',
	data: {
		message: 'Hello World',
		tasks: [
			{description: 'Go to the store', completed: true},
			{description: 'Finish screencast', completed: false},
			{description: 'Make Donation', completed: false},
			{description: 'Clear Inbox', completed: true},
			{description: 'Make dinner', completed: true},
			{description: 'Clearn Room', completed: false},
		]
	},
	computed: {
		reverseMessage: function() {
			return this.message.split('').reverse('').join('');
		},

		incompleteTask: function() {
			return this.tasks.filter(function(task) {
				return ! task.completed
			});
		}
	}
});