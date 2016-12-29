Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

	data: function() {
		return {
			tasks: [
				{description: 'Go to the store', completed: true},
				{description: 'Finish screencast', completed: false},
				{description: 'Make Donation', completed: false},
				{description: 'Clear Inbox', completed: true},
				{description: 'Make dinner', completed: true},
				{description: 'Clearn Room', completed: false},
				]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

app = new Vue({
	el: '#root'
});