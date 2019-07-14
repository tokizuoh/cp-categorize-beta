<template>
    <div class="start">
        <app-start-card></app-start-card>
        <br>
        <br>
        <app-category-table></app-category-table>
    </div>
</template>

<script>
import AppCategoryTable from './AppCategoryTable'
import AppStartCard from './AppStartCard'

export default {
    components: {
        AppCategoryTable,
        AppStartCard
    }
}
</script>