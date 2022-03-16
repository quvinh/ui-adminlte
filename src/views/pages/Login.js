import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { postData } from '../../components/utils/Api'
import { setUserSession } from '../../components/utils/Common'
import {
  Content, Row, Col, Box, Button, Inputs, Divider
} from 'adminlte-2-react';

const {
  Text, Checkbox, Radio, Select
} = Inputs;
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleLogin = () => {
    const data = {
      username: username,
      password: password
    }
    console.log(data)
    Promise.all([postData("http://127.0.0.1:8000/api/auth/login", data)])
      .then(function (res) {
        console.log(res[0].data.warehouse_id)
        setUserSession(res[0].data.access_token, res[0].data.user.id, res[0].data.user.roles[0].name, res[0].data.role, res[0].data.warehouse_id)
        console.log("login")
        history.push("/dashboard")
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <div className="login-box">
      <Box type="primary" border>
        <div className="login-logo">
          <a><b>NAM</b>KHÁNH</a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form id="quickForm">
              <div className="card-body">
                <div className="form-group">
                  <label>Tên đăng nhập</label>
                  <input type="text" name="username" value={username} className="form-control" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input type="password" name="password" value={password} className="form-control" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="social-auth-links text-center mb-3">
                <button type="button" className="btn btn-primary" onClick={() => handleLogin()}>Đăng nhập</button>
              </div>
              {/* <div className="card-footer">
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
              </div> */}
            </form>
          </div>

        </div>
      </Box>
    </div>
  )
}

export default Login