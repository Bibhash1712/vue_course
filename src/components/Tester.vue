<template >
<div>
    <h5>Testers</h5>
    <div v-bind:key="testList.id" v-for="testList in tes">
        
        <TesterList v-bind:testList="testList"  />
    </div>

    <div class="row">
        <form>
                <textarea  v-if="tesAdd" class="form-control" rows="3" v-model="newTes"></textarea>

            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
               <button class="btn btn-primary" v-if="showAdd" @click.prevent="addTester">Add Tester</button>
            </div>
        </form>
    </div>
    
    <!-- <button v-if="showAdd" @click="addTester">Add Tester</button> -->
</div>

    
</template>


<script>
import TesterList from './TesterList.vue';

export default {
    name: 'Tester',
    data: function(){
        return {
            empType: 'tester',
            tesAdd: false,

            newTes: ''
        }
    },
    components: {
        TesterList
    },
    props: ["tes", "showAdd"],
    methods: {
        addTester() {
            if(this.tesAdd) {
                this.$emit('testerAdded', this.newTes);
                this.newTes = '';
            }
            this.tesAdd = ! this.tesAdd;
        }
    }
}
</script>

<style scoped>

</style>