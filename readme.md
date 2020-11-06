# AR Painting Placer

## Project Notes
WebXR benötigt https
in package.json aktivieren 
ist zum devn deaktiviet weil hot reload sonst nicht geht

## @Valle how to upload new paintings

#### Upload
- in '/public/fotos/full' voll aufgelöste Bild Version hochladen (die Version wird im AR Modus angezeigt)
- in '/public/fotos/720' dasselbe Bild in einer niederigen Auflösung
  - Wenn hochkannt Bild dann auf 720px Breite 
  – Wenn Breitbild 720 dann auf 720px Höhe 
  - Bei Quadrat beide Seiten 720px
  - (also kleinste Seite einfach immer 720px)

- Hochladen oben rechts auf "Add file", dann unten auf „Commit changes“ klicken

#### Registrieren
- in '/data.json' oben rechts auf Stift Icon „edit this file”
- den letzten Fotoeintrag kopieren und unten anüegen (ein , zwischen dem letzten und dem neuen Eintrag nicht vergessen)
- Infos entsprechend anpassen
- Beachten dass evtl leerzeichen in Bildnamen
- Größe in CM angeben
