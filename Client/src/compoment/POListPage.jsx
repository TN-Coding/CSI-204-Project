import React, { useState, useEffect } from "react";
import poData from "../data/PoData"; // 👈 เปลี่ยนตรงนี้
import Receipt from "./receipt";
import "./popup.css";
import "./table-style.css";

const POListPage = () => {
  const [poList, setPoList] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  useEffect(() => {
    const localReceipts = JSON.parse(localStorage.getItem("poList") || "[]");
    setPoList([...poData, ...localReceipts]); // 👈 ใช้ poData แทน receiptData
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📄 รายการใบสั่งซื้อ (PO)</h2>
      {poList.length === 0 ? (
        <p>ไม่พบรายการ PO</p>
      ) : (
        <div className="table-container">
          <table className="pr-table">
            <thead>
              <tr>
                <th>ชื่อบริษัท</th>
                <th>เลขที่ PO</th>
                <th>ยอดรวม (บาท)</th>
                <th>วันที่ออก</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {poList.map((po, index) => (
                <tr key={index} onClick={() => setSelectedReceipt(po)}>
                  <td>{po.issuer.name}</td>
                  <td>{po.number}</td>
                  <td>{po.grandTotal.toLocaleString()}</td>
                  <td>{po.issueDate}</td>
                  <td>อนุมัติแล้ว</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedReceipt && (
        <div className="popup-overlay" onClick={() => setSelectedReceipt(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedReceipt(null)}>✖</button>
            <Receipt data={selectedReceipt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default POListPage;
