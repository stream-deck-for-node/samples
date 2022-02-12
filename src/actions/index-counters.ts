import {Action, BaseAction, KeyEvent, SettingsChanged} from "@stream-deck-for-node/sdk";
import {sd} from "../index";

interface CounterSettings {
    value?: number;
}

@Action("counters")
class SampleCountersAction extends BaseAction<CounterSettings> {

    // watch for local settings changes
    onSettingsChanged(e: SettingsChanged<CounterSettings>) {
        sd.setTitle(e.context, (e.settings.value || 0).toString());
    }

    // update counter on tap
    onSingleTap(e: KeyEvent<CounterSettings>) {
        sd.setSettings<CounterSettings>(e.context, {
            value: (e.payload.settings.value || 0) + 1
        });
    }

    // reset counter on long press
    onLongPress(e: KeyEvent<CounterSettings>) {
        sd.setSettings<CounterSettings>(e.context, {});
    }

}
