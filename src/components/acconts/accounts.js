import React, { useEffect, useState } from "react";
import "./accounts.scss"
import DataServices from "../../services/DataServices";

const Accounts = () => {
  const dataServices = new DataServices()
  const [accounts, setAccounts] = useState([])

  const typeAccounts = {
    cash: "Наличные",
    banks_account: "Банковский счёт",
    card: "Кредитная карта"
  }

  useEffect(( ) => {
    fetch('./json/accounts.json')
        .then(res => res.json())
        .then(data => setAccounts(data))
  }, [])


  return (
      <div className="accounts-list">
        {
          accounts.map(item =>
              <div className="accounts-list__item" key={ item.id }>
                <div className="card">
                  <h4>{ item.name }</h4>
                  <p>{ typeAccounts[item.type] }</p>
                  <p>{ item.balance }</p>
                </div>
              </div>
          )
        }
      </div>
  )
}

export default Accounts;