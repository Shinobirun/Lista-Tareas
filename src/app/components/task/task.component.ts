import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import {TASKS} from '../mock-task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[]=TASKS;


  constructor() { }

  ngOnInit(): void {
  }

}
