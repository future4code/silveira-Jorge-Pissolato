import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaginaCadastro from "../Paginas/PaginaCadastro/PaginaCadastro"
import PaginaLogin from "../Paginas/PaginaLogin/PaginaLogin"
import PaginaFeed from "../Paginas/PaginaFeed/PaginaFeed"
import PaginaPost from "../Paginas/PaginaPost/PaginaPost"
import PaginaErro from "../Paginas/PaginaErro/PaginaErro"
import Header from "../Components/Header/Header";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/login"}>
                    <PaginaLogin />
                </Route>
                <Route exact path={"/cadastro"}>
                    <PaginaCadastro />
                </Route>
                <Route exact path={"/"}>
                    <PaginaFeed />
                </Route>
                <Route exact path={"/post/:id"}>
                    <PaginaPost />
                </Route>
                <Route>
                    <PaginaErro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;