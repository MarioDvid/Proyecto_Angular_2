import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ideasReducer } from './state/ideas.reducer';
import { IdeasPageComponent } from './pages/ideas-page/ideas-page.component';
import { IdeaFormComponent } from './components/idea-form/idea-form.component';
import { IdeaListComponent } from './components/idea-list/idea-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasPageComponent,
    IdeaFormComponent,
    IdeaListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      ideas: ideasReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
