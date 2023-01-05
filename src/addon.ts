import AddonEvents from "./events";
import AddonPrefs from "./prefs";
import AddonViews from "./views";
import AddonLocale from "./locale";

class Addon {
  // Env type, see build.js
  public env!: "development" | "production";
  // Lifecycle events
  public events: AddonEvents;
  // UI operations
  public views: AddonViews;
  // Scripts for prefpane window
  public prefs: AddonPrefs;
  // Runtime locale with .properties
  public locale: AddonLocale;

  constructor() {
    this.events = new AddonEvents(this);
    this.views = new AddonViews(this);
    this.prefs = new AddonPrefs(this);
    this.locale = new AddonLocale(this);
  }
}

export default Addon;
