<template>
        <v-flex md2>
            <v-row >
                <v-col>
                    <v-card >      
                        <v-progress-linear :indeterminate="true" height="5" v-show="loggingIn"></v-progress-linear>
                        <v-card-text>
                            email: any@email.com
                            password: abc
                        </v-card-text>
                        <v-form v-model="valid">
                            <v-card-text>
                                <v-text-field  
                                    name="email" 
                                    :label="email.label" 
                                    type="text" 
                                    v-model="email.model"
                                    required>
                                </v-text-field>
                                <v-text-field  
                                    name="password" 
                                    :label="password.label" 
                                    type="password" 
                                    v-model="password.model"
                                    required>                        
                                </v-text-field>
                            </v-card-text>
                            <v-card-text><v-btn color="primary" block  @click="handleSubmit">Login</v-btn></v-card-text>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
</template>

<script>
export default {
    data () {
        return {
            logo: require('../assets/logo.png'),
            valid: false,
            email : {
                model : '',
                label : 'Email',
                rules : [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            },
            password : {
                model : '',
                label : 'Password',
                rules : [
                    v => !!v || 'Password is required',
                ]
            }
        }
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        handleSubmit () {
            const email = this.email.model
            const password = this.password.model
            if (email && password) {
                this.$store.dispatch('authentication/login', { email, password });
            }
        },
    }
}
</script>

