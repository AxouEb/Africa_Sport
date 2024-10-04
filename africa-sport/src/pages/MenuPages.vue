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
          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>


      <q-list class="q-mt-xl"  style="height: 100px;" >


        <q-item-label class="text-red-9 text-h5 q-mt-xl " header>Menu</q-item-label><q-separator />
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>Équipes</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>Calendrier Sportif</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="tv" />
          </q-item-section>
          <q-item-section>TV</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="emoji_events" />
          </q-item-section>
          <q-item-section>Pronostique</q-item-section>
        </q-item><q-separator />

        <q-item-label  class="text-red-9 text-h5 q-mt-lg" header>Services</q-item-label><q-separator />
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>mon profil</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="notifications" />
          </q-item-section>
          <q-item-section>Notifications</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>Informations</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="local_activity" />
          </q-item-section>
          <q-item-section>Tickets</q-item-section>
        </q-item><q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="event_available" />
          </q-item-section>
          <q-item-section>Évents</q-item-section>
        </q-item> <q-separator class="q-ml-xl" />

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="wallet" />
          </q-item-section>
          <q-item-section>wallet</q-item-section>
        </q-item> <q-separator class="q-ml-xl" />


        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="phone_in_talk" />
          </q-item-section>
          <q-item-section>Contacts</q-item-section>
        </q-item>
        <q-separator />




      </q-list>

      <q-footer bordered class="bg-grey-3   ">
        <q-tabs  no-caps active-color="red" indicator-color="transparent" class="text-black  " v-model="tab">
          <q-tab icon="whatshot" @click="goToHome"  style="width: 80px" >
            <span><strong>ACCEUIL </strong></span>
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
          <q-tab icon="menu" name="menu"   style="width: 50px"  >
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

export default {
  data () {
    return {
      tab: ref('menu'),
      leftDrawerOpen:
        false
    }
  },
  methods:
    {
      goToHome () {
        this.$router.push('/home')
      }
    }
}
</script>
