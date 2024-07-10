<script lang="ts" setup>
defineEmits<{
  (e: 'close'): void
}>()

const content = ref('')

const to = ref('')
const subject = ref('')
const message = ref('')

const cc = ref('')
const bcc = ref('')
const isEmailCc = ref(false)
const isEmailBcc = ref(false)

const resetValues = () => {
  to.value = subject.value = message.value = ''
}
</script>

<template>
  <VCard
    class="email-compose-dialog"
    elevation="24"
    max-width="30vw"
  >
    <VCardItem class="py-3">
      <VCardTitle class="text-medium-emphasis">
        Compose Mail
      </VCardTitle>

      <template #append>
        <IconBtn @click="$emit('close')">
          <VIcon icon="mdi-minus" />
        </IconBtn>

        <IconBtn @click="$emit('close'); resetValues(); isEmailCc = false; isEmailBcc = false;">
          <VIcon icon="mdi-close" />
        </IconBtn>
      </template>
    </VCardItem>

    <div class="px-1 pe-6 py-1">
      <VTextField
        v-model="to"
        density="compact"
      >
        <template #prepend-inner>
          <div class="text-base font-weight-medium text-disabled">
            To:
          </div>
        </template>
        <template #append>
          <span class="cursor-pointer text-body-1">
            <span @click="isEmailCc = !isEmailCc">Cc</span>
            <span> | </span>
            <span @click="isEmailBcc = !isEmailBcc">Bcc</span>
          </span>
        </template>
      </VTextField>
    </div>

    <VExpandTransition>
      <div v-if="isEmailCc">
        <VDivider />

        <div class="px-1 pe-6 py-1">
          <VTextField
            v-model="cc"
            density="compact"
          >
            <template #prepend-inner>
              <div class="text-disabled font-weight-medium">
                Cc:
              </div>
            </template>
          </VTextField>
        </div>
      </div>
    </VExpandTransition>

    <VExpandTransition>
      <div v-if="isEmailBcc">
        <VDivider />

        <div class="px-1 pe-6 py-1">
          <VTextField
            v-model="bcc"
            density="compact"
          >
            <template #prepend-inner>
              <div class="text-disabled font-weight-medium">
                Bcc:
              </div>
            </template>
          </VTextField>
        </div>
      </div>
    </VExpandTransition>

    <VDivider />
    <div class="px-1 pe-6 py-1">
      <VTextField
        v-model="subject"
        density="compact"
      >
        <template #prepend-inner>
          <div class="text-base font-weight-medium text-disabled">
            Subject:
          </div>
        </template>
      </VTextField>
    </div>

    <VDivider />

    <!-- 👉 Tiptap Editor  -->
    <TiptapEditor
      v-model="content"
      placeholder="Message"
    />

    <div class="d-flex align-center px-6 py-4">
      <VBtn
        color="primary"
        class="me-4"
        append-icon="mdi-send"
        :disabled="to === '' ? true : false"
        @click="$emit('close'); content = ''; resetValues(); isEmailCc = false; isEmailBcc = false;"
      >
        send
      </VBtn>

      <IconBtn>
        <VIcon icon="mdi-attachment" />
      </IconBtn>

      <VSpacer />

      <IconBtn>
        <VIcon icon="mdi-dots-vertical" />
      </IconBtn>

      <IconBtn
        size="small"
        @click="$emit('close'); resetValues(); content = ''; isEmailCc = false; isEmailBcc = false;"
      >
        <VIcon icon="mdi-delete" />
      </IconBtn>
    </div>
  </VCard>
</template>

<style lang="scss">
.v-card.email-compose-dialog {
  z-index: 910 !important;

  .v-field--prepended {
    padding-inline-start: 20px;
  }

  .v-field__prepend-inner {
    align-items: center;
    padding: 0;
  }

  .v-card-item {
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }

  .v-textarea .v-field {
    --v-field-padding-start: 20px;
  }

  .v-field__outline {
    display: none;
  }

  .ProseMirror {
    block-size: 150px;
    overflow-y: auto;
    padding-block: 0.5rem;

    &:focus-visible {
      outline: none;
    }

    p {
      margin-block-end: 0;
    }

    p.is-editor-empty:first-child::before {
      block-size: 0;
      color: #adb5bd;
      content: attr(data-placeholder);
      float: inline-start;
      pointer-events: none;
    }

    ul,
    ol {
      padding-inline: 1.125rem;
    }
  }
}
</style>
