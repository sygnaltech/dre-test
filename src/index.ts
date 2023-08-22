import { GetCurrentMemberPayload } from "@memberstack/dom/lib/types";
import { DreTest } from "./pages/dre-test";


const init = () => { 

    console.log("DRE-lib", 'loaded');

    console.log("DRE-lib", window.location.pathname);

    switch(window.location.pathname) {
        case "/test":

            console.log("DRE-lib", "Init | TEST page");

            (new DreTest()).init(); 

            break;
    }


}

document.addEventListener("DOMContentLoaded", init)