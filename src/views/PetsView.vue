<script setup>
import { onMounted, ref} from 'vue';
import { RouterLink} from 'vue-router';


const API_URL = 'http://localhost:3000';

const pets = ref ([]);
const tutores = ref ([]);
const loading = ref(true);

async function carregarDados() {
 const repostasPets = await fetch(`${API_URL}/pets`);
 pets.value = await repostasPets.json();
 console.log('pets:', pets.value);
 
 
 const repostaTutores = await fetch(`${API_URL}/tutores`);
 tutores.value = await repostaTutores.json();
console.log('tutores:', tutores.value);




 loading.value = false;
}

function nomeDoTutor(tutorId) {
  for (const tutor of tutores.value){
    // tutor.id = tutorId
    if (tutor.id = tutor.value){
      return tutor.value;
    }
  }
  return 'Tutor Não encontrado!';
}



onMounted();

</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pets cadastrados no sistema.
      </p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'addPet' }"
    >
      Adicionar Pet
    </RouterLink>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Raça</th>
      <th>Tutor</th>
    </tr>
  </thead>

  <tbody>
<tr v-for="pet in pets" :key="pet.id">
       <td>{{ pet.Id }}</td>    
      <td>{{ pet.Nome }}</td>
      <td>{{ pet.Idade }}</td>
      <td>{{ pet.Raça }}</td>
      <td>{{ pet.Tutor(pet.tutorId) }}</td>
  
</tr>

  </tbody>



</table>




  </div>
</template>
