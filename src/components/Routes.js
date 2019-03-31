import React from "react";
import { Route, Switch } from "react-router-dom";
import Step1 from "./pages/step1/Step1.js";
import Step2 from "./pages/step2/Step2.js";
import CalendarIndex from "./pages/calendar/CalendarIndex.js";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/schedule" component={CalendarIndex} />
            <Route path="/schedule/creating/step_1" component={Step1} />
            <Route path="/schedule/creating/step_2" component={Step2} />
        </Switch>
    </div>
);

export default Routes;
