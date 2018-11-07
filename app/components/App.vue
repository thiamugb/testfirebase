<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Test sur mes montres!"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>

                <Label class="drawer-item" text="Param"/>
                <Label class="drawer-item" text="Gestion BD"/>
                <Label class="drawer-item" text="Se deconnecter"/>
            </StackLayout>

            <GridLayout ~mainContent colums="2*" rows="2*">
              <StackLayout class="home-panel">
                <Label textWrap="true" class="drawerContentText"/>
                <Button  class="button" colums="1" rows="1" text="Demarrer la recherche" @tap="onButtonTap" />
                <Button  class="button" colums="2" rows="2" text="Test firebase" @tap="onButtonTap1" />

                <Label textWrap="true" text="Mes appareils!" class="h2 description-label"/>
                <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:1250px">
                            <v-template>
                              <FlexboxLayout flexDirection="row" class="list-group-item">
                              <Label :text="todo.name" class="list-group-item-heading" style="width: 60%" />
                              <Label :text="todo.UUID" class="list-group-item-heading" style="width: 60%" />
                            </FlexboxLayout>

                            </v-template>
                          </ListView>
              </StackLayout>

            </GridLayout>

        </RadSideDrawer>
    </Page>
</template>
<script src="http://localhost:8098"></script>
<script src="https://unpkg.com/text-encoding@0.6.4/lib/encoding-indexes.js"></script>
<script src="https://unpkg.com/text-encoding@0.6.4/lib/encoding.js"></script>

<script>
import bluetooth from 'nativescript-bluetooth'
import test_firebase from '../testfire'
import MiBand from '../testwrite'
import test_all from '../test'
var observableArray = require("tns-core-modules/data/observable-array");
var observable = require("tns-core-modules/data/observable");
var frameModule = require("tns-core-modules/ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
var todos=[];
var periph=[];
var madata=[];
var machar=[];
var messervices=[];
var maperiph=[];
var isLoading = true ;
var _peripheral;
var compt=0;
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function delay(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms))
}
export default
{
  mounted: function () {
       },
  methods: {
    async onButtonTap1() {
      let miband= new MiBand(maperiph);
      await miband.init();
    //rep=miband.getBatteryInfo();
    //var rep="";
    //console.log("pourquoi UUID_SERVICE_GENERIC_ATTRIBUTE");
    //miband.getBatteryInfo();
      await test_all(miband);
//console.log("bouton firebase");
//await test_firebase();
    },
      async onButtonTap() {
        var devices=[];
        bluetooth.enable().then(function(enabled) {
      setTimeout(function() {
      }, 500);
    });
      await  bluetooth.startScanning({
    serviceUUIDs: [],
    seconds: 4,
    onDiscovered: function (peripherals) {

    console.log("Periperhal found with UUID: " + peripherals.name);
if (peripherals.name !== null)
{
  todos.unshift(peripherals);
  devices.push(peripherals);
}

  }
    }).then(function() {
    console.log("scanning complete");
    }, function (err) {
    console.log("error while scanning: " + err);
    });
      todos=devices;
          console.log("Button was pressed");
              },
              async seconnecter(periph)
              {
                var devices=[];
                await bluetooth.connect(
                  {
                    UUID: periph,
                    // NOTE: we could just use the promise as this cb is only invoked once
                    onConnected: function (peripheral) {
                      maperiph=periph;
                      console.log("------- Peripheral connected: " + JSON.stringify(peripheral));
                      peripheral.services.forEach(function(value) {
                        console.log("---- ###### adding service: " + value.UUID);
                        madata.unshift(value.UUID);
                        machar.unshift(value.characteristics);
                        devices.push(value.UUID);
                        devices.push(value.characteristics);
                      });
                      isLoading=false;
                    //_peripheral.set('isLoading', false);
                    //_peripheral.set('services', discoveredServices);
                    },
                    onDisconnected: function (peripheral) {
                      dialogs.alert({
                        title: "Disconnected",
                        message: "Disconnected from peripheral: " + JSON.stringify(peripheral),
                        okButtonText: "OK, thanks"
                      });
                    }
                  });
                  return devices;
              },
              async onItemTap(args)
              {
                var devices=[];
                _peripheral = args.item;
                var discoveredServices = new observableArray.ObservableArray();
                console.log("on se connecte");
                  await this.seconnecter(_peripheral.UUID).then(function (response)
                   {
                    devices=response;
                    maperiph=_peripheral.UUID;
                  });
                  sleep(10000).then(() => {
                  //do stuff
                  {
                    console.log("mes devices deviennent"+JSON.stringify(devices[0]));
                  }
                  });

},


async onItemTap1(args)
{
  madata=[];
  machar=[];
  devices=[];
  _peripheral = args.item;
  var discoveredServices = new observableArray.ObservableArray();
  await this.seconnecter(_peripheral.UUID).then(function (response)
   {
     madata=response[0];

     machar=response[1];

  });

}

},
  data() {
      return {
        todos,
        madata,
         isLoading
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
    .button
    {
      background-color: #53ba82;
      color: white;
      padding: 20;
      margin-top: 10;
    }
</style>
