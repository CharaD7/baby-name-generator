<script setup lang='ts'>
  import { Gender, Length, Popularity, names } from '@/data';

  interface OptionsState {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  }

  const options = reactive<OptionsState>({
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  });

  const computeSelectedNames = () => {
    const filteredNames = names
      .filter( ( name ) => name.gender === options.gender )
      .filter( ( name ) => name.popularity === options.popularity )
      .filter( ( name ) => {
        if ( options.length === Length.ALL ) return true;
        else return name.length === options.length;
      } );

    selectedNames.value = filteredNames.map( ( name ) => name.name );
  };

  const selectedNames = ref<string[]>([]);

  const optionsArray = [
    {
      title: "1) Choose a gender",
      category: "gender",
      buttons: [Gender.BOY, Gender.GIRL]
    },
    {
      title: "2) Choose the name's popularity",
      category: "popularity",
      buttons: [Popularity.TRENDY, Popularity.UNIQUE]
    },
    {
      title: "3) Choose the name's length",
      category: "length",
      buttons: [Length.LONG, Length.ALL, Length.SHORT]
    },
  ];

</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>
    <div class="options-container">
      <Option v-for="option in optionsArray" :key="option.title" :option="option" :options="options" />
      <button class='primary' @click='computeSelectedNames'>Find Names</button>
    </div>

    <div class="cards-container">
      <div v-for='name in selectedNames' :key='name' class='card'>
        {{ name }}
        <p>x</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    font-family: Arial, Helvetica, sans;
    color: rgb(27, 60, 138);
    max-width: 50rem;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  .options-container {
    background-color: rgb(255, 238, 236);
    border-radius: 2rem;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 4rem;
    position: relative;
  }

  .cards-container {
    display: flex;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  .card {
    background-color: rgb(27, 60, 138);
    width: 25%;
    color: white;
    border-radius: 1rem;
    padding: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
  }

  .card p {
    position: absolute;
    top: -25%;
    left: 91.5%;
    padding: 0 0.28rem;
    cursor: pointer;
    color: rgb(27, 60, 138);
    border-radius: 0.5rem;
    background-color: white;
  }

  .primary {
    background-color: rgb(249, 87, 89);
    color: white;
    border-radius: 6.5rem;
    border: none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }
</style>
