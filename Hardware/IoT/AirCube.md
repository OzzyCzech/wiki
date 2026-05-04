---
title: AirCube
description: Zigbee air quality sensor for Home Assistant — VOC, CO2, temperature, humidity, and AQI; local-only, open hardware from StuckAtPrototype.
created: 2026-04-12
updated: 2026-04-12
sidebar:
  order: 10
---

AirCube is a small **Zigbee 3.0** air quality device aimed at **Home Assistant**: pair it with a coordinator and you get five sensor entities without cloud accounts. The same hardware works **standalone** over USB-C as a simple traffic-light style indicator (green / yellow / red) when you do not use a mesh network yet. The vendor listed it at **$59** on the product page when this note was written (see Sources).

## Home Assistant integration

You need a **Zigbee coordinator** (for example a USB dongle) on the machine that runs Home Assistant. The vendor documents support for **ZHA** and **Zigbee2MQTT** via a **custom quirk** (ZHA) and **external converter** (Zigbee2MQTT), shipped with their documentation. After pairing, the device is described as reporting about **once per second**. All processing stays on your LAN.

### Entities

| Entity | Role | Unit |
| --- | --- | --- |
| `temperature` | Room temperature | °C |
| `humidity` | Relative humidity | % |
| `co2` | Estimated CO₂ | ppm |
| `tvoc` | Total volatile organic compounds | ppb |
| `aqi` | Air quality index | — |

Temperature and humidity are picked up automatically; CO₂, TVOC, and AQI rely on the custom integration pieces above.

### Automations

Typical uses include turning on ventilation or a fan when VOCs or AQI cross a threshold, or notifying when air quality degrades. Each device exposes its own set of entities, so multiple units can cover different rooms.

## Standalone use

Without Home Assistant or a coordinator, powering the cube via **USB-C** makes the **RGB LED** reflect air quality: green (good), yellow (consider ventilating), red (needs attention). No Wi‑Fi, app, or account is required.

## Hardware overview

| Aspect | Details |
| --- | --- |
| MCU | ESP32-H2 (native Zigbee radio) |
| Sensors | ScioSense ENS161 (VOC / eCO₂), ENS210 (temperature, humidity) |
| Connectivity | Zigbee 3.0 |
| Indicator | Addressable RGB LED (part referenced as IN-PI15TAT5R5G5B on vendor materials) |
| Power | USB-C, 5 V |
| Size | 49 × 49 × 36 mm |
| Enclosure | 3D-printed PLA with diffused top |

Firmware, schematics, PCB layout, and BOM are described as **open source** on the vendor’s GitHub; the product is designed and assembled in Texas (USA).

## Sources

- [AirCube product overview — StuckAtPrototype](https://stuckatprototype.com/pages/aircube) — specifications, HA entities, standalone behaviour, and integration notes (accessed 2026-04-12)
