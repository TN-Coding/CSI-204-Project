import React, { useState, useEffect } from "react";
import receiptData from "../data/receiptData";
import Receipt from "./receipt";
import "./popup.css";
import "./table-style.css"; // สร้างไฟล์ใหม่สำหรับ styling ตาราง

const PRListPage = () => {
  const [prList, setPrList] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  useEffect(() => {
    const localReceipts = JSON.parse(localStorage.getItem("prList") || "[]");
    setPrList([...receiptData, ...localReceipts]);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedList = prList.filter((_, index) => index !== indexToDelete);
    setPrList(updatedList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📄 รายการใบขอซื้อ (PR)</h2>
      {prList.length === 0 ? (
        <p>ไม่พบรายการ PR</p>
      ) : (
        <div className="table-container">
          <table className="pr-table">
            <thead>
              <tr>
                <th>ชื่อบริษัท</th>
                <th>เลขที่ PR</th>
                <th>ยอดรวม (บาท)</th>
                <th>วันที่ออก</th>
                <th>การจัดการ</th>
                <th>ดูรายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              {prList.map((pr, index) => (
                <tr key={index}>
                  <td>{pr.issuer.name}</td>
                  <td>{pr.number}</td>
                  <td>{pr.grandTotal.toLocaleString()}</td>
                  <td>{pr.issueDate}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>
                      ลบ
                    </button>
                  </td>
                  <td>
                    <button className="view-btn" onClick={() => setSelectedReceipt(pr)}>
                      🔍
                    </button>
                  </td>
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

export default PRListPage;
