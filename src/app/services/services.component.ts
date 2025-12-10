import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services = [
    {title: 'जन्म दाखला', subtitle: 'Special for today', image: 'assets/images/others/Home 1.jpg',
      content:"1. अर्ज <br> 2. बाळांचे वडिलांचे आधारकार्ड <br> 3. ग्रामपंचायत कार्यालयामध्ये नोंद आवश्यक"
    },
    {title: 'मृत्यू दाखला', subtitle: 'New Arrivals On Sale', image: 'assets/images/others/Home 2.jpg', 
      content:"1. अर्ज <br> 2. मृताचे आधारकार्ड <br> 3. ग्रामपंचायत कार्यालयामध्ये नोंद आवश्यक"
    },
    {title: 'विवाह प्रमणपत्र', subtitle: 'Special for today', image: 'assets/images/carousel/banner3.jpg', 
      content:"1. वधू-वर आधार कार्ड  <br> 2. वधू-वर टीसी <br> 3. वधू-वर पासपोर्ट फोटो <br> 4. लग्न पत्रिका <br> 5. लग्नाचे फोटो <br> 6. लग्नाचे शपथपत्र <br> 7. तीन साक्षरदार फोटो, आधार कार्ड झेरॉक्स"
    },
    {title: 'रहिवासी दाखला', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/banner4.jpg', 
      content:"1. आधार कार्ड &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    },
    {title: 'दारिद्र्य रेषेखालील दाखला', subtitle: 'Special for today', image: 'assets/images/carousel/banner5.jpg', 
      content:"1. B.P.L यादि क्रमांक <br> 2. आधार कार्ड <br> 3. राशन कार्ड झेरॉक्स <br> 4. पासपोर्ट फोटो &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    },
];





  constructor() { }

  ngOnInit(): void {
  }

}
