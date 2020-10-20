<template>
<v-container fill-height class="justify-center" >
    <v-card  width="70%" class="pa-2" >
        <v-row> 
            <v-col>         
                <v-row >
                    <v-col md="4" xs="6" align="center">
                        <v-img
                        lazy-src="https://i.postimg.cc/pX0QGk1R/ordreka.jpg"
                        max-width="300"
                        src="https://i.postimg.cc/pX0QGk1R/ordreka.jpg"
                        ></v-img>
                    </v-col>
                    <v-col >
                    <v-card-title class="text-h4 break-word">
                        {{title}}
                    </v-card-title>
                    <v-card-text >
                        <span class="text-overline font-weight-light">Issued by</span> <a href="www.depnaker.go.id">{{issuer}}</a>                   
                    </v-card-text>
                    <v-card-text class="text-h6 font-weight-light">
                        {{desc}}
                    </v-card-text>
                    <template v-for="(skill,i) in skills">
                        <v-chip
                            :key="i"
                            class="ma-2"                         
                            color="orange"
                            label
                            outlined
                            >
                            {{skill}}
                        </v-chip>
                    </template>
                    <v-row>
                        <v-card-text>
                            <p class="text-subtitle-1">Issued to <span class="font-weight-bold">{{name}}</span> at {{date.accepted}}.</p>     
                            <p class="font-weight-light">With reference {{ref}}.</p>
                        </v-card-text>
                    </v-row>
                    </v-col>

                </v-row>
     
            </v-col>
        </v-row>
    </v-card>
 
</v-container>
</template>

<script>
  export default {
    data: () => ({
        title: 'Certification of Completion, Defensive Driving Training For Trailer Operator',
        issuer: 'PT Ord Rekacipta Dinamika',
        desc: 'This document certifies that the participant has passed the course assessment of trailer truck defense driving.',
        skills: [
            'defensive driving - trailer'
        ],

        name: 'Ade Erwin',
        date: {
            accepted: '2018 May 18',
        },
        ref: "ORD-01/02/2018/5695",
        companies: [
            {
                name: 'BP',
                count: 10,
            },
        ]
    }),
    created() {
    }
  }
</script>
<style>
.break-word {
    overflow-wrap: break-word;
    word-break: normal;
}

</style>