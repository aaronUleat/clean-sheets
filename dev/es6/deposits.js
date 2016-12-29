
var app = new Vue({
    el: '#search-transaction',
    data: {
        company: '',
        pin: '',
        datefor: '',
        dateto: '',
        from: '',
        procesor: '',
        ccrbrand: '',
        profile: '',
        ccr: '',
        transactionType: '',
        transactionStatus: '',
    },
    computed: {
        searchTransaction: function () {
            return this.company ||
                    this.pin ||
                    (this.datefor && this.dateto) ||
                    this.procesor ||
                    this.ccrbrand ||
                    this.profile ||
                    this.ccr ||
                    this.transactionType ||
                    this.transactionStatus
        }
    },
    mounted: function() {
        this.getDateFor();
    },
    methods: {
        getDateFor: function() {
            $('#dateFor').datepicker();
            var myNode = document.querySelector('#dateFor').value;
        },

        getNewFor: function() {

        }
    }


});