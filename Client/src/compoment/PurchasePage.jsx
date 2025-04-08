import React, { useState, useEffect } from "react";
import axios from "axios";
import Receipt from "./receipt";
const PurchasePage = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/purchase-items")
      .then(res => {
        const data = res.data.map(item => ({
          ...item,
          "ราคารวม": item["จำนวน"] * item["ราคาต่อหน่วย"],
        }));
        setItems(data);
      });
  }, []);

  const toggleSelect = (index) => {
    setSelectedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const generateReceipt = () => {
    const selected = items.filter((_, i) => selectedItems[i]);
    if (selected.length === 0) return alert("กรุณาเลือกรายการ");

    const total = selected.reduce((sum, i) => sum + i["ราคารวม"], 0);
    const vat = total * 0.07;

    const receipt = {
      Number: "PO-" + Date.now(),
      issueDate: new Date().toLocaleDateString("th-TH"),
      payee: { name: "บริษัท XXX", address: "ที่อยู่", taxId: "1234567890", email: "xxx@example.com" },
      issuer: { name: "ฝ่ายจัดซื้อ", address: "สำนักงานใหญ่", taxId1: "1111", taxId2: "2222" },
      items: selected.map((item, i) => ({
        id: item["รหัสสินค้า"],
        description: item["ชื่อสินค้า"],
        quantity: item["จำนวน"],
        unit: item["หน่วย"],
        unitPrice: item["ราคาต่อหน่วย"],
        preTaxAmount: item["ราคารวม"],
      })),
      preVat: total,
      vat: vat,
      grandTotal: total + vat,
      remarks: "-",
      amountInWords: "ห้าร้อยสามสิบห้าบาทถ้วน" // เพิ่มฟังก์ชันแปลงเลขเป็นตัวหนังสือได้ทีหลัง
    };

    setReceiptData(receipt);
  };

  const sendToOtherDepartment = () => {
    if (!receiptData) return alert("ยังไม่มีใบเสร็จ");
    axios.post("http://localhost:3001/api/forward/department", receiptData)
      .then(() => alert("✅ ส่งใบเสร็จเรียบร้อย"))
      .catch(() => alert("❌ ส่งใบเสร็จล้มเหลว"));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">📦 รายการจัดซื้อ</h1>
      {/* ตารางเลือกสินค้า */}
      <table className="w-full border mt-4">
        <thead><tr><th>เลือก</th><th>สินค้า</th><th>จำนวน</th><th>ราคารวม</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td><input type="checkbox" onChange={() => toggleSelect(i)} /></td>
              <td>{item["ชื่อสินค้า"]}</td>
              <td>{item["จำนวน"]}</td>
              <td>{item["ราคารวม"].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={generateReceipt} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        🧾 สร้างใบเสร็จ
      </button>

      {receiptData && (
        <div className="mt-6">
          <Receipt data={receiptData} />
          <button onClick={sendToOtherDepartment} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            📤 ส่งใบเสร็จไปยังแผนกอื่น
          </button>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
