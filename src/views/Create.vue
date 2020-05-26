<template>
  <div class="row">
    <div class="col-6 offset-6">
      <h2>Create</h2>
      <form>
        <div class="input-field">
          <input placeholder="Title" id="title" type="text" class="validate" required>
          <label for="title"></label>
        </div>
        <div class="input-field">
          <input placeholder="Tags" id="tags" type="text" class="validate">
          <label for="tags"></label>
        </div>
        <div class="input-field">
          <textarea placeholder="Description" id="description" class="materialize-textarea"></textarea>
          <label for="description"></label>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Create',
}
</script>
