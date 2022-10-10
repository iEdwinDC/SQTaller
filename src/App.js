import AppHeader from "./component/AppHeader";
import AppBody from "./component/AppBody";
import AppFooter from "./component/AppFooter";

function Container() {
    return(
        <section>
            <AppHeader></AppHeader>
            <AppBody></AppBody>
            <AppFooter></AppFooter>
        </section>
       
    );
}

export default Container;