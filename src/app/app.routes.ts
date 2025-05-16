import { Routes } from '@angular/router';
import { MozillaThunderbirdComponent } from '../mozilla-thunderbird/mozilla-thunderbird.component';
import { MicrosoftOutlookComponent } from '../microsoft-outlook/microsoft-outlook.component';
import { GoogleMailComponent } from '../google-mail/google-mail.component';

export const routes: Routes = [

{
  path:'',
  redirectTo:'Mozilla',
  pathMatch:'full'
},{
path:'Mozilla',
component:MozillaThunderbirdComponent
},
{
  path:'Microsoft',
  component:MicrosoftOutlookComponent
},
{
  path:'Google',
  component:GoogleMailComponent
}


];
