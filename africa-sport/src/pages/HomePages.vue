<template>
  <div class="">
    <q-layout view="lHh lpr lFf"   class="shadow-2 rounded-borders">
      <q-header bordered class="bg-red-7" style="height: 60px">
        <q-toolbar class="q-mt-sm">
          <q-btn flat round dense icon="account_circle" />

          <q-toolbar-title class="text-center">
            <q-avatar>
              <img src="../assets/logoafrica.png">
            </q-avatar>
          </q-toolbar-title>
          <q-btn flat round dense icon="search" class="q-mr-xs"  @click="goToRechPage" />
        </q-toolbar>
      </q-header>


      <div style=" height: 50px;">


      <q-card flat class="q-ma-md q-mt-xl " style="border-radius: 20px;border: 2px solid #cccccc; top: 30px ;" >
        <q-card-section>
          <div class="row justify-center ">
            <div class="col q-mt-md">

                <img src="../assets/logoafrica.png" style="width: 55px; height: 55px">


            </div>
            <div class="col-6 text-center">
              <div class="text-h6">Bundesliga </div>
              <div class="text-blue-grey-8">
                Matchday 7 Sat | 19 Oct 2024 | 16:30</div>
              <div>
                <q-badge  color="grey-4 text-primary"> 16 days</q-badge>

                <q-badge   color="grey-4 text-primary"> 6 hrs</q-badge>

                <q-badge color="grey-4 text-primary">35 mins</q-badge>
              </div>
            </div>
            <q-toolbar-title class=" col q-mt-md text-center">

                <img src="../assets/EFYM.png" style="width: 55px; height: 55px">

            </q-toolbar-title>
          </div>
        </q-card-section>
      </q-card>


      <q-card flat class="q-ma-md q-mt-md  bg-indigo-10" style="border-radius: 20px;border: 2px solid #cccccc; top: 30px" >
        <q-card-section>
          <div class="row items-center">

            <div class="text-white text-subtitle7" > <strong>Champions League</strong>
              Matchday 2| Wed |2 Oct 2024 |</div>
          </div>
          <div class="row justify-center ">
            <div class="col q-mt-sm">

                <img src="../assets/ISAC.png" style="width: 60px; height: 60px">


            </div>
            <div class="col-6 text-center">


              <div class="col-6 text-h5 justify-center q-mt-lg ">
                <div >
                  <q-badge  style="height: 40px; border-radius: 10px; width: 35px;" color="indigo-3 text-white justify-center"> <strong> 1</strong> </q-badge>

                  <q-badge  style="height: 40px; border-radius: 10px; width: 35px"  color="indigo-3 text-white justify-center"> FT</q-badge>

                  <q-badge  style="height: 40px; border-radius: 10px; width: 35px" color="indigo-3 text-white justify-center"> <strong> 0 </strong> </q-badge>
                </div>
                <div class="text-subtitle1 text-center text-white">(0:0)</div>
              </div>
            </div>
            <q-toolbar-title class=" col q-mt-md text-center">

              <img src="../assets/SOLFC.png" style="width: 60px; height: 60px">

            </q-toolbar-title>
          </div>
        </q-card-section>
      </q-card>

      </div>


      <q-footer bordered class="bg-grey-3 text-primary justify-center ">
        <q-tabs  no-caps active-color="red" indicator-color="transparent" class="text-black  " v-model="tab">
          <q-tab icon="whatshot" name="home" style="width: 80px" >
            <span><strong>ACCUEIL </strong></span>
          </q-tab>


          <q-tab  icon="stadium" style="width: 73px">
            <span><strong>MATCH  </strong></span>
          </q-tab>
          <q-tab icon="shopping_bag"  style="width: 83px"  >
            <span><strong>BOUTIQUE </strong></span>
          </q-tab>
          <q-tab icon="payments"  >
            <span><strong> COMPTE </strong></span>
          </q-tab>

          <q-tab icon="menu" name="menu" @click="goToMenuPage"  style="width: 50px" >
            <span><strong>MENU </strong></span>
          </q-tab>

        </q-tabs>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">

        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'


export default {

  data () {


      return {
        teamALogo: 'path/to/team_a_logo.png',
        teamBLogo: 'path/to/team_b_logo.png',
        scores: [
          { type: '', value: 1 },
          { type: 'FT', value: '' },
          { type: '', value: 0 }
        ],
      tab: ref('home'),
      leftDrawerOpen:
        false
    }
  },
  methods:
    {
      goToRechPage () {
        this.$router.push('/recherche')
      },
      goToMenuPage() {
        this.$router.push('/menu'); // Si vous utilisez Vue Router
        // Ou une autre méthode de navigation selon votre framework
      }
    }

}
</script>







