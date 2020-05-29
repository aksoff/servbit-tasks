<template>
  <div class="row">
    <div class="col-6 offset-6">
      <h2>Create</h2>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input v-model="title" placeholder="Title" id="title" type="text" class="validate" required>
          <label for="title"></label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>
        <div v-model="tags" class="chips" ref="chips">

        </div>
        <div class="input-field">
          <textarea v-model="description" placeholder="Description" id="description" class="materialize-textarea"></textarea>
          <label for="description"></label>
          <span class="character-counter" style="float: right; font-size: 12px">{{description.length}}/2048</span>
        </div>
        <div class="input-field">
          <input v-model="deadline" type="text" id="deadline" class="datepicker" ref="datepicker">
          <label for="deadline"></label>
        </div>
        <button class="btn" type="submit">Create task</button>
      </form>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Create',
  data: () => ({
    title: '',
    description: '',
    deadline: null,
    tags: null,
  }),
  mounted() {
    this.tags = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task Tags'
    })
    this.deadline = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      autoClose: true,
      defaultDate: new Date(),
      setDefaultDate: true,
      i18n: {
        defaultLocale: 'ru'
      }
    })
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        deadline: this.deadline.date,
        tags: this.tags.chipsData,
      }
      console.log(task)
    }
  },
  destroyed() {
    if (this.deadline && this.deadline.destroy) {
      this.deadline.destroy()
    }
    if (this.tags && this.tags.destroy) {
      this.tags.destroy()
    }
  }
}
</script>

<style>
  #description {
    min-height: 100px;
  }
</style>