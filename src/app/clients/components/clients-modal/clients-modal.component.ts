import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from '../../services/clients.service';
import { PushMessageModel } from '../../models/push-message.model';

@Component({
  selector: 'asgk-clients-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss'],
})
export class ClientsModalComponent implements OnInit, OnDestroy {
  public messageForm!: FormGroup<{
    user_id: FormControl<string | null>;
    push_message: FormControl<string | null>;
  }>;
  private subs = new Subscription();

  constructor(private clientsService: ClientsService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.messageForm = new FormGroup({
      user_id: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(7),
        Validators.minLength(7),
        Validators.pattern('^\\d{7}$'),
      ]),
      push_message: new FormControl<string | null>('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
    });
  }

  public get userIdControl(): FormControl<string | null> {
    return this.messageForm.controls.user_id;
  }

  public get pushMessageControl(): FormControl<string | null> {
    return this.messageForm.controls.push_message;
  }

  public get message(): PushMessageModel {
    return {
      user_id: this.userIdControl.value ?? '',
      push_message: this.pushMessageControl.value ?? '',
    };
  }

  public onSubmit(): void {
    this.subs.add(
      this.clientsService.sendMessage(this.message).subscribe(() => {
        this.dialog.closeAll();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
