import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StartUpComponent } from './components/start-up/start-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatCardModule } from '@angular/material/card';
import { TestGridComponent } from './components/test-grid/test-grid.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    StartUpComponent,
    TestGridComponent,
    ProjectsComponent,
    AboutMeComponent
  ],
  imports: [
    MatDividerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    PdfViewerModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
