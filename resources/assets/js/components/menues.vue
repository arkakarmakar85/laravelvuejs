<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link :to="{name:'example'}">Home</router-link></li>
      <li><router-link :to="{name:'profile'}">Profile</router-link></li>
    </ul>
  </div>
</nav>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>