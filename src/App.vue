<template>
  <div id="app">
    <router-link to="/helloworld" class="router-link-button">HelloWorld</router-link>
    <router-link to="/aboutpage" class="router-link-button">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-button {
  margin-right: 10px; /* 마지막 요소에는 제거 필요 */
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

/* .router-link-button:last-child {
  margin-right: 0;
} */
</style>
