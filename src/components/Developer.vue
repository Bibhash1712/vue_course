<template >
<div>
    <!-- console.log('Developer div'); -->
    <h5>Developers</h5>
    <div v-bind:key="devList.id" v-for="devList in dev">
        
        <DeveloperList v-bind:devList="devList"  />
        
    </div>
    <div class="row">
        <form>
                <textarea  v-if="empAdd" class="form-control" rows="3" v-model="newEmp"></textarea>

            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
               <button class="btn btn-primary" v-if="showAdd" @click.prevent="addDeveloper">Add Developer</button>
            </div>
        </form>
    </div>
    <!-- <button v-if="showAdd" @click="addDeveloper">Add Developer</button> -->
</div>
    
</template>


<script>
import DeveloperList from './DeveloperList.vue';

export default {
    name: 'Developer',
    data: function(){
        return {
            empType: 'developer',
            empAdd: false,
            
             newEmp: ''
        }
    },
    components: {
        DeveloperList
    },
    props: ["dev", "showAdd"],
    methods: {
        addDeveloper() {
            if(this.empAdd) {

                //for validation check for newEmp length and other things
                this.$emit('employeeAdded', this.newEmp);
                this.newEmp = '';
            }
            console.log('developer Added');
            this.empAdd = ! this.empAdd;
        }
    }
}
</script>

<style scoped>

</style>