// pages/ReceiptForm.jsx
import React, { useState } from "react";

const ReceiptForm = () => {
  const [formData, setFormData] = useState({
    Number: "",
    issueDate: "",
    payee: { name: "", address: "", taxId: "", email: "" },
    issuer: { name: "", address: "", taxId1: "", taxId2: "" },
    items: [],
    remarks: "",
  });

  const [currentItem, setCurrentItem] = useState({
    id: "", description: "", quantity: 0, unit: "", unitPrice: 0
  });

  const handleAddItem = () => {
    const preTaxAmount = currentItem.quantity * currentItem.unitPrice;
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { ...currentItem, preTaxAmount }]
    }));
    setCurrentItem({ id: "", description: "", quantity: 0, unit: "", unitPrice: 0 });
  };

  const calculateSummary = () => {
    const preVat = formData.items.reduce((sum, item) => sum + item.preTaxAmount, 0);
    const vat = preVat * 0.07;
    const grandTotal = preVat + vat;
    return { preVat, vat, grandTotal };
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const { preVat, vat, grandTotal } = calculateSummary();

  const dataToSend = {
    ...formData,
    preVat,
    vat,
    grandTotal,
    amountInWords: "ยังไม่แปลงเป็นข้อความ",
  };

  const stored = JSON.parse(localStorage.getItem("prList") || "[]");
  stored.push(dataToSend);
  localStorage.setItem("prList", JSON.stringify(stored));

  alert("ส่งข้อมูลเสร็จแล้ว (ข้อมูลเพิ่มเข้าไปเรียบร้อย)");

  setFormData({ ...formData, items: [] });
};

  

  const { preVat, vat, grandTotal } = calculateSummary();

  return (
    <form onSubmit={handleSubmit}>
      <h1>กรอกใบเสร็จ (PR)</h1>
      <input type="text" placeholder="เลขที่ใบเสร็จ" onChange={e => setFormData({ ...formData, Number: e.target.value })} />
      <input type="date" onChange={e => setFormData({ ...formData, issueDate: e.target.value })} />

      <h3>ข้อมูลผู้รับเงิน</h3>
      <input type="text" placeholder="ชื่อ" onChange={e => setFormData({ ...formData, payee: { ...formData.payee, name: e.target.value } })} />
      <input type="text" placeholder="ที่อยู่" onChange={e => setFormData({ ...formData, payee: { ...formData.payee, address: e.target.value } })} />
      <input type="text" placeholder="Tax ID" onChange={e => setFormData({ ...formData, payee: { ...formData.payee, taxId: e.target.value } })} />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, payee: { ...formData.payee, email: e.target.value } })} />

      <h3>ผู้ออกใบ</h3>
      <input type="text" placeholder="ชื่อผู้ออก" onChange={e => setFormData({ ...formData, issuer: { ...formData.issuer, name: e.target.value } })} />
      <input type="text" placeholder="ที่อยู่" onChange={e => setFormData({ ...formData, issuer: { ...formData.issuer, address: e.target.value } })} />
      <input type="text" placeholder="Tax ID 1" onChange={e => setFormData({ ...formData, issuer: { ...formData.issuer, taxId1: e.target.value } })} />
      <input type="text" placeholder="Tax ID 2" onChange={e => setFormData({ ...formData, issuer: { ...formData.issuer, taxId2: e.target.value } })} />

      <h3>รายการสินค้า</h3>
      <input type="text" placeholder="ID" value={currentItem.id} onChange={e => setCurrentItem({ ...currentItem, id: e.target.value })} />
      <input type="text" placeholder="รายละเอียด" value={currentItem.description} onChange={e => setCurrentItem({ ...currentItem, description: e.target.value })} />
      <input type="number" placeholder="จำนวน" value={currentItem.quantity} onChange={e => setCurrentItem({ ...currentItem, quantity: parseFloat(e.target.value) || 0 })} />
      <input type="text" placeholder="หน่วย" value={currentItem.unit} onChange={e => setCurrentItem({ ...currentItem, unit: e.target.value })} />
      <input type="number" placeholder="ราคาต่อหน่วย" value={currentItem.unitPrice} onChange={e => setCurrentItem({ ...currentItem, unitPrice: parseFloat(e.target.value) || 0 })} />
      <button type="button" onClick={handleAddItem}>เพิ่มรายการ</button>

      <h4>รายการทั้งหมด</h4>
      <ul>
        {formData.items.map((item, index) => (
          <li key={index}>
            {item.description} - {item.quantity} {item.unit} x {item.unitPrice} = {item.preTaxAmount.toFixed(2)} บาท
          </li>
        ))}
      </ul>

      <h3>หมายเหตุ</h3>
      <textarea onChange={e => setFormData({ ...formData, remarks: e.target.value })}></textarea>

      <br />
      <button type="submit">ส่งใบเสร็จ (PR)</button>

      <div>
        <h3>สรุปยอด</h3>
        <p>ยอดก่อน VAT: {preVat.toFixed(2)} บาท</p>
        <p>VAT (7%): {vat.toFixed(2)} บาท</p>
        <p><strong>ยอดรวมทั้งหมด: {grandTotal.toFixed(2)} บาท</strong></p>
      </div>
    </form>
  );
};

export default ReceiptForm;
