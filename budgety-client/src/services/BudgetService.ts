import ApiInstance from '@/services/Api'

export default class BudgetService {
  private Api = new ApiInstance();

  fetchBudget () {
    return this.Api.createAxios().get('budget')
  }
}
