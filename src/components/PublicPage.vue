<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3" >
      <v-alert v-if="alert.message" :type="alert.type" :value="true" class="subheading">{{alert.message}}</v-alert>

      <v-container fill-height fluid justify-center>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    computed: {
        alert () {
            return this.$store.state.alert
        }
    },
    watch:{
        $route (to, from){
            // clear alert on location change
            console.log(to + "" + from);
            this.$store.dispatch('alert/clear');
        }
    },
    created() {
    }
  }
</script>