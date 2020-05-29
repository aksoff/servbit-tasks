<template>
    <div>
        <div v-if="task">
            <h2>{{task.title}}</h2>
            <form @submit.prevent="submitHandler">

                <div class="input-field">
                    <textarea v-model="description" placeholder="Description" id="description" class="materialize-textarea"></textarea>
                    <label for="description"></label>
                    <span class="character-counter" style="float: right; font-size: 12px">{{description.length}}/2048</span>
                </div>
                <div v-model="tags" class="chips" ref="chips"></div>
                <div class="input-field">
                    <input v-model="deadline" type="text" id="deadline" class="datepicker" ref="datepicker">
                    <label for="deadline"></label>
                </div>
                <button class="btn" type="submit">update task</button>
            </form>
        </div>
        <p v-else>Task not found</p>
    </div>
</template>

<script>
    export default {
        computed: {
            task() {
                return this.$store.getters.taskById(+this.$route.params.id)
            }
        },
        data: () => ({
            description: '',
            deadline: '',
            tags: null
        }),
        mounted() {
            this.description = this.task.description
            this.tags = M.Chips.init(this.$refs.chips, {
                placeholder: 'Task Tags',
                data: this.task.tags
            })
            this.deadline = M.Datepicker.init(this.$refs.datepicker, {
                format: 'dd.mm.yyyy',
                autoClose: true,
                defaultDate: new Date(this.task.deadline),
                setDefaultDate: true,
                i18n: {
                    defaultLocale: 'ru'
                }
            })
        },
        methods: {
            submitHandler() {
                this.$store.dispatch('updateTask', {
                    id: this.task.id,
                    description: this.description,
                    deadline: this.deadline.date
                })
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

<style scoped>

</style>