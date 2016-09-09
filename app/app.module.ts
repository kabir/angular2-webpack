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
import {ConfigComponent} from "./components/config/config";
import {BoardsComponent} from "./components/boards/boards";
import {BoardComponent} from "./components/board/board";
import {ControlPanelComponent} from "./components/board/controlPanel/controlPanel";
import {SwimlaneEntryComponent} from "./components/board/swimlaneEntry/swimlaneEntry";
import {RankViewComponent} from "./components/board/view/rank/rankview";
import {PanelMenuComponent} from "./components/board/panelMenu/panelMenu";
import {KanbanViewComponent} from "./components/board/view/kanban/kanbanview";
import {IssueContextMenuComponent} from "./components/board/issueContextMenu/issueContextMenu";
import {IssueComponent} from "./components/board/issue/issue";
import {HealthPanelComponent} from "./components/board/healthPanel/healthPanel";
import {_TestComponent} from "./components/test/_test";
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
        BoardComponent,
        BoardsComponent,
        ControlPanelComponent,
        ConfigComponent,
        DbExplorerComponent,
        HealthPanelComponent,
        IssueComponent,
        IssueContextMenuComponent,
        KanbanViewComponent,
        PanelMenuComponent,
        RankViewComponent,
        SwimlaneEntryComponent,
        _TestComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        AppHeaderService,
        ProgressErrorService,
        Title
    ]
})
export class AppModule { }
