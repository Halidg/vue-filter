<template>
  <div
  :id="`select-${_uid}`"
    class="select"
    :class="{
      'select_error': error,
      'select_correct': correct,
    }"
  >
    <vSelect
      ref="select"
      :id="_uid"
      :options="options"
      :placeholder="placeholder"
      :clearable="false"
      @input="onSelect"
      v-bind="$attrs"
      :disabled="disabled"
      class="style-chooser"
    >
    </vSelect>
    <label v-if="error || correct" class="select__label" :for="_uid">{{ error || correct }}</label>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default Vue.extend({
  name: 'UiSelect',
  props: {
    
    options: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: 'Выберите опцию...',
    },
    disabled: {
      type: Boolean,
    },
    error: {
      type: String,
      default: '',
    },
    correct: {
      type: String,
      default: '',
    },
    notFoundText: {
      type: String,
      default: 'Ничего не найдено',
    },
  },
  components: {
    vSelect,
  },
  methods: {
    onSelect(e) {
      this.$emit('input', e)
    },
  },
})
</script>

<style lang="scss">
.select {
  max-width: 30em;
}
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
  width: 250px;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
