import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { VideoItemCardComponent } from './components/video-item-card/video-item-card.component';
import { VideoCardsListComponent } from './components/video-cards-list/video-cards-list.component';
import { VideosHandlerService } from './services/videos-handler.service';
import { VideosFilterComponent } from './components/videos-filter/videos-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideoItemCardComponent,
    VideoCardsListComponent,
    VideosFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule

  ],
  providers: [VideosHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
