import { Component, OnInit } from "@angular/core";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  parkingFull: boolean = false;
  constructor() {}
  carParking: boolean[][] = [
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true]
  ];

  ngOnInit() {}

  freeParking(l: number, p: number): void {
    this.carParking[l][p] = true;
    this.parkingFull = false;
  }

  assignParking() {
    for (let level in this.carParking) {
      for (let parking in this.carParking[level]) {
        if (this.carParking[level][parking] == true) {
          this.carParking[level][parking] = false;
          return;
        }
      }
    }
    this.parkingFull = true;
  }
}
