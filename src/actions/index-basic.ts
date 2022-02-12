import {Action, AppearDisappearEvent, BaseAction, KeyEvent} from "@stream-deck-for-node/sdk";
import {sd} from "../index";

@Action("basic")
class SampleBasicAction extends BaseAction {

    onAppear(e: AppearDisappearEvent) {
        sd.setTitle(e.context, "?");
    }

    onSingleTap(e: KeyEvent) {
        sd.setTitle(e.context, "single");
    }

    onLongPress(e: KeyEvent) {
        sd.setTitle(e.context, "long");
    }

    onDoubleTap(e: KeyEvent) {
        sd.setTitle(e.context, "double");
    }

}
