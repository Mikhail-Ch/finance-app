import React, {useState} from "react";
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
  const {loading, request} = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handlerChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handlerRegister = async () => {
    try {
      const data = await request('/api/auth/register/', 'POST', {...form})
      console.log(data)
    } catch (e) {
    }
  }

  return (
      <div>
        <div>
          <form action="">
            <label>Email</label>
            <input type="text"
                   name="email"
                   onChange={handlerChange}/>

            <label>Password</label>
            <input type="password"
                   name="password"
                   onChange={handlerChange}/>
            <button disabled={loading}>
              войти
            </button>
            <button
                disabled={loading}
                onClick={handlerRegister}>
              Регистрация
            </button>
          </form>

        </div>
      </div>
  )
}