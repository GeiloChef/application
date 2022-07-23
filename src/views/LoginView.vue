<template>
    <div class="login flex secondary_color">
        <div class="flex">
            <div class="loginParent flex">
                <h1>Felix' interaktive Bewerbung</h1>
                <div v-if="!hideLoginForm" class="loginFormParent" :class="moveLoginForm ? 'LoginAnimationOut' : ''">
                    <LoginForm @loginDone="loginDone" />
                </div>
                <div v-if="hideLoginForm" :class="moveLoginForm ? 'LoginAnimationIn' : ''">
                    <LoginSetSalution @loginDone="loginDone" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import LoginSetSalution from '@/components/LoginSetSalution.vue';
export default {
    name: "LoginView",
    components: {
        LoginForm,
        LoginSetSalution
    },
    data: () => {
        return {
            moveLoginForm: false,
            hideLoginForm: false
        }
    },
    methods: {
        /**
         * triggered from the login form, this hides the login form and
         * shows the set-salution form
         */
        loginDone() {
            this.moveLoginForm = true;
            setTimeout(() => {
                this.hideLoginForm = true
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes LoginAnimationOut {
    0% {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }

    15% {
        transform: translateX(20%);
        opacity: 1;
        visibility: visible;
    }

    100% {
        transform: translateX(-200%);
        opacity: 0;
        visibility: hidden;
    }

}

.LoginAnimationOut {
    animation-name: LoginAnimationOut;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.44, .14, .34, 1);
    animation-fill-mode: forwards;
    opacity: 1;
}

@keyframes LoginAnimationIn {
    0% {
        transform: translateX(200%);
        opacity: 0;
        visibility: hidden;
    }

    85% {
        transform: translateX(-20%);
        opacity: 1;
    }

    100% {
        transform: translateX(0%);
        opacity: 1
    }

}

.LoginAnimationIn {
    transform: translateX(200%);
    opacity: 0;
    animation-name: LoginAnimationIn;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.44, .14, .34, 1);
    animation-fill-mode: forwards;}



.login {
    min-height: 100vh;
    // padding-top: 2rem;

    .loginParent {
        // margin-top: -5rem;

        .loginFormParent{
            width: 70%;
        }

        h1 {
            font-size: 350%;
            margin-bottom: 3rem;
            width: 100%;
            text-align: center;

        }

    }
}
</style>