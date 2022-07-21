import React from "react";
import { Routes, Route } from "react-router-dom";
import { AccountsPage } from "./accounts";
import { BudgetsPage } from "./budgets";
import { TransactionsPage } from "./transactions";
import { SettingsPage } from "./settings";
import { AuthPage } from "./auth";
import { ReportsPage } from "./reports";
import { MainPage } from "./main";
import Sidebar from "../components/sidebar";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
        <Routes>
          <Route path="/" exact element={ <MainPage/> }/>
          <Route path="/accounts" exact element={ <AccountsPage/> }/>
          <Route path="/budgets" exact element={ <BudgetsPage/> }/>
          <Route path="/transactions" exact element={ <TransactionsPage/> }/>
          <Route path="/settings" exact element={ <SettingsPage/> }/>
          <Route path="/reports" exact element={ <ReportsPage/> }/>
          <Route path="/exit" exact element={ <AuthPage/> }/>
        </Routes>

    )
  }

  return (
      <Routes>
        <Route path="/" exact element={ <AuthPage/> }/>
      </Routes>
  )
}