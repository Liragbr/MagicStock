import React from "react";
import '/Users/lixod/Documents/Projetos/magic-stock/src/pages/Login/componets/login.css';


const Login = () => {
    return (
            <div>
                <div class="container">
                    <form>
                        <h1>Entrar na Plataforma</h1>
                        <div class="input-container">
                            <input placeholder="Email " type="email" required/>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
                        </div>

                        <div class="input-container">
                            <input placeholder="Senha" type="password" required/>
                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/lock--v1.png" alt="lock--v1" />
                            <a href="#">Esqueci minha senha</a>
                        </div>

                        <button type="submit" class="submit-button">Entrar</button>

                        <div class="register-link">
                            <p>Não está cadastrado? <a href="#">Cadastrar</a></p>
                        </div>
                    </form>
                </div>

            </div>

            )

}
export default Login