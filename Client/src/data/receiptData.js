const receiptData = {
    poNumber: "PO-2021050001",
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
  };
  
  export default receiptData;
  