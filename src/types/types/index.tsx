import React from 'react';

export type PropertiesTypes = {
  id: number;
  unit: string;
  name: string;
  address: string;
  type: string;
  photoUrl: string;
};

export type AnimalsContentTypes = {
  name: string;
  type: string;
  tenantName: string;
  rentalName: string;
  petPhotoUrl: string;
  rentalUnitNumber: string;
  rentalUnit: string;
  colors: string[];
  id: number;
  propertyId: number;
};

export type PropertiesData = {
  content: PropertiesTypes[];
  totalPages: number;
  totalElementsCount: number;
};

export type IndividualPropertyData = {
  id: number;
  name: string;
  photoUrl: null | string;
  defaultPolicy: {
    name: string;
  };
  address1: string;
  unitCount: number;
};

export type AnimalsData = {
  content: AnimalsContentTypes[];
  totalPages: number;
  totalElementsCount: number;
};

export type IndividualAnimalData = {
  name: string;
  type: string;
  tenantName: string;
  rentalName: string;
  petPhotoUrl: string;
  color: string[];
  imageUrls: string[];
  breed: string;
  gender: string;
  ageUnit: string;
  applicationType: string;
  rentalUnitNumber: string;
  age: number;
  weight: number;
  expirationDate: string;
  vaccinatedDate: string;
  houseTrained: string;
};

export type ResidentInfoDataTypes = {
  applicationType: string;
  rentalName: string;
  rentalUnitNumber: string;
  tenantName: string;
};

export type IndividualUnitData = {
  address: string;
  propertyName: string;
};

export type IndividualComplaint = {
  address: string;
  rentalUnit: string | null;
  operatedBy: string;
};

export type IndividualComplaintInfo = {
  complaintType: string;
  status: string;
  createdDate: string;
  message: string;
  photos: [] | string[];
};

export type IndividualComplaintData = {
  complaint: IndividualComplaint;
  complaintInfo: IndividualComplaintInfo;
};

export type RentalNameData = {
  key: string;
  name: string;
};

export type ReportAnimalComplaintAddressProps = {
  value: number | undefined;
  handleBlur: any;
  handleChange: ({ target }: { target: { name: string; value: string } }) => void;
  errors: {
    rentalId?: string;
  };
  touched: {
    rentalId?: boolean;
  };
};

export type ResidentUnitProps = {
  values: {
    tenantName?: string;
    unitNumber?: string;
  };
  touched: {
    unitNumber?: boolean;
  };
  errors: {
    unitNumber?: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: any;
};

export type ComplaintInformationProps = {
  value: string;
  handleChange: ({ target }: { target: { name: string; value: string } }) => void;
  handleBlur: any;
  errors: {
    animalComplaintType?: string;
  };
  touched: {
    animalComplaintType?: boolean;
  };
};

export type CreateAnimalComplaintFormProps = {
  errors: {
    rentalId?: string;
    unitNumber?: string;
    animalComplaintType?: string;
  };
  touched: {
    rentalId?: boolean;
    unitNumber?: boolean;
    animalComplaintType?: boolean;
  };
  values: {
    animalComplaintType: string;
    rentalId?: number | undefined;
    tenantName?: string;
    unitNumber?: string;
  };
  imageUrls: string[];
  setImageUrls: (val: string[] | []) => void;
  handleBlur: any;
  handleChange: ({ target }: { target: { name: string; value: string } }) => void;
};
