import {StreamDeck} from "@stream-deck-for-node/sdk";
import './actions/sample';
import "./actions/index-basic";
import "./actions/index-counters";
import "./actions/index-io";
import "./actions/index-multiple-instances";
import "./actions/index-settings";

interface PluginSettings {
    sample?: string;
    timestamp?: string;
}

export const sd = new StreamDeck<PluginSettings>();

process.on('uncaughtException', (e) => sd.logMessage('NodeSample:' + e.message));
