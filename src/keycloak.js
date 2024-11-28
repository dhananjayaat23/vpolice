import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://ec2-47-129-45-22.ap-southeast-1.compute.amazonaws.com:8080/auth/admin/master/console/#/realms/master',
  realm: 'master',
  clientId: 'react-client'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;