<template>
  <v-container>    
        <v-progress-linear :indeterminate="true" v-show="loading"></v-progress-linear>
        <v-alert
            dense
            type="error"
            v-show="isError"
        >
            {{errorMsg}}
        </v-alert>
        <v-row
            v-for="(item,i) in items"
            :key="i"
        >
            <v-col>
                <v-card>
                    <v-card-title>
                        {{item.name}}
                    </v-card-title>
                    <v-card-text>
                        <div>{{item.title}}</div>
                        <div>{{item.location}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
import {service} from '../_services'

export default {
  data () {
    return {
      loading: true,
      isError: false,
      errorMsg : '',
      items: [],
    }
  },
  created() {
    this.load();
  },
  methods: {
     load(){
      this.loading = true;
      service.getWorkers()
        .then(
          data => {
            this.loading = false;
            this.items = data;
          },
          e => {
            this.loading = false;
            this.isError = true;
            this.errorMsg = "Need a running server. Run hapi server in /_devapi";
            console.log("e");
            console.log(e);
          }      
        )
     }
  }

}
</script>

