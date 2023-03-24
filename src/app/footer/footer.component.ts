import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss' ]
})
export class FooterComponent {
  public faFacebook = faFacebookF;
  public faEnvelope = faEnvelope;
  public faPhone = faPhone;
  public faTwitter = faTwitter;
  public faLinkedin = faLinkedin;

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
