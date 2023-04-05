import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { SearchValueModel } from '../../models/search-value.model';

@Component({
  selector: 'asgk-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public searchForm!: FormGroup<{
    first_name: FormControl<string | null>;
    last_name: FormControl<string | null>;
  }>;
  public showClearButton = false;
  private subs = new Subscription();

  constructor(private clientsService: ClientsService, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      first_name: new FormControl<string | null>('', [Validators.required]),
      last_name: new FormControl<string | null>('', [Validators.required]),
    });
  }

  public get firstNameControl(): FormControl<string | null> {
    return this.searchForm.controls.first_name;
  }

  public get lastNameControl(): FormControl<string | null> {
    return this.searchForm.controls.last_name;
  }

  public get searchValue(): SearchValueModel {
    return {
      first_name: this.firstNameControl.value ?? '',
      last_name: this.lastNameControl.value ?? '',
    };
  }

  public onSubmit(): void {
    this.subs.add(
      this.clientsService.searchClient(this.searchValue).subscribe(() => {
        this.showClearButton = !this.showClearButton;
        this.cdr.detectChanges();
      }),
    );
  }

  public changeClearButtonVisibility(): void {
    this.subs.add(
      this.clientsService.getClients().subscribe(() => {
        this.showClearButton = !this.showClearButton;
        this.cdr.detectChanges();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
