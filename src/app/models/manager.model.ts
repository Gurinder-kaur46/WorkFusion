export interface ManagerModel{
    projectId: number; 
    projectName: string;
    description: string; 
    startDate: Date; 
    endDate: Date; 
    budget: number; 
    status: string;
    clientFirstName:string;
    clientLastName:string;
    clientId: number;
    // createdAt: Date; 
     updatedAt: Date; 
    managerId:number;
    deadline:Date;
    actualCost :number;
    attachments:string;
    milestones: number;
    teamMembers: string;
     isActive:boolean;
}