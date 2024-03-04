import { Component } from "@angular/core";
import { AngularService } from "./angular.service";

@Component({
    selector:'courses',
    template:`<h2>{{title}}</h2>
    <ul>
    <li *ngFor="let course of courses">{{course}}
    </li>
    </ul>
    `
})

export class AngularComponent{
    title="List of Courses";
    courses;

    constructor(service:AngularService){
        this.courses=service.getCourses()
    }
}
