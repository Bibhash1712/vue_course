<template>
    <div class="user-list" v-bind:class="{'is-complete':!user.complete}">
    
    <p>

        <input type="checkbox" v-on:change="markComplete" class="box-color">

        {{user.id + " ::: " + user.name}}
    </p>
    </div>
</template>

<script>
export default {
    name: "UserList",
    props: ["user"],
    methods: {
        markComplete() {
            this.user.complete = !this.user.complete;
            console.log(123);
        }
    }
}
</script>

<style scoped>
.user-list {
    background: #a1c7e4;
    padding: 1px;
    size: 100px;
    border-bottom: 1px #ccc dotted;
}

.is-complete{
    text-decoration: line-through;
    
}
.box-color{
    background: #051824;
}
</style>

 