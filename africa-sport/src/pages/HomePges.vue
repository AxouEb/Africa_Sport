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
 <div  class="q-mt-xl" style="; padding-top: 20px">

        <div class="row q-py-sm q-gutter-xs ">
          <div class="col"> Customer ID :</div>
          <div class="col-3"><q-img src="../assets/CarOy.jpg" class="rounded"  style="width: 85px; height: 55px">
          </q-img></div>
        </div>
   <div class="col-3 " style="position: absolute;top: 60px; ">  <q-badge style="height: 20px" color="black" text-color="white">
     12576 74788 46
   </q-badge></div>



        <q-card flat class="q-ma-xs">
          <div class="row q-py-sm q-gutter-xs ">

            <q-btn round @click="edit"   >
              <q-img src="../assets/C1.jpg" class="rounded"  style="width: 65px; height: 65px; border-radius: 5px">
              </q-img>
            </q-btn>
          <div class="row-1  ">
            <div><span class="text-h6">Marie-Axelle</span></div>
            <span class="text-subtitle1 text-grey-6">Supporteur</span>
            </div>
          </div>
        </q-card>


          <q-separator size="2px" />


        <q-card-section class="q-pa-none  q-ma-xs q-py-sm text-center" push>
          <q-btn size="lg" icon="credit_card" class="full-width bg-teal-10 text-white" push no-caps label=" Information CarteOyé" @click="login" />
        </q-card-section>
        <q-separator size="2px" />

        <div class="row q-py-xs q-ma-xs q-gutter-xs  ">
        <q-btn   label="Contrôle"  no-caps icon="file_copy" push  class="bg-teal-10 text-white btn-fixed-width" />
          <q-btn label="With href"  no-caps  icon="warning" push class="bg-red-7 text-white btn-fixed-width" />
         <q-btn  label="With href"   no-caps icon="car_repair"  push class="bg-grey-8 text-white btn-fixed-width" />

        </div>

        <q-separator size="2px" />


        <div class="q-pa-md  q-gutter-xs flex  "  >

        </div>

      <q-card flat class="q-ma-xs bg-red-7 " style="border-radius: 10px;border: 2px solid #cccccc; top: -30px" >
        <q-card-section>

          <div class=" row" >
            <q-icon size="30px" class="text-white items-center " name="contact_support "  />
            <div class=" col text-white "  >
              Aujourd'hui, 03/10/2024 ne fait pas partie de votre planning du mois.
            </div></div>
        </q-card-section>
      </q-card>
        <q-card flat style="top: -35px"  class="">
          <q-card-section>
      <div  class=" " style="top: 30px ">Vous êtes programmé pour 0 jour dans ce mois d'Octobre</div>

        </q-card-section>
        </q-card>

        <div class="q-pa-sm " style="position: absolute;top: 470px; height: 50px ">

          <q-btn class="bg-teal-10  text-white" label="Mon planning de travail" icon="event"  push  />


          <q-date flat class="full-width" minimal
                  v-model="date"
                  default-year-month="2024/10"

        /></div>


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
      date: ref(null),
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
      edit () {
        this.$router.push('/recherche')
      },
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







