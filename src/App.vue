<template>
  <div id="app">
    <Company msg="Welcome to Rakuten India!"/> 
     <!-- <img alt="Vue logo" src="favicon.io">  -->
    <div  >  
      <table>
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
      </table>
      
      
      

    </div>
    

  </div>
</template>

<script>
import Company from './components/Company.vue'
import Developer from './components/Developer.vue'
import Tester from './components/Tester.vue'

export default {
  name: 'app',
  components: {
    Company, Developer, Tester
    
  },
  data: function() {

    return {
       
      developers: [
          {
            id: 123,
            devName: 'bibhash',
            complete: true
          },
          {
            id: 456,
            devName: 'ankur',
            complete: true
          },
          {
            id: 789,
            devName: 'akshat',
            complete: true
          }

      ],
      testers: [
          {
            id: 100,
            tesName: 'imran',
            complete: true
          },
          {
            id: 101,
            tesName: 'deepak',
            complete: true
          },
          {
            id: 102,
            tesName: 'vishal',
            complete: true
          }

      ],
      show: false,
      showAdd: false,
      exten: 'View Resources',
      edit: 'Edit Resources'

    }
  },
  
  methods: {
    showEmployees() {
      this.show =!this.show
      // console.log(this.show);
      if(this.show ? this.exten ='Hide Resources' : this.exten ='View Resources');
    },

    addEmployees() {
      this.showAdd =!this.showAdd
      if(this.showAdd  ? this.edit = 'Cancel Edit' : this.edit = 'Edit Resources');
    },
    newDeveloper(employee) {
      this.developers.push({
            id: Math.floor(Math.random() * 200),
            devName: employee,
            complete: true
          });

    },
    newTester(teste) {
      this.testers.push({
            id: Math.floor(Math.random() * 200),
            tesName: teste,
            complete: true
          });
    }
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
background-color:#fd0505;
}
tr:hover td {
   background-color: rgba(178, 62, 255, 0.842);
}
</style>
