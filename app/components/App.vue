<template>
    <Page>
    

              <StackLayout class="home-panel">
                <Label textWrap="true" class="drawerContentText"/>
                <Button  class="button" colums="1" rows="1" text="Demarrer la recherche" @tap="onButtonTap" />
                <Label textWrap="true" text="Mes appareils!" class="h2 description-label"/>
              </StackLayout>


    </Page>
</template>
<script>
import test_firebase from '../testfire'
  export default {
    methods: {
           async onButtonTap()
           {
              //await test_firebase();
               console.log("Button was pressed");
           }
       },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
