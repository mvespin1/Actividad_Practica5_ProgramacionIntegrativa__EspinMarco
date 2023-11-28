class MyHeader extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Definir la estructura del componente de encabezado
      this.shadowRoot.innerHTML = `
        <header>
          <h1>UNIVERSIDAD DE LAS FUERZAS ARMADAS "ESPE"</h1>
          <h2>Actividad 5: Composición de Componentes.</h2>
        </header>
      `;
    }
  }
  // Registrar el componente de encabezado
  customElements.define('my-header', MyHeader);
  