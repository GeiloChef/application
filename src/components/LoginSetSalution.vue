<template>
    <div class="loginSetSalution flex">
        <!-- <div class="salutionTitle">Login erfolgreich</div> -->
        <div class="salutionSubtitle">In einigen der folgenden Texte werden Sie direkt angesprochen. Bitte wählen Sie
            aus, wie ich Sie im weitern Verlauf ansprechen darf:</div>
        <div class="selection">
            <v-item-group mandatory v-model="salution">
                <v-container class="flex">
                    <div class="selection-child selection-button">
                        <v-item v-slot="{ isSelected, toggle }">
                            <v-card class="d-flex align-center" isSelected
                                :class="isSelected ? 'primary_color' : 'secondary_color'" @click="toggle">
                                <v-scroll-y-transition>
                                    <div class="buttonText flex-grow-1 text-center">
                                        Formell (Sie)
                                    </div>
                                </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                    </div>

                    <div class="selection-child flex">
                        <span>oder</span>
                    </div>

                    <div class="selection-child selection-button">
                        <v-item v-slot="{ isSelected, toggle }">
                            <v-card class="d-flex align-center"
                                :class="isSelected ? 'primary_color' : 'secondary_color'" @click="toggle">
                                <v-scroll-y-transition>
                                    <div class="buttonText flex-grow-1 text-center">
                                        Persönlich (Du)
                                    </div>
                                </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                    </div>
                </v-container>
            </v-item-group>
        </div> <!-- Selection -->

        <div class="save-button">
            <div class="button-child flex">
                <button class="flex" :disabled="loading" @click="saveSalution">
                    <span v-if="!loading">Zur interaktiven Bewerbung</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginSetSalution",
    data: () => {
        return {
            salution: 0,
        }
    },
    methods: {
        /**
         * save the user-set salution so we can edit texts later on
         */
        saveSalution() {
            let salutionCookieValue;
            if (this.salution === 0) { // 0 = formal, 1 = personal
                salutionCookieValue = "formal"
            } else {
                salutionCookieValue = "personal"
            }
            // this.$cookies.set("salution", salutionCookieValue)
            window.localStorage.setItem("salution", salutionCookieValue);
            // redirect to home
            this.$router.push('/home');
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.loginSetSalution {
    text-align: center;
    width: 100%;

    .salutionSubtitle {
        width: 75%;
        font-size: 200%;
        margin-bottom: 3rem;
    }
}

.selection {
    width: 100%;

    .v-card {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        border: 1px solid $primary_color;
    }

    .selection-button {
        width: 30%;
        margin: 0 5%;

        .buttonText {
            font-size: 200%
        }
    }
}

.save-button {
    width: 100%;

    .button-child {
        width: 100%;

        button {
            background: $secondary_color;
            border: 1px solid $primary_color;
            border-radius: 32px;
            margin: 2% 8%;
            color: white;
            height: 3rem;
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>