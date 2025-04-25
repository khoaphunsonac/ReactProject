import { useState } from "react";
import students, { Student } from "../entities/students";
import TableInfo from "./TableInfo";

export default function SearchByAvg() {
    let [score, setScore] = useState({ max: 0, min: 0 });
    let [result, setResult]: any = useState<Student[]>([]);
    const Search = () => {
        const res = students.filter((student) => {
            let avg = (student.courses.math * 3 + student.courses.physic * 2 + student.courses.chem) / 6;
            return avg >= score.min && avg <= score.max;
        });
        setResult(res);
    
    };
    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="minScore" className="form-label">
                        Min Score
                    </label>
                    <input
                        id="minScore"
                        type="number"
                        className="form-control"
                        placeholder="Nhập điểm tối thiểu"
                        onChange={(evt) => {
                            setScore({ ...score, min: Number(evt.target.value) });
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="maxScore" className="form-label">
                        Max Score
                    </label>
                    <input
                        id="maxScore"
                        type="number"
                        className="form-control"
                        placeholder="Nhập điểm tối đa"
                        onChange={(evt) => {
                            setScore({ ...score, max: Number(evt.target.value) });
                        }}
                    />
                </div>
            </div>
            <div className="text-center mb-4">
                <button className="btn btn-primary" onClick={Search}>
                    Tìm kiếm
                </button>
            </div>
            {result.length > 0 ? (
                <div className="row">
                    {result.map((student: Student) => (
                        <div className="col-md-6 col-lg-4 mb-3" key={student.id}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <TableInfo student={student} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : result.length === 0 && (score.min > 0 || score.max > 0) ? (
                <p className="text-center mt-4 text-muted">Không tìm thấy sinh viên nào.</p>
            ) : null}
        </div>
    );
}
