import {Action, BaseAction} from "@stream-deck-for-node/sdk";
import {sd} from "../index";

@Action("instances")
class SampleInstancesAction extends BaseAction {

    // sync every instance of this action
    onSingleTap() {
        this.contexts.forEach(context => sd.setTitle(context, "ON"))
    }

    // sync every instance of this action
    onLongPress() {
        this.contexts.forEach(context => sd.setTitle(context, "OFF"))
    }

}
