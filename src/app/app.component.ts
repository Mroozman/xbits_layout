import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public challengersData: {
    name: string;
    difference: string;
    differencePercent: string;
    image: string;
    checked: boolean;
  }[] = [
    {
      name: 'Roger Korsgaard',
      difference: '+ $7,500',
      differencePercent: '45%',
      image: './../../../../assets/images/Roger_Korsgaard.svg',
      checked: true,
    },
    {
      name: 'Charlie Herwitz',
      difference: '+ $1,430',
      differencePercent: '25%',
      image: './../../../../assets/images/Charlie_Herwitz.svg',
      checked: true,
    },
    {
      name: 'Ahmad Mango',
      difference: '- $1,500',
      differencePercent: '10%',
      image: './../../../../assets/images/Ahmad_Mango.svg',
      checked: false,
    },
  ];

  public challengersData2: {
    name: string;
    difference: string;
    differencePercent: string;
    image: string;
    checked: boolean;
  }[] = [
    {
      name: 'Zain Mango',
      difference: '+ $3,500',
      differencePercent: '30%',
      image: './../../../../assets/images/Zain_Mango.svg',
      checked: true,
    },
    {
      name: 'Zain Mango',
      difference: '+ $1,430',
      differencePercent: '25%',
      image: './../../../../assets/images/Zain_Mango.svg',
      checked: true,
    },
    {
      name: 'Zain Mango',
      difference: '- $1,500',
      differencePercent: '10%',
      image: './../../../../assets/images/Zain_Mango.svg',
      checked: true,
    },
  ];
}
