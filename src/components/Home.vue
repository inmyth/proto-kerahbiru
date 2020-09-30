<template>
  <v-container list-md>
    
    <v-row>
        <v-col>
            <v-card>
                <v-card-text>
                    {{lehome}}
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
        lehome: 'This is Home'
    }),
  }
</script>
