<template>
    <div class="loginForm">
        <div class="loginHeader">
            <!-- <div class="loginTitle">Login</div> -->
            <div class="loginSubtitle">
                Bitte loggen Sie sich mit denen in der Bewerbungsmail stehenden Zugangsdaten ein.
            </div>
        </div>
        <Form @submit="handleLogin" :validation-schema="schema">
            <div class="input-parent flex" :class="displayBreakpointName">
                <div class="input-child flex">
                    <Field name="identifier" type="text" value="" v-model="identifier" placeholder="Username" />
                </div>
                <div class="input-child flex">
                    <Field name="password" type="password" value="" v-model="password" placeholder="Password" />

                </div>
                <div class="errorParent flex">
                    <ErrorMessage name="password" />
                    <ErrorMessage name="identifier" />
                </div>
                <div class="button-child flex">
                    <button class="flex" :disabled="loading">
                        <span v-if="!loading">Login</span>
                    </button>
                </div>
            </div>
            <div>
                <div v-if="message" role="alert">
                    {{ message }}
                </div>
            </div>
        </Form>

    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import strapiService from '@/services/strapi.service'
export default {
    name: "LoginForm",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data: () => {
        const schema = yup.object().shape({
            identifier: yup.string().required("Bitte geben Sie Ihren Benutzername ein."),
            password: yup.string().required("Bitte geben Sie Ihr Passwort ein."),
        })
        return {
            schema,
            loading: false,
            identifier: "",
            password: "",
        }
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    methods: {
        /**
         * Sets a loading state to a button
         */
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 3000)
        },
        /**
         * verifies the login of a user
         * @param {Array} user {identifier: String, password: String}
         */
        handleLogin(user) {
            // request from the API if the user credentials are fitting
            strapiService.login(user).then(response => {
                // if theres an error with the credentials, we inform the user to try it again
                if (response.error) {
                    // error handling
                    let alertInfo = {
                        type: "error",
                        text: "Anmeldung war nicht erfolgreich. Bitte überprüfen Sie Benutzername und Passwort."
                    }
                    // emit the alert to app.js
                    this.$parent.$emit('setAlert', alertInfo);
                } else {
                    // save and use userbased content
                    this.$parent.$emit('setUserbasedContent', response);
                    window.localStorage.setItem('userbasedContent', JSON.stringify(response.user))
                    window.localStorage.setItem('jwt', JSON.stringify(response.jwt));
                    // Set expiration date of Login
                    window.localStorage.setItem('login_expires', (1000 * 60 * 60 * 7) + Date.now())
                    // change the view
                    this.$emit('loginDone');
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

html,body {
    height: 100%; /* Needed for container's min-height  */  
}
.errorParent {
    max-width: 50vw;

    span {
        width: 100%;
        text-align: center;
    }
}

.loginForm {
    width: 100%;

    .loginHeader {
        text-align: center;
        margin-bottom: 3rem;

        .loginTitle {
            font-size: 300%;
        }
    }

    .input-parent.xxl,
    .input-parent.xl,
    .input-parent.lg,
    .input-parent.md {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .input-child {
            flex: 0 0 50%;
            width: 50%;

            span {
                color: red;
            }
        }

    }

    .input-parent.xs,
    .input-parent.sm {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .input-child {
            width: 100%;
        }
    }

    .input-parent {
        input {
            border: 1px solid $primary_color;
            color: $primary_color;
            width: 80%;
            margin: 2% 8%;
            padding: 6%;
            border-radius: 32px;
            height: 3rem;
            background: $secondary_color;
            color: white;
            font-weight: bold;
        }

        .button-child {
            width: 100%;

            button {
                background: $secondary_color;
                border: 1px solid $primary_color;
                border-radius: 32px;
                margin: 2% 8%;
                color: white;
                height: 3rem;
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }


    }


}
</style>

<style>
/* .custom-loader {
    animation: loader 1s infinite;
    display: flex;
}

@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
} */
</style>