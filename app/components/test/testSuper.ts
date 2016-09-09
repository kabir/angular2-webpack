export class _TestBase {
    bgColour:string = "blue";

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