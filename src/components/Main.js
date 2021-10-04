import { Route, Switch } from "react-router";
import Contacto from "../pages/Contacto";
import QueHacemos from "../pages/QueHacemos";
import QuienesSomos from "../pages/QuienesSomos";


export default function Main(){
    return(
        <main>
            <Switch>
                <Route path="/QueHacemos">
                    <QueHacemos/>
                </Route>
                <Route path="/Contacto">
                    <Contacto/>
                </Route>
                <Route path="/QuienesSomos">
                    <QuienesSomos/>
                </Route>
            </Switch>
        </main>

    )
}