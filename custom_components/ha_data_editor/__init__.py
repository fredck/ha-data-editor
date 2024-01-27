"""The HA Data Editor component."""
import os

from homeassistant import config_entries, core


async def async_setup_entry(
    hass: core.HomeAssistant, entry: config_entries.ConfigEntry
) -> bool:
    """Set up HA Data Editor from a config entry."""

    # Get the path of the current file
    current_file_path = os.path.dirname(os.path.abspath(__file__))

    # Construct the path to your JavaScript file
    www_path = os.path.join(current_file_path, "www")

    # Register a new static path for serving your custom panel
    hass.http.register_static_path("/ha-data-editor-www", www_path)

    hass.components.frontend.add_extra_js_url(hass, "/ha-data-editor-www/panel.js")

    # Register the custom panel
    hass.components.frontend.async_register_built_in_panel(
        component_name="ha-data-editor",
        sidebar_title="HA Data Editor",
        sidebar_icon="mdi:file-document-edit",
        require_admin=True,
    )

    return True


async def async_unload_entry(
    hass: core.HomeAssistant, entry: config_entries.ConfigEntry
) -> bool:
    """Unload a config entry."""

    hass.components.frontend.async_remove_panel("ha-data-editor")

    return True
