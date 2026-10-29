// Necesario para que Chrome permita "Instalar aplicación".
// NO guarda nada en caché: siempre carga la versión más nueva de GitHub.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
