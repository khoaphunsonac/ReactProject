import React from "react";
import students from "../entities/students";
import { useParams } from "react-router-dom";
import TableInfo from "./TableInfo";

export default function Detail() {
    let { id } = useParams(); // lấy id từ Querystring
    const student = students.find((student) => student.id === parseInt(id!)); // Dựa trên id , lấy ra ob student
    if (!student) {
        return <div className="alert alert-danger text-center">Student not found</div>;
    }
    const score = ((student.courses.math * 3 + student.courses.chem + student.courses.physic * 2) / 6).toFixed(2); // Điểm trung bình
    // Xếp loại
    const ranking = (score: any) => {
        if (score >= 8) return "Giỏi";
        else if (score >= 6.5) return "Khá";
        else if (score >= 5) return "Trung bình";
        else return "Yếu";
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Student Details</h4>
                </div>
                <div className="card-body">
                    <TableInfo student={student} />
                    <div className="mt-4">
                        <h5 className="text-secondary">Điểm trung bình:</h5>
                        <p className="fs-4 fw-bold">{score}</p>
                    </div>
                    <div className="mt-3">
                        <h5 className="text-secondary">Xếp loại:</h5>
                        <p className={`fs-4 fw-bold ${ranking(score) === "Giỏi" ? "text-success" : ranking(score) === "Khá" ? "text-primary" : ranking(score) === "Trung bình" ? "text-warning" : "text-danger"}`}>
                            {ranking(score)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
