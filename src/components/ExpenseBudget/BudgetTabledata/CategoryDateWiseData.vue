<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="container table-responsive py-5">
                    <h4>Category Wise Expenses</h4>
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category</th>
                                <th scope="col">Expenses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in categoryWiseExpenses" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ item.category }}</td>
                                <td>{{ item.expenses }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-6">
                <div class="container table-responsive py-5">
                    <h4>Days Wie Expenses</h4>
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Expenses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in dateWiseExpenses" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ item.date }}</td>
                                <td>{{ item.expenses }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CategoryDateWiseData',
        props: {
            dateWiseExpenses: Array,
            categoryWiseExpenses: Array,
        },
        mounted() {
            console.log('date wise:', this.dateWiseExpenses)
            console.log('category wise:', this.categoryWiseExpenses)
        }
    }
</script>

<style scoped>

</style>