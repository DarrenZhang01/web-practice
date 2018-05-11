// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const one = {
    template:
        `<div>
        </br>
        <center>
            <input v-model="welcome" style="width:300px; height=50px"></input>
        </center>
        <center><p>Check if this is what you want to say:</p></center>
        <center><p>{{ welcome }}</p></center>
        </div>`,
    data: function () {
        return {
            welcome: "You are seeing this dynamically rendered page!"
        };
    }
};

const two = {
    template: '<h3><center>This is the second view</center></h3>'
};

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/view1', component: one },
  { path: '/view2', component: two }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
