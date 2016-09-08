import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {RestUrlUtil} from "../common/RestUrlUtil";
import "rxjs/add/operator/map";
import "rxjs/add/operator/timeout";


@Injectable()
export class BoardsService {

    private timeout:number = 30000;

    constructor(private _http:Http) {
    }

    loadBoardsList(summaryOnly:boolean) : Observable<any> {
        let path:string = RestUrlUtil.caclulateRestUrl(summaryOnly ? 'rest/jirban/1.0/boards' : 'rest/jirban/1.0/boards?full=true');
        let ret:Observable<any> =
            this._http.get(path)
                .timeout(this.timeout, "The server did not respond in a timely manner for GET " + path)
                .map((res: Response) => res.json());

        return ret;
    }

    loadBoardConfigJson(boardId:number):Observable<any> {
        let path:string = RestUrlUtil.caclulateRestUrl('rest/jirban/1.0/boards/' + boardId);
        console.log("Loading board configuration" + path);
        let ret:Observable<any> =
            this._http.get(path)
                .timeout(this.timeout, "The server did not respond in a timely manner for GET " + path)
                .map((res: Response) => res.json());

        return ret;
    }

    createBoard(json:string) : Observable<any> {
        let path:string = RestUrlUtil.caclulateRestUrl('rest/jirban/1.0/boards');
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log("Saving board " + path);
        let ret:Observable<any> =
            this._http.post(path, json, {
                headers : headers
            })
                .timeout(this.timeout, "The server did not respond in a timely manner for POST " + path)
                .map((res: Response) => res.json());
        return ret;
    }

    saveBoard(id:number, json:string) : Observable<any> {
        let path:string = RestUrlUtil.caclulateRestUrl('rest/jirban/1.0/boards/' + id);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log("Saving board " + path);
        let ret:Observable<any> =
            this._http.put(path, json, {
                headers : headers
            })
                .timeout(this.timeout, "The server did not respond in a timely manner for PUT " + path)
                .map((res: Response) => res.json());
        return ret;
    }

    deleteBoard(id:number) : Observable<any> {
        let path:string = RestUrlUtil.caclulateRestUrl('rest/jirban/1.0/boards/' + id);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log("Deleting board " + path);
        let ret:Observable<any> =
            this._http.delete(path, {
                headers : headers
            })
                .timeout(this.timeout, "The server did not respond in a timely manner for DELETE " + path)
                .map((res: Response) => res.json());
        return ret;
    }

    saveRankCustomFieldId(id:number) : Observable<any> {
        let path:string = RestUrlUtil.caclulateRestUrl('rest/jirban/1.0/rankCustomFieldId');
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log("Saving custom field id " + path);
        let payload:string = JSON.stringify({id: id});
        let ret:Observable<any> =
            this._http.put(path, payload, {
                    headers : headers
                })
                .timeout(this.timeout, "The server did not respond in a timely manner for PUT " + path)
                .map((res: Response) => res.json());
        return ret;
    }
}