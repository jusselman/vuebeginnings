

new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result: function() {
            return this.value < 37 ? 'Not enough' : '37 or more';
          }
        },
        watch: {
          result: function(value) {
            var reset = this;
            setTimeout(function() {
              reset.value = 0;
          }, 5000);
        }
      },
    });


// new Vue ({
//     el: '#app',
//     data: {
//       counter: 0,
//       secondCounter: 0
//           },
//       computed: {
//         output: function() {
//           console.log('Computed');
//           return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//         }
//       },
//       watch: {
//         counter: function(value) {
//           setTimeOut(function())
//         }
//       },
//     methods: {
//       result: function() {
//         console.log('Method');
//         return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
//         // return this.secondCounter > 5 ? 'Greater than 5' : 'Smaller than 5'
//       }
//     }
//
//
//   });
