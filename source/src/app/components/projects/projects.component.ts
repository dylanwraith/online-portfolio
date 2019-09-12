import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fade', [
      state(
        'stage1',
        style({
          transform: 'translateX(-120%)',
          opacity: 0
        })
      ),
      state(
        'stage2',
        style({
          transform: 'translate(-120%,10%)',
          opacity: 0
        })
      ),
      state(
        'stage3',
        style({
          transform: 'translateX(-120%)',
          opacity: 0.6
        })
      ),
      state(
        'stage4',
        style({
          transform: 'scale(1.25)'
        })
      ),
      state(
        'stage5',
        style({
          transform: 'translateX(120%)',
          opacity: 0.6
        })
      ),
      state(
        'stage6',
        style({
          transform: 'translate(120%,10%)',
          opacity: 0
        })
      ),
      state(
        'stage7',
        style({
          transform: 'translateX(120%)',
          opacity: 0
        })
      ),
      state(
        'down',
        style({
          transform: 'translateY(10%)',
          opacity: 0
        })
      ),
      state(
        'left',
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        })
      ),
      state(
        'right',
        style({
          transform: 'translateX(10%)',
          opacity: 0
        })
      ),
      state(
        'expand',
        style({
          height: '100%'
        })
      ),
      state(
        'shrink',
        style({
          height: 0
        })
      ),
      state(
        'show',
        style({
          opacity: 100
        })
      ),
      state(
        'hide',
        style({
          opacity: 0
        })
      ),
      state('final', style({})),
      transition('stage1=>stage3', animate('500ms')),
      transition('stage7=>stage5', animate('500ms')),
      transition('stage3=>stage4', animate('500ms')),
      transition('stage4=>stage5', animate('500ms')),
      transition('stage5=>stage4', animate('500ms')),
      transition('stage4=>stage3', animate('500ms')),
      transition('stage3=>stage2', animate('100ms')),
      transition('stage2=>stage1', animate('100ms')),
      transition('stage5=>stage6', animate('100ms')),
      transition('stage6=>stage7', animate('100ms')),
      transition('stage7=>stage1', animate('1ms')),
      transition('stage1=>stage7', animate('1ms')),
      transition('final=>moveleft', animate('500ms')),
      transition('final=>moveright', animate('500ms')),
      transition('down=>final', animate('500ms')),
      transition('final=>down', animate('500ms')),
      transition('final=>right', animate('500ms')),
      transition('final=>left', animate('500ms')),
      transition('final=>shrink', animate('1000ms')),
      transition('final=>expand', animate('1000ms')),
      transition('hide=>show', animate('500ms')),
      transition('final=>hide', animate('200ms')),
      transition('hide=>final', animate('200ms'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  constructor() {
    this.getScreenSize();
  }
  private stages = [
    'stage1',
    'stage2',
    'stage3',
    'stage4',
    'stage5',
    'stage6',
    'stage7'
  ];

  public projectStatuses = [
    this.stages[0],
    this.stages[2],
    this.stages[3],
    this.stages[4],
    this.stages[6]
  ];

  public singleStatus = 'final';

  public screenHeight;
  public screenWidth;

  public githubs = [
    'asdf',
    'https://github.com/dylanwraith/employee-management-system',
    ''
  ];

  public projects = [
    'Software Management Tool',
    'Online User Portfolio',
    'Employee Management System',
    'Poker Simuation',
    'Binary Search Tree'
  ];

  public images = [
    '../../../assets/kymera.png',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    '../../../assets/ems.png',
    '../../../assets/poker.png',
    '../../../assets/bst.png'
  ];

  public technologies = [
    'Angular 8, Angular Material, ASP.NET Core, Entity Framework',
    'Node.js, Express.js, AWS, Angular 8, Angular Annimations, Angular Material, GIMP',
    'ASP.NET, Universal Windows Program, JSON, Google Login API',
    'Stack, Object Oriented Programming',
    'Data Structures, Object Oriented Programming'
  ];

  public languages = [
    'Typescript, C#, JavaScript, HTML, SCSS',
    'Typescript, JavaScript, HTML, SCSS',
    'C#, XAML',
    'C++',
    'C++'
  ];

  public index = 0;

  ngOnInit() {}

  swipeLeft() {
    let i = 0;
    this.projectStatuses.forEach(status => {
      console.log('initial status: ' + status);
      if (status === this.stages[6]) {
        status = this.stages[4];
      } else if (status === this.stages[4]) {
        status = this.stages[3];
      } else if (status === this.stages[3]) {
        status = this.stages[2];
      } else if (status === this.stages[2]) {
        status = this.stages[1];
      } else {
        status = this.stages[6];
      }
      console.log('end status: ' + status);
      this.projectStatuses[i] = status;
      i++;
    });
    let j = 0;
    setTimeout(() => {
      this.projectStatuses.forEach(status => {
        if (status === this.stages[1]) {
          status = this.stages[0];
          this.projectStatuses[j] = this.stages[0];
        }
        j++;
      });
    }, 110);
  }

  swipeRight() {
    let i = 0;
    this.projectStatuses.forEach(status => {
      console.log('initial status: ' + status);
      if (status === this.stages[0]) {
        status = this.stages[2];
      } else if (status === this.stages[2]) {
        status = this.stages[3];
      } else if (status === this.stages[3]) {
        status = this.stages[4];
      } else if (status === this.stages[4]) {
        status = this.stages[5];
      } else {
        status = this.stages[0];
      }
      console.log('end status: ' + status);
      this.projectStatuses[i] = status;
      i++;
    });
    let j = 0;
    setTimeout(() => {
      this.projectStatuses.forEach(status => {
        if (status === this.stages[5]) {
          status = this.stages[6];
          this.projectStatuses[j] = this.stages[6];
        }
        j++;
      });
    }, 110);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  public bigScreen() {
    if (this.screenWidth > 760) {
      return true;
    } else {
      return false;
    }
  }

  public next() {
    this.singleStatus = 'hide';
    setTimeout(() => {
      if (this.index < 4) {
        this.index++;
      } else {
        this.index = 0;
      }
      this.singleStatus = 'final';
    }, 250);
  }

  public previous() {
    this.singleStatus = 'hide';
    setTimeout(() => {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = 4;
      }
      this.singleStatus = 'final';
    }, 250);
  }
}
