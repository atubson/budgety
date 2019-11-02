<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="(budget, index) in budgets" :key="index">
      <p>
        <span><b>{{ budget.title }}</b></span><br />
        <span>{{ budget.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import BudgetService from '@/services/BudgetService'
export default {
  name: 'budgets',
  data () {
    return {
      budgets: []
    }
  },
  mounted () {
    this.getBudget()
  },
  methods: {
    async getBudgets () {
      const response = await BudgetService.fetchBudget()
      this.posts = response.data
    }
  }
}
</script>
