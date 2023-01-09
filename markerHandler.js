AFRAME.registerComponent('markerHandler', {
    init: async function(){
        this.el.addEventListener('markerFound', ()=>{
            this.handleMarkerFound();
        });

        this.el.addEventListener('markerLost', ()=>{
            this.handleMarkerLost();
        });
    },

    handleMarkerFound(){
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.style.display = 'flex';
        var summaryButton = document.getElementById('order-summary');
        var orderButton = document.getElementById('order-button');
        summaryButton.addEventListener('click', function(){
            swal({
                icon: 'warning',
                title: 'Order Summary',
                text: 'Work in Progress'
            });
        });

        orderButton.addEventListener('click', function(){
            swal({
                icon: 'warning',
                title: 'Thanks for Ordering',
                text: 'Your order will be complete soon'
            });
        });
    },
    
    handleMarkerLost(){
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.style.display = 'none';
    },
})