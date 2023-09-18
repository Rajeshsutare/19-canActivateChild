
export interface Iuser {
    userName: string;
    userId: string;
    editStatus: string;
}

export interface Iproduct {
    prodName: string;
    prodId: string;
    ProdStatus: IprodStatus;
    canReturn: number;
}

export enum IprodStatus {
    InProcess='InProcess',
    Dispatched='Dispatched',
    Delivered='Delivered'
}