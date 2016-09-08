import {NgModule} from "@angular/core";
import {BrowserModule, Title} from "@angular/platform-browser";
import {AppComponent} from "./components/app/app";
import {ROUTING} from "./routes";
import {HttpModule} from "@angular/http";
import {AccessLogViewComponent} from "./components/access/accessLogView";
import {AppHeaderService} from "./services/appHeaderService";
import {ProgressErrorService} from "./services/progressErrorService";
import {DbExplorerComponent} from "./components/dbexplorer/dbexplorer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ROUTING
    ],
    declarations: [
        AccessLogViewComponent,
        AppComponent,
        DbExplorerComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        AppHeaderService,
        ProgressErrorService,
        Title
    ]
})
export class AppModule { }
