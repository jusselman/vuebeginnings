// new Vue({
//   el: '#app',
//   data: {
//     attachRed: false,
//     attachGreen: false,
//     attachBlue: false
//   }
// });

new Vue({
  el: '#app2',
  data: {
    attachRed: false,
    attachGreen: false,
    attachBlue: false
  },
  computed: {
    divClasses: function () {
      return {
        red: !this.attachRed,
      }
    },
    divClasses1: function () {
      return {
        green: !this.attachGreen,
      }
    },
    divClasses2: function () {
      return {
        blue: !this.attachBlue,
      }
    }

  }
});



new Vue({
  el: '#app3',
  data: {attachRed: false, color: 'green'},
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        // blue: !this.attachRed
      }
    }
  }
});

new Vue({
  el: '#app4',
  data: {
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    attachYellow: false
  },
  // computed: {
  //   divClasses: function () {
  //     return {
  //       red: this.attachRed,
  //       // green: this.attachGreen
  //     }
  //   },
  //   // divClasses1: function () {
  //   //   return {
  //   //     green: !this.attachGreen,
  //   //   }
  //   // },
  //   // divClasses2: function () {
  //   //   return {
  //   //     blue: !this.attachBlue,
  //   //   }
  //   // }
  //
  // }
});
