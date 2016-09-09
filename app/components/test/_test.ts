import {Component} from "@angular/core";
import {BoardsService} from "../../services/boardsService";
import {ProgressErrorService} from "../../services/progressErrorService";
import {AppHeaderService} from "../../services/appHeaderService";
import {_TestBase} from "./testSuper";

@Component({
    selector: 'test',
    providers: [BoardsService],
    templateUrl: './_test.html',
    styleUrls: ['./_test.css']
})
export class _TestComponent extends _TestBase {
    private boards:any[];

    constructor(private _boardsService:BoardsService, progressError:ProgressErrorService, appHeaderService:AppHeaderService) {
        super();
        appHeaderService.setTitle("List of boards");
        progressError.startProgress(true);
        _boardsService.loadBoardsList(true).subscribe(
            data => {
                console.log('Boards: Got data' + JSON.stringify(data));
                this.boards = data.configs;
            },
            err => {
                progressError.setError(err);
            },
            () => {
                progressError.finishProgress();
            });
    }
}