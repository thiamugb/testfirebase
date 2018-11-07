'use strict';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function test_all(miband) {
/*
  let info = {
    time:     await miband.getTime(),
    battery:  await miband.getBatteryInfo(),
    hw_ver:   await miband.getHwRevision(),
    sw_ver:   await miband.getSwRevision(),
    serial:   await miband.getSerial(),
  }

  //log(`HW ver: ${info.hw_ver}  SW ver: ${info.sw_ver}`);
  //info.serial && log(`Serial: ${info.serial}`);
  console.log("Battery: "+info.battery.level);
  console.log("Time: "+ info.time.toLocaleString());
  console.log("Serial "+info.serial);
  console.log("Hr ver "+info.hw_ver);
  console.log("Sr ver "+info.sw_ver);
let ped = await miband.getPedometerStats()
  console.log('Pedometer:'+JSON.stringify(ped))
*/
  console.log('Notifications demo...')
  await miband.moveForward();
  //await miband.showNotification('message');
  //await delay(3000);
/*  await miband.showNotification('phone');
  await delay(5000);
  await miband.showNotification('off');

  log('Tap MiBand button, quick!')
  miband.on('button', () => log('Tap detected'))
  try {
    await miband.waitButton(10000)
  } catch (e) {
    log('OK, nevermind ;)')
  }

  log('Heart Rate Monitor (single-shot)')
  log('Result:', await miband.hrmRead())

  log('Heart Rate Monitor (continuous for 30 sec)...')
  miband.on('heart_rate', (rate) => {
    log('Heart Rate:', rate)
  })
  await miband.hrmStart();
  await delay(30000);
  await miband.hrmStop();

  //log('RAW data (no decoding)...')
  //miband.rawStart();
  //await delay(30000);
  //miband.rawStop();

  log('Finished.')*/
}

module.exports = test_all;
