<template>
<v-container fill-height class="justify-center" >
    <v-card height="100%" width="80%" class="pa-2" >
        <v-row> 
            <v-col >         
                <v-row >
                    <v-col md="4" xs="6" align="center">
                        <v-img
                        lazy-src="https://images.youracclaim.com/size/340x340/images/d67d6178-99f2-48dd-b757-b6e717e1bccf/Oracle-Certification-badge_OC-Associate600X600.png"
                        max-width="300"
                        src="https://images.youracclaim.com/size/340x340/images/d67d6178-99f2-48dd-b757-b6e717e1bccf/Oracle-Certification-badge_OC-Associate600X600.png"
                        ></v-img>
                    </v-col>
                    <v-col >
                    <v-card-title class="text-h4">
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
                            <div class="text-overline font-weight-light">Issued to</div>     
                            <div class="text-h4">{{name}}</div>                 
                        </v-card-text>
                    </v-row>
                    <v-row>
                        <v-col md="2">
                            <div class="text-overline font-weight-light">Accepted</div>     
                            <div class="text-h6">{{date.accepted}}</div>    
                        </v-col>
                        <v-col>
                            <div class="text-overline font-weight-light">Valid</div>     
                            <div class="text-h6">{{date.end}}</div>   
                        </v-col>
                    </v-row>
                    </v-col>

                </v-row>

            
            </v-col>
        </v-row>
        <v-row>


        </v-row>
    </v-card>
 
</v-container>
</template>

<script>
  export default {
    data: () => ({
        title: 'Sertifikat Juru Las - Juru Las Kelas Tiga',
        issuer: 'Departemen Tenaga Kerja',
        desc: 'Juru las tersebut diijinkan melaksanakan pengelasan sampai batas-batas yang ditetapkan dalam peraturan dan diwajibkan menerapkan melaksanakan Prinsip-prinsip Keselamatan Kerja',
        skills: [
            'gas-welding',
            'kelas-3',
            'electric-welding',

        ],
        name: 'Martin Utama',
        date: {
            accepted: '2020 Aug 21',
            end: '2023 Aug 21'
        }
    }),
    created() {
    }
  }
</script>