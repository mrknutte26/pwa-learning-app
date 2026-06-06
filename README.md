# PWA Learning App (scaffold)

En enkel Progressive Web App scaffold med React + TypeScript + Vite.

Kom igång:

1. Installera beroenden: `npm install`
2. Starta utvecklingsserver: `npm run dev`
3. Bygg för produktion: `npm run build`
4. Förhandsgranska bygg: `npm run preview`

Noter:
- Service worker finns i `src/service-worker.ts` och registreras i `src/main.tsx`.
- Editor-komponenten är en placeholder — rekommenderat att byta till Monaco eller CodeMirror för körbar kod-sandbox.
- Vill du att jag lägger till routing (react-router), en riktig in-browser sandbox, eller Storybook-dokumentation nästa? Säg vilken funktion du vill ha härnäst.

Security override note
----------------------

Denna repository innehåller en tillfällig `package.json`-override som tvingar `dompurify` till version `^3.4.0`.
Orsak: ett transitivt beroende (monaco-editor -> dompurify@3.2.7) rapporterades som sårbart i `npm audit`.
Mitigeringen är avsedd att vara temporär tills upstream uppgraderar sitt beroende.

Verifiera: kör `npm install`, `npm run build` och `npm run test:ci` efter att du drar denna branch.
