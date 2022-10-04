import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div id="login">
	<section class="form-container">
		<form>
			<h1>Login</h1>

			<fieldset>
				<div class="name">
					<input type="text" placeholder="name" />
					<input type="text" placeholder="lastname" />
				</div>

				<div class="email">
					<input type="email" placeholder="email" />
					<p>You can use letters, numbers and periods</p>
				</div>

				<div class="password">
					<input type="password" placeholder="password" />
					<input type="password" placeholder="confirm" />
				</div>
			</fieldset>

			<button>Submit</button>
		</form>
	</section>
	<aside></aside>
</div>
  )
}

export default Login