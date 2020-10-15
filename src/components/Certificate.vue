<template>
<v-container fill-height class="justify-center" >
    <v-card height="100%" width="70%" class="pa-2" >
        <v-row> 
            <v-col>         
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
                        <v-col >
                            <div class="text-overline font-weight-light">Accepted</div>     
                            <div class="">{{date.accepted}}</div>    
                        </v-col>
                        <v-col>
                            <div class="text-overline font-weight-light">Valid</div>     
                            <div class="">{{date.end}}</div>   
                        </v-col>
                    </v-row>
                    </v-col>

                </v-row>
                <v-row class="pa-6">
                    <v-col>
                        <v-list dense>
                            <v-subheader class="text-h6 font-weight-light">Perusahaan pemakai sertifikat</v-subheader>
                            <v-list-item-group
                                color="primary"
                            >
                                <v-list-item
                                v-for="(company, i) in companies"
                                :key="i"
                                inactive
                                >
                                <v-row justify="space-between">
                                    <v-col md="11" xs="12">                                    
                                            <div>{{company.name}}</div>
                                    </v-col>
                                    <v-col>                                     
                                            <div class="font-weight-light">{{company.count}}</div>
                                    </v-col>
                                </v-row>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
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
        },
        companies: [
            {
                name: 'BP',
                count: 1000,
            },
            {
                name: 'Chevron',
                count: 500
            },
            {
                name: 'KBR',
                count: 400
            },
            {
                name: 'Pertamina',
                count: 300
            }

        ]
    }),
    created() {
    }
  }
</script>