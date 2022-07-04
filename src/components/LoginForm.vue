<template>
    <div class="loginForm">
        <div class="loginHeader">
            <!-- <div class="loginTitle">Login</div> -->
            <div class="loginSubtitle">
                Bitte loggen Sie sich mit denen in der Bewerbungsmail stehenden Zugangsdaten ein.
            </div>
        </div>
        <Form @submit="handleLogin" :validation-schema="schema">
            <div class="input-parent flex">
                <div class="input-child flex">
                    <Field name="identifier" type="text" value="" v-model="identifier" placeholder="Username" />
                    <ErrorMessage name="identifier" />
                </div>
                <div class="input-child flex">
                    <Field name="password" type="text" value="" v-model="password" placeholder="Password" />
                    <ErrorMessage name="password" />
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
            identifier: yup.string().required("Bitte geben Sie Ihren Username ein."),
            password: yup.string().required("Bitte geben Sie Ihr Passwort ein."),

        })
        return {
            schema,
            loading: false,
            identifier: "henkelmax",
            password: "Felix123",
        }
    },
    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 3000)
        },
        handleLogin(user) {
            console.log(user);
            strapiService.login(user).then(response => {
                console.log(response)
                if (response.error) {
                    // error handling
                    console.log(response.error);
                } else {
                    // save and use userbased content
                    this.$parent.$emit('setUserbasedContent', response);
                    window.localStorage.setItem('userbasedContent', JSON.stringify(response.user))
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

.loginForm {
    width: 100%;
    .loginHeader {
        text-align: center;
        margin-bottom: 3rem;

        .loginTitle {
            font-size: 300%;
        }
    }

    .input-parent {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .input-child {
            width: 100%;

            span {
                color: red;
            }
        }

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