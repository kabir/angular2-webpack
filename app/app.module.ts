import {NgModule} from "@angular/core";
import {BrowserModule, Title} from "@angular/platform-browser";
import {AppComponent} from "./components/app/app";
import {ROUTING} from "./routes";
import {HttpModule} from "@angular/http";
import {AccessLogViewComponent} from "./components/access/accessLogView";
import {AppHeaderService} from "./services/appHeaderService";
import {ProgressErrorService} from "./services/progressErrorService";
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ROUTING
    ],
    declarations: [
        AccessLogViewComponent,
        AppComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        AppHeaderService,
        ProgressErrorService,
        Title
    ]
})
export class AppModule { }
