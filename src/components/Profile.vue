<template>
  <v-container list-md>
    
    <v-row>
        <v-col>
            <v-card>
                <v-carousel>
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-card class="text-center">
                <v-row justify="space-around">
                    <v-col>
                        <v-avatar
                        color="primary"
                        size="80"
                        >
                            <img
                                src="https://randomuser.me/api/portraits/men/85.jpg"
                                alt="Martin"
                            >
                        </v-avatar>
                    </v-col>
                </v-row>
                            
                <v-card-title class="justify-center">
                    {{headline.name}}
                </v-card-title>    

                <v-card-text class="font-weight-light justify-center">
                    {{headline.role}}
                </v-card-text>       
                <v-divider></v-divider>
 
                <v-card-actions>
                <v-btn
                    text
                    color="deep-purple accent-4"
                >
                    Edit
                </v-btn>
                </v-card-actions>
                </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card
            class="mx-auto"
            
            >
            <v-card-title>
            <span class="title font-weight-bold">About</span>
            </v-card-title>

            <v-card-text class="font-weight-light">
                {{about}}
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Edit
            </v-btn>
            </v-card-actions>
        
        </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-card>
                <v-card-title >
                    Experience
                </v-card-title>    

                
                <v-container
                    v-for="(experience, i) in experiences"
                    :key="i"
                >
                    <v-row no-gutters>
                    <v-col
                        cols="2"
                        md="2"
                        class="pa-4"
                    >
                    <v-img                     
                        :lazy-src="experience.logo"
                        max-height="70"
                        max-width="70"
                        :src="experience.logo"
                    ></v-img>
                    </v-col>
                    <v-col
                        cols="8"
                        md="10"
                    >
                        <v-card-text>
                            <div class="font-weight-bold">{{experience.company}}</div>
                            <div class="font-weight-regular">{{experience.title}}</div>
                            <div class="font-weight-light">{{experience.period}}</div>
                            <p class="font-weight-light breaklines mt-4">{{experience.desc}}</p>
                        </v-card-text>
                    </v-col>
                    </v-row>
                </v-container>

                
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
        headline:{
            name: "Martin Utama",
            role: "Certified Welder, Construction"
        },
        
        about: "I am a Scala/Java software engineer with passion in functional programming and multi-threaded system. Throughout my career I have developed various applications from Android, database, back end, front end, and cloud. I'm an eager learner and always look for an opportunity to grow.",
        experiences: [
            {
                logo: "https://media-exp1.licdn.com/dms/image/C510BAQEAuF55wOgC_A/company-logo_100_100/0?e=1609372800&v=beta&t=Hjxxc6EHA7-iNW1dSPr5CwWIbH4gy1FCF1XP5D8SMuA",
                company: "Bebit",
                title: "Software Enginner",
                period: "Dec 2019 - Feb 2020, 1 yr 4 mos",
                desc: "Software consultancy specialized in Scala, Java and Node-based stack and cloud.\n● Built trading bots for an alt-coin to market make at several exchanges (HitBTC, OKEx, etc).\n● Designed solution with Vert.x with Scala to create stateless and fully non-blocking server from request to database and to provide simplified alternative to Spring and Play.\n● Developed item search engine to look up for item and stores that sell it.",
            },
            {
                logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEhoWmUYr99bQ/company-logo_100_100/0?e=1609372800&v=beta&t=b0pki5HCDJjoQ8w5IuiKdGc4qWmwFwBJ3sJbybqa-AU",
                company: "Covid Watch",
                title: "Volunteer",
                period: "Dec 2019 - Feb 2020, 1 yr 4 mos",
                desc: "Covid Watch is a volunteer group starting in Stanford U. to develop decentralized Covid-19 contact-tracing application. The goal is to warn users of past contact with infected persons, to protect the privacy of the infected when reporting their symptoms, and to prevent misuse of tracing data.I'm currently tasked to help build the backend software.",
            },
        ], 
        items: [
          {
            src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1545186070-de624ed19875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          },
          {
            src: 'https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' 
          }
        ],
    }),
  }
</script>

<style>
.breaklines {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
}
</style>