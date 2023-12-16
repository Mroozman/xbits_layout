import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent implements OnInit {
  @Input() public name;
  @Input() public difference: string;
  @Input() public differencePercent;
  @Input() public challengerImage;
  @Input() public number;
  @Input() public checked: boolean;

  public numberLetters = '';

  ngOnInit(): void {
    this.getNumberLetters();
  }

  public getDifference(): boolean {
    if (this.difference.includes('+') === true) {
      return true;
    } else {
      return false;
    }
  }

  public getNumberLetters() {
    if (this.number === 1) {
      this.numberLetters = 'st';
    }
    if (this.number === 2) {
      this.numberLetters = 'nd';
    }
    if (this.number === 3) {
      this.numberLetters = 'rd';
    }
    return this.numberLetters;
  }
}
