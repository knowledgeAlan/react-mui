export interface FormValues {
    id: number,
    name?: string,
    role?: string,
    skills?: string[],
    startDate?: string,
    preference?: string

}


const today = new Date();

export const contactData:Array<FormValues> =[

    {id:1,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:2,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:3,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:4,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:5,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:6,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:7,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:8,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
    {id:9,name: "John",role: "Dev",skills:["React","Angular"],startDate:"2025-01-21",preference:"working from home"},
]