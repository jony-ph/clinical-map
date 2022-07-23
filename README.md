# Clinical Map API

Clinical Map API es una API pública para obtener datos sobre estudios e
investigaciones científicas que se han realizado al rededor del mundo
acerca del COVID-19. Por el momento se cuenta con 14685 registros
disponibles para que puedas utilizarlos en tus desarrollos.

Puedes consumir esta API facilmente utilizando fetch con JavaScript

```javascript
const url = 'https://clinicalmapapi.azurewebsites.net/api'

fetch(url)
	.then( response => response.json() )
	.then( data => console.log(data) )
	.catch( err => console.log(err) )
```

### Uso

Para poder utilizarla, debe visitar los diferentes \"endpoints\" o
puntos finales. Cabe mencionar que los endpoints para realizar consultas
se encuentran en el subcarpeta /api

### Parámetros

Algunos de los endpoints necesitan de un argumento o parámetro para poder funcionar correctamente. Para indicar qué endpoint necesita parámetros se utilizó la sintaxis de \":parámetro\".

### Endpoints

##### Todos

Obtener todos los estudios almacenados en la base de datos

  https://clinicalmapapi.azurewebsites.net/api/all

##### País

Obtiene todos los estudios realizados en un país en específico

	https://clinicalmapapi.azurewebsites.net/api/country/:pais

##### Fecha de registro

Obtener todos los estudios de una fecha de registro en específico. La fecha de registro debe tener el formato YYMMDD sin espacios, ni guiones.

	https://clinicalmapapi.azurewebsites.net/api/registration/:date

##### Estudio específico

Obtiene el estudio del trialID que se especifique, El trialID es el identificador único de cada registro.

	https://clinicalmapapi.azurewebsites.net/api/trial/:trialID

### Consultas rápidas

Las consultas rápidas entregan información con datos que creemos puedan ser más relevantes para el usuario. Las consultas rápidas pueden ser llamas de igual manera que las vistas anteriormente, Parámetros debemos agregar la subcarpeta \"/r/\" antes de especificar l parámetro. Ejemplo de consulta de un consulta de un registro en específico, con la información más relevante:

```javascript
const url = 'https://clinicalmapapi.azurewebsites.net/api/trial/r/NCT00173563'

fetch(url)
	.then( response => response.json() )
	.then( data => console.log(data) )
	.catch( err => console.log(err) )

```
Salida:

```json
[
  {
    "_id": "62da3dca930a2d0d0b48fa5f",
    "TrialID": "NCT00173563",
    "Public title": "Induction of Cytokines in Human Monocytes by SARS-CoV in Adults and Children",
    "Scientific title": "Induction of Cytokines in Human Monocytes by SARS-CoV in Adults and Children",
    "Acronym": "",
    "Primary sponsor": "National Taiwan University Hospital",
    "Date registration": "12/09/2005",
    "Date registration3": 20050912,
    "Export date": "7/7/2022 10:12:07 AM",
    "Source Register": "ClinicalTrials.gov",
    "web address": "http://clinicaltrials.gov/show/NCT00173563",
    "Date enrollement": "January 2005",
    "Study type": "Observational",
    "Countries": "Taiwan",
    "Primary outcome": ""
  }
]
```
