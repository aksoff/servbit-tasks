<template>
    <div>
        <h2>List</h2>
        <hr>
        <table v-if="tasks.length">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Status</th>
                <th>open</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(task, idx) of tasks"
                    :key="task.id"
                >
                    <td>{{idx +1}}</td>
                    <td>{{task.title}}</td>
                    <td>{{new Date(task.deadline).toLocaleDateString()}}</td>
                    <td class="description"><div class="text">{{task.description}}</div></td>
                    <td>{{task.status}}</td>
                    <td>
                        <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
                            Open
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>no tasks</p>
    </div>
</template>

<script>
    export default {
        name: "List",
        computed: {
            tasks() {
                return this.$store.getters.tasks
            }
        }

    }
</script>

<style scoped>
    .description {
        max-width: 400px;
    }
    .text{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>