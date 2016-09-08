import {RouterModule, Routes} from "@angular/router";
import {AccessLogViewComponent} from "./components/access/accessLogView";

const JIRBAN_ROUTES: Routes = [/*
    { path: '', redirectTo: '/boards', pathMatch: 'full'},
    { path: 'boards', component: BoardsComponent },
    { path: 'board', component: BoardComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'access-log', component: AccessLogViewComponent },
    { path: 'dbexplorer', component: DbExplorerComponent } */
    //Temp
    { path: '', component: AccessLogViewComponent }
];

export const ROUTING = RouterModule.forRoot(JIRBAN_ROUTES);