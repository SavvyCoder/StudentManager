export interface Student{
    first: string;
    last: string;
    email: string;
    studentClasses: StudentClass[];
}

interface StudentClass {
    id: number;
    grade: number; 
}
