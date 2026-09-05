export declare function getPayuKey(): string;
export declare function getPayuSalt(): string;
export declare function getPayuMode(): "test" | "production";
export declare function getPayuActionUrl(): string;
export declare function timingSafeCompare(a: string, b: string): boolean;
export interface PayuRequestHashParams {
    key?: string;
    txnid: string;
    amount: number | string;
    productinfo: string;
    firstname: string;
    email: string;
    udf1?: string;
    udf2?: string;
    udf3?: string;
    udf4?: string;
    udf5?: string;
    salt?: string;
}
export interface PayuResponseHashParams {
    key?: string;
    txnid: string;
    amount: number | string;
    productinfo: string;
    firstname: string;
    email: string;
    status: string;
    udf1?: string;
    udf2?: string;
    udf3?: string;
    udf4?: string;
    udf5?: string;
    hash: string;
    salt?: string;
    additionalCharges?: string;
}
export declare function generatePayuRequestHash(params: PayuRequestHashParams): string;
export declare function verifyPayuResponseHash(params: PayuResponseHashParams): boolean;
//# sourceMappingURL=payu.d.ts.map