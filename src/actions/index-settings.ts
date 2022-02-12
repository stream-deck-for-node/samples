import {Action, BaseAction, KeyEvent, SettingsChanged} from "@stream-deck-for-node/sdk";
import {sd} from "../index";

interface SampleSettings {
    value: number;
}

@Action("settings")
class SampleSettingsAction extends BaseAction<SampleSettings> {

    // watch for local settings changes
    onSettingsChanged(e: SettingsChanged<SampleSettings>) {
        sd.setTitle(e.context, e.settings.value?.toString());
    }

    // watch for plugin settings changes
    onPluginSettingsChanged() {
        this.contexts?.forEach(context => {
            sd.setTitle(context, sd.pluginSettings.timestamp || "");
        });
    }

    onDoubleTap(e: KeyEvent<SampleSettings>) {
        // change local setting on long press
        sd.setSettings<SampleSettings>(e.context, {value: Math.floor(Math.random() * 100)});
    }

    onLongPress() {
        // change global setting on long press
        sd.setPluginSettings({timestamp: new Date().toString()})
    }

}
