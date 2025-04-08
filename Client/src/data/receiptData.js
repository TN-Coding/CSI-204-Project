const receiptData = [
  {
    type: "ใบขอซื้อ",
    number: "2021050001",
    issueDate: "29/05/2021",
    payee: {
      name: "บริษัท สวิทช์ แอนด์เทคทีดี จำกัด (สำนักงานใหญ่)",
      address: "เลขที่ 7/208 หมู่ 9 ตำบลลัดหลวง อำเภอพระประแดง จังหวัดสมุทรปราการ 73160",
      taxId: "0735558001091",
      email: "cnatapat@gmail.com"
    },
    issuer: {
      name: "บริษัท ซิตี้อิเล็ค แอนด์พาร์ทเนอร์ จำกัด (สำนักงานใหญ่)",
      address: "1111/72 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250",
      taxId1: "0105564068709",
      taxId2: "0610655570"
    },
    items: [
      {
        id: "P00002",
        description: "เหล็ก",
        quantity: 5,
        unit: "แผ่น",
        unitPrice: 100.00,
        preTaxAmount: 500.00
      }
    ],
    preVat: 500.00,
    vat: 35.00,
    grandTotal: 535.00,
    remarks: "-",
    amountInWords: "ห้าร้อยสามสิบห้าบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050002",
    issueDate: "30/05/2021",
    payee: {
      name: "บริษัท เอ็นเทอร์ไพรส์ แอนด์คอนซัลแทนท์ จำกัด",
      address: "เลขที่ 12/345 หมู่ 5 ตำบลบางเมือง อำเภอเมือง สมุทรปราการ 10250",
      taxId: "0735558001092",
      email: "enterprise@gmail.com"
    },
    issuer: {
      name: "บริษัท แอดวานซ์ คอนซัลแทนท์ จำกัด",
      address: "888/11 ถนนสุขุมวิท เขตพระโขนง กรุงเทพมหานคร 10110",
      taxId1: "0105564068710",
      taxId2: "0610655571"
    },
    items: [
      {
        id: "P00003",
        description: "คอมพิวเตอร์",
        quantity: 3,
        unit: "เครื่อง",
        unitPrice: 15000.00,
        preTaxAmount: 45000.00
      }
    ],
    preVat: 45000.00,
    vat: 3150.00,
    grandTotal: 48150.00,
    remarks: "-",
    amountInWords: "สี่หมื่นแปดพันหนึ่งร้อยห้าสิบบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050003",
    issueDate: "01/06/2021",
    payee: {
      name: "บริษัท ดีพลัส เทคโนโลยี จำกัด",
      address: "เลขที่ 45/22 หมู่ 4 ตำบลลำโพ อำเภอลำลูกกา จังหวัดปทุมธานี 12150",
      taxId: "0735558001093",
      email: "dplus-tech@gmail.com"
    },
    issuer: {
      name: "บริษัท ไทย ดิจิตอล จำกัด",
      address: "22/5 ถนนสุขุมวิท เขตคลองเตย กรุงเทพมหานคร 10110",
      taxId1: "0105564068721",
      taxId2: "0610655572"
    },
    items: [
      {
        id: "P00004",
        description: "โปรเจคเตอร์",
        quantity: 2,
        unit: "เครื่อง",
        unitPrice: 12000.00,
        preTaxAmount: 24000.00
      }
    ],
    preVat: 24000.00,
    vat: 1680.00,
    grandTotal: 25680.00,
    remarks: "-",
    amountInWords: "สองหมื่นห้าร้อยหกสิบบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050004",
    issueDate: "02/06/2021",
    payee: {
      name: "บริษัท อินโนเวท แอนด์ดีไซน์ จำกัด",
      address: "เลขที่ 22/44 หมู่ 7 ตำบลบางบัวทอง อำเภอบางบัวทอง จังหวัดนนทบุรี 11110",
      taxId: "0735558001094",
      email: "innovate-design@gmail.com"
    },
    issuer: {
      name: "บริษัท เบสท์ ดีไซน์ จำกัด",
      address: "77/7 ถนนพระราม 9 เขตห้วยขวาง กรุงเทพมหานคร 10320",
      taxId1: "0105564068732",
      taxId2: "0610655573"
    },
    items: [
      {
        id: "P00005",
        description: "โต๊ะทำงาน",
        quantity: 10,
        unit: "ตัว",
        unitPrice: 800.00,
        preTaxAmount: 8000.00
      }
    ],
    preVat: 8000.00,
    vat: 560.00,
    grandTotal: 8560.00,
    remarks: "-",
    amountInWords: "แปดพันห้าร้อยหกสิบบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050005",
    issueDate: "03/06/2021",
    payee: {
      name: "บริษัท ไบโอเทค แอนด์โซลูชั่น จำกัด",
      address: "เลขที่ 112/20 หมู่ 8 ตำบลบางยาง อำเภอพระประแดง จังหวัดสมุทรปราการ 10130",
      taxId: "0735558001095",
      email: "biotech-solution@gmail.com"
    },
    issuer: {
      name: "บริษัท ยูนิเวอร์แซล จำกัด",
      address: "88/15 ถนนพระราม 4 เขตปทุมวัน กรุงเทพมหานคร 10330",
      taxId1: "0105564068743",
      taxId2: "0610655574"
    },
    items: [
      {
        id: "P00006",
        description: "เครื่องตรวจวัด",
        quantity: 7,
        unit: "เครื่อง",
        unitPrice: 5000.00,
        preTaxAmount: 35000.00
      }
    ],
    preVat: 35000.00,
    vat: 2450.00,
    grandTotal: 37450.00,
    remarks: "-",
    amountInWords: "สามหมื่นเจ็ดพันสี่ร้อยห้าสิบบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050006",
    issueDate: "04/06/2021",
    payee: {
      name: "บริษัท เซอร์วิส แอนด์โซลูชั่น จำกัด",
      address: "เลขที่ 300/50 หมู่ 2 ตำบลคลองแห อำเภอเมือง จังหวัดสงขลา 90000",
      taxId: "0735558001096",
      email: "service-solution@gmail.com"
    },
    issuer: {
      name: "บริษัท อินโนเวท คอนซัลท์ จำกัด",
      address: "55/9 ถนนสุขุมวิท เขตคลองเตย กรุงเทพมหานคร 10100",
      taxId1: "0105564068754",
      taxId2: "0610655575"
    },
    items: [
      {
        id: "P00007",
        description: "แอร์",
        quantity: 3,
        unit: "ตัว",
        unitPrice: 25000.00,
        preTaxAmount: 75000.00
      }
    ],
    preVat: 75000.00,
    vat: 5250.00,
    grandTotal: 80250.00,
    remarks: "-",
    amountInWords: "แปดหมื่นสองพันสองร้อยห้าสิบบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050007",
    issueDate: "05/06/2021",
    payee: {
      name: "บริษัท ดิจิตอล เทคโนโลยี จำกัด",
      address: "เลขที่ 400/100 หมู่ 3 ตำบลบางพลี อำเภอบางพลี จังหวัดสมุทรปราการ 10540",
      taxId: "0735558001097",
      email: "digital-tech@gmail.com"
    },
    issuer: {
      name: "บริษัท พีซ เทคโนโลยี จำกัด",
      address: "100/30 ถนนประเสริฐมนูกิจ เขตลาดพร้าว กรุงเทพมหานคร 10230",
      taxId1: "0105564068765",
      taxId2: "0610655576"
    },
    items: [
      {
        id: "P00008",
        description: "จอคอมพิวเตอร์",
        quantity: 5,
        unit: "จอ",
        unitPrice: 6000.00,
        preTaxAmount: 30000.00
      }
    ],
    preVat: 30000.00,
    vat: 2100.00,
    grandTotal: 32100.00,
    remarks: "-",
    amountInWords: "สามหมื่นสองพันหนึ่งร้อยบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050008",
    issueDate: "06/06/2021",
    payee: {
      name: "บริษัท เอ็กซ์ไอซี จำกัด",
      address: "เลขที่ 12/60 หมู่ 6 ตำบลบางวัว อำเภอเมือง จังหวัดฉะเชิงเทรา 24110",
      taxId: "0735558001098",
      email: "xice@gmail.com"
    },
    issuer: {
      name: "บริษัท บีซี เทคโนโลยี จำกัด",
      address: "11/7 ถนนสาธุประดิษฐ์ เขตยานนาวา กรุงเทพมหานคร 10120",
      taxId1: "0105564068776",
      taxId2: "0610655577"
    },
    items: [
      {
        id: "P00009",
        description: "เครื่องเสียง",
        quantity: 6,
        unit: "เครื่อง",
        unitPrice: 8000.00,
        preTaxAmount: 48000.00
      }
    ],
    preVat: 48000.00,
    vat: 3360.00,
    grandTotal: 51360.00,
    remarks: "-",
    amountInWords: "ห้าหมื่นหนึ่งพันสามร้อยหกสิบบาทถ้วน"
  },
  {
    type: "ใบขอซื้อ",
    number: "2021050009",
    issueDate: "07/06/2021",
    payee: {
      name: "บริษัท เทคโนโลยีซัพพลาย จำกัด",
      address: "เลขที่ 44/80 หมู่ 10 ตำบลบางโฉลง อำเภอบางพลี จังหวัดสมุทรปราการ 10540",
      taxId: "0735558001099",
      email: "techsupplies@gmail.com"
    },
    issuer: {
      name: "บริษัท เทคโนโลยี จำกัด",
      address: "55/17 ถนนสุขุมวิท เขตบางนา กรุงเทพมหานคร 10260",
      taxId1: "0105564068787",
      taxId2: "0610655578"
    },
    items: [
      {
        id: "P00010",
        description: "กล้องวงจรปิด",
        quantity: 4,
        unit: "ตัว",
        unitPrice: 5000.00,
        preTaxAmount: 20000.00
      }
    ],
    preVat: 20000.00,
    vat: 1400.00,
    grandTotal: 21400.00,
    remarks: "-",
    amountInWords: "สองหมื่นหนึ่งพันสี่ร้อยบาทถ้วน"
  }
];

export default receiptData;
