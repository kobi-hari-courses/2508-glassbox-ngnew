import { Routes } from "@angular/router";
import { C1 } from "./c1/c1";
import { C2 } from "./c2/c2";

export const PageCRoutes: Routes = [
    { path: '', redirectTo: '1', pathMatch: 'full'},
    { path: '1', component: C1}, 
    { path: '2', component: C2}
]