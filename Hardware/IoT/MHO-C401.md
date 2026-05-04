---
title: MHO-C401 — čtení dat přes BLE a Python
description: Čtení teploty a vlhkosti z Xiaomi MHO-C401 Bluetooth termometru pomocí Pythonu a knihovny bluepy.
created: 2026-04-08
updated: 2026-04-08
sidebar:
  label: MHO-C401
---

MHO-C401 is new (2020) MMC E-Ink Screen Smart Bluetooth Thermometer Hygrometer BT2.0 Temperature Humidity Sensor from Xiaomi. You can order yours on [Aliexpress](https://www.aliexpress.com/item/4001174769598.html).

![MHO-C401](MHO-C401.jpg "MHO-C401 Bluetooth Thermometer Hygrometer")

## Searching for sensor

Every [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) (BLE) device have unique [MAC address](https://en.wikipedia.org/wiki/MAC_address) - you can search this address with `hcitool`

> `hcitool` is Linux tool for monitoring and configuring Bluetooth devices. It is aptly named **hci**tool as it communicates via a common HCI ([Host Controller Interface](<https://en.wikipedia.org/wiki/Host_controller_interface_(USB,_Firewire)>) port to your bluetooth devices. You
> can utilize the utility to scan for devices and send commands/data for standard Bluetooth and Bluetooth Low Energy.

First check, if your `hcitool` can see your device with `hcitool dev` command, then you can start `lescan` for other devices arroud.

```shell
sudo hcitool lescan
```

You will get output similar to this one:

```
49:01:7D:E8:21:CF (unknown)
4D:E8:5B:D3:56:7E (unknown)
5C:6D:23:6F:57:14 (unknown)
...
A4:C1:38:4B:E8:FF (unknown)
A4:C1:38:4B:B7:FF MHO-C401
...
```

As you can see from list my `MHO-C401` have `A4:C1:38:4B:B7:FF` MAC address.

## Lets read some data!

We will use a Python to read the data from BLE - there are some great libraries for that, like [bluepy](https://github.com/IanHarvey/bluepy). Bluepy provide a comprehensive API to allow access to Bluetooth Low Energy devices.

```shell
sudo apt-get install python3-pip libglib2.0-dev
sudo pip3 install bluepy
```

Each BLE devices provide [Services](https://www.bluetooth.com/specifications/assigned-numbers/) and [Characteristics](https://www.bluetooth.com/specifications/assigned-numbers/). **Services** are used to break data up into logic entities, and contain specific chunks of data
called **characteristics**. A service can have one or more characteristics, and each service distinguishes itself from other services by means of a unique numeric ID called a UUID, which can be either 16-bit (for officially adopted BLE Services) or 128-bit (for custom services).

The Python code below will generate a list of all the available services and characteristics on the our BLE device.

```python
from bluepy import btle
device = btle.Peripheral()
try:
  print("Connecting to device...")
  device.connect("A4:C1:38:4B:B7:FF") # need change your MAC address here
  for service in device.getServices():
    print(str(service))
    for ch in service.getCharacteristics():
        if ch.supportsRead():
          	print(" {}".format(ch))
            print(" > UUID: ", ch.uuid)
            print(" > HANDLE: ", hex(ch.getHandle()))
            print(" > SUPPORTS: ", ch.propertiesToString())
            if (ch.supportsRead()):
              try:
                print(" > RESULTS ", repr(ch.read()))
              except BTLEException as e:
                print(" > ERROR: ", e)
            print()
finally:
  device.disconnect()
```

Output will looks like that:

```
Connecting to device...
Service <uuid=Generic Access handleStart=1 handleEnd=7>
 Characteristic <Device Name>
 > UUID: 00002a00-0000-1000-8000-00805f9b34fb
 > HANDLE: 0x2
 > SUPPORTS: READ NOTIFY
 > RESULTS  b'MHO-C401\x00'

 Characteristic <Appearance>
 > UUID: 00002a01-0000-1000-8000-00805f9b34fb
 > HANDLE: 0x4
 > SUPPORTS: READ
 > RESULTS  b'\x00\x00'

 Characteristic <Peripheral Preferred Connection Parameters>
 > UUID: 00002a04-0000-1000-8000-00805f9b34fb
 > HANDLE: 0x6
 > SUPPORTS: READ
 > RESULTS  b'\x14\x00(\x00\x00\x00\xe8\x03'

...
```

Then you can read first device characteristic, with follow code:

```python
from bluepy import btle

device = btle.Peripheral()

try:
  device.connect("A4:C1:38:4B:B7:FF")

  # read by UUID
  deviceName = device.getCharacteristics(uuid="00002a00-0000-1000-8000-00805f9b34fb")[0].read()
  print("Device name: ", deviceName.decode('ascii'))

  # or by handle
  print("Firmware: " , device.readCharacteristic(0x12).decode('ascii'))
  print("Hardware Revision: " , device.readCharacteristic(0x14).decode('ascii'))
  print("Manufacturer Name: " , device.readCharacteristic(0x18).decode('ascii'))

  # read battery level
  print("Battery level: {}%".format(ord(device.readCharacteristic(0x1b))))

  # read device units
  if (device.readCharacteristic(0x33) == b'\x00'):
    print('Units: °C')

  if (device.readCharacteristic(0x33) == b'\x01'):
    print('Units: °F')

finally:
  device.disconnect()
```

## Reading temperature and humidity

For reading temperature and humidity you have to [subscribe notifications](https://ianharvey.github.io/bluepy-doc/notifications.html) for UUID = `EBE0CCC1-7A0A-4B0C-8A1A-6FF2997DA3A6` - there are 3 bytes of data. Notifications are processed by creating a “delegate” object and
registering it with the `Peripheral`.

```python
from bluepy import btle
from datetime import datetime

device = btle.Peripheral()

class Delegate(btle.DefaultDelegate):
  def handleNotification(self, cHandle, data):
    temperature_bytes = data[:2]
    humidity_bytes = data[2]
    temperature = int.from_bytes(temperature_bytes, byteorder="little") / 100.0
    humidity = humidity_bytes

    print("Tempterature: {}°C".format(temperature))
    print("    Humidity: {}%".format(humidity))
    print("        Time: {}".format(datetime.now().strftime("%H:%M:%S")))

try:
  device.connect("A4:C1:38:4B:B7:FF")
  device.setDelegate(Delegate())
  ch = device.getCharacteristics(uuid="EBE0CCC1-7A0A-4B0C-8A1A-6FF2997DA3A6")[0]
  desc = ch.getDescriptors(forUUID=0x2902)[0]
  desc.write(0x01.to_bytes(2, byteorder="little"), withResponse=True)

  # waiting to notification
  while True:
    if not device.waitForNotifications(5.0):
      break

finally:
  device.disconnect()
```

Upper code will generate follow output:

```text
Tempterature: 25.82°C
    Humidity: 49%
        Time: 13:32:09
```

Source codes https://github.com/OzzyCzech/MHO-C401

## Sources

- bluepy [API docs](https://ianharvey.github.io/bluepy-doc/index.html) and [source codes](https://github.com/IanHarvey/bluepy)
- [Introduction to Bluetooth low energy](https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt) from Adafruit
- [WatchFlower](https://emeric.io/WatchFlower/)
- [Python library to work with Xiaomi Temperature and Humidifier sensor](https://github.com/h4/lywsd02/blob/master/lywsd02/client.py)
- [xiaomi_bluetooth](https://github.com/andras-tim/poc/blob/master/bluetooth/xiaomi_bluetooth)
