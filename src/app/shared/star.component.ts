import { Component, Input } from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void{
        this.starWidth=this.rating*86/5;
    }
}