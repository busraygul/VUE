<template>
    <section class="mt-4">
        <TodoListItem @delete-event="$emit('delete-event', $event)" v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem" />
        <small>{{todoLength}} Adet Item Vardır.</small>
        <SummaryPage :todoList="todoList" />
    </section>
</template>

<script>
import TodoListItem from './todoListItem.vue';
import SummaryPage from './SummaryPage.vue';
import {computed} from "vue";
export default {
    components: { 
        TodoListItem, 
        SummaryPage 
    },
    props: {
        todoList: Array,
    },
    setup(props){
        const todoLength = computed(() => props.todoList.length)
        return { todoLength }
    }
};
</script>