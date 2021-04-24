<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Enjoy Learning Vue</h1> -->
    <!-- {{arr}} -->
    <Users v-bind:users="arr"/> 

  </div>
</template>

<script>
//  import HelloWorld from './components/HelloWorld.vue'
import Users from './components/Users';

export default {
  name: 'app',
  components: {
    Users
    
  },
  data() {
    return {
       
      arr: [
        // {msg:'Rakuten::::'},
        {
          id: 123,
          name: 'bibhash',
          complete: true
        },
        {
          id: 456,
          name: 'ankur',
          complete: true
        },
        {
          id: 789,
          name: 'akshat',
          complete: false
        }

      ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
