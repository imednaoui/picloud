import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{evenementservice} from '../service/evenementservice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/coreservice';
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  datedebut!: Date ;
  datefin!: Date ;
  nom!: String ;
  empForm! : FormGroup;

  constructor(private _fb: FormBuilder,
    private _empService: evenementservice,
    private _dialogRef: MatDialogRef<EvenementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
      this.empForm = this._fb.group({
        nom: '',
        datedebut: '',
        datefin: '',
       
      });


     }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit1() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEvenemnt(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('evenement detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEvenement(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('evenement added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}
