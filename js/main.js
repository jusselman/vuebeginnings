
new Vue ({
    el: '#exercise',
    data: {
      value: ''

},
    methods: {
      alertWarning: function() {
        alert('You have been warned');
      }
    }
});

new Vue({
        el: '#app',
        data: {
            counter: 0,
            x: 0,
            y: 0
        },

        methods: {
          increase: function(step) {
            this.counter += step;
          },
          updateCordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
          },
          alertMe: function() {
            alert('Alert!')
          }


        }
    });
