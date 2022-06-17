<template>
    <div class="container p-0 category-date-table">
        <div class="row">
            <div class="col-6 category-table">
                <div class="table-responsive py-5">
                    <h4 class="text-white">Category Wise Expenses</h4><hr>
                    <table class="table table-bordered table-hover text-white">
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
            <div class="col-6 date-table">
                <div class="table-responsive py-5">
                    <h4 class="text-white">Days Wie Expenses</h4><hr>
                    <table class="table table-bordered table-hover text-white">
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
            // console.log('date wise:', this.dateWiseExpenses)
            // console.log('category wise:', this.categoryWiseExpenses)
        }
    }
</script>

<style scoped>
.category-date-table {
    box-shadow: 5px 5px 5px 0px rgb(0 0 0 / 15%);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
}

.category-table, .date-table {
    /* background: #f4acc54d; */
}

.col-6.category-table {
    border-radius: 15px 0px 0px 15px;
    background: #2F4F4F;
}

.col-6.date-table{
    background: #2F4F4F;
    border-radius: 0 15px 15px 0px;
}

.table-hover > tbody > tr:hover > * {
--bs-table-accent-bg: var(--bs-table-hover-bg);
color: #ffff;
}
</style>