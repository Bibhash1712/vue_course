<template>

    <div class="user-list" v-bind:class="{'is-complete':!devList.complete}">
    
    <p>

        <input type="checkbox" v-on:change="markComplete" class="box-color">

        {{devList.id + " ::: " + devList.devName}}
    </p>
    </div>
</template>

<script>
export default {
    name: "DeveloperList",
    props: ["devList"],
    methods: {
        markComplete() {
            this.devList.complete = !this.devList.complete;
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