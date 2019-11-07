<template>
    <div id="app">
        <div id="nav">
            <router-link class="a" to="/">Home</router-link>|
            <router-link class="a" to="/about">About</router-link>|
            <router-link class="a" to="/npmTest">npmTest</router-link>|
            <!-- 搞一个fullpage -->
            <router-link class="a" to="/fullpage">去测试一下fullpage</router-link>|
            <router-link class="a" to="/veevalidate">去测试veevalidate</router-link>
|
            <router-link class="a" to="/fontawesome">fontawesome</router-link>
|     <router-link class="a" to="/fontmin">fontmin</router-link>
        </div>

        <router-view />
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
.a {
    margin: 10px;
}
</style>
