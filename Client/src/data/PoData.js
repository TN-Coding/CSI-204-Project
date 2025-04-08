const poData = [
    {
      type: "ใบสั่งซื้อ",
      number: "PO2021060001",
      issueDate: "10/06/2021",
      payee: {
        name: "บริษัท เอ็มอีซี ซัพพลาย จำกัด",
        address: "เลขที่ 9/100 หมู่ 6 ตำบลบางกรวย อำเภอบางกรวย จังหวัดนนทบุรี 11130",
        taxId: "0735559001101",
        email: "mec-supply@gmail.com"
      },
      issuer: {
        name: "บริษัท ซิตี้อิเล็ค แอนด์พาร์ทเนอร์ จำกัด",
        address: "1111/72 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250",
        taxId1: "0105564068709",
        taxId2: "0610655570"
      },
      items: [
        {
          id: "PO001",
          description: "สายไฟฟ้าแรงสูง",
          quantity: 10,
          unit: "ม้วน",
          unitPrice: 1500.00,
          preTaxAmount: 15000.00
        }
      ],
      preVat: 15000.00,
      vat: 1050.00,
      grandTotal: 16050.00,
      remarks: "-",
      amountInWords: "หนึ่งหมื่นหกพันห้าสิบบาทถ้วน"
    },
    {
      type: "ใบสั่งซื้อ",
      number: "PO2021060002",
      issueDate: "12/06/2021",
      payee: {
        name: "บริษัท โกลบอล เมคคานิคอล จำกัด",
        address: "88/12 ถนนบางนา-ตราด เขตบางนา กรุงเทพมหานคร 10260",
        taxId: "0735559001102",
        email: "global-mech@gmail.com"
      },
      issuer: {
        name: "บริษัท แอดวานซ์ คอนซัลแทนท์ จำกัด",
        address: "888/11 ถนนสุขุมวิท เขตพระโขนง กรุงเทพมหานคร 10110",
        taxId1: "0105564068710",
        taxId2: "0610655571"
      },
      items: [
        {
          id: "PO002",
          description: "เครื่องปั๊มน้ำแรงดันสูง",
          quantity: 2,
          unit: "เครื่อง",
          unitPrice: 18000.00,
          preTaxAmount: 36000.00
        }
      ],
      preVat: 36000.00,
      vat: 2520.00,
      grandTotal: 38520.00,
      remarks: "-",
      amountInWords: "สามหมื่นแปดพันห้าร้อยยี่สิบบาทถ้วน"
    }
  ];
  
  export default poData;
  