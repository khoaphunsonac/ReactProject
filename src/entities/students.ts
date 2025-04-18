export interface Student {
    id: number;
    name: string;
    gender: string;
    courses: {
        math: number;
        chem: number;
        physic: number;
    };
}

const students: Student[] = [
    { id: 1, name: "Kevin", gender: "male", courses: { math: 6.4, chem: 7.8, physic: 4.5 } },
    { id: 2, name: "Peter", gender: "female", courses: { math: 3.4, chem: 8.1, physic: 5.6 } },
    { id: 3, name: "Mary", gender: "male", courses: { math: 6.2, chem: 9.1, physic: 3.5 } },
];
export default students;
