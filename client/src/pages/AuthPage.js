import React from 'react'

export const AuthPage = () => {
	return (
		<div className="row">
		<div className="col s6 offset-s3">
		<h1>Auth Page</h1>
		<div class="card blue darken-1">
		<div class="card-content white-text">
		<span class="card-title">Авторизация</span>
			<div>

				<div class="input-field">
          <input placeholder="Введите email" id="email" type="text" name="email" class="validate" />
          <label for="email">Email</label>
        </div>

        			<div class="input-field">
          <input placeholder="Введите пароль" id="password" type="password" class="validate" />
          <label for="password">Пароль</label>
        </div>

			</div>
		</div>
		<div class="card-action">
		<button class="btn yellow darken-4" id="log_button">Войти</button>
		<button class="btn green lighten-1 black-text">Регистрация</button>
		</div>
		</div>
		</div>
		</div>
		)
}