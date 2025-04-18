import { Link } from "react-router-dom";
import students from "../entities/students";
import TableInfo from "./TableInfo";

export default function Home() {
    return (
        <div className="container mt-4">
            <div className="row">
                {students.map((student, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <Link to={`/detail/${student.id}`} className="text-decoration-none">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <TableInfo student={student} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
