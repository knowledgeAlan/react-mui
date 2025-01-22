export interface FormValues {
    id: number,
    name?: string,
    role?: string,
    skills?: string[],
    startDate?: string,
    preferred?: string

}


const today = new Date();

export const contactData