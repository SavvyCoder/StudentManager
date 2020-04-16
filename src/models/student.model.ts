export interface Student {
    first: string;
    last: string;
    email: string;
    studentClasses: StudentClass[];
    average?: number;
}

export interface StudentClass {
    id: number;
    grade: number; 
}
