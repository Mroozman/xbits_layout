import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserIconComponent } from './header/user-icon/user-icon.component';
import { CompetitionComponent } from './competition/competition.component';
import { ParticipatnsComponent } from './competition/participatns/participatns.component';
import { ChallengeComponent } from './competition/challenge/challenge.component';
import { AddCompetitionButtonComponent } from './add-competition-button/add-competition-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIconComponent,
    CompetitionComponent,
    ParticipatnsComponent,
    ChallengeComponent,
    AddCompetitionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
