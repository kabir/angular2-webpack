import {Component} from "@angular/core";
import {BoardsService} from "../../services/boardsService";
import {ProgressErrorService} from "../../services/progressErrorService";
import {AppHeaderService} from "../../services/appHeaderService";

@Component({
    selector: 'test',
    providers: [BoardsService],
    templateUrl: './_test.html',
    styleUrls: ['./_test.css']
})
export class _TestComponent {
    private boards:any[];

    bgColour:string = "blue";
    constructor(private _boardsService:BoardsService, progressError:ProgressErrorService, appHeaderService:AppHeaderService) {
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

    onClickChangeColour(event:MouseEvent) {
        if (this.bgColour === 'blue') {
            this.bgColour = "red";
        } else if (this.bgColour === "red") {
            this.bgColour = "green";
        } else {
            this.bgColour = "blue";
        }
    }
}