import { StandardCurve } from "./curves";

export interface CertificateData {
    id: string;
    issuer: string;
    validity: {
        notBefore: string;
        notAfter: string;
    };
    subjectKeyIdentifier: string;
    signatureAlgorithm: string;
    hashFunction: string;
    publicKeyDetails: PublicKeyDetailsRSA | PublicKeyDetailsECDSA | PublicKeyDetailsRSAPSS | undefined;
    rawPem: string;
    rawTxt: string;
}

export interface PublicKeyDetailsRSA {
    modulus: string;
    exponent: string;
    bits: string;
}

export interface PublicKeyDetailsRSAPSS extends PublicKeyDetailsRSA {
    hashFunction: string;
    mgf: string;
    saltLength: string;
}

export interface PublicKeyDetailsECDSA {
    curve: string;
    params: StandardCurve;
    bits: string;
    x: string;
    y: string;
}