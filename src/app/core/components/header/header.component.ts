import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalStorageService } from '../../storage/services/local-storage.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'asgk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public userData$ = this.authService.userData$;

  constructor(private localStorageStorage: LocalStorageService, private authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}
