import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ProviderService}  from './switch-provider.service'
import {RaDetails} from './switch-provider.model'

@Component({
  selector: 'app-switch-provider',
  templateUrl: './switch-provider.component.html',
  styleUrls: ['./switch-provider.component.css']
})
export class SwitchProviderComponent implements OnInit{
  isSwitchEnabled: boolean = false;
  curretnProviderNo: string = '1223';
  closeResult: string;
  dropList: RaDetails[];
  selectedProvider: string;
  constructor(private modalService: NgbModal, private providerService: ProviderService) {}

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedProvider = event.target.value;
  }

  open(content) {
    this.providerService.getAllProvider().subscribe((data: RaDetails[]) => {
        console.log(data);
        this.dropList = data;
        console.log(this.dropList);
      })
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(`${result}` == 'Switch click'){
        this.curretnProviderNo = this.selectedProvider;
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit() {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
