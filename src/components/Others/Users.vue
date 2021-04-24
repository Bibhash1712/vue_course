<template>
<div>
    <div v-bind:key="user.id" v-for="user in users">
        <!-- <h3>{{user.name}}</h3> -->
        <UserList v-bind:user="user"  />
    </div>
</div>
    
</template>


<script>
import UserList from './UserList.vue';
export default {
    name: 'Users',
    components: {
        UserList
    },
    props: ["users"]
}
</script>

<style scoped>

</style>
