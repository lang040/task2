
<template>
 <div id="app">
 <nav class="navbar navbar-expand navbar-dark bg-info">
    <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active">Home</router-link> 
      <router-link to="/order" class="nav-item nav-link">Order</router-link>
       <router-link to="/grap" class="nav-item nav-link">Grap</router-link>
    </div>
</nav>
 
    
    
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
