export enum UserRoles {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_CUSTOMER = 'ROLE_CUSTOMER',
    
  }
  
  export class UserEntity {
    id!: number;
    username!: string;
    password!: string;
    roles!: UserRoles[];
    admin!: AdminEntity;
    customer!: CustomerEntity;
  
    
  }
  
  export class AdminEntity {
    id!: number;
    user!: UserEntity;
  
    // constructor(id: number, user: UserEntity) {
    //   this.id = id;
    //   this.user = user;
    // }
  }
  
  export class CustomerEntity {
    id!: number;
    user!: UserEntity;
  
    // constructor(id: number, user: UserEntity) {
    //   this.id = id;
    //   this.user = user;
    // }
  }
  