<template>
<div class="container">
  <menues></menues>
  <h2>Profile Page</h2>
  <div class="panel panel-default">
  <div class="panel-body">Profile Page</div>
</div>
</div>

</template>

<script>
    import Menues from './menues.vue'; 
    export default {
        components:{
         'menues':Menues
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
