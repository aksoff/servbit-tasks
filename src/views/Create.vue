<template>
  <div class="row">
    <div class="col-6 offset-6">
      <h2>Create</h2>
      <form>
        <div class="input-field col s6">
          <input placeholder="Title" id="title" type="text" class="validate" required>
        </div>
        <div class="input-field col s6">
          <input placeholder="Tags" id="tags" type="text" class="validate">
        </div>
        <div class="input-field col s6">
          <textarea placeholder="Description" id="textarea" class="materialize-textarea"></textarea>
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
