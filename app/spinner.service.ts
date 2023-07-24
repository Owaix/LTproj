
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoaderService {

    private loading: boolean = false;
    constructor() { }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    getLoading(): boolean {
        return this.loading;
    }

    render() {
        const html = `
    <div *ngIf="this.loader.getLoading()" class="cssload-container">
        <div class="cssload-speeding-wheel"></div>
    </div>
    `;
        const element = document.querySelector('#my-app');
       // element.innerHTML += html;
    }

}
