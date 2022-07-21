import React from "react";
import {Link} from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
      <nav className="sidebar">
        <div className="sidebar__wrap">
          <Link className="logo" to="/">
              <img src="../../icons/icon-logo.svg" width="30" height="30" alt="Главная"/>
          </Link>
          <Link className="sidebar__link" to="/accounts">
            <div className="sidebar__link-icon">
              <img src="../../icons/icon-account.svg" width="30" height="30" alt="Счета"/>
            </div>
            <span className="sidebar__link-label">Счета</span>
          </Link>
          <Link className="sidebar__link" to="/transactions">
            <div className="sidebar__link-icon">
              <img src="../../icons/icon-transfer.svg" width="30" height="30" alt="Транзакции"/>
            </div>
            <span className="sidebar__link-label">Транзакции</span>
          </Link>
          <Link className="sidebar__link" to="/budgets">
            <div className="sidebar__link-icon">
              <img src="../../icons/icon-bidget.svg" width="30" height="30" alt="Бюджеты"/>
            </div>
            <span className="sidebar__link-label">Бюджеты</span>
          </Link>
          <Link className="sidebar__link" to="/reports">
            <div className="sidebar__link-icon">
              <img src="../../icons/icon-reports.svg" width="30" height="30" alt="Отчеты"/>
            </div>
            <span className="sidebar__link-label">Отчеты</span>
          </Link>
          <Link className="sidebar__link" to="/settings">
            <div className="sidebar__link-icon">
              <img src="../../icons/icon-settings.svg" width="30" height="30" alt="Настройки"/>
            </div>
            <span className="sidebar__link-label">Настройки</span>
          </Link>
        </div>

        <Link className="sidebar__link" to="/">
          <div className="sidebar__link-icon">
            <img src="../../icons/icon-exit.svg" width="30" height="30" alt="выход"/>
          </div>
          <span className="sidebar__link-label">Выход</span>
        </Link>
      </nav>
  )
}

export default Sidebar