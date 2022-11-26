/* eslint-disable */

declare namespace DataTypesComesFromBack {
  interface Serializable {}

  type contentType = {
    id: number;
    unitCount: string;
    address1: string;
    name: string;
    type: string;
    photoUrl: string;
  };

  type animalContentType = {
    animalName: string;
    animalType: string;
    petPhotoUrl: string;
    tenantName: string;
    rentalName: string;
    rentalUnitNumber: string;
    animalColors: string[];
    id: number;
    rentalId: number;
  };

  interface PropertiesRequestData extends Serializable {
    content: contentType[];
    totalPages: number;
    totalElements: number;
  }

  interface AnimalsRequestData extends Serializable {
    content: animalContentType[];
    totalPages: number;
    totalElements: number;
  }

  interface IndividualAnimalRequestData extends Serializable {
    name: string;
    animalType: string;
    rentalName: string;
    tenantName: string;
    animalColors: string[];
    animalImageUrls: string[];
    animalBreed: string;
    animalGender: string;
    petPhotoUrl: string;
    rentalUnitNumber: string;
    animalAge: number;
    applicationType: string;
    animalAgeUnit: string;
    animalWeightLbs: number;
    animalRabiesVaccinationExpirationDate: string;
    animalRabiesVaccinationGivenDate: string;
    isAnimalHouseTrained: string;
  }

  interface RentalNamesRequestData extends Serializable {
    id: number;
    name: string;
  }

  interface IndividualUnitRequestData extends Serializable {
    rental: {
      address1: string;
      name: string;
    };
  }

  interface IndividualComplaintRequestData extends Serializable {
    animalComplaintType: string;
    docType: string;
    creationDateTime: string;
    createdUser: {
      status: string;
      photoUrl: string;
      type: string;
    };
    rentalAddress: string;
    photos: string[];
    message: string;
    unitNumber: string | null;
  }
}
