import { Component, Vue } from 'vue-property-decorator'
import WithRender from './Budget.html'
import BudgetService from '@/services/BudgetService'

@WithRender
@Component
export default class Budget extends Vue {
  private budgetService = new BudgetService();
  public budget: any = null;
  private async getBudget () {
    const response = await this.budgetService.fetchBudget()
    this.budget = response.data
  }

  mounted () {
    this.getBudget()
  }
}
