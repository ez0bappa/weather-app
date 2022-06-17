<template>
    <div class="simple-data">
        <table class="table caption-top">
            <caption class="list-user-caption text-end">List of expenses</caption>
            <thead>
                <tr>
                    <th scope="col">#(ID)</th>
                    <th scope="col">category</th>
                    <th scope="col">Date</th>
                    <th scope="col">Expenditure</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in expensesDataInTable" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.category }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.expenses }}</td>
                    <td>
                        <button @click="editItem(item)" class="btn btn-secondary btn-sm me-1" style="background: #5f9ea0;">
                            <i class="fa fa-pencil"></i>
                        </button>
                        <button @click="removeItem(item)" class="btn btn-warning btn-sm ms-1" style="background: #ffb49a">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="footer-data text-end">
            total:
            <strong><span 
                :class="totalExpenses > this.totalBudget ? 'text-danger' : 'text-primary'"
                >{{totalExpenses}}/-</span></strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SimpleData',
        props: {
            expensesDataInTable: Array
        },
        methods: {
            removeItem(selData) {
                if (confirm('Sure to delete')) {
                this.expensesDataInTable = this.expensesDataInTable.filter((item) => item.key != selData.key)
                this.toast.warning('Deleted successfully...', {
                    timeout: 1000
                });
                }
                this.rerenderCount++
            },
        }
    }
</script>

<style scoped>

</style>