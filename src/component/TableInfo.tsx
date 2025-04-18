import { Student } from "../entities/students";

interface TableInfoProps {
    student: Student;
}

export default function TableInfo({ student }: TableInfoProps) {
    return (
        <>
            <h3 className="card-title">{student.name}</h3>
            <span className={`badge mb-3 ${student.gender === "male" ? "bg-primary" : "bg-danger"}`}>
                {student.gender}
            </span>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Math</th>
                        <th scope="col">Chemistry</th>
                        <th scope="col">Physics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{student.courses.math}</td>
                        <td>{student.courses.chem}</td>
                        <td>{student.courses.physic}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
