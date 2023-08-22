import { GetCurrentMemberPayload } from "@memberstack/dom/lib/types";
import { DreTest } from "./pages/dre-test";

const MEMBERSTACK_APP_ID = 'app_clksj4bjy00250umgdkgbgh4t';
const JETBOOST_SITEID = 'cll6ycaff023w0j576xzs1peq';

// <script data-memberstack-app="app_clksj4bjy00250umgdkgbgh4t" src="https://static.memberstack.com/scripts/v1/memberstack.js" type="text/javascript"></script>


import memberstackDOM from "@memberstack/dom"; 
const memberstack = memberstackDOM.init({ 
    publicKey: MEMBERSTACK_APP_ID, // "pk_...", 
});

const init = () => { 

    console.log("DRE-lib", 'loaded1');

    console.log("DRE-lib", window.location.pathname);

    switch(window.location.pathname) {
        case "/test":

            console.log("DRE-lib", "Init | TEST page");

            (new DreTest()).init(); 

            break;
    }

    // Memberstack tests v1? https://static.memberstack.com/scripts/v1/memberstack.js 
    // https://support.memberstack.com/hc/en-us/articles/4407461316763-Front-end-API
    //
    // Getting id:
    // https://support.memberstack.com/hc/en-us/articles/4410447106203-How-to-find-a-membership-id
    // https://docs.memberstack.com/hc/en-us/articles/11234311357211-How-to-Get-a-Member-ID#:~:text=1.,field%20is%20the%20Member%20ID. 
    (async () => {

console.log("get member info()"); 

        // Store currently logged in member 
        const member: GetCurrentMemberPayload = await memberstack.getCurrentMember(); 

        // Access member properties 
        console.log(member.data.id); 
        console.log(member.data.customFields);

    })();

}

document.addEventListener("DOMContentLoaded", init)