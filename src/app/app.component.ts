import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MozillaThunderbirdComponent } from "../mozilla-thunderbird/mozilla-thunderbird.component";
import { MicrosoftOutlookComponent } from "../microsoft-outlook/microsoft-outlook.component";
import { GoogleMailComponent } from "../google-mail/google-mail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MozillaThunderbirdComponent, MicrosoftOutlookComponent, GoogleMailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmailGuidlineAss';
}
