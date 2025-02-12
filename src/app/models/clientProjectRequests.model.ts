export interface ClientsProjectRequestsModel {
    IsActive: any;
    Attachments: any;
    ClientID: number | null;
    projectID: number;
    clientID: number;
    projectTitle: string;
    projectDescription: string;
    projectType: string;
    objectives: string;
    keyDeliverables: string;
    budget: number;
    preferredStartDate: Date;
    deadline: Date;
    targetAudience: string;
    designPreferences: string;
    functionalRequirements: string;
    technologyPreferences: string;
    challengesToAddress: string;
    competitorReferences: string;
    attachments: string;
    specialInstructions: string;
    managerNotes: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  