class HaDataEditorPanel extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css">

            <app-toolbar class="header">
                <ha-tabs slot="toolbar-icon">
                    <paper-tab>
                        Devices
                    </paper-tab>
                </ha-tabs>
            </app-toolbar>

            <div id="handsontableContainer"></div>
        `;

        // Load Handsontable script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js';
        script.onload = () => this.initHandsontable(this.hass);
        this.shadowRoot.appendChild(script);
    }

    initHandsontable(hass) {
        const entities = Object.values(hass.devices);
        const data = entities.map(entity => ({
            id: entity.id,
            name: entity.name_by_user || entity.name,
            area: entity.area_id
        }));

        const container = this.shadowRoot.getElementById('handsontableContainer');
        // This is a sortable table
        // Any column can be sorted by clicking on the column header
        // The table is sorted by the first column by default
        // The table doesn't have a row number column
        // The table is not paginated
        // Filters can be added to the table
        this.hot = new Handsontable(container, {
            data: data,
            colHeaders: ['Name', 'Area'],
            columns: [
                // The name column is read-only for now
                // The table is by default sorted by this column
                {
                    data: 'name',
                    readOnly: true,
                },
                {
                    data: 'area',
                    type: 'dropdown',
                    source: [null].concat(Object.values(hass.areas).map(area => area.area_id)),
                    readOnly: false,
                }
            ],
            rowHeaders: true,
            multiColumnSorting: {
                // at initialization, sort data by the first column, in descending order
                initialConfig: {
                    column: 0,
                    sortOrder: 'asc',
                }
            },
            manualColumnResize: true,
            colWidths: [400, 250],
            licenseKey: 'non-commercial-and-evaluation',
            afterChange: (changes, source) => {
                if (source !== 'loadData') {
                    changes.forEach(([row, prop, oldValue, newValue]) => {
                        if (prop === 'area' && oldValue !== newValue) {
                            const physicalRow = this.hot.toPhysicalRow(row);
                            this.updateArea(hass, data[physicalRow].id, newValue);
                        }
                    });
                }
            }
        });
    }

    updateArea(hass, deviceId, newAreaId) {
        hass.callService('ha_data_editor', 'update_device', {
            device_id: deviceId,
            area_id: newAreaId
        });
    }

}

customElements.define('ha-panel-ha-data-editor', HaDataEditorPanel);