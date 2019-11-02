import Api from '@/services/Api'

export default {
  fetchBudget () {
    return Api().get('budget')
  }
}
