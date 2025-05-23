import { useState } from "react";
import students, { Student } from "../entities/students";
import TableInfo from "./TableInfo";

export default function SearchByKeyword() {
    let [result, setResult]: any = useState<Student[]>([]);
    let [key, setKey] = useState("");
    const Search = () => {
        const res = students.filter((student) => {
            return student.name.toLowerCase().includes(key.toLowerCase());
        });
        setResult(res);
    };
    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="search" className="form-label">
                                Tìm kiếm theo tên:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                placeholder="Nhập tên sinh viên"
                                onChange={(evt) => {
                                    setKey(evt.target.value);
                                    console.log(evt.target.value);
                                }}
                            />
                        </div>
                        <button type="button" className="btn btn-primary w-100" onClick={Search}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
            {result.length > 0 ? (
                <div className="container mt-4">
                    <div className="row">
                        {result.map((student: Student) => (
                            <div className="col-md-12 mb-3" key={student.id}>
                                <TableInfo student={student} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : result.length === 0 && key !== "" ? (
                <p className="text-center mt-4 text-muted">Không tìm thấy sinh viên nào.</p>
            ) : null}
        </>
    );
}
