import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { EndpointService } from 'src/app/services/endpoint.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.css'],
  animations: [
    trigger('coordinates', [
      state(
        '1',
        style({
          transform: 'translate({{x}}%,{{y}}%)'
        }),
        { params: { x: 0, y: 0 } }
      ),
      state(
        '2',
        style({
          transform: 'translate({{x}}%,{{y}}%)'
        }),
        { params: { x: 0, y: 0 } }
      ),
      transition('1=>2', animate('400ms')),
      transition('2=>1', animate('400ms'))
    ])
  ]
})
export class TestGridComponent implements OnInit {
  public xCoordinate = 0;
  public yCoordinate = 0;
  public spriteStatus = '1';
  public spriteUrl = '../../../assets/forward_sprite.PNG';
  private animating = false;
  private stage = false;
  public home = false;
  public projects = false;
  public resume = false;
  public about = false;
  public contact = true;
  public audio = new Audio();
  public interacted = false;
  public name;
  public email;
  public message;
  public moving = null;
  public screenHeight;
  public screenWidth;
  public loading = false;

  constructor(
    private endpoint: EndpointService,
    private snackBar: MatSnackBar
  ) {
    this.getScreenSize();
  }

  ngOnInit() {}

  // Check for arrow keys being pressed
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.interacted = true;
    if (!this.animating) {
      if (event.key === 'ArrowUp') {
        this.arrowUp();
      } else if (event.key === 'ArrowLeft') {
        this.arrowLeft();
      } else if (event.key === 'ArrowDown') {
        this.arrowDown();
      } else if (event.key === 'ArrowRight') {
        this.arrowRight();
      }
    }
  }

  // Events for arrow keys pressed
  private arrowRight() {
    if (
      this.xCoordinate !== 13 &&
      !(
        this.xCoordinate === 7 &&
        ((this.yCoordinate > 1 && this.yCoordinate < 6) ||
          (this.yCoordinate > 7 && this.yCoordinate < 12))
      )
    ) {
      this.xCoordinate++;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkRight();
    } else {
      this.spriteUrl = '../../../assets/right_sprite.PNG';
      console.log('invalid right');
    }
  }

  private arrowDown() {
    if (
      this.yCoordinate !== 13 &&
      !(
        this.yCoordinate === 7 &&
        (this.xCoordinate !== 6 && this.xCoordinate !== 7)
      ) &&
      !(
        this.yCoordinate === 1 &&
        (this.xCoordinate !== 6 && this.xCoordinate !== 7)
      )
    ) {
      this.yCoordinate++;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkDown();
    } else {
      this.spriteUrl = '../../../assets/forward_sprite.PNG';
      console.log('invalid down');
    }
  }

  private arrowLeft() {
    if (
      this.xCoordinate !== 0 &&
      !(
        this.xCoordinate === 6 &&
        ((this.yCoordinate > 1 && this.yCoordinate < 6) ||
          (this.yCoordinate > 7 && this.yCoordinate < 12))
      )
    ) {
      this.xCoordinate--;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkLeft();
    } else {
      this.spriteUrl = '../../../assets/left_sprite.PNG';
      console.log('invalid left');
    }
  }

  private arrowUp() {
    if (
      this.yCoordinate !== 0 &&
      !(
        this.yCoordinate === 6 &&
        (this.xCoordinate < 6 || this.xCoordinate > 7)
      ) &&
      !(
        this.yCoordinate === 12 &&
        (this.xCoordinate < 6 || this.xCoordinate > 7)
      )
    ) {
      this.yCoordinate--;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkUp();
    } else if (this.yCoordinate === 6 && this.xCoordinate === 2) {
      // Enter projects page
      this.yCoordinate--;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkUp();
      setTimeout(() => {
        this.home = false;
        this.projects = true;
      }, 400);
    } else if (this.yCoordinate === 6 && this.xCoordinate === 10) {
      // Enter resume page
      this.yCoordinate--;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkUp();
      setTimeout(() => {
        this.home = false;
        this.resume = true;
      }, 400);
    } else if (this.yCoordinate === 12 && this.xCoordinate === 2) {
      // Enter about me page
      this.yCoordinate--;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkUp();
      setTimeout(() => {
        this.home = false;
        this.about = true;
      }, 400);
    } else if (this.yCoordinate === 12 && this.xCoordinate === 10) {
      // Enter contact page
      this.yCoordinate--;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkUp();
      setTimeout(() => {
        this.home = false;
        this.contact = true;
      }, 400);
    } else {
      this.spriteUrl = '../../../assets/backward_sprite.PNG';
      console.log('invalid up');
    }
  }

  // Update walking animation for sprite

  private walkRight() {
    this.animating = true;
    this.spriteUrl = '../../../assets/walk_right_sprite.PNG';
    setTimeout(() => {
      this.spriteUrl = '../../../assets/right_sprite.PNG';
      setTimeout(() => {
        this.animating = false;
      }, 100);
    }, 250);
  }

  private walkDown() {
    this.animating = true;
    this.stage
      ? (this.spriteUrl = '../../../assets/walk_forward_1_sprite.PNG')
      : (this.spriteUrl = '../../../assets/walk_forward_2_sprite.PNG');
    this.stage = !this.stage;
    setTimeout(() => {
      this.spriteUrl = '../../../assets/forward_sprite.PNG';
      setTimeout(() => {
        this.animating = false;
      }, 100);
    }, 250);
  }

  private walkLeft() {
    this.animating = true;
    this.spriteUrl = '../../../assets/walk_left_sprite.PNG';
    setTimeout(() => {
      this.spriteUrl = '../../../assets/left_sprite.PNG';
      setTimeout(() => {
        this.animating = false;
      }, 100);
    }, 250);
  }

  private walkUp() {
    this.animating = true;
    this.stage
      ? (this.spriteUrl = '../../../assets/walk_backward_1_sprite.PNG')
      : (this.spriteUrl = '../../../assets/walk_backward_2_sprite.PNG');
    this.stage = !this.stage;
    setTimeout(() => {
      this.spriteUrl = '../../../assets/backward_sprite.PNG';
      setTimeout(() => {
        this.animating = false;
      }, 100);
    }, 250);
  }

  public leaveResume() {
    this.resume = !this.resume;
    this.home = !this.home;
    setTimeout(() => {
      this.yCoordinate++;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkDown();
    }, 100);
  }

  public leaveProjects() {
    this.projects = !this.projects;
    this.home = !this.home;
    setTimeout(() => {
      this.yCoordinate++;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkDown();
    }, 100);
  }

  public leaveContact() {
    this.contact = !this.contact;
    this.home = !this.home;
    setTimeout(() => {
      this.yCoordinate++;
      this.spriteStatus === '1'
        ? (this.spriteStatus = '2')
        : (this.spriteStatus = '1');
      this.walkDown();
    }, 100);
  }

  public sendEmail() {
    this.loading = true;
    const body = new Map<string, string>();
    body
      .set('from', this.email)
      .set(
        'subject',
        'Online Portfolio: Email from ' + this.email + ' - ' + this.name
      )
      .set('text', this.message);
    this.endpoint.sendEmail(body).subscribe(data => {
      this.openSnackBar();
    });
  }

  openSnackBar() {
    this.snackBar.open('Success! Redirecting...', '', {
      duration: 2000,
      panelClass: ['snackbarclass']
    });
    setTimeout(() => {
      this.leaveContact();
      this.loading = false;
    }, 2000);
  }

  public goUpClick() {
    if (this.moving === null) {
      this.moving = setInterval(() => {
        this.interacted = true;
        if (!this.animating) {
          this.arrowUp();
          console.log('going up');
        }
      }, 100);
    }
  }

  public goRightClick() {
    if (this.moving === null) {
      this.moving = setInterval(() => {
        this.interacted = true;
        if (!this.animating) {
          this.arrowRight();
          console.log('going right');
        }
      }, 100);
    }
  }

  public goLeftClick() {
    if (this.moving === null) {
      this.moving = setInterval(() => {
        this.interacted = true;
        if (!this.animating) {
          this.arrowLeft();
          console.log('going left');
        }
      }, 100);
    }
  }

  public goDownClick() {
    if (this.moving === null) {
      this.moving = setInterval(() => {
        this.interacted = true;
        if (!this.animating) {
          this.arrowDown();
          console.log('going down');
        }
      }, 100);
    }
  }

  public stop() {
    clearInterval(this.moving);
    this.moving = null;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
