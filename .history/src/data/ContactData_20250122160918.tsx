export interface FormValues {
    id: number,
    name?: string,
    role?: string,
    skills?: string[],
    startDate?: string,
    preferred?: string

}


const today = new Date();

export const contactData:Array<FormValues> =[

    {id:1,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preferred:"working from home"},
    {id:1,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preferred:"working from home"}
    {id:1,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preferred:"working from home"}
]