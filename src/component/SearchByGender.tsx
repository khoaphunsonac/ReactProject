import { useState } from "react";
import students from "../entities/students";
import TableInfo from "./TableInfo";

export default function SearchByGender() {
    const [selectedGender, setSelectedGender] = useState("");
    const [result, setResult] = useState<typeof students | null>(null);
    const Search = () => {
        const res = students.filter((student) => {
            return student.gender === selectedGender;
        });
        setResult(res);
    };

    return (
        <div className="container mt-4">
            <form className="card p-4 shadow-sm">
                <h5 className="card-title">Search by Gender</h5>
                <div className="mb-3">
                    <label className="form-label">Select Gender:</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="genderMale"
                            name="gender"
                            value="male"
                            className="form-check-input"
                            checked={selectedGender === "male"}
                            onChange={(evt) => {
                                setSelectedGender(evt.target.value);
                            }}
                        />
                        <label htmlFor="genderMale" className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="genderFemale"
                            name="gender"
                            value="female"
                            className="form-check-input"
                            checked={selectedGender === "female"}
                            onChange={(evt) => {
                                setSelectedGender(evt.target.value);
                            }}
                        />
                        <label htmlFor="genderFemale" className="form-check-label">
                            Female
                        </label>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={Search}>
                    Search
                </button>
            </form>
            {result !== null && (
                <div className="mt-4">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {result.map((student, index) => (
                            <div className="col" key={index}>
                                <TableInfo student={student} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
