import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent {
  @Input() public challengersData: {
    name: string;
    difference: string;
    differencePercent: string;
    image: string;
    checked: boolean;
  }[];
  @Input() public canJoin: boolean;
  @Input() public title: string;
}
