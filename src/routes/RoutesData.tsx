import Login from '../pages/Login';
import Properties from '../pages/Properties';
import PropertyView from '../pages/PropertyView';
import Intro from '../pages/Intro';
import AnimalView from '../pages/IndividualAnimal';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/ProfileEdit';
import AnimalComplaint from '../pages/AnimalComplaint';
import Animals from '../pages/Animals';
import IndividualUnit from '../pages/IndividualUnit';

import { RoutesNames } from './RoutesNames';

export const RoutesData = [
  {
    path: `${RoutesNames.units}/:id`,
    exact: false,
    isPrivate: true,
    component: IndividualUnit,
  },
  {
    path: `${RoutesNames.animals}/:id`,
    exact: false,
    isPrivate: true,
    component: AnimalView,
  },
  {
    path: RoutesNames.propertyView,
    exact: false,
    isPrivate: true,
    component: PropertyView,
  },
  {
    path: RoutesNames.animals,
    exact: false,
    isPrivate: true,
    component: Animals,
  },

  {
    path: RoutesNames.properties,
    exact: false,
    isPrivate: true,
    component: Properties,
  },
  {
    path: RoutesNames.intro,
    exact: false,
    isPrivate: true,
    component: Intro,
  },
  {
    path: RoutesNames.animalComplaint,
    exact: false,
    isPrivate: true,
    component: AnimalComplaint,
  },
  {
    path: RoutesNames.settings,
    exact: false,
    isPrivate: true,
    component: Profile,
  },
  {
    path: RoutesNames.resetPassword,
    exact: false,
    isPrivate: false,
    component: ResetPassword,
  },
  {
    path: '/',
    exact: true,
    isPrivate: false,
    component: Login,
  },
];
