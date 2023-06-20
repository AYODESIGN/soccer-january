import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamsComponent } from './components/add-teams/add-teams.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { OccurrenceComponent } from './components/occurrence/occurrence.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "signup/:id", component: SignupComponent},
  {path: "add-matches", component: AddMatchComponent},
  {path: "add-teams", component: AddTeamsComponent},
  {path: "add-players", component: AddPlayersComponent},
  {path: "matches", component: MatchesComponent},
  {path: "players", component: PlayersComponent},
  {path: "admin", component: AdminComponent},
  {path: "match-info", component: MatchInfoComponent},
  {path: "player-info", component: PlayerInfoComponent},
  {path: "team-info", component: TeamInfoComponent},
  {path: "editMatch/:id", component: EditMatchComponent},
  {path: "search", component: SearchMatchesComponent},
  {path: "occurrence", component: OccurrenceComponent},
  {path: "weather", component: WeatherComponent },
  {path: "profile", component: ProfileComponent },


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
