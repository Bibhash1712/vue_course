<template>
  <div id="vueInstance">
    <div  >  
      <!-- <table>
        <tr>
          <td><button  @click="showEmployees">{{exten}}</button></td>
          <td><button v-if="show" @click="addEmployees">{{edit}}</button></td>
        </tr>
      </table>
      <table>
        <tr>
          <td><Developer v-if="show" v-bind:dev="developers" :showAdd="showAdd" :edit="edit" @employeeAdded="newDeveloper($event)"/></td>
          <td><Tester v-if="show" v-bind:tes="testers" :showAdd="showAdd" :edit="edit" @testerAdded="newTester($event)"/> </td>
        </tr>
      </table> -->
      
      
      

    </div>


    <div>
        UserApp-Ready to go!!!!!!!!!!!!!!!!
    </div>
    <!-- <div id = "form11">
        <Form11 />
    </div> -->

    

  </div>
</template>

<script>
// import Company from './components/Company.vue'
// import Developer from './components/Developer.vue'
// import Tester from './components/Tester.vue'
//import Form11 from './FormsApp/Form11.vue'

export default {
  name: 'newApp',
  components: {
   // Form11
    
  },
  data: function() {

    return {
       

    }
  },
  
  methods: {
    
  }
}
</script>

<style scoped>

.all_resource {
  background-color: white;
  width: 150px;
  /* height: 20; */
  /* border: 1px solid grey; */
  padding: 0px;
  margin: 175px;
  text-align: center;
}

/* .first {
  background-color: white;
  width: 400px;
  height: 50px;
  border: 1px solid red;
  padding: 25px;
  margin: 155px;
  text-align: center;
} */
.btn:hover
{
background-image:none;
background-color:#ff00ff;
}
tr:hover td {
   background-color: rgb(214, 196, 196);
}
</style>
