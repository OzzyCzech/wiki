---
title: OTP Input in Vue 3
description: Minimal Vue 3 OTP input component with keyboard navigation, paste support, and mobile compatibility.
created: 2025-01-08
updated: 2026-04-06
---

There are my requirements for the OTP input component:

- autofocus first input on load
- navigate with arrow keys
- delete with backspace/delete keys
- autofocus next input after typing
- number input only
- paste support
- emit event on finish
- reliable on mobile
- short and simple

```vue
<template>
  <div class="flex gap-2 justify-center" :class="wrapperClass">
    <template v-for="(input, index) in length" :key="index">
      <input
        type="text"
        :id="`digit-${index + 1}`"
        :ref="
          (el) => {
            inputs[index] = el as HTMLInputElement;
          }
        "
        class="w-12 h-12 text-center text-xl"
        :autofocus="index === 0"
        v-model="digits[index]"
        autocomplete="off"
        v-bind="$attrs"
        inputmode="numeric"
        maxlength="1"
        pattern="\d"
        required
        @focus="inputs[index].select()"
        @mousedown.prevent="inputs[index].select()"
        @input="onInput(index, $event as InputEvent)"
        @paste.prevent.stop="onPaste(index, $event)"
        @keydown.delete.prevent="onDelete(index)"
        @keydown.left.prevent="onLeft(index)"
        @keydown.right.prevent="onRight(index)"
        @keydown.up.prevent
        @keydown.down.prevent
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 6,
  },
  wrapperClass: {
    type: String,
    default: "",
  },
});

const inputs: Array<HTMLInputElement | null> = [];
const emits = defineEmits(["onfinish", "onchange"]);
const digits = reactive(Array.from({ length: props.length }, () => ""));

function onInput(index: number, event: InputEvent) {
  if (event.data) {
    digits[index] = event.data;
    inputs[index + 1]?.focus();
    update();
  }
}

function onPaste(index: number, event: ClipboardEvent) {
  let paste = event.clipboardData?.getData("text") || "";
  paste = paste.replace(/\D/g, "").slice(0, props.length - index);

  if (paste) {
    for (let i = 0; i < paste.length; i++) {
      digits[index + i] = paste[i];
    }

    // select next closest input after paste
    nextTick(() => {
      const lastFilledIndex = Math.min(
        index + paste.length - 1,
        digits.length - 1,
      );
      inputs[lastFilledIndex]?.focus();
    });
  }

  update();
}

function onDelete(index: number) {
  digits[index] = "";
  inputs[index - 1]?.focus();
}

function onLeft(index: number) {
  inputs[index - 1]?.focus();
}

function onRight(index: number) {
  inputs[index + 1]?.focus();
}

function update() {
  const otp = digits.join("");
  emits("onchange", otp);

  if (otp.length === props.length) {
    emits("onfinish", otp);
  }
}

onMounted(() => {
  nextTick(() => {
    inputs[0]?.focus();
  });
});
</script>
```

Here is the usage of the component:

```vue
<template>
  <OTPInput @onfinish="onFinish" @onchange="onChange" />
</template>

<script setup lang="ts">
import OTPInput from "@/components/OTPInput.vue";

function onFinish(otp: string) {
  console.log("OTP is", otp);
}

function onChange(otp: string) {
  console.log("OTP is changing to", otp);
}
</script>
```
