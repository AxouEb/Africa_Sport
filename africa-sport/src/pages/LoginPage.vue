<template>
  <q-page  class="w-full" >
    <div>
      <div>
        <q-img src="../assets/logoafrica.png"   width="160px"  height="160px"  style="display: block; margin: 25px auto; " />

      </div>
      <div class="q-ma-sm" >
        <div >E-mail</div>

        <q-input outlined v-model="text"   class="q-mb-xs "   required standout="bg-white text-black"
                 :rules="[val => !!val || 'le Email d utilisateur est obigatoire', val => /.+@.+\..+/.test(val) || 'Email must be valid']">

        </q-input>
      </div >
      <div class="q-ma-sm">
        <div >Mot de passe</div>
        <q-input outlined no-caps standout="bg-white text-black"   v-model="password"  :type="isPwd ? 'password' : 'text'" :rules="[val => !!val || 'Le mot de passe', val => /.+@.+\..+/.test(val) || 'Email must be valid']">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
          </template>
        </q-input>
      </div>

      <div class="q-px-sm  ">

          <q-checkbox color="green"  class="text-grey-7" v-model="rememberMe" label="Se souvenir de moi"/>

          <router-link :to="{ path: '/' }"  style="text-decoration: none;"  class="q-ml-xl text-green-8">Mot de passe oublié ?</router-link>

      </div>

      <q-card-section class="q-pa-none  q-ma-sm q-py-md text-center" push>
        <q-btn size="lg" class="full-width bg-green-7 text-white" push no-caps label=" Continuer" @click="login" />
      </q-card-section>
      <div class="q-mt-xs text-center">
        <div class="col">

            <q-avatar   >
              <img src="../assets/tooceka.png" />
            </q-avatar>


        </div>
      </div>
      <div class="q-mt-sm q-mr-xl text-center ">
      <router-link :to="{ path: '/' }"   class="q-ml-xl text-red-8">Terms et Préférences</router-link>
      </div>







    </div>









    <!--
    <div class="signUp-link text-center q-pb-md">
      <p class="q-mt-md">Vous n'avez pas de compte ?
        <router-link :to="{ path: '/register' }" class="text-primary">S'inscrire</router-link>
      </p>
    </div> -->

  </q-page>
</template>

<script>
export default {

  data() {
    return {
      text: '',
      password: '',
      isPwd:'true',
      dense: 'false',
      rememberMe:'false',
    }
  },
  methods: {
    login() {
      // Logique de connexion ici
    },
    activateAccount() {
      // Logique d'activation de compte ici
    },
    forgotPassword() {
      // Logique pour mot de passe oublié ici
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.q-page {
  //background: url('/path-to-your-background-image.png') no-repeat center center fixed;
  background-size: cover;
}
</style>
