### README (Dansk)

## Weather Dashboard Applikation

Denne Weather Dashboard er en full-stack webapplikation, der viser realtids vejroplysninger og en 7-dages vejrudsigt for Aarhus, Danmark. Applikationen er bygget med Java til backend og Angular til frontend, og anvender Open-Meteo API til at hente vejrinformation.

### Brugte teknologier
- **Backend:** Java (Spring Boot)
- **Frontend:** Angular
- **API:** [Open-Meteo Weather API](https://open-meteo.com/)
- **HTTP Klienter:** `RestTemplate` (Java), `HttpClient` (Angular)
- **Data Binding:** Jackson (til JSON deserialisering i Java)
- **CORS Håndtering:** Konfigureret i Spring Boot

---

## Angular Frontend

#### Teknologier:
- **Angular**
- **Node.js & npm**
- **Port:** `4200`

### Sådan starter du frontend:

1. **Installer afhængigheder:**
   Gå til Angular projektmappen:
   ```bash
   cd weather-forecast-web
   npm install
   ```

2. **Kør Angular applikationen:**
   Når alle afhængigheder er installeret, kør Angular udviklingsserveren:
   ```bash
   ng serve
   ```

3. **Adgang til frontend:**
   Angular frontend vil køre på `http://localhost:4200`. Åbn din browser og besøg URL'en for at se vejrdashboardet.

---

## Ports

- **Java Backend:** Kører på `http://localhost:8080`
- **Angular Frontend:** Kører på `http://localhost:4200`

---

### CORS Konfiguration

Hvis du støder på CORS-problemer, når frontend forsøger at anmode om data fra backend, er Spring Boot backend konfigureret til at tillade anmodninger fra `http://localhost:4200`. Dette er konfigureret i `WebMvcConfigurer`-klassen i backendprojektet.

---

### Projektstruktur

#### Backend (Java):
```
src/
├── main/
│   ├── java/com/example/weatherApp
│   │   ├── controller/  # REST API controller for vejropdateringer
│   │   ├── service/     # Service der kommunikerer med Open-Meteo API
│   │   └── model/       # Modeller for vejrrespons
│   └── resources/
│       └── application.properties  # Konfiguration for Spring Boot
└── test/  # Enhedstest
```

#### Frontend (Angular):
```
src/
├── app/
│   ├── components/
│   │   ├── forecast/  # Komponent til at vise vejrudsigten
│   ├── services/      # Service til at hente vejroplysninger fra backend
└── assets/            # CSS og andre statiske filer
```

---

### Hvordan det fungerer

- **Backend** henter data fra Open-Meteo API'et baseret på den angivne lokation (Aarhus).
- **Frontend** sender HTTP-anmodninger til backend for at hente vejrinformationen og vise det på et brugervenligt dashboard.

---

### Problemer & Fejlretning

#### Almindelige problemer:
- **CORS Problem:** Sørg for, at backendens CORS-konfiguration tillader anmodninger fra frontend. Dobbelttjek, at `localhost:4200` er tilladt i Spring Boot konfigurationen.
- **Port konflikter:** Sørg for, at backend kører på port `8080`, og at frontend kører på port `4200`. Hvis andre services bruger disse porte, kan du justere portkonfigurationen i `application.properties` (for backend) eller `proxy.conf.json` (for Angular).

---

### Konklusion
Dette vejr-dashboard er en komplet løsning til at spore realtids vejroplysninger og vejrudsigt for Better Developers' kontor i Aarhus. Følg ovenstående trin for at køre både backend og frontend, og nyd live vejropdateringer.
