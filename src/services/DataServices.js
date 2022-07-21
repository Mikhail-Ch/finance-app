
export default class DataServices {
  _baseUrl = './json'

  async getResource(url) {
    const res = await fetch(url)
    if(!res.ok) {
      throw new Error()
    }
    return res.json()
  }

  getAllAccounts() {
    return this.getResource(`${this._baseUrl}/accounts.json`)
  }

  getAllTransactions() {
    return this.getResource(`${this._baseUrl}/transactions.json`)
  }

  getAllBudgets() {
    return this.getResource(`${this._baseUrl}/budgets.json`)
  }
}