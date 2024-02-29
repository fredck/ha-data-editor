# HA Data Editor for Home Assistant

[![GitHub Release][releases-shield]][releases]
[![hacs][hacsbadge]][hacs]

## Description

HA Data Editor is a custom integration for Home Assistant that provides a user-friendly interface for managing and editing device and entity properties directly within the Home Assistant UI. This integration includes a custom panel equipped with an editable table, allowing users to view and effortlessly modify device details, such as names and areas.

**Initial Release**: The project is in its early stages. Currently, it only supports changing the area of devices. Future updates will expand this functionality to include changing other information and supporting other data registries such as entities, areas, users, etc.

**Note**: The user interface may not be aesthetically pleasing at the moment, but it is functional. Improvements to the UI are planned for future updates.

## Features

- **Device & Entity Management**: List all Home Assistant devices and entities in a tabular format for easy viewing and quick modifications.
- **Editable Fields**: Interactively edit fields directly within the table for efficient updates.
- **Seamless UI Integration**: Integrates as a custom panel within the Home Assistant UI, maintaining a consistent user experience.
- **Efficient Backend Services**: Ensures smooth communication and timely updates between the frontend and Home Assistant backend.

## Screenshot

![HA Data Editor Screenshot](https://github.com/fredck/ha-data-editor/blob/main/images/ha-data-editor-screenshot.png?raw=true "A real world screenshot")

## Installation

### Via HACS (Home Assistant Community Store)

1. Ensure HACS is installed in your Home Assistant setup.
2. In HACS, navigate to "Integrations".
3. In the 3-dot menu at the top-right, select "Custom repositories".
4. Add `https://github.com/fredck/ha-data-editor` to the list.
5. "HA Data Editor" should show up. Select it.
6. Click "download" to install.
7. Restart Home Assistant to apply the changes.

### Manual Installation

1. Download the `ha_data_editor` folder from this repository.
2. Place the `ha_data_editor` folder into the `custom_components` directory of your Home Assistant installation.
3. Restart Home Assistant to recognize the new integration.

## Post-Installation and Auto-Discovery

After installation, go to the integrations page and add the "HA Data Editor" integration.

**Important**: Right after the installation, the new "HA Data Editor" will be immediately available in the sidebar but it'll be empty. Refresh the browser to make its contents show up.

### Accessing the Data Editor

- "HA Data Editor" will be readily available in the Home Assistant sidebar upon integration installation.
- Clicking on the sidebar item opens the custom panel where you can interact with and edit your devices.

## Usage

Interact with the editable table in the HA Data Editor panel to manage your Home Assistant devices and entities. Changes made through the editor are reflected instantly in Home Assistant, streamlining your smart home management.

## Contributing

Contributions to "HA Data Editor" are greatly appreciated. For contribution guidelines and how to set up your development environment, please refer to our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- A heartfelt thanks to the Home Assistant community for their guidance and support.
- Handsontable for providing the interactive grid system used in the editor.

[hacs]: https://github.com/hacs/integration
[hacsbadge]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/fredck/ha-data-editor.svg?style=for-the-badge
[releases]: https://github.com/fredck/ha-data-editor/releases
