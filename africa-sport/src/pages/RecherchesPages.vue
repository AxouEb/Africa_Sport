<template>
  <div class="q-pa-md bg-red-7"  >
    <q-layout view="lHh lpr lFf"  >
      <q-header bordered class="bg-red-7 " style="height: 50px ;" >
        <q-toolbar class="q-mt-sm">

          <q-space />

          <q-btn round dense flat icon="close" class="text-white q-ml-sm " @click="goToHome" />

        </q-toolbar>
      </q-header>

      <div class="row  q-pa-sm">
        <q-btn round dense flat icon="close" class="text-white q-ml-sm items-end" />
      </div>
          <div class=" cursor-pointer bg-white" style="border-radius: 30px">
            <q-input   v-model="text"  rounded outlined  standout="bg-white text-grey"  placeholder="Enter search term..."  class="rounded-borders"  style="border-radius: 100px; ">
              <template v-slot:prepend>
                <q-icon class="text-red-7" name="search" />
              </template>
            </q-input>

          </div>

      <q-page-container>
        <q-page class="q-pa-xs">




        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {

  data() {
    return {
      text: '',

    }
  },
  methods: {
    goToHome () {
      this.$router.push('/home')
    }
  }
}
</script>
