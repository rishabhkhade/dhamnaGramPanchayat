import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EnquiryComponent} from '../enquiry/enquiry.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    showEnquiry: boolean = false;

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
    }

    openEnquiryForm() {
        this.showEnquiry = !this.showEnquiry;
//        const dialogRef = this.dialog.open(EnquiryComponent, {
//            width: '250px',
//            //      data: {name: this.name, animal: this.animal},
//        });
//
//        dialogRef.afterClosed().subscribe(result => {
//            console.log(`Dialog result: ${result}`);
//        });
    }

    downloadPDF(){
        // window.open("assets/Files/FINAL DHAMNA LINGA BOOKLET.pdf", '_blank');
        window.open('assets/Files/FINAL DHAMNA LINGA BOOKLET.pdf', '_blank');
    }
    
}
