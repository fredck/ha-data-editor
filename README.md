# HA Data Editor for Home Assistant

## Description

HA Data Editor is a custom integration for Home Assistant that offers a user-friendly interface to manage and edit device and entity properties directly within the Home Assistant UI. This integration includes a custom panel equipped with an editable table, enabling users to view and effortlessly modify details of devices, such as names and areas.

**Initial Release**: The project is in its early stages. Currently, it only supports changing the area of devices. Future updates will expand this functionality to include changing other information and supporting other data registries such as entities, areas, users, etc.

**Note**: The user interface may not be aesthetically pleasing at the moment, but it is functional. Improvements to the UI are planned for future updates.

## Features

- **Device & Entity Management**: List all Home Assistant devices and entities in a tabular format for easy viewing and quick modifications.
- **Editable Fields**: Interactively edit fields directly within the table for efficient updates.
- **Seamless UI Integration**: Integrates as a custom panel within the Home Assistant UI, maintaining a consistent user experience.
- **Efficient Backend Services**: Ensures smooth communication and timely updates between the frontend and Home Assistant backend.

## Installation

### Via HACS (Home Assistant Community Store)

1. Ensure HACS is installed in your Home Assistant setup.
2. In HACS, navigate to "Integrations" and select "+ Explore & Add Integrations".
3. Search for "HA Data Editor" and select it.
4. Click "Install this Repository in HACS".
5. Restart Home Assistant to apply the changes.

### Manual Installation

1. Download the `ha_data_editor` folder from this repository.
2. Place the `ha_data_editor` folder into the `custom_components` directory of your Home Assistant installation.
3. Restart Home Assistant to recognize the new integration.

## Post-Installation and Auto-Discovery

After installation, HA Data Editor integrates automatically into your Home Assistant environment. No additional configuration is required.

### Accessing the Data Editor

- "HA Data Editor" will be readily available in the Home Assistant sidebar upon restarting Home Assistant after installation.
- Clicking on the sidebar item opens the custom panel where you can interact with and edit your devices and entities.

## Usage

Interact with the editable table in the HA Data Editor panel to manage your Home Assistant devices and entities. Changes made through the editor are reflected instantly in Home Assistant, streamlining your smart home management.

## Contributing

Contributions to "HA Data Editor" are greatly appreciated. For contribution guidelines and how to set up your development environment, please refer to our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- A heartfelt thanks to the Home Assistant community for their guidance and support.
- Handsontable for providing the interactive grid system used in the editor.
