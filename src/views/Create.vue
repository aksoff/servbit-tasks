<template>
  <div class="row">
    <div class="col-6 offset-6">
      <h2>Create</h2>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>
        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px">{{description.length}}/2048</span>
        </div>
        <div class="chips" id="tags" ref="chips"></div>
        <div class="input-field">
          <input v-model="deadline" type="text" id="deadline" class="datepicker" ref="datepicker">
          <label for="deadline">Deadline</label>
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
      placeholder: 'Task Tags',

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
      this.$store.dispatch('createTask', task)
      console.log(task)
      this.$router.push('/list')
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