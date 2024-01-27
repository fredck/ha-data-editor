class HaDataEditorPanel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Welcome to HA Data Editor</h1>
        `;
    }
}

customElements.define('ha-panel-ha-data-editor', HaDataEditorPanel);