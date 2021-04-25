<template>
    
        <div class="first">
            <h1>Bibhash Resources</h1>
            {{msg}}
        </div>

    
  
</template>

<script>
export default {
  name: 'Company',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  
.first {
  background-color: white;
  width: 400px;
  height: 50px;
  border: 1px solid red;
  padding: 25px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  text-align: center;
}
</style>