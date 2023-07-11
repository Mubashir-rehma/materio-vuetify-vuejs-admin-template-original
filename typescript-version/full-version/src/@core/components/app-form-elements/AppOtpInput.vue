<script setup lang="ts">
interface Props {
  totalInput?: number
  default?: string
}

interface Emit {
  (e: 'updateOtp', val: string): void
}

const props = withDefaults(defineProps<Props>(), {
  totalInput: 6,
  default: '',
})

const emit = defineEmits<Emit>()

const digits = ref<string[]>([])
const refOtpInputs = ref<HTMLInputElement[]>([])
const { state: focusedInput, next, prev } = useCycleList(refOtpInputs)

digits.value = props.default.split('')

const defaultStyle = {
  style: 'max-width: 54px; text-align: center;',
}

const handleCharPress = (event: KeyboardEvent, index: number) => {
  // Skip if not a number
  if (Number.isNaN(Number.parseInt(event.key))) {
    event.preventDefault()

    return
  }

  digits.value[index] = event.key

  if (index < refOtpInputs.value.length - 1)
    next().focus()

  emit('updateOtp', digits.value.join(''))
}

const handleBackspace = (index: number) => {
  // ℹ️ Navigate first and later remove the value to avoid feeling slow
  // Navigate to previous input if current input is not first
  index && prev().focus()

  const currentInputValue = digits.value[index]

  // If focused input is empty, remove previous input's value else remove current input's value
  if (currentInputValue)
    digits.value[index] = ''
  else
    digits.value[index - 1] = ''

  emit('updateOtp', digits.value.join(''))
}
</script>

<template>
  <div>
    <h6 class="text-base font-weight-medium mb-3">
      Type your 6 digit security code
    </h6>
    <div class="d-flex align-center gap-4">
      <VTextField
        v-for="(_, index) in props.totalInput"
        :key="index"
        ref="refOtpInputs"
        :data-index="String(index)"
        :data-str="String(digits[index])"
        :model-value="digits[index]"
        v-bind="{
          ...defaultStyle,
          autofocus: !index,
        }"
        maxlength="1"
        type="tel"
        @keypress="handleCharPress($event, index)"
        @keyup.delete="handleBackspace(index)"
        @focus="focusedInput = refOtpInputs[index]"
      />
    </div>
  </div>
</template>

<style lang="scss">
.v-field__field {
  input {
    padding: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
  }
}
</style>
