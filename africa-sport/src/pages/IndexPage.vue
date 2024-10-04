<template>
  <q-page class="flex flex-center">

    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="width: 400px; max-width: 90vw;">
        <q-card-section>
          <div class="text-h6">Connexion à votre espace d'administration</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="email"
            label="Email ou Contact"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            label="Mot de passe"
            type="password"
            outlined
          />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            label="CONNEXION"
            color="orange"
            @click="login"
          />
        </q-card-actions>

        <q-card-section align="center">
          <q-btn
            flat
            label="Activation du compte"
            @click="activateAccount"
          />
          <q-btn
            flat
            label="Mot de passe oublié ?"
            @click="forgotPassword"
          />
        </q-card-section>

        <q-card-section class="text-center text-caption">
          Tous droits réservés TOOCEXA 2023
        </q-card-section>
      </q-card>
    </q-page>


  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
