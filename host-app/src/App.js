import React, { Suspense } from "react";

// Carga dinámica del componente remoto
const RemoteButton = React.lazy(() => import("remoteApp/Button"));

const App = () => {
  return (
    <div>
      <h1>App Host</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
};

export default App;