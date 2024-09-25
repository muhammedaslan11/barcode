declare module 'pocketbase' {
    export interface RecordModel {
      id: string;
      field?: string; // Adjust according to your actual model fields
      alt?: string;
      // Add other fields that you might use
    }
  
    export const db: {
      collection: (name: string) => {
        getList: (page: number, perPage: number, options?: any) => Promise<any>;
      };
    };
  }
  