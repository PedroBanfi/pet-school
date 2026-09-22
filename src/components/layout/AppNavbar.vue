<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <!-- As a link -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pet-school</a>

<div class="container-fluid">
    <RouterLink class="navbar-brand" to="/Pets"> Pets </RouterLink>

</div>

  </div>
</nav>


</template>