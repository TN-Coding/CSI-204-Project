import React from 'react';
import './receipt.css';
import receiptData from '../data/receiptData';

const Receipt = () => {
  const { poNumber, issueDate, payee, issuer, items, preVat, vat, grandTotal, remarks, amountInWords } = receiptData;

  return (
    <div className="purchase-order">
      <h2>Purchase Order <span>( ต้นฉบับ / original )</span></h2>
      <h1>ใบสั่งซื้อ</h1>

      <div className="section">
        <div className="left">
          <p><strong>ผู้รับเงิน / Payee:</strong> {payee.name}</p>
          <p><strong>ที่อยู่ / Address:</strong> {payee.address}</p>
          <p><strong>เลขผู้เสียภาษี / Tax ID:</strong> {payee.taxId}</p>
          <p><strong>อีเมล์ / Email:</strong> {payee.email}</p>
        </div>
        <div className="right">
          <p><strong>เลขที่ / No.:</strong> {poNumber}</p>
          <p><strong>วันที่ / Issue:</strong> {issueDate}</p>
          <p><strong>อ้างอิง / Ref:</strong> -</p>
        </div>
      </div>

      <hr />

      <div className="section">
        <div className="left">
          <p><strong>ผู้ออก / Issuer:</strong> {issuer.name}</p>
          <p><strong>ที่อยู่:</strong> {issuer.address}</p>
        </div>
        <div className="right">
          <p><strong>เลขผู้เสียภาษี / Tax ID:</strong> {issuer.taxId1}</p>
          <p><strong>เลขผู้เสียภาษี / Tax ID:</strong> {issuer.taxId2}</p>
        </div>
      </div>

      <table className="items-table">
        <thead>
          <tr>
            <th>รหัส / ID no.</th>
            <th>คำอธิบาย / Description</th>
            <th>จำนวน / Quantity</th>
            <th>หน่วย / Unit</th>
            <th>ราคาต่อหน่วย / Unit Price</th>
            <th>มูลค่าก่อนภาษี / Pre-Tax Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.quantity.toFixed(2)}</td>
              <td>{item.unit}</td>
              <td>{item.unitPrice.toFixed(2)}</td>
              <td>{item.preTaxAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <p><strong>หมายเหตุ / Remarks:</strong> {remarks}</p>
        <p><strong>ราคาสุทธิสินค้า (บาท) / Pre-VAT:</strong> {preVat.toFixed(2)}</p>
        <p><strong>ภาษีมูลค่าเพิ่ม (บาท) / VAT:</strong> {vat.toFixed(2)}</p>
        <p><strong>จำนวนเงินรวมทั้งหมด (บาท) / Grand Total:</strong> {grandTotal.toFixed(2)}</p>
      </div>

      <div className="footer">
        <div>จำนวนเงินรวมทั้งสิ้น</div>
        <div>{amountInWords}</div>
      </div>

      <div className="signatures">
        <div><strong>อนุมัติโดย / Approved by</strong></div>
        <div><strong>ผู้ขายตอบรับ / Accepted by</strong></div>
      </div>
    </div>
  );
};

export default Receipt;
