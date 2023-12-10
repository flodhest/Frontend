**Dokumentation Arbetsuppgift Systemutvecklare byBrick**

**Instruktion**

Frontend är skapat med Angular, TypeScript och Yarn är pakethanterare.

**Kör frontend-delen med VSCode.**
Om Yarn inte är installerat kör kommandot [npm install -g yarn} i bash/powershell.
Kör kommandot [yarn install} i terminalen bash/powershell från den mapp där package.json ligger.

Exekvera appen med [ng serve} i bash.

**Backend** 

Startas genom att köra byBrick backend solution i Visual Studio.

Anslut till databasen:
Databashanteringen är skapad med SQLEXPRESS och har ConnectionString {localhost\\SQLEXPRESS} och kan kontrolleras i SSMS genom att ansluta till [localhost\SQLEXPRESS}.

Entity Framework har andänds för att spara data och och kan anslutas genom [dotnet ef database update} i terminalen i Visual Studio.

**Dokumentation Backend**

Skapad och konfigurerad med ASP.NET Core/.NET 6 med Swagger, CORS och implementering av Entity Framework för databashantering.

Modelsklassen som bestämmer kolumner i databasen heter GridModel och använder kolumnen data för att spara Cellstatus utöver id och namn.
APIController agerar WebAPI för att skapa, uppdatera, ta bort och hämta data. Jag valde att använda async och joobba med Tasks, detta är antagligen onödigt i en sån liten app men jag har som vana att alltid jobba async i backend, det lägger en bra grund för skalning. 

API:n använder sig av serialisering/deserialisering genom Newtonsoft.Json för att konvertera mellan JSON-data och objekt.
CORS används för att kommunicera mellan frontend och backend. Serialiseringen omvandlar data till JSON-format, medan deserialisering omvandlar JSON till dataformat. Det används för att spara och hämta data från databasen.

**Dokumentation Frontend**

Frontenddelen är byggd med Angular som ramverk och Material som designbibliotek tillsammans med SCSS. För att kommunicera med API i backend används HttpClient. 

RXjS är en favorit och har använts som operatorer för att hantera asynkron data och felhantering vid kommunikation med APIet i backend.

GridModel har använts för att strukturera och representera objekt innehållandes Id, namn och griddata.

GridService har implementeras för att kommunicera med API i backend för att skapa, hämta, uppdatera och ta bort data.

**Reflektioner**

Gridkomponenten ansvarar för att skapa och spara en grid och även för att hämta en befintlig grid. 
Saved-gridskomponenten används för att ta bort grids.
Detta hade antagligen kunna göras i samma komponent men för att påvisa själva SPA-delen i implementeringen valde jag att dela upp appen i två komponenter. 

Jag hade lite svårigheter med att lösa hämtning av befintlig grid och hur dess cellstatus skulle laddas in i en tom gridlayout. Genom att använda JSON serialisering/deserialisering kunde jag hantera detta för att både skapa och hämta grids och dess cellstatus.

Det mesta av arbetsbördan hamnade på frontenddelen då backenddelen var ganska begränsad. Det jag gjorde initialt var att implementera CORS för att kunna kommunicera mellan frontend och backend. Sedan var det arbetet med APIControllern som tog lite tid för att kunna spara cellstatus. 

Jag har använt SnackBar för att kommunicera meddelande till frontend om skapandet eller hämtandet av data går bra eller inte.

PWA har implementeras för att att kunna använda appen offline.

Jag valde att jobba mycket med validering och felhantering. Tycker det gör problemlösningen effektivare och det är alltid bäst att tydliggöra vad det är som händer både för sig själv och för användaren. Har genomgående använt mig av Material för att få en tydlig designtråd genom hela appen.

