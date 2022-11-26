import {
  PropertiesData,
  AnimalsData,
  IndividualAnimalData,
  IndividualUnitData,
  IndividualComplaintData,
} from '../types/types';

export const simplePropertiesConverter = (data: DataTypesComesFromBack.PropertiesRequestData): PropertiesData => {
  return {
    content: data.content.map((item) => {
      return {
        id: item.id,
        name: item.name,
        unit: item.unitCount,
        address: item.address1,
        type: item.type,
        photoUrl: item.photoUrl,
      };
    }),
    totalPages: data.totalPages,
    totalElementsCount: data.totalElements,
  };
};

export const simpleAnimalsConvertor = (data: DataTypesComesFromBack.AnimalsRequestData): AnimalsData => {
  return {
    content: data.content.map((item) => {
      return {
        id: item.id,
        propertyId: item.rentalId,
        name: item.animalName,
        type: item.animalType,
        tenantName: item.tenantName,
        rentalUnitNumber: item.rentalUnitNumber,
        petPhotoUrl: item.petPhotoUrl,
        rentalUnit: item.rentalUnitNumber,
        colors: item.animalColors,
        rentalName: item.rentalName,
      };
    }),
    totalPages: data.totalPages,
    totalElementsCount: data.totalElements,
  };
};

export const simpleIndividualAnimalConvertor = (
  data: DataTypesComesFromBack.IndividualAnimalRequestData
): IndividualAnimalData => {
  return {
    name: data.name,
    type: data.animalType,
    color: data.animalColors,
    breed: data.animalBreed,
    gender: data.animalGender === 'FEMALE' ? 'Female' : 'Male',
    age: data.animalAge,
    ageUnit: data.animalAgeUnit,
    weight: data.animalWeightLbs,
    rentalUnitNumber: data.rentalUnitNumber,
    imageUrls: data.animalImageUrls,
    rentalName: data.rentalName,
    petPhotoUrl: data.petPhotoUrl,
    tenantName: data.tenantName,
    applicationType: data.applicationType,
    expirationDate: data.animalRabiesVaccinationExpirationDate,
    vaccinatedDate: data.animalRabiesVaccinationGivenDate,
    houseTrained: data.isAnimalHouseTrained ? 'Yes' : 'No',
  };
};

export const simpleIndividualUnitConvertor = (
  data: DataTypesComesFromBack.IndividualUnitRequestData
): IndividualUnitData => {
  return {
    propertyName: data.rental.name,
    address: data.rental.address1,
  };
};

export const simpleIndividualComplaintConvertor = (
  data: DataTypesComesFromBack.IndividualComplaintRequestData
): IndividualComplaintData => {
  return {
    complaint: {
      address: data.rentalAddress,
      rentalUnit: data.unitNumber,
      operatedBy: data.createdUser.type,
    },
    complaintInfo: {
      complaintType: data.animalComplaintType,
      status: data.docType,
      createdDate: data.creationDateTime,
      message: data.message,
      photos: data.photos || [],
    },
  };
};

export const simpleRentalNamesConverter = (
  data: DataTypesComesFromBack.RentalNamesRequestData[]
): { name: string; key: string }[] => {
  return data.map((item) => {
    return {
      key: `${item.id}`,
      name: item.name,
    };
  });
};
