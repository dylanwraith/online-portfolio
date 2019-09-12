import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  state,
  animate
} from '@angular/animations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrls: ['./start-up.component.css'],
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
      transition('hide=>show', animate('500ms'))
    ])
  ]
})
export class StartUpComponent implements OnInit {
  constructor() {}

  private stages = [
    'stage1',
    'stage2',
    'stage3',
    'stage4',
    'stage5',
    'stage6',
    'stage7'
  ];
  public message = '';
  private i = 0;
  public showButtons = false;
  public buttonStatus = 'down';
  public imageStatus = 'final';
  public textStatus = 'final';
  public closeStatus = 'final';
  public bottomStatus = 'final';
  public navigationStatus = 'hide';
  public projectStatuses = [
    this.stages[0],
    this.stages[2],
    this.stages[3],
    this.stages[4],
    this.stages[6]
  ];
  public selected = new FormControl(0);

  public tempMessage =
    'Hey there stranger, thanks for stopping by my portfolio! I am Dylan Wraith, the aspiring software engineer. ' +
    'While I have lots to say, I doubt you came here to listen to me talk all day, ' +
    'so go ahead and use these handy dandy buttons to get where you want to be!';

  ngOnInit() {
    this.createMessage();
  }

  buttonClick() {
    this.textStatus = 'right';
    this.imageStatus = 'left';
    this.buttonStatus = 'down';
    setTimeout(() => {
      this.closeStatus = 'shrink';
      this.bottomStatus = 'expand';
      this.navigationStatus = 'show';
    }, 500);
  }

  createMessage() {
    if (this.message !== this.tempMessage) {
      setTimeout(() => {
        if (this.i === 240) {
          this.buttonStatus = 'final';
        }
        this.message += this.tempMessage[this.i];
        console.log(this.tempMessage.length);
        this.i++;
        this.createMessage();
      }, 25);
    }
  }

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
}
