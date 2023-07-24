import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { QuestionService } from './testComponents/question-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  public moduleChildList: any[] = [];
  constructor(service: QuestionService, private dataService: DataService) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe(x => {
      this.moduleChildList = x;
    });
  }

  collapse(obj: string, event: Event): void {
    const divElement = event.target as HTMLElement; // The clicked <div> element
    const spanElement = divElement.querySelector('i'); // Find the <span> element within the <div>
    var elem = document.getElementById(obj);
    if (elem != null) {
      if (!elem.classList.contains('show')) {
        elem.classList.add('show');
        elem.classList.remove('hide');
        if (spanElement != null) {
          spanElement.classList.remove('fa-angle-down');
          spanElement.classList.add('fa-angle-up');
        }
      } else {
        elem.classList.remove('show');
        elem.classList.add('hide');
        if (spanElement != null) {
          spanElement.classList.remove('fa-angle-up');
          spanElement.classList.add('fa-angle-down');
        }
      }
    }
  }
}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterByColumnPipe implements PipeTransform {
  transform(items: any[],  filterByColumn: string, searchTerm: string): any[] {
    if (!items || !searchTerm || !filterByColumn) {
      return items;
    }

    searchTerm = searchTerm;

    // console.log(items)
    // console.log(searchTerm)
     console.log(filterByColumn)


    return items.filter(item => {
      console.log(item)
      const columnValue = item[filterByColumn]?.toString();
      return columnValue && columnValue.includes(searchTerm);
    });
  }
}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private json = [
    { moduleTitle: "main1", faIcons: "fa fa-gear", parentID: 0, moduleID: 1, moduleName: "Main1", hasChild: 1 },
    { moduleTitle: "sub_main1", faIcons: "fa fa-gear", parentID: 1, moduleID: 3, moduleName: "Main_1", hasChild: 0 },


    { moduleTitle: "main2", faIcons: "fa fa-gear", parentID: 0, moduleID: 2, moduleName: "Mainee", hasChild: 1 },
    { moduleTitle: "sub_main2", faIcons: "fa fa-gear", parentID: 2, moduleID: 4, moduleName: "Mainvsdv", hasChild: 1 },
    { moduleTitle: "sub_sub_main2", faIcons: "fa fa-gear", parentID: 4, moduleID: 5, moduleName: "Mainvc", hasChild: 0 },
    { moduleTitle: "sub_sub_main2", faIcons: "fa fa-gear", parentID: 4, moduleID: 6, moduleName: "Mainds", hasChild: 0 },
    { moduleTitle: "sub_sub_main2", faIcons: "fa fa-gear", parentID: 4, moduleID: 7, moduleName: "Maindsdad", hasChild: 0 },
    { moduleTitle: "student", faIcons: "fa fa-gear", parentID: 4, moduleID: 8, moduleName: "student", hasChild: 0 }
  ]

  getJsonData(): Observable<any[]> {
    return of(this.json);
  }
}