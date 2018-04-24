import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SuccessAlert from './success-alert.hbs';
import WarningAlert from './warning-alert.hbs';
import DangerAlert from './danger-alert.hbs';
import InfoAlert from './info-alert.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const successAlert = SuccessAlert();
  const warningAlert = WarningAlert();
  const dangerAlert = DangerAlert();
  const infoAlert = InfoAlert();

  return (
    <Documentation docs={Docs}>
      <Example heading="Success Alert">{successAlert}</Example>
      <Example heading="Danger Alert">{dangerAlert}</Example>
      <Example heading="Warning Alert">{warningAlert}</Example>
      <Example heading="Info Alert">{infoAlert}</Example>
    </Documentation>
  );
};
