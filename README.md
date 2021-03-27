# openimis_node_openhim_claimresponse_mediator
This is a openHIM mediator that is used to transfer claimrespinse from openIMIS to insurance companies

## Setup
This mediator requires a successfull installation of openhim-console and openhim-core-js.whose installation guide can be found in  <https://github.com/jembi/openhim-console> and  <https://github.com/jembi/openhim-core-js> respectfully

### OPENHIM CONFIGURATION
* create a `src/.env` file to provide your mediator  connection to openHIM:
```sh
PORT = mediator port which should  match the ports specified  `in` src/mediatorConfig.json
OPENHIM_URL=https://xyx:8080 - link hosting the openHIM Console and openHIM Core-js
OPENHIM_USERNAME=openhim username
OPENHIM_PASSWORD=openhim password
MEDIATOR_URN=Mediator Name
OPENHIM_REGISTER=true
OPENIMIS_USER=openIMIS user
OPENIMIS_PASSWORD=openIMIS user password
OPENIMIS_URL=http://xyz/api/api_fhir_r4/ - openIMIS link to fhir 4 resource
SOSYS_URL=Sosys server link
```
### Docker

To run the mediator open a terminal and navigate to the project directory and run the following commands:

```sh
docker build -t patient .

docker run  -p 3009:3009 -d patient
```

### Node NPM
To run the patient mediator open a terminal and navigate to the project directory and run the following commands:
```sh
npm install
npm start
```
