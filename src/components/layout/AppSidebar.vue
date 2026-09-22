<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav >
        <div class="flex-coluns nav-pills gap-1">
            <RouterLink to="/Pets"> 
                <i class="bi bi-heart-fill">
                </i>
                Pets
            </RouterLink>

             <RouterLink to="/Pets/novo"> 
                <i class="bi bi-heart-fill">
                </i>
                Novo Pet
            </RouterLink>
        </div>
    </nav>
</template>